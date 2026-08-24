'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { myServicesData } from '@/features/landing/data';
import type { GalleryItem } from '@/features/landing/components/tab-service';
import { Footer } from '@/components/shared/footer';

function GalleryCard({ gallery }: { gallery: GalleryItem }) {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isHovered) {
            video.currentTime = 0;
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.debug('Autoplay prevented:', error);
                });
            }
        } else {
            video.pause();
            video.currentTime = 0;
        }
    }, [isHovered]);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative w-full aspect-video bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
        >
            <Image
                src={gallery.imageUrl}
                alt={gallery.alt}
                className={cn(
                    'object-cover transition-all duration-300 group-hover:scale-105',
                    isHovered ? 'opacity-0 scale-105' : 'opacity-100'
                )}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <video
                ref={videoRef}
                src={gallery.videoUrl}
                loop
                muted
                playsInline
                className={cn(
                    'absolute inset-0 w-full h-full object-cover transition-opacity duration-300',
                    isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}
            />
            <div className="absolute inset-0 bg-linear-to-t from-neutral-900/80 via-neutral-900/20 to-transparent flex items-end justify-between p-6 text-neutral-100 pointer-events-none z-10">
                <p className="text-lg font-bold">{gallery.client}</p>
                <p className="text-sm font-semibold text-neutral-300">
                    {gallery.serviceType}
                </p>
            </div>
        </div>
    );
}

export function PortfolioPage() {
    const [selectedIdx, setSelectedIdx] = useState<number>(0);

    return (
        <main className="min-h-screen bg-neutral-200 text-neutral-950 pt-28 sm:pt-36 flex flex-col justify-between">
            <div className="max-w-5xl mx-auto flex flex-col items-center px-4 sm:px-6 w-full pb-24">
                {/* HEADER */}
                <div className="text-center mb-12 flex flex-col items-center">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-950">
                        Portfolio
                    </h1>
                    <p className="text-neutral-600 mt-4 max-w-xl text-base sm:text-lg">
                        Selected 3D product animations and motion design created for global brands.
                    </p>
                </div>

                {/* TABS (Identical to tab-service.tsx in landing page) */}
                <div className="flex items-center justify-center w-full max-w-2xl overflow-x-auto">
                    <ul className="flex min-w-max border-b border-neutral-300">
                        {myServicesData.map((service, i) => (
                            <li
                                key={service.id}
                                className={cn(
                                    'py-4 px-6 md:px-10 border-b-2 font-semibold text-base sm:text-lg cursor-pointer transition-colors',
                                    selectedIdx === i
                                        ? 'border-neutral-900 text-neutral-950 font-bold'
                                        : 'border-transparent text-neutral-500 hover:text-neutral-800'
                                )}
                                onClick={() => setSelectedIdx(i)}
                            >
                                {service.label}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 w-full">
                    {myServicesData[selectedIdx].galleries.map(gallery => (
                        <GalleryCard key={gallery.id} gallery={gallery} />
                    ))}
                </div>
            </div>

            {/* SHARED FOOTER */}
            <Footer />
        </main>
    );
}

export default PortfolioPage;
