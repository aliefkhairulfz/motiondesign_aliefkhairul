'use client';

import { CheckCircle2 } from 'lucide-react';

export function StepMotionStoryboard() {
    return (
        <div className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-6 text-neutral-200 flex flex-col justify-between shadow-xl">
            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600" />
                    <span className="text-xs font-semibold text-neutral-200 tracking-wide">
                        Animation & Final Polish
                    </span>
                </div>

                <span className="text-[11px] font-mono text-neutral-500 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                    Step 3 of 3
                </span>
            </div>

            {/* 3 MOTION FRAMES */}
            <div className="grid grid-cols-3 gap-3 my-4">
                {/* FRAME 1: ANIMATION */}
                <div className="flex flex-col gap-2">
                    <div className="aspect-video w-full rounded-xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-center relative overflow-hidden p-2">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                            {/* Motion path */}
                            <path
                                d="M 18 40 Q 48 10 82 28"
                                fill="none"
                                stroke="#52525b"
                                strokeWidth="1"
                                strokeDasharray="3,2"
                            />

                            {/* Starting position */}
                            <circle
                                cx="18"
                                cy="40"
                                r="4"
                                fill="#27272a"
                                stroke="#52525b"
                            />

                            {/* Moving object */}
                            <circle cx="72" cy="27" r="6" fill="#ea580c" />

                            {/* Motion lines */}
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

                        <span className="absolute top-1.5 left-1.5 text-[9px] font-mono text-neutral-400 bg-neutral-900/80 px-1 rounded">
                            01
                        </span>
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-neutral-200">
                            Animation
                        </p>

                        <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                            Bring the scene to life
                        </p>
                    </div>
                </div>

                {/* FRAME 2: POLISH */}
                <div className="flex flex-col gap-2">
                    <div className="aspect-video w-full rounded-xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-center relative overflow-hidden p-2">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                            <defs>
                                <radialGradient
                                    id="polishGlow"
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

                            {/* Glow */}
                            <circle
                                cx="50"
                                cy="30"
                                r="28"
                                fill="url(#polishGlow)"
                            />

                            {/* Product */}
                            <rect
                                x="37"
                                y="15"
                                width="26"
                                height="30"
                                rx="5"
                                fill="#27272a"
                                stroke="#71717a"
                            />

                            {/* Highlight */}
                            <path
                                d="M42 19 L42 40"
                                stroke="#ffffff"
                                strokeWidth="2"
                                opacity="0.35"
                                strokeLinecap="round"
                            />

                            {/* Orange reflection */}
                            <path
                                d="M61 20 L61 39"
                                stroke="#ea580c"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />

                            {/* Small spark */}
                            <path
                                d="M72 18 L74 22 L78 24 L74 26 L72 30 L70 26 L66 24 L70 22 Z"
                                fill="#ea580c"
                            />
                        </svg>

                        <span className="absolute top-1.5 left-1.5 text-[9px] font-mono text-neutral-400 bg-neutral-900/80 px-1 rounded">
                            02
                        </span>
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-neutral-200">
                            Polish
                        </p>

                        <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                            Refine light, timing, and details
                        </p>
                    </div>
                </div>

                {/* FRAME 3: FINAL */}
                <div className="flex flex-col gap-2">
                    <div className="aspect-video w-full rounded-xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-center relative overflow-hidden p-2">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                            {/* Final video frame */}
                            <rect
                                x="16"
                                y="10"
                                width="68"
                                height="40"
                                rx="4"
                                fill="#18181b"
                                stroke="#3f3f46"
                            />

                            {/* Product */}
                            <rect
                                x="40"
                                y="17"
                                width="20"
                                height="26"
                                rx="4"
                                fill="#27272a"
                                stroke="#71717a"
                            />

                            {/* Final highlight */}
                            <path
                                d="M44 20 L44 38"
                                stroke="#ea580c"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />

                            {/* Play icon */}
                            <circle cx="76" cy="44" r="5" fill="#ea580c" />

                            <polygon
                                points="74,41 74,47 78,44"
                                fill="#ffffff"
                            />
                        </svg>

                        <span className="absolute top-1.5 left-1.5 text-[9px] font-mono text-neutral-400 bg-neutral-900/80 px-1 rounded">
                            03
                        </span>
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-neutral-200">
                            Final
                        </p>

                        <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                            Ready for the final frame
                        </p>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="flex items-center gap-2 border-t border-neutral-800 pt-3 text-[11px] text-neutral-400">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />

                <span>
                    We refine every detail until the motion feels right.
                </span>
            </div>
        </div>
    );
}

export default StepMotionStoryboard;
