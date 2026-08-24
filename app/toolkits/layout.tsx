import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Toolkits & Addons',
    description: 'Free Blender addons, scripts, and assets to speed up your workflow.',
};

export default function ToolkitsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
