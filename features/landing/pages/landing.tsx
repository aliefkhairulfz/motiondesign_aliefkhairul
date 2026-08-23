import { Button } from '@/components/ui/button';
import TabService from '../components/tab-service';

const myServices = [
    {
        label: 'Product',
        id: '1',
        galleries: [
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'product-gallery-1',
                client: 'Go1 Enterprise AI',
                serviceType: 'Product Video'
            },
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'product-gallery-2',
                client: 'Noritz PRO',
                serviceType: 'Product Video'
            },
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'product-gallery-3',
                client: 'Noritz Racks',
                serviceType: 'Product Video'
            },
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'product-gallery-4',
                client: 'Samscreen MAX Kleen',
                serviceType: 'Product Video'
            }
        ]
    },
    {
        label: 'Explainer',
        id: '2',
        galleries: [
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'explainer-gallery-1',
                client: 'Fintech Solutions',
                serviceType: 'Explainer Video'
            },
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'explainer-gallery-2',
                client: 'HealthCare App',
                serviceType: 'Explainer Video'
            },
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'explainer-gallery-3',
                client: 'EcoEnergy',
                serviceType: 'Explainer Video'
            },
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'explainer-gallery-4',
                client: 'LogiTech',
                serviceType: 'Explainer Video'
            }
        ]
    },
    {
        label: 'Saas/App',
        id: '3',
        galleries: [
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'saas-gallery-1',
                client: 'TaskMaster SaaS',
                serviceType: 'App Demo'
            },
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'saas-gallery-2',
                client: 'CloudDrive Pro',
                serviceType: 'App Demo'
            },
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'saas-gallery-3',
                client: 'Analytics Hub',
                serviceType: 'SaaS Promo'
            },
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'saas-gallery-4',
                client: 'SecureAuth',
                serviceType: 'SaaS Promo'
            }
        ]
    },
    {
        label: 'Event/Booth',
        id: '4',
        galleries: [
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'event-gallery-1',
                client: 'TechExpo 2026',
                serviceType: 'Event Film'
            },
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'event-gallery-2',
                client: 'AutoShow Booth',
                serviceType: 'Booth Display'
            },
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'event-gallery-3',
                client: 'Global Summit',
                serviceType: 'Event Film'
            },
            {
                videoUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                imageUrl:
                    'https://res.cloudinary.com/diljekoto/image/upload/v1780584913/cld-sample-3.jpg',
                alt: 'event-gallery-4',
                client: 'InnovateX Expo',
                serviceType: 'Booth Display'
            }
        ]
    }
];

function LandingPage() {
    return (
        <div>
            {/* HERO SECTION & VIDEO BG */}
            <section className="sticky top-15 z-0 w-full h-[70vh] flex items-center justify-center">
                {/* CTA */}
                <div className="max-w-3xl mx-auto px-4 flex flex-col items-center justify-center gap-4">
                    <h1 className="text-5xl sm:text-7xl font-bold text-center">
                        Make your product easy to understand and hard to ignore.
                    </h1>

                    <p className="max-w-xl text-center text-neutral-600">
                        We create 3D product videos, SaaS explainers, launch
                        ads, and event films for companies that need people to
                        get the idea fast.
                    </p>

                    <div className="flex items-center gap-4 mt-2">
                        <Button className="p-6 font-bold">Get a Video</Button>
                        <Button variant={'outline'} className="p-6 font-bold">
                            See Portfolio
                        </Button>
                    </div>
                </div>
                {/* CTA */}
            </section>
            {/* HERO SECTION & VIDEO BG */}

            {/* MAIN SECTION */}
            <section className="relative z-10 pt-18 text-neutral-950 w-full min-h-screen rounded-t-[60px] bg-neutral-100">
                {/* RATE */}
                <ul className="container mx-auto grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-neutral-300 ring-1 ring-neutral-300">
                    <li className="flex flex-col items-center justify-center py-12 md:py-20">
                        <h1 className="text-5xl font-bold">4.9/5</h1>
                        <p className="text-xl font-semibold text-neutral-600 mt-1">
                            Client Rating
                        </p>
                    </li>
                    <li className="flex flex-col items-center justify-center py-12 md:py-20">
                        <h1 className="text-5xl font-bold">120+</h1>
                        <p className="text-xl font-semibold text-neutral-600 mt-1">
                            Videos Delivered
                        </p>
                    </li>
                    <li className="flex flex-col items-center justify-center py-12 md:py-20">
                        <h1 className="text-5xl font-bold">35M+</h1>
                        <p className="text-xl font-semibold text-neutral-600 mt-1">
                            Total Views
                        </p>
                    </li>
                    <li className="flex flex-col items-center justify-center py-12 md:py-20">
                        <h1 className="text-5xl font-bold">98%</h1>
                        <p className="text-xl font-semibold text-neutral-600 mt-1">
                            On-Time Launch
                        </p>
                    </li>
                    <li className="flex flex-col items-center justify-center py-12 md:py-20">
                        <h1 className="text-5xl font-bold">15+</h1>
                        <p className="text-xl font-semibold text-neutral-600 mt-1">
                            Global Brands
                        </p>
                    </li>
                </ul>
                {/* RATE */}

                {/* What kind of video do you need? */}
                <div className="container mx-auto mt-20 px-4">
                    {/* TEXT */}
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-center max-w-2xl">
                            What kind of video do you need?
                        </h1>
                        <p className="text-neutral-600">
                            Pick a type and see if it fits your project.
                        </p>
                    </div>
                    {/* TEXT */}

                    {/* TAB & CHOOSE */}
                    <TabService myServicesData={myServices} />
                    {/* TAB & CHOOSE */}
                </div>
                {/* What kind of video do you need? */}

                {/* OUR PROCESS SECTION */}
                <div className="container mx-auto mt-32 px-4 pb-24">
                    {/* PROCESS HEADER */}
                    <div className="flex flex-col items-center justify-center gap-4 text-center max-w-4xl mx-auto">
                        <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                            Our process
                        </span>
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                            We{' '}
                            <span className="text-orange-600">don't start</span>{' '}
                            with animation.
                            <br />
                            We start with{' '}
                            <span className="text-orange-600">the point.</span>
                        </h2>
                        <p className="text-neutral-600 max-w-xl text-base sm:text-lg mt-2">
                            First, we define what the video needs to say, who
                            needs to understand it, and why they should care.
                        </p>
                    </div>
                    {/* PROCESS HEADER */}

                    {/* PROCESS STEPS CONTAINER */}
                    <div className="flex flex-col gap-32 mt-24">
                        {/* STEP 1: SCRIPTWRITING */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="flex flex-col gap-6 max-w-xl">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-600 text-white font-semibold text-sm">
                                        1
                                    </span>
                                    <span className="text-neutral-600 font-medium text-base">
                                        Scriptwriting
                                    </span>
                                </div>
                                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                                    A video only{' '}
                                    <span className="text-orange-600">
                                        works
                                    </span>{' '}
                                    if the{' '}
                                    <span className="text-orange-600">
                                        script does.
                                    </span>
                                </h3>
                                <p className="text-neutral-600 text-lg">
                                    We don't write a feature list. We write the
                                    path from "what is this?" to "I want this."
                                    Every line has a job.
                                </p>
                            </div>
                            <div className="w-full aspect-[4/3] bg-neutral-200 rounded-2xl flex items-center justify-center text-neutral-500 font-medium">
                                Script & Core Narrative Preview
                            </div>
                        </div>

                        {/* STEP 2: STORYBOARD */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="flex flex-col gap-6 max-w-xl">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-600 text-white font-semibold text-sm">
                                        2
                                    </span>
                                    <span className="text-neutral-600 font-medium text-base">
                                        Storyboard
                                    </span>
                                </div>
                                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                                    You{' '}
                                    <span className="text-orange-600">
                                        see the video
                                    </span>{' '}
                                    before production starts.
                                </h3>
                                <p className="text-neutral-600 text-lg">
                                    Every scene is shown first: how it looks,
                                    what happens, and why we're doing it this
                                    way. So you know what we're making before we
                                    make it.
                                </p>
                            </div>
                            <div className="w-full aspect-[4/3] bg-neutral-200 rounded-2xl flex items-center justify-center text-neutral-500 font-medium">
                                Storyboard Frame Overview
                            </div>
                        </div>

                        {/* STEP 3: PRODUCTION */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="flex flex-col gap-6 max-w-xl items-start">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-600 text-white font-semibold text-sm">
                                        3
                                    </span>
                                    <span className="text-neutral-600 font-medium text-base">
                                        Production
                                    </span>
                                </div>
                                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                                    You get regular progress updates.
                                </h3>
                                <p className="text-neutral-600 text-lg">
                                    With the plan clear, production moves
                                    faster. You see progress during the process,
                                    and the final video stays focused on the
                                    goal: explain, sell, or launch.
                                </p>
                                <Button className="mt-2 p-6 font-bold bg-black text-white hover:bg-neutral-800 rounded-xl">
                                    Get a video
                                </Button>
                            </div>
                            <div className="w-full aspect-[4/3] bg-neutral-200 rounded-2xl flex items-center justify-center text-neutral-500 font-medium">
                                3D Render & Motion Preview
                            </div>
                        </div>
                    </div>
                    {/* PROCESS STEPS CONTAINER */}
                </div>
                {/* OUR PROCESS SECTION */}
            </section>
            {/* MAIN SECTION */}
        </div>
    );
}

export default LandingPage;
