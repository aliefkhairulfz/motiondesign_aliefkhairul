'use server';

import { db } from '@/db';
import { inquiries } from '@/db/schema';
import { z } from 'zod';

const formSchema = z.object({
    email: z.string().email(),
    description: z.string().min(10),
    deadline: z.string().min(1),
    length: z.string().min(1),
    budget: z.string().min(1),
});

export async function submitInquiry(data: z.infer<typeof formSchema>) {
    const parsed = formSchema.safeParse(data);
    
    if (!parsed.success) {
        throw new Error('Invalid form data');
    }

    try {
        await db.insert(inquiries).values({
            email: parsed.data.email,
            description: parsed.data.description,
            deadline: parsed.data.deadline,
            length: parsed.data.length,
            budget: parsed.data.budget,
        });
        
        return { success: true };
    } catch (error) {
        console.error('Error inserting inquiry:', error);
        return { success: false, error: 'Failed to submit inquiry' };
    }
}
