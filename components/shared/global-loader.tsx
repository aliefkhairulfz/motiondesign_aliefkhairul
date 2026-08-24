'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbTrademark } from 'react-icons/tb';

export function GlobalLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Extended delay to allow the cinematic animation to play out
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2600);
        return () => clearTimeout(timer);
    }, []);

    // Prevent scrolling while loading
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="global-loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-neutral-950 overflow-hidden"
                >
                    {/* Background Ambient Glow */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.15 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-600 via-neutral-950 to-neutral-950"
                    />

                    <div className="flex flex-col items-center gap-6 relative z-10">
                        {/* Typography */}
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="flex items-start">
                                <motion.span
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                        filter: 'blur(10px)'
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        filter: 'blur(0px)'
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        ease: 'easeOut'
                                    }}
                                    className="text-6xl sm:text-8xl bg-gradient-to-br from-orange-400 via-red-500 to-red-700 bg-clip-text text-transparent font-black tracking-tighter"
                                >
                                    Effectt
                                </motion.span>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0,
                                        rotate: -45
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0
                                    }}
                                    transition={{
                                        delay: 0.4,
                                        duration: 0.5,
                                        type: 'spring'
                                    }}
                                >
                                    <TbTrademark className="w-6 h-6 sm:w-8 sm:h-8 ml-1 mt-2 text-red-600" />
                                </motion.div>
                            </div>

                            <div className="relative w-full flex items-center justify-center">
                                <motion.div
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    animate={{ opacity: 1, scaleX: 1 }}
                                    transition={{
                                        delay: 0.6,
                                        duration: 0.8,
                                        ease: 'easeInOut'
                                    }}
                                    className="absolute h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent w-full max-w-[200px]"
                                />
                            </div>

                            <motion.span
                                initial={{
                                    opacity: 0,
                                    y: -10,
                                    filter: 'blur(5px)'
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: 'blur(0px)'
                                }}
                                transition={{
                                    delay: 0.8,
                                    duration: 0.6,
                                    ease: 'easeOut'
                                }}
                                className="text-neutral-300 uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm font-semibold mt-2"
                            >
                                Visual Narratives
                            </motion.span>
                        </div>

                        {/* Loading indicator (Cinematic dots) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                            className="flex items-center gap-3 mt-4"
                        >
                            {[0, 1, 2].map(i => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.3, 1, 0.3]
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1.5,
                                        delay: i * 0.2,
                                        ease: 'easeInOut'
                                    }}
                                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
