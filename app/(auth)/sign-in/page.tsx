import SignInForm from '@/features/auth/components/sign-in-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign In',
    description: 'Access the studio.',
};

export default function SignInPage() {
    return (
        <main className="min-h-screen bg-neutral-200 text-neutral-950 flex flex-col justify-center px-4 sm:px-6">
            <SignInForm />
        </main>
    );
}
