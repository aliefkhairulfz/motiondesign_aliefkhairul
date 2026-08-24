'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const signUpSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters.'),
    email: z.string().email('Please enter a valid email address.'),
    password: z.string().min(6, 'Password must be at least 6 characters.')
});

type SignUpValues = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: { name: '', email: '', password: '' }
    });

    const onSubmit = async (data: SignUpValues) => {
        setIsSubmitting(true);
        setError(null);
        try {
            const { error: signUpError } = await authClient.signUp.email({
                email: data.email,
                password: data.password,
                name: data.name
            });

            if (signUpError) {
                setError(signUpError.message || 'Failed to sign up.');
            } else {
                router.push('/sign-in');
            }
        } catch (e) {
            console.error(e);
            setError('An unexpected error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto flex flex-col">
            <div className="flex flex-col items-center text-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-950 mb-2">
                    Create an account
                </h1>
                <p className="text-neutral-600 text-sm">
                    Join the studio to track your projects.
                </p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 w-full mt-4"
            >
                {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium border border-red-100">
                        {error}
                    </div>
                )}

                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-700">
                        Full Name
                    </label>
                    <Input
                        {...register('name')}
                        placeholder="John Doe"
                        className={cn(
                            'h-12 bg-white/50 border-neutral-300 focus-visible:ring-1 focus-visible:ring-neutral-400 text-neutral-950 text-base placeholder:text-neutral-500 rounded-xl px-4',
                            errors.name &&
                                'border-red-500 focus-visible:ring-red-500'
                        )}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-neutral-700">
                        Email
                    </label>
                    <Input
                        {...register('email')}
                        type="email"
                        placeholder="you@example.com"
                        className={cn(
                            'h-12 bg-white/50 border-neutral-300 focus-visible:ring-1 focus-visible:ring-neutral-400 text-neutral-950 text-base placeholder:text-neutral-500 rounded-xl px-4',
                            errors.email &&
                                'border-red-500 focus-visible:ring-red-500'
                        )}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-neutral-700">
                            Password
                        </label>
                    </div>
                    <Input
                        {...register('password')}
                        type="password"
                        placeholder="••••••••"
                        className={cn(
                            'h-12 bg-white/50 border-neutral-300 focus-visible:ring-1 focus-visible:ring-neutral-400 text-neutral-950 text-base placeholder:text-neutral-500 rounded-xl px-4',
                            errors.password &&
                                'border-red-500 focus-visible:ring-red-500'
                        )}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-900 rounded-xl font-semibold text-base transition-colors mt-2"
                >
                    {isSubmitting ? 'Creating...' : 'Sign Up'}
                </Button>

                <p className="text-center text-sm text-neutral-600 mt-4">
                    Already have an account?{' '}
                    <Link
                        href="/sign-in"
                        className="text-neutral-900 hover:text-neutral-600 font-semibold transition-colors underline underline-offset-4"
                    >
                        Sign in
                    </Link>
                </p>
            </form>
        </div>
    );
}
