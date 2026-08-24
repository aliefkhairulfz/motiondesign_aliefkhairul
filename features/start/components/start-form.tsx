'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { submitInquiry } from '@/app/actions/inquiry';

const formSchema = z.object({
    email: z.string().email('Please enter a valid email address.'),
    description: z
        .string()
        .min(10, 'Please provide more details about the project.'),
    deadline: z.string().min(1, 'Please select a timeline.'),
    length: z.string().min(1, 'Please select an estimated length.'),
    budget: z.string().min(1, 'Please select a budget range.')
});

type FormValues = z.infer<typeof formSchema>;

const DEADLINE_OPTIONS = ['4+ weeks', '2-3 weeks', 'ASAP', 'Flexible'];
const LENGTH_OPTIONS = ['15 sec', '30-45 sec', '60 sec', 'Not sure'];
const BUDGET_OPTIONS = ['$2k-$3k', '$4k-$6k', '$7k-$10k', '$10k+'];

function ButtonGroup({
    options,
    value,
    onChange
}: {
    options: string[];
    value: string;
    onChange: (val: string) => void;
}) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {options.map(opt => (
                <button
                    key={opt}
                    type="button"
                    onClick={() => onChange(opt)}
                    className={cn(
                        'py-3.5 px-4 rounded-xl text-sm font-medium transition-colors border outline-none',
                        value === opt
                            ? 'bg-neutral-900 text-neutral-100 border-neutral-900 shadow-sm'
                            : 'bg-transparent text-neutral-600 border-neutral-300 hover:border-neutral-400 hover:text-neutral-900'
                    )}
                >
                    {opt}
                </button>
            ))}
        </div>
    );
}

export default function StartForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            description: '',
            deadline: '',
            length: '',
            budget: ''
        }
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);

        try {
            // Save data to Supabase Database
            const res = await submitInquiry(data);
            if (!res.success) {
                console.error(res.error);
                // Optionally show error to user
            }

            setIsSuccess(true);
        } catch (error) {
            console.error('Failed to submit:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="w-full max-w-2xl flex flex-col gap-6 animate-in fade-in duration-500">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 mb-2">
                    Thanks for reaching out.
                </h1>
                <p className="text-neutral-600 text-lg">
                    We&apos;ll review your project details and get back to you
                    shortly.
                </p>
                <Link href="/">
                    <Button
                        variant="outline"
                        className="mt-4 border-neutral-300 text-neutral-700 bg-white hover:bg-neutral-100 hover:text-neutral-900"
                    >
                        Back to Home
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col pt-4 pb-24">
            <div className="mb-12">
                <p className="text-neutral-600 text-sm sm:text-base font-medium mb-2 uppercase tracking-widest font-mono">
                    Start here
                </p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-neutral-950">
                    Let&apos;s make
                    <br className="hidden sm:block" /> your video.
                </h1>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-10"
            >
                {/* Email Field */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-700">
                        Email
                    </label>
                    <Input
                        {...register('email')}
                        placeholder="you@company.com"
                        className={cn(
                            'h-12 bg-transparent border-neutral-300 focus-visible:ring-1 focus-visible:ring-neutral-400 text-neutral-950 text-base placeholder:text-neutral-500 rounded-xl px-4',
                            errors.email &&
                                'border-red-500 focus-visible:ring-red-500'
                        )}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Description Field */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-700">
                        What are we making?
                    </label>
                    <Textarea
                        {...register('description')}
                        placeholder="We're launching an EV charger. Website: example.com. Need a short video for an event booth. Goal: make investors understand it fast."
                        className={cn(
                            'min-h-[140px] bg-transparent border-neutral-300 focus-visible:ring-1 focus-visible:ring-neutral-400 text-neutral-950 text-base placeholder:text-neutral-500 rounded-xl p-4 resize-y',
                            errors.description &&
                                'border-red-500 focus-visible:ring-red-500'
                        )}
                    />
                    {errors.description && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.description.message}
                        </p>
                    )}
                </div>

                {/* Deadline Field */}
                <div className="flex flex-col gap-3">
                    <label className="text-sm font-medium text-neutral-700">
                        Deadline
                    </label>
                    <Controller
                        name="deadline"
                        control={control}
                        render={({ field }) => (
                            <ButtonGroup
                                options={DEADLINE_OPTIONS}
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    {errors.deadline && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.deadline.message}
                        </p>
                    )}
                </div>

                {/* Length Field */}
                <div className="flex flex-col gap-3">
                    <label className="text-sm font-medium text-neutral-700">
                        Length
                    </label>
                    <Controller
                        name="length"
                        control={control}
                        render={({ field }) => (
                            <ButtonGroup
                                options={LENGTH_OPTIONS}
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    {errors.length && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.length.message}
                        </p>
                    )}
                </div>

                {/* Budget Field */}
                <div className="flex flex-col gap-3">
                    <label className="text-sm font-medium text-neutral-700">
                        Budget
                    </label>
                    <Controller
                        name="budget"
                        control={control}
                        render={({ field }) => (
                            <ButtonGroup
                                options={BUDGET_OPTIONS}
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    {errors.budget && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.budget.message}
                        </p>
                    )}
                </div>

                {/* Submit and Footer */}
                <div className="flex flex-col gap-6 mt-4">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-40 h-12 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-900 rounded-xl font-semibold text-base transition-colors"
                    >
                        {isSubmitting ? 'Sending...' : 'Send project'}
                    </Button>

                    <p className="text-[11px] sm:text-xs text-neutral-500 max-w-xl leading-relaxed">
                        By sending this form, you agree that RedMotion may
                        process your details to respond to your inquiry. Read
                        our{' '}
                        <Link
                            href="/privacy-policy"
                            className="underline hover:text-neutral-700 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </div>
            </form>
        </div>
    );
}
