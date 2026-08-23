'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export type GalleryItem = {
    id: string;
    videoUrl: string;
    imageUrl: string;
    alt: string;
    client: string;
    serviceType: string;
};

export type ServiceCategory = {
    label: string;
    id: string;
    galleries: GalleryItem[];
};

type TabService = {
    myServicesData: ServiceCategory[];
};

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
                    // Prevent uncaught play promise rejection logs
                    console.debug('Autoplay prevented or interrupted:', error);
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
            className="group relative w-full aspect-video bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer"
        >
            <Image
                src={gallery.imageUrl}
                alt={gallery.alt}
                className={cn(
                    'object-cover transition-all duration-300 group-hover:scale-105',
                    isHovered ? 'opacity-0 scale-105' : 'opacity-100'
                )}
                fill
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

function TabService(props: TabService) {
    const [selectedIdx, setSelectedIdx] = useState<{ idx: number }>({ idx: 0 });

    return (
        <div className="flex flex-col items-center justify-center mt-8">
            {/* TAB */}
            <div className="flex items-center justify-center w-full max-w-2xl overflow-x-auto">
                <ul className="flex min-w-max">
                    {props.myServicesData.map((service, i) => (
                        <li
                            key={service.id}
                            className={cn(
                                'py-4 px-6 md:px-10 border-b-2 font-semibold cursor-pointer',
                                selectedIdx.idx === i
                                    ? 'border-neutral-900'
                                    : 'border-neutral-300'
                            )}
                            onClick={() => setSelectedIdx({ idx: i })}
                        >
                            {service.label}
                        </li>
                    ))}
                </ul>
            </div>
            {/* TAB */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8 w-full max-w-5xl">
                {props.myServicesData[selectedIdx.idx].galleries.map(
                    gallery => {
                        return (
                            <GalleryCard key={gallery.id} gallery={gallery} />
                        );
                    }
                )}
            </div>
        </div>
    );
}

export default TabService;
