import { Button } from '@/components/ui/button';
import Link from 'next/link';
import TabService from '../components/tab-service';
import {
    StepIdeaStoryboard,
    StepBuildStoryboard,
    StepMotionStoryboard
} from '../components/process';
import { myServicesData } from '../data';
import { Footer } from '@/components/shared/footer';

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
                        <Link href="/portfolio">
                            <Button
                                variant={'outline'}
                                className="p-6 font-bold text-neutral-100 border-neutral-700 bg-neutral-900/40 hover:bg-neutral-900/60 hover:text-neutral-100 backdrop-blur-sm cursor-pointer"
                            >
                                See Portfolio
                            </Button>
                        </Link>
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
            <Footer />
            {/* FOOTER SECTION */}
        </div>
    );
}

export default LandingPage;
