'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { TbTrademark } from 'react-icons/tb';
import { FaInstagram, FaBehanceSquare } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export function Header() {
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(true);

    // Close mobile menu when screen size increases to desktop range
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className="w-full bg-neutral-950/80 backdrop-blur-lg text-neutral-100 px-6 md:px-12 py-4 flex items-center justify-between fixed top-0 z-50">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center cursor-pointer z-50"
                >
                    <span className="text-2xl text-red-500 font-bold tracking-tight flex items-start">
                        RedMotion
                        <TbTrademark className="w-4 h-4 ml-0.5 mt-1 text-red-500" />
                    </span>
                </Link>

                {/* Navigation (Desktop) */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/portfolio"
                        className="text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors"
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors"
                    >
                        About
                    </Link>

                    {/* Custom Dropdown for Resources */}
                    <div
                        className="relative"
                        onClick={() => setIsResourcesOpen(old => !old)}
                    >
                        <button className="flex items-center gap-1 text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors">
                            Resources
                            <ChevronDown
                                className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {/* Dropdown Menu */}
                        <div
                            className={`absolute top-full -left-2 mt-7 w-48 bg-neutral-950/80 backdrop-blur-lg border border-neutral-800 rounded-xl shadow-2xl py-2 flex flex-col z-50 transition-all duration-200 origin-top ${isResourcesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                        >
                            <Link
                                href="#"
                                className="px-4 py-2.5 text-sm text-neutral-300 hover:text-neutral-100 transition-colors mx-1 rounded-md"
                            >
                                Creator Toolkits
                            </Link>
                            <Link
                                href="#"
                                className="px-4 py-2.5 text-sm text-neutral-300 hover:text-neutral-100 transition-colors mx-1 rounded-md"
                            >
                                Guides
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Header Right Actions */}
                <div className="flex items-center gap-4 z-50">
                    {/* CTA Button (Desktop) */}
                    <div className="hidden md:block">
                        <Button className="p-5 font-bold">
                            Get your Video
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(old => !old)}
                        className="md:hidden flex items-center justify-center w-11 h-11 full text-neutral-200 hover:text-neutral-100 hover:border-neutral-700 transition-all duration-200 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 transition-transform duration-200" />
                        ) : (
                            <Menu className="w-6 h-6 transition-transform duration-200" />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Fullscreen Studio Menu Overlay */}
            <div
                className={cn(
                    'fixed inset-0 top-0 left-0 w-full h-dvh bg-neutral-950/98 backdrop-blur-3xl z-40 flex flex-col justify-between pt-24 pb-8 px-6 sm:px-10 md:hidden transition-all duration-300 ease-out',
                    isMobileMenuOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                )}
            >
                {/* Navigation Links */}
                <div className="flex flex-col gap-5 my-auto">
                    <Link
                        href="/portfolio"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-baseline justify-between py-2.5 border-b border-neutral-900 hover:border-neutral-800 transition-colors"
                    >
                        <span className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-200 group-hover:text-white transition-colors">
                            Portfolio
                        </span>
                    </Link>

                    <Link
                        href="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-baseline justify-between py-2.5 border-b border-neutral-900 hover:border-neutral-800 transition-colors"
                    >
                        <span className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-200 group-hover:text-white transition-colors">
                            About
                        </span>
                    </Link>

                    {/* Resources Section with Expandable Sub-items */}
                    <div className="py-2.5 border-b border-neutral-900">
                        <button
                            type="button"
                            onClick={() =>
                                setIsMobileResourcesOpen(prev => !prev)
                            }
                            className="w-full flex items-baseline justify-between py-1 group focus:outline-none"
                        >
                            <span className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-200 group-hover:text-white transition-colors flex items-center gap-2">
                                Resources
                                <ChevronDown
                                    className={cn(
                                        'w-5 h-5 text-neutral-500 transition-transform duration-200',
                                        isMobileResourcesOpen &&
                                            'rotate-180 text-red-500'
                                    )}
                                />
                            </span>
                        </button>

                        {/* Collapsible Sub-items */}
                        <div
                            className={cn(
                                'grid transition-all duration-200 overflow-hidden',
                                isMobileResourcesOpen
                                    ? 'grid-rows-[1fr] opacity-100 mt-3'
                                    : 'grid-rows-[0fr] opacity-0'
                            )}
                        >
                            <div className="min-h-0 flex flex-col gap-2 pl-2 sm:pl-4">
                                <Link
                                    href="#"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:bg-neutral-900 hover:border-neutral-700 text-neutral-300 hover:text-neutral-100 transition-all text-sm font-medium"
                                >
                                    <span>Blender Addon</span>
                                    <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                                </Link>
                                <Link
                                    href="#"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:bg-neutral-900 hover:border-neutral-700 text-neutral-300 hover:text-neutral-100 transition-all text-sm font-medium"
                                >
                                    <span>Guides</span>
                                    <ArrowUpRight className="w-4 h-4 text-neutral-500" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer Section */}
                <div className="flex flex-col gap-6 pt-6 mt-auto">
                    <Button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full py-6 font-bold text-base bg-neutral-100 text-neutral-950 hover:bg-neutral-200 rounded-xl shadow-lg shadow-black/40 transition-transform active:scale-[0.98]"
                    >
                        Get your Video
                    </Button>

                    <div className="flex items-center justify-between text-xs text-neutral-500 pt-3 border-t border-neutral-900">
                        <a
                            href="mailto:filip@redmotion.works"
                            className="hover:text-neutral-300 transition-colors"
                        >
                            filip@redmotion.works
                        </a>
                        <div className="flex items-center gap-4 text-lg text-neutral-400">
                            <Link
                                href="#"
                                className="hover:text-neutral-100 transition-colors"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </Link>
                            <Link
                                href="#"
                                className="hover:text-neutral-100 transition-colors"
                                aria-label="Behance"
                            >
                                <FaBehanceSquare />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
