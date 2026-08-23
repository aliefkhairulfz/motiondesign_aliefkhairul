'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export type GalleryItem = {
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
                                    : 'border-neutral-200'
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
                            <div
                                key={gallery.alt}
                                className="group relative w-full aspect-video bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={gallery.imageUrl}
                                    alt={gallery.alt}
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    fill
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-neutral-900/80 via-neutral-900/20 to-transparent flex items-end justify-between p-6 text-neutral-100 pointer-events-none">
                                    <p className="text-lg font-bold">
                                        {gallery.client}
                                    </p>
                                    <p className="text-sm font-normal text-neutral-300">
                                        {gallery.serviceType}
                                    </p>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
}

export default TabService;
