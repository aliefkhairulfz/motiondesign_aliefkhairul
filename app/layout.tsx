import { Header } from '@/components/shared/header';
import { GlobalLoader } from '@/components/shared/global-loader';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const manrope = Manrope({
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: {
        default: 'RedMotion | 3D Motion Design Studio',
        template: '%s | RedMotion'
    },
    description: 'We create 3D product videos and motion design that transform ideas into visual stories.',
    keywords: ['3D Motion Design', 'Product Video', 'Animation Studio', 'Blender', 'SaaS Videos'],
    authors: [{ name: 'AliefKhairul' }],
    creator: 'AliefKhairul',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://redmotion.works',
        title: 'RedMotion | 3D Motion Design Studio',
        description: 'We create 3D product videos and motion design that transform ideas into visual stories.',
        siteName: 'RedMotion'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'RedMotion | 3D Motion Design Studio',
        description: 'We create 3D product videos and motion design that transform ideas into visual stories.',
        creator: '@aliefkhairul'
    }
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html
            lang="en"
            className={cn(
                'h-full',
                'dark',
                'antialiased',
                'font-sans',
                inter.variable
            )}
        >
            <body className={`${manrope.className} min-h-full flex flex-col`}>
                <GlobalLoader />
                <Header />
                {children}
            </body>
        </html>
    );
}
