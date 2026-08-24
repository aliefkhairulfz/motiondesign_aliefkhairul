import type { Metadata } from 'next';
import PortfolioPageContent from '@/features/portfolio/pages/portfolio';

export const metadata: Metadata = {
    title: 'Portfolio & Selected Works',
    description:
        'Explore 3D commercial product animations, SaaS product films, and visual stories created by Effectt for global brands.'
};

export default function PortfolioPage() {
    return <PortfolioPageContent />;
}
