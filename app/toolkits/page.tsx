'use client';

import { Download, Box, Layers, PlaySquare, Workflow, Zap, Camera, Move3d } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Footer } from '@/components/shared/footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ADDONS = [
    {
        id: 'auto-rigger-lite',
        title: 'Auto Rigger Lite',
        description: 'A simple one-click rigging solution for bipedal characters. Perfect for quick animatics.',
        category: 'Animation',
        downloads: '1.2k',
        icon: <Move3d className="w-8 h-8 text-neutral-700" />,
    },
    {
        id: 'material-library',
        title: 'Essential Materials',
        description: 'A starter pack of 50+ procedural materials including metals, plastics, and woods.',
        category: 'Shading',
        downloads: '3.4k',
        icon: <Layers className="w-8 h-8 text-neutral-700" />,
    },
    {
        id: 'cam-shake',
        title: 'Camera Shake Gen',
        description: 'Add realistic handheld camera movements to your scenes with customizable presets.',
        category: 'Camera',
        downloads: '850',
        icon: <Camera className="w-8 h-8 text-neutral-700" />,
    },
    {
        id: 'lighting-studio',
        title: 'Studio Lighting Setup',
        description: '3 point lighting made easy. Drag and drop studio lighting environments into any scene.',
        category: 'Lighting',
        downloads: '2.1k',
        icon: <Zap className="w-8 h-8 text-neutral-700" />,
    },
    {
        id: 'batch-renderer',
        title: 'Batch Render Toolkit',
        description: 'Queue multiple cameras and view layers to render overnight without manual intervention.',
        category: 'Workflow',
        downloads: '4.5k',
        icon: <Workflow className="w-8 h-8 text-neutral-700" />,
    },
    {
        id: 'asset-browser',
        title: 'Asset Browser Plus',
        description: 'Enhanced tagging and organization for the native Blender Asset Browser.',
        category: 'Workflow',
        downloads: '920',
        icon: <Box className="w-8 h-8 text-neutral-700" />,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

export default function ToolkitsPage() {
    return (
        <main className="min-h-screen bg-neutral-100 text-neutral-950 flex flex-col pt-24 sm:pt-36 overflow-hidden">
            <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-24">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-16 max-w-3xl"
                >
                    <p className="text-neutral-600 text-sm sm:text-base font-medium mb-3 uppercase tracking-widest font-mono">
                        Free Resources
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 mb-6">
                        Toolkits & Addons
                    </h1>
                    <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed">
                        A collection of free Blender tools, scripts, and assets designed to speed up your workflow and help you focus on creating.
                    </p>
                </motion.div>

                {/* Filters / Search Bar (Visual Only) */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-300"
                >
                    <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
                        {['All', 'Animation', 'Shading', 'Camera', 'Lighting', 'Workflow'].map((tag, i) => (
                            <button
                                key={tag}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${i === 0 ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-600 hover:bg-neutral-200'}`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {ADDONS.map((addon) => (
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            key={addon.id}
                            className="group flex flex-col bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-neutral-200/50 hover:border-neutral-300 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-neutral-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                                {addon.icon}
                            </div>
                            
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-2.5 py-1 bg-neutral-100 text-neutral-600 text-xs font-semibold uppercase tracking-wider rounded-md">
                                    {addon.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-neutral-900 mb-3">
                                {addon.title}
                            </h3>
                            
                            <p className="text-neutral-600 text-sm leading-relaxed mb-8 flex-1">
                                {addon.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-100">
                                <span className="text-xs font-medium text-neutral-400">
                                    {addon.downloads} downloads
                                </span>
                                <Button 
                                    variant="outline" 
                                    className="gap-2 bg-transparent border-neutral-300 text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-colors rounded-xl"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Free
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
