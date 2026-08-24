'use client';

import { CheckCircle2 } from 'lucide-react';

export function StepBuildStoryboard() {
    return (
        <div className="w-full bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sm:p-6 text-neutral-200 flex flex-col justify-between shadow-xl">
            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600" />
                    <span className="text-xs font-semibold text-neutral-200 tracking-wide">
                        3D Scene & Production
                    </span>
                </div>

                <span className="text-[11px] font-mono text-neutral-500 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                    Step 2 of 3
                </span>
            </div>

            {/* 3 BUILD FRAMES */}
            <div className="grid grid-cols-3 gap-3 my-4">
                {/* FRAME 1: MODELING */}
                <div className="flex flex-col gap-2">
                    <div className="aspect-video w-full rounded-xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-center relative overflow-hidden p-2">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                            {/* Simple 3D model */}
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

                            {/* Edge highlight */}
                            <path
                                d="M29 18 L29 40"
                                stroke="#ea580c"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>

                        <span className="absolute top-1.5 left-1.5 text-[9px] font-mono text-neutral-400 bg-neutral-900/80 px-1 rounded">
                            01
                        </span>
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-neutral-200">
                            Modeling
                        </p>

                        <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                            Build the product and scene
                        </p>
                    </div>
                </div>

                {/* FRAME 2: MATERIALS */}
                <div className="flex flex-col gap-2">
                    <div className="aspect-video w-full rounded-xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-center relative overflow-hidden p-2">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                            {/* Material spheres */}
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

                            {/* Highlights */}
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

                        <span className="absolute top-1.5 left-1.5 text-[9px] font-mono text-neutral-400 bg-neutral-900/80 px-1 rounded">
                            02
                        </span>
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-neutral-200">
                            Materials
                        </p>

                        <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                            Shape the surface and details
                        </p>
                    </div>
                </div>

                {/* FRAME 3: LIGHTING */}
                <div className="flex flex-col gap-2">
                    <div className="aspect-video w-full rounded-xl bg-neutral-950 border border-neutral-800/90 flex items-center justify-center relative overflow-hidden p-2">
                        <svg viewBox="0 0 100 60" className="w-full h-full">
                            <defs>
                                <radialGradient
                                    id="buildLight"
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

                            {/* Light */}
                            <circle
                                cx="50"
                                cy="28"
                                r="28"
                                fill="url(#buildLight)"
                            />

                            {/* Product */}
                            <rect
                                x="36"
                                y="16"
                                width="28"
                                height="30"
                                rx="5"
                                fill="#27272a"
                                stroke="#71717a"
                            />

                            {/* Light reflection */}
                            <path
                                d="M41 19 L41 41"
                                stroke="#ffffff"
                                strokeWidth="2"
                                opacity="0.35"
                                strokeLinecap="round"
                            />

                            {/* Orange rim */}
                            <path
                                d="M63 20 L63 40"
                                stroke="#ea580c"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>

                        <span className="absolute top-1.5 left-1.5 text-[9px] font-mono text-neutral-400 bg-neutral-900/80 px-1 rounded">
                            03
                        </span>
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-neutral-200">
                            Lighting
                        </p>

                        <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                            Shape the mood and composition
                        </p>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="flex items-center gap-2 border-t border-neutral-800 pt-3 text-[11px] text-neutral-400">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />

                <span>
                    We build and refine the scene before bringing it to motion.
                </span>
            </div>
        </div>
    );
}

export default StepBuildStoryboard;
