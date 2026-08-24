'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'What can you create?',
        answer: 'I create 3D product visuals, motion design, and short-form animations designed to make your product or idea stand out.'
    },
    {
        question: 'How much does it cost?',
        answer: "Every project is different. Pricing depends on the scope, complexity, and final deliverables. Get in touch and I'll help you find the right approach."
    },
    {
        question: 'How long does it take?',
        answer: 'Most projects take around 1–3 weeks, depending on the complexity, number of shots, and revision process.'
    },
    {
        question: 'Can you work with our assets?',
        answer: "Absolutely. You can provide your existing 3D models, brand assets, references, or other materials. I'll work with what you have."
    },
    {
        question: 'What do you need to get started?',
        answer: "A brief, your goals, references, and any available assets are a great start. From there, we'll shape the visual direction together."
    },
    {
        question: 'Can you help with the concept?',
        answer: "Yes. If you already have a clear direction, I'll bring it to life. If you only have an idea, I can help develop it into a visual concept."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="w-full py-24 sm:py-32">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="mb-16 sm:mb-24 flex flex-col gap-4"
                >
                    <span className="text-xs sm:text-sm font-mono font-bold text-neutral-400 uppercase tracking-widest">
                        FAQ
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950">
                        A few things you might want to know.
                    </h2>
                </motion.div>

                {/* Accordion */}
                <div className="flex flex-col border-t border-neutral-300">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.5,
                                delay: idx * 0.1,
                                ease: 'easeOut'
                            }}
                            className="border-b border-neutral-300"
                        >
                            <button
                                onClick={() => toggle(idx)}
                                className="w-full flex items-center justify-between py-6 sm:py-8 text-left group focus:outline-none"
                            >
                                <span className="text-xl sm:text-2xl font-semibold text-neutral-900 group-hover:text-orange-600 transition-colors duration-300">
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{
                                        rotate: openIndex === idx ? 45 : 0
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: 'easeInOut'
                                    }}
                                    className="ml-4 flex-shrink-0 text-neutral-400 group-hover:text-orange-600 transition-colors duration-300 text-3xl font-light leading-none"
                                >
                                    +
                                </motion.span>
                            </button>
                            <AnimatePresence initial={false}>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: 'easeInOut'
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 text-lg sm:text-xl text-neutral-600 leading-relaxed pr-8 sm:pr-12">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
