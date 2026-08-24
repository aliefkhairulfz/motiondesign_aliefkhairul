'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbTrademark } from 'react-icons/tb';

export function GlobalLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide the loader after a short delay to allow the brand animation to play
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);
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
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-neutral-950 text-neutral-100"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col items-center gap-8"
                    >
                        {/* Logo */}
                        <div className="flex items-start">
                            <span className="text-5xl sm:text-6xl text-red-500 font-bold tracking-tight">
                                RedMotion
                            </span>
                            <TbTrademark className="w-6 h-6 ml-1 mt-1 text-red-500" />
                        </div>
                        
                        {/* Loading indicator (Pulse Dots) */}
                        <div className="flex items-center gap-3">
                            {[0, 1, 2].map((i) => (
                                <motion.div 
                                    key={i}
                                    animate={{ 
                                        scale: [1, 1.5, 1], 
                                        opacity: [0.3, 1, 0.3] 
                                    }}
                                    transition={{ 
                                        repeat: Infinity, 
                                        duration: 1, 
                                        delay: i * 0.2,
                                        ease: "easeInOut"
                                    }}
                                    className="w-2.5 h-2.5 rounded-full bg-neutral-400" 
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
