'use client';

export function StepIdeaStoryboard() {
    return (
        <div className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-6 text-neutral-200 flex flex-col justify-between shadow-xl">
            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-neutral-200 tracking-wide">
                        Visual Direction
                    </span>
                </div>
            </div>

            {/* 3 CREATIVE DIRECTION FRAMES */}
            <div className="grid grid-cols-3 gap-3 my-4">
                {/* FRAME 1: REFERENCES */}
                <div className="flex flex-col gap-2">
                    <div className="aspect-video w-full rounded-xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-center relative overflow-hidden p-2">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                            {/* Reference cards */}
                            <rect
                                x="10"
                                y="12"
                                width="24"
                                height="32"
                                rx="3"
                                fill="#27272a"
                                stroke="#3f3f46"
                            />

                            <rect
                                x="38"
                                y="12"
                                width="24"
                                height="32"
                                rx="3"
                                fill="#18181b"
                                stroke="#ea580c"
                            />

                            <rect
                                x="66"
                                y="12"
                                width="24"
                                height="32"
                                rx="3"
                                fill="#27272a"
                                stroke="#3f3f46"
                            />

                            {/* Simple visual elements */}
                            <circle cx="22" cy="27" r="6" fill="#3f3f46" />

                            <rect
                                x="45"
                                y="22"
                                width="10"
                                height="10"
                                rx="2"
                                fill="#ea580c"
                            />

                            <line
                                x1="71"
                                y1="25"
                                x2="82"
                                y2="25"
                                stroke="#71717a"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />

                            <line
                                x1="71"
                                y1="32"
                                x2="79"
                                y2="32"
                                stroke="#52525b"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-neutral-200">
                            References
                        </p>

                        <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                            Explore the visual direction
                        </p>
                    </div>
                </div>

                {/* FRAME 2: COMPOSITION */}
                <div className="flex flex-col gap-2">
                    <div className="aspect-video w-full rounded-xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-center relative overflow-hidden p-2">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                            {/* Composition frame */}
                            <rect
                                x="18"
                                y="10"
                                width="64"
                                height="40"
                                rx="3"
                                fill="#18181b"
                                stroke="#52525b"
                            />

                            {/* Grid */}
                            <line
                                x1="39"
                                y1="10"
                                x2="39"
                                y2="50"
                                stroke="#27272a"
                            />

                            <line
                                x1="61"
                                y1="10"
                                x2="61"
                                y2="50"
                                stroke="#27272a"
                            />

                            <line
                                x1="18"
                                y1="30"
                                x2="82"
                                y2="30"
                                stroke="#27272a"
                            />

                            {/* Product */}
                            <rect
                                x="43"
                                y="19"
                                width="14"
                                height="22"
                                rx="3"
                                fill="#27272a"
                                stroke="#ea580c"
                                strokeWidth="1"
                            />

                            {/* Focus point */}
                            <circle cx="50" cy="30" r="2" fill="#ea580c" />
                        </svg>
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-neutral-200">
                            Composition
                        </p>

                        <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                            Find the right visual balance
                        </p>
                    </div>
                </div>

                {/* FRAME 3: DIRECTION */}
                <div className="flex flex-col gap-2">
                    <div className="aspect-video w-full rounded-xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-center relative overflow-hidden p-2">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                            {/* Final direction preview */}
                            <defs>
                                <radialGradient
                                    id="directionGlow"
                                    cx="50%"
                                    cy="50%"
                                    r="50%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#ea580c"
                                        stopOpacity="0.35"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#ea580c"
                                        stopOpacity="0"
                                    />
                                </radialGradient>
                            </defs>

                            <circle
                                cx="50"
                                cy="30"
                                r="25"
                                fill="url(#directionGlow)"
                            />

                            <rect
                                x="38"
                                y="14"
                                width="24"
                                height="32"
                                rx="5"
                                fill="#27272a"
                                stroke="#71717a"
                            />

                            {/* Highlight */}
                            <path
                                d="M 42 20 C 42 17, 46 16, 50 16"
                                stroke="#ea580c"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                            />

                            {/* Direction arrow */}
                            <path
                                d="M 70 38 L 78 30 L 70 22"
                                stroke="#ea580c"
                                strokeWidth="1.5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-neutral-200">
                            Direction
                        </p>

                        <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                            Define the look and feel
                        </p>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="flex items-center gap-2 border-t border-neutral-800 pt-3 text-[11px] text-neutral-400">
                <span>
                    We explore the direction before building the 3D scene.
                </span>
            </div>
        </div>
    );
}

export default StepIdeaStoryboard;
