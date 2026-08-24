import Link from 'next/link';
import { FaBehanceSquare, FaInstagram } from 'react-icons/fa';
import { TbTrademark } from 'react-icons/tb';
import { cn } from '@/lib/utils';

export function Footer({ className }: { className?: string }) {
    return (
        <footer
            className={cn(
                'relative z-10 w-full py-24 flex flex-col items-center bg-neutral-100 text-neutral-950',
                className
            )}
        >
            {/* Logo & Trademark */}
            <div className="flex items-start gap-2 mb-20 text-red-500">
                <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none bg-linear-to-br from-orange-500 to-red-600 bg-clip-text text-transparent pb-2">
                    Effectt
                </h2>
                <span className="flex items-start justify-center">
                    <TbTrademark className="w-12 h-12 md:w-16 md:h-16 text-orange-600 mt-2 ml-1" />
                </span>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-5xl w-full mb-24 px-8">
                {/* Contact */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-xl text-neutral-900 mb-1">
                        Contact
                    </h3>
                    <a
                        href="mailto:rmtdesign@effectt.works"
                        className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium leading-snug"
                    >
                        rmtdesign@effectt.works
                    </a>
                    <a
                        href="tel:+6287757479647"
                        className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium leading-snug"
                    >
                        +62 877-5747-9647
                    </a>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-xl text-neutral-900 mb-1">
                        Links
                    </h3>
                    <Link
                        href="#"
                        className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium leading-snug"
                    >
                        Get an estimate in 2 minutes
                    </Link>
                    <Link
                        href="/portfolio"
                        className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium leading-snug"
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/privacy-policy"
                        className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium leading-snug"
                    >
                        Privacy Policy
                    </Link>
                </div>

                {/* For Whom */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-xl text-neutral-900 mb-1">
                        For Whom
                    </h3>
                    <Link
                        href="/portfolio"
                        className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium leading-snug"
                    >
                        Product
                    </Link>
                    <Link
                        href="/portfolio"
                        className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium leading-snug"
                    >
                        Saas/Apps
                    </Link>
                </div>

                {/* Crew */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-xl text-neutral-900 mb-1">
                        Crew
                    </h3>
                    <Link
                        href="/sign-in"
                        className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium leading-snug"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/sign-up"
                        className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium leading-snug"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 mb-16">
                <a
                    href="https://www.instagram.com/aliefmagic_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-12 h-12 rounded-full bg-linear-to-b from-orange-500 to-neutral-900 flex items-center justify-center text-neutral-100 hover:scale-110 transition-transform shadow-[0_4px_20px_rgba(234,88,12,0.3)]"
                >
                    <FaInstagram className="w-5 h-5" />
                </a>

                <a
                    href="https://www.behance.net/aliefkhairul"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Behance"
                    className="w-12 h-12 rounded-full bg-linear-to-b from-orange-500 to-neutral-900 flex items-center justify-center text-neutral-100 hover:scale-110 transition-transform shadow-[0_4px_20px_rgba(234,88,12,0.3)]"
                >
                    <FaBehanceSquare className="w-5 h-5" />
                </a>
            </div>

            {/* Copyright */}
            <p className="text-neutral-500 font-medium text-sm">
                © 2026 Effectt. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
