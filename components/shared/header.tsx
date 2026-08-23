'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export function Header() {
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    return (
        <header className="w-full bg-black text-white px-6 md:px-12 py-4 flex items-center justify-between sticky top-0 z-50">
            {/* Logo */}
            <Link href="/" className="flex items-center cursor-pointer">
                <span className="text-2xl font-bold tracking-tight">
                    RedMotion<sup className="text-sm font-medium">™</sup>
                </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                <Link
                    href="#"
                    className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                >
                    Portfolio
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                >
                    Reviews
                </Link>
                <Link
                    href="#"
                    className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                >
                    About
                </Link>

                {/* Custom Dropdown for Resources (Since Shadcn registry was down) */}
                <div
                    className="relative"
                    onClick={() => setIsResourcesOpen(old => !old)}
                >
                    <button className="flex items-center gap-1 text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                        Resources
                        <ChevronDown
                            className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}
                        />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                        className={`absolute top-full -left-2 mt-4 w-48 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl py-2 flex flex-col z-50 transition-all duration-200 origin-top ${isResourcesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                    >
                        <Link
                            href="#"
                            className="px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors mx-1 rounded-md"
                        >
                            Blog
                        </Link>
                        <Link
                            href="#"
                            className="px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors mx-1 rounded-md"
                        >
                            Case Studies
                        </Link>
                        <Link
                            href="#"
                            className="px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors mx-1 rounded-md"
                        >
                            Guides
                        </Link>
                    </div>
                </div>
            </nav>

            {/* CTA Button */}
            <div>
                <Button className="bg-white text-black hover:bg-neutral-200 font-bold px-6 py-6 rounded-2xl text-base">
                    Get a video
                </Button>
            </div>
        </header>
    );
}
