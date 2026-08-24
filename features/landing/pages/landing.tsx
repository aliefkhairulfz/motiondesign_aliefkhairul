import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaBehanceSquare, FaInstagram } from 'react-icons/fa';
import { TbTrademark } from 'react-icons/tb';
import TabService from '../components/tab-service';
import {
    StepIdeaStoryboard,
    StepBuildStoryboard,
    StepMotionStoryboard
} from '../components/process';
import { myServicesData } from '../data';

function LandingPage() {
    return (
        <div>
            {/* HERO SECTION & VIDEO BG */}
            <section className="sticky top-0 z-0 w-full h-screen flex items-center justify-center overflow-hidden">
                {/* VIDEO BG */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                    src="https://res.cloudinary.com/diljekoto/video/upload/v1787507933/Visser_-_Luxy_Skincare_Revisi_2_dmvgfx.mp4"
                />
                {/* VIDEO OVERLAY (Radial gradient vignette using neutral-900, darker) */}
                <div className="absolute inset-0 bg-neutral-900/50 pointer-events-none -z-10"></div>

                {/* CTA */}
                <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center gap-4 relative z-10 -mt-16">
                    <h1 className="text-5xl sm:text-7xl font-bold text-center text-neutral-100">
                        Make your product clear and Hard to ignore.
                    </h1>

                    <p className="max-w-xl text-center text-neutral-300 font-semibold">
                        We create 3D product videos and motion design that
                        transform ideas into visual stories - helping products
                        communicate faster, look better, and stay memorable.
                    </p>

                    <div className="flex items-center gap-4 mt-2">
                        <Button className="p-6 font-bold bg-neutral-200 text-neutral-900 hover:bg-neutral-200">
                            Get your Video
                        </Button>
                        <Button
                            variant={'outline'}
                            className="p-6 font-bold text-neutral-100 border-neutral-700 bg-neutral-900/40 hover:bg-neutral-900/60 hover:text-neutral-100 backdrop-blur-sm"
                        >
                            See Portfolio
                        </Button>
                    </div>
                </div>
                {/* CTA */}
            </section>
            {/* HERO SECTION & VIDEO BG */}

            {/* MAIN SECTION */}
            <section className="relative z-10 p-10 text-neutral-950 w-full min-h-screen rounded-t-[60px] bg-neutral-200 -mt-50 shadow-2xl shadow-neutral-900">
                {/* RATE */}
                <ul className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-300 ring-1 ring-neutral-300 rounded-[20px]">
                    <li className="flex flex-col items-center justify-center py-4 md:py-8">
                        <h1 className="text-5xl font-bold">5+</h1>
                        <p className="text-xl font-semibold text-neutral-600 mt-1">
                            Client
                        </p>
                    </li>
                    <li className="flex flex-col items-center justify-center py-4 md:py-8">
                        <h1 className="text-5xl font-bold">10+</h1>
                        <p className="text-xl font-semibold text-neutral-600 mt-1">
                            Videos Delivered
                        </p>
                    </li>
                    <li className="flex flex-col items-center justify-center py-4 md:py-8">
                        <h1 className="text-5xl font-bold">98%</h1>
                        <p className="text-xl font-semibold text-neutral-600 mt-1">
                            On-Time Launch
                        </p>
                    </li>
                    <li className="flex flex-col items-center justify-center py-4 md:py-8">
                        <h1 className="text-5xl font-bold">2+</h1>
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
                            What do you want your product to say?
                        </h1>
                        <p className="text-neutral-600 max-w-xl text-center">
                            Every project needs a different kind of story.
                            Explore the formats I create and find the one that
                            fits your idea.
                        </p>
                    </div>
                    {/* TEXT */}

                    {/* TAB & CHOOSE */}
                    <TabService myServicesData={myServicesData} />
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
                            We don&apos;t start with{' '}
                            <span className="text-orange-600">animation.</span>
                            <br />
                            We start with{' '}
                            <span className="text-orange-600">the idea.</span>
                        </h2>

                        <p className="text-neutral-600 max-w-xl text-base sm:text-lg mt-2">
                            we start by understanding the idea, finding the
                            right visual direction, and figuring out how motion
                            can support it.
                        </p>
                    </div>
                    {/* PROCESS HEADER */}

                    {/* PROCESS STEPS CONTAINER */}
                    <div className="flex flex-col gap-32 mt-32">
                        {/* STEP 1: THE IDEA */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="flex flex-col gap-6 max-w-xl">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-600 text-neutral-100 font-semibold text-sm">
                                        1
                                    </span>
                                    <span className="text-neutral-600 font-medium text-base">
                                        Idea
                                    </span>
                                </div>

                                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                                    Before anything moves, there&apos;s an{' '}
                                    <span className="text-orange-600">
                                        idea.
                                    </span>
                                </h3>

                                <p className="text-neutral-600 text-lg">
                                    We start by exploring the concept,
                                    references, and visual direction to
                                    understand what the piece needs to
                                    communicate.
                                </p>
                            </div>

                            <StepIdeaStoryboard />
                        </div>

                        {/* STEP 2: THE BUILD */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="flex flex-col gap-6 max-w-xl">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-600 text-neutral-100 font-semibold text-sm">
                                        2
                                    </span>
                                    <span className="text-neutral-600 font-medium text-base">
                                        Build
                                    </span>
                                </div>

                                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                                    Then the idea becomes{' '}
                                    <span className="text-orange-600">
                                        something real.
                                    </span>
                                </h3>

                                <p className="text-neutral-600 text-lg">
                                    We build the scene in 3D, from modeling and
                                    materials to lighting, cameras, and
                                    animation.
                                </p>
                            </div>

                            <StepBuildStoryboard />
                        </div>

                        {/* STEP 3: THE MOTION */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="flex flex-col gap-6 max-w-xl items-start">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-600 text-neutral-100 font-semibold text-sm">
                                        3
                                    </span>
                                    <span className="text-neutral-600 font-medium text-base">
                                        Motion
                                    </span>
                                </div>

                                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                                    Finally, every detail starts to{' '}
                                    <span className="text-orange-600">
                                        move.
                                    </span>
                                </h3>

                                <p className="text-neutral-600 text-lg">
                                    We refine the animation, lighting,
                                    composition, and post-production until
                                    everything feels right.
                                </p>
                            </div>

                            <StepMotionStoryboard />
                        </div>
                    </div>
                    {/* PROCESS STEPS CONTAINER */}
                </div>
                {/* OUR PROCESS SECTION */}
            </section>
            {/* MAIN SECTION */}

            {/* FOOTER SECTION */}
            <footer className="relative z-10 w-full py-24 flex flex-col items-center bg-neutral-200">
                {/* Logo & Rating */}
                <div className="flex items-start gap-2 mb-20 text-red-500">
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none bg-linear-to-br from-orange-500 to-red-600 bg-clip-text text-transparent pb-2">
                        RedMotion
                    </h1>
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none bg-linear-to-br from-orange-500 to-red-600 bg-clip-text text-transparent pb-2 flex items-start justify-center">
                        <TbTrademark className="w-12 h-12 md:w-16 md:h-16 text-orange-600 mt-2 ml-1" />
                    </h1>
                </div>

                {/* Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl w-full mb-24 px-8">
                    {/* Contact */}
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-xl text-neutral-900 mb-1">
                            Contact
                        </h3>
                        <Link
                            href="mailto:filip@redmotion.works"
                            target="_blank"
                            className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium leading-snug"
                        >
                            rmtdesign@redmotion.works
                        </Link>
                        <a
                            href="tel:+48508844801"
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
                        <a
                            href="#"
                            className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium leading-snug"
                        >
                            Product
                        </a>
                        <a
                            href="#"
                            className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium leading-snug"
                        >
                            Saas/Apps
                        </a>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-6 mb-16">
                    <Link
                        href="https://www.instagram.com/aliefmagic_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-linear-to-b from-orange-500 to-neutral-900 flex items-center justify-center text-neutral-100 hover:scale-110 transition-transform shadow-[0_4px_20px_rgba(234,88,12,0.3)]"
                    >
                        <FaInstagram className="w-5 h-5" />
                    </Link>

                    <Link
                        href="https://www.behance.net/aliefkhairul"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-linear-to-b from-orange-500 to-neutral-900 flex items-center justify-center text-neutral-100 hover:scale-110 transition-transform shadow-[0_4px_20px_rgba(234,88,12,0.3)]"
                    >
                        <FaBehanceSquare className="w-5 h-5" />
                    </Link>
                </div>

                {/* Copyright */}
                <p className="text-neutral-500 font-medium text-sm">
                    © 2026 RedMotion. All rights reserved.
                </p>
            </footer>
            {/* FOOTER SECTION */}
        </div>
    );
}

export default LandingPage;
