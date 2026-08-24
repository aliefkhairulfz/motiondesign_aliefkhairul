'use client';

export function StepBuildStoryboard() {
    return (
        <div className="w-full min-h-[380px] sm:min-h-[440px] md:min-h-[480px] bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 text-neutral-200 flex flex-col justify-between shadow-2xl">
            {/* HEADER */}
            <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-2.5">
                    <span className="text-sm font-semibold text-neutral-200 tracking-wide">
                        3D Scene & Production
                    </span>
                </div>
            </div>

            {/* 3 BUILD FRAMES */}
            <div className="grid grid-cols-3 gap-3.5 sm:gap-4 my-auto py-4">
                {/* FRAME 1: MODELING */}
                <div className="flex flex-col gap-2.5">
                    <div className="aspect-video w-full rounded-2xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-center relative overflow-hidden p-3">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                            <ellipse
                                cx="50"
                                cy="17"
                                rx="21"
                                ry="7"
                                fill="#27272a"
                                stroke="#71717a"
                            />
                            <path
                                d="M29 17 L29 40 C29 48 71 48 71 40 L71 17"
                                fill="#18181b"
                                stroke="#71717a"
                            />
                            <ellipse
                                cx="50"
                                cy="40"
                                rx="21"
                                ry="7"
                                fill="#18181b"
                                stroke="#52525b"
                            />
                            <path
                                d="M29 18 L29 40"
                                stroke="#ea580c"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <div>
                        <p className="text-sm sm:text-base font-bold text-neutral-100">
                            Modeling
                        </p>
                        <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-snug">
                            Build the product and scene
                        </p>
                    </div>
                </div>

                {/* FRAME 2: MATERIALS */}
                <div className="flex flex-col gap-2.5">
                    <div className="aspect-video w-full rounded-2xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-center relative overflow-hidden p-3">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                            <circle
                                cx="28"
                                cy="30"
                                r="11"
                                fill="#3f3f46"
                                stroke="#71717a"
                            />
                            <circle
                                cx="50"
                                cy="30"
                                r="11"
                                fill="#27272a"
                                stroke="#52525b"
                            />
                            <circle
                                cx="72"
                                cy="30"
                                r="11"
                                fill="#18181b"
                                stroke="#ea580c"
                            />
                            <ellipse
                                cx="24"
                                cy="26"
                                rx="3"
                                ry="2"
                                fill="#ffffff"
                                opacity="0.35"
                            />
                            <ellipse
                                cx="46"
                                cy="26"
                                rx="3"
                                ry="2"
                                fill="#ffffff"
                                opacity="0.2"
                            />
                            <ellipse
                                cx="68"
                                cy="26"
                                rx="3"
                                ry="2"
                                fill="#ffffff"
                                opacity="0.15"
                            />
                        </svg>
                    </div>

                    <div>
                        <p className="text-sm sm:text-base font-bold text-neutral-100">
                            Materials
                        </p>
                        <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-snug">
                            Shape the surface and details
                        </p>
                    </div>
                </div>

                {/* FRAME 3: LIGHTING */}
                <div className="flex flex-col gap-2.5">
                    <div className="aspect-video w-full rounded-2xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-center relative overflow-hidden p-3">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                            <defs>
                                <radialGradient
                                    id="buildLightLg"
                                    cx="50%"
                                    cy="35%"
                                    r="65%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#ea580c"
                                        stopOpacity="0.45"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#18181b"
                                        stopOpacity="0"
                                    />
                                </radialGradient>
                            </defs>
                            <circle
                                cx="50"
                                cy="28"
                                r="28"
                                fill="url(#buildLightLg)"
                            />
                            <rect
                                x="36"
                                y="16"
                                width="28"
                                height="30"
                                rx="5"
                                fill="#27272a"
                                stroke="#71717a"
                            />
                            <path
                                d="M41 19 L41 41"
                                stroke="#ffffff"
                                strokeWidth="2"
                                opacity="0.35"
                                strokeLinecap="round"
                            />
                            <path
                                d="M63 20 L63 40"
                                stroke="#ea580c"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <div>
                        <p className="text-sm sm:text-base font-bold text-neutral-100">
                            Lighting
                        </p>
                        <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-snug">
                            Shape the mood and composition
                        </p>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-between pt-4 text-xs sm:text-sm text-neutral-400">
                <span>
                    We build and refine the scene before bringing it to motion.
                </span>
            </div>
        </div>
    );
}

export default StepBuildStoryboard;
