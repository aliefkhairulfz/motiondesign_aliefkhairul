import type { Metadata } from 'next';
import AboutPageContent from '@/features/about/pages/about';

export const metadata: Metadata = {
    title: 'About',
    description:
        'Learn about RedMotion, our 3D motion design philosophy, production pipeline, and commitment to clear visual storytelling.'
};

export default function AboutPage() {
    return <AboutPageContent />;
}
