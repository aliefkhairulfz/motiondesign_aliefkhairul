import StartForm from '@/features/start/components/start-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Start a Project',
    description: "Tell us about your product and let's make a video."
};

import { DotBackground } from '@/components/ui/dot-background';

export default function StartPage() {
    return (
        <DotBackground className="min-h-screen pt-24 sm:pt-36 flex flex-col justify-between text-neutral-950">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full pb-20 flex justify-center">
                <StartForm />
            </div>
        </DotBackground>
    );
}
