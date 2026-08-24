'use client';

export function StepMotionStoryboard() {
    return (
        <div className="w-full min-h-[380px] sm:min-h-[440px] md:min-h-[480px] bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 text-neutral-200 flex flex-col justify-between shadow-2xl">
            {/* HEADER */}
            <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-2.5">
                    <span className="text-sm font-semibold text-neutral-200 tracking-wide">
                        Animation & Final Polish
                    </span>
                </div>
            </div>

            {/* 3 MOTION FRAMES */}
            <div className="grid grid-cols-3 gap-3.5 sm:gap-4 my-auto py-4">
                {/* FRAME 1: ANIMATION */}
                <div className="flex flex-col gap-2.5">
                    <div className="aspect-video w-full rounded-2xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-center relative overflow-hidden p-3">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                            <path
                                d="M 18 40 Q 48 10 82 28"
                                fill="none"
                                stroke="#52525b"
                                strokeWidth="1"
                                strokeDasharray="3,2"
                            />
                            <circle
                                cx="18"
                                cy="40"
                                r="4"
                                fill="#27272a"
                                stroke="#52525b"
                            />
                            <circle cx="72" cy="27" r="6" fill="#ea580c" />
                            <line
                                x1="60"
                                y1="27"
                                x2="50"
                                y2="27"
                                stroke="#ea580c"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <line
                                x1="62"
                                y1="23"
                                x2="55"
                                y2="23"
                                stroke="#ea580c"
                                strokeWidth="1"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <div>
                        <p className="text-sm sm:text-base font-bold text-neutral-100">
                            Animation
                        </p>
                        <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-snug">
                            Bring the scene to life
                        </p>
                    </div>
                </div>

                {/* FRAME 2: POLISH */}
                <div className="flex flex-col gap-2.5">
                    <div className="aspect-video w-full rounded-2xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-center relative overflow-hidden p-3">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                            <defs>
                                <radialGradient
                                    id="polishGlowLg"
                                    cx="50%"
                                    cy="40%"
                                    r="60%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#ea580c"
                                        stopOpacity="0.3"
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
                                cy="30"
                                r="28"
                                fill="url(#polishGlowLg)"
                            />
                            <rect
                                x="37"
                                y="15"
                                width="26"
                                height="30"
                                rx="5"
                                fill="#27272a"
                                stroke="#71717a"
                            />
                            <path
                                d="M42 19 L42 40"
                                stroke="#ffffff"
                                strokeWidth="2"
                                opacity="0.35"
                                strokeLinecap="round"
                            />
                            <path
                                d="M61 20 L61 39"
                                stroke="#ea580c"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <path
                                d="M72 18 L74 22 L78 24 L74 26 L72 30 L70 26 L66 24 L70 22 Z"
                                fill="#ea580c"
                            />
                        </svg>
                    </div>

                    <div>
                        <p className="text-sm sm:text-base font-bold text-neutral-100">
                            Polish
                        </p>
                        <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-snug">
                            Refine light, timing, details
                        </p>
                    </div>
                </div>

                {/* FRAME 3: FINAL */}
                <div className="flex flex-col gap-2.5">
                    <div className="aspect-video w-full rounded-2xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-center relative overflow-hidden p-3">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                            <rect
                                x="16"
                                y="10"
                                width="68"
                                height="40"
                                rx="4"
                                fill="#18181b"
                                stroke="#3f3f46"
                            />
                            <rect
                                x="40"
                                y="17"
                                width="20"
                                height="26"
                                rx="4"
                                fill="#27272a"
                                stroke="#71717a"
                            />
                            <path
                                d="M44 20 L44 38"
                                stroke="#ea580c"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <circle cx="76" cy="44" r="5" fill="#ea580c" />
                            <polygon
                                points="74,41 74,47 78,44"
                                fill="#ffffff"
                            />
                        </svg>
                    </div>

                    <div>
                        <p className="text-sm sm:text-base font-bold text-neutral-100">
                            Final
                        </p>
                        <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-snug">
                            Ready for the final frame
                        </p>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-between pt-4 text-xs sm:text-sm text-neutral-400">
                <span>
                    We refine every detail until the motion feels right.
                </span>
            </div>
        </div>
    );
}

export default StepMotionStoryboard;
