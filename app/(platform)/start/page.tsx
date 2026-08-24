import StartForm from '@/features/start/components/start-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Start a Project',
    description: "Tell us about your product and let's make a video."
};

export default function StartPage() {
    return (
        <main className="min-h-screen bg-neutral-200 text-neutral-950 pt-24 sm:pt-36 flex flex-col justify-between">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full pb-20 flex justify-center">
                <StartForm />
            </div>
        </main>
    );
}
