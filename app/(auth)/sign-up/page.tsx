import SignUpForm from '@/features/auth/components/sign-up-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign Up',
    description: 'Join the studio.',
};

export default function SignUpPage() {
    return (
        <main className="min-h-screen bg-neutral-200 text-neutral-950 flex flex-col justify-center px-4 sm:px-6">
            <SignUpForm />
        </main>
    );
}
