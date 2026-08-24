'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
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
            <div className="absolute inset-0 bg-linear-to-t from-neutral-900/80 via-neutral-900/20 to-transparent flex items-end justify-between p-3 sm:p-6 text-neutral-100 pointer-events-none z-10">
                <p className="text-lg font-bold">{gallery.client}</p>
                <p className="text-sm font-semibold text-neutral-300">
                    {gallery.serviceType}
                </p>
            </div>
        </motion.div>
    );
}

function TabService(props: TabService) {
    const [selectedIdx, setSelectedIdx] = useState<{ idx: number }>({ idx: 0 });

    return (
        <div className="flex flex-col items-center justify-center mt-8 w-full">
            {/* TAB HEADER */}
            <div className="flex items-center justify-center w-full max-w-2xl overflow-x-auto relative mb-8">
                {/* Background line */}
                <div className="absolute bottom-0 left-45 right-45 h-[2px] bg-neutral-300 pointer-events-none" />

                <ul className="flex min-w-max relative">
                    {props.myServicesData.slice(0, 5).map((service, i) => (
                        <li
                            key={service.id}
                            className={cn(
                                'relative py-4 px-6 md:px-10 font-bold cursor-pointer transition-colors text-lg',
                                selectedIdx.idx === i
                                    ? 'text-neutral-900'
                                    : 'text-neutral-500 hover:text-neutral-700'
                            )}
                            onClick={() => setSelectedIdx({ idx: i })}
                        >
                            {service.label}
                            {/* Animated Active Indicator */}
                            {selectedIdx.idx === i && (
                                <motion.div
                                    layoutId="activeTabIndicator"
                                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-neutral-900 z-10"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 30
                                    }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            {/* TAB HEADER */}

            {/* TAB CONTENT */}
            <div className="w-full max-w-5xl min-h-[300px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedIdx.idx}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={{
                            hidden: {
                                opacity: 0,
                                transition: {
                                    staggerChildren: 0.05,
                                    staggerDirection: -1
                                }
                            },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.1
                                }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                        {props.myServicesData[selectedIdx.idx].galleries
                            .slice(0, 4)
                            .map(gallery => (
                                <GalleryCard
                                    key={gallery.id}
                                    gallery={gallery}
                                />
                            ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default TabService;
