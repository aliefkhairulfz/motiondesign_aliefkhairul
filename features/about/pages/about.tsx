import Link from 'next/link';
import { Footer } from '@/components/shared/footer';

export function AboutPageContent() {
    return (
        <main className="min-h-screen bg-neutral-200 text-neutral-950 pt-28 sm:pt-36 flex flex-col justify-between">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full pb-20">
                {/* HEADER */}
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-950">
                        About
                    </h1>
                    <p className="text-neutral-600 mt-4 text-lg sm:text-xl leading-relaxed">
                        We create 3D product videos and motion design that make
                        ideas clear, captivating, and hard to ignore.
                    </p>
                </div>

                {/* MAIN CONTENT */}
                <div className="space-y-10 text-neutral-700 text-base sm:text-lg leading-relaxed border-t border-neutral-300 pt-10">
                    <section className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-950">
                            Who We Are
                        </h2>
                        <p>
                            RedMotion is an independent motion design studio
                            founded by Alief Khairul. We partner with hardware
                            startups, tech companies, and consumer brands to
                            turn complex products into engaging visual stories.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-950">
                            Our Approach
                        </h2>
                        <p>
                            We don&apos;t start with animation—we start with the
                            idea. Before touching 3D software, we map out the
                            script, storyboard, and camera flow so that every
                            second of your video works toward a specific goal:
                            explain, engage, or sell.
                        </p>

                        <div className="space-y-4 pt-2">
                            <div className="flex gap-4">
                                <span className="font-mono text-orange-600 font-bold">
                                    01
                                </span>
                                <div>
                                    <h3 className="font-bold text-neutral-950">
                                        Plan & Script
                                    </h3>
                                    <p className="text-sm sm:text-base text-neutral-600">
                                        You see the full storyboard and visual
                                        direction before production starts.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span className="font-mono text-orange-600 font-bold">
                                    02
                                </span>
                                <div>
                                    <h3 className="font-bold text-neutral-950">
                                        Build in 3D
                                    </h3>
                                    <p className="text-sm sm:text-base text-neutral-600">
                                        Polygon Modeling, photorealistic
                                        materials, and studio lighting.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span className="font-mono text-orange-600 font-bold">
                                    03
                                </span>
                                <div>
                                    <h3 className="font-bold text-neutral-950">
                                        Refine & Deliver
                                    </h3>
                                    <p className="text-sm sm:text-base text-neutral-600">
                                        Smooth animation, custom sound design,
                                        and on-time 4K delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CONTACT */}
                    <section className="space-y-3 pt-6 border-t border-neutral-300">
                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-950">
                            Get in Touch
                        </h2>
                        <p className="text-neutral-600">
                            Have an upcoming launch or project? Email us
                            directly at:{' '}
                            <a
                                href="mailto:rmtdesign@redmotion.works"
                                className="text-orange-600 font-semibold hover:underline"
                            >
                                rmtdesign@redmotion.works
                            </a>
                        </p>
                        <div className="pt-2">
                            <Link
                                href="/portfolio"
                                className="text-sm font-semibold text-neutral-950 hover:text-orange-600 transition-colors inline-flex items-center gap-1"
                            >
                                <span>View our work →</span>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>

            {/* SHARED FOOTER */}
            <Footer />
        </main>
    );
}

export default AboutPageContent;
