import { Header } from '@/components/shared/header';
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
    title: 'RedMotion',
    description: 'Created By AliefKhairul'
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
                <Header />
                {children}
            </body>
        </html>
    );
}
