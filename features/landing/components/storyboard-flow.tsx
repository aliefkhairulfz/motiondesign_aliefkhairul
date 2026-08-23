'use client';

import { cn } from '@/lib/utils';
import {
    Background,
    Controls,
    Edge,
    Handle,
    Node,
    Position,
    ReactFlow,
    ReactFlowProvider,
    useEdgesState,
    useNodesState,
    useReactFlow
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { ArrowRight, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

// Minimal Spec Node Component
function SpecNode({
    data
}: {
    data: { title: string; stages: { num: string; text: string }[] };
}) {
    return (
        <div className="w-[175px] sm:w-[185px] bg-neutral-900/90 border border-neutral-800 rounded-lg p-2.5 text-neutral-300 text-[11px]">
            <p className="text-xs font-semibold text-neutral-200 mb-2 pb-1 border-b border-neutral-800">
                {data.title}
            </p>
            <div className="flex flex-col gap-1">
                {data.stages.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 py-0.5">
                        <span className="text-[9px] font-mono text-neutral-500">
                            {s.num}
                        </span>
                        <span className="text-[10px] text-neutral-400 truncate">
                            {s.text}
                        </span>
                    </div>
                ))}
            </div>
            <Handle
                type="source"
                position={Position.Right}
                className="!bg-neutral-600 !w-1 !h-1 !border-none"
            />
        </div>
    );
}

// Minimal Frame Node Component
function FrameNode({
    data
}: {
    data: { num: string; title: string; desc: string; img: string };
}) {
    return (
        <div className="w-[135px] sm:w-[145px] bg-neutral-900/90 border border-neutral-800 rounded-lg overflow-hidden p-1.5 group cursor-grab active:cursor-grabbing">
            <Handle
                type="target"
                position={Position.Left}
                className="!bg-neutral-600 !w-1 !h-1 !border-none"
            />
            <Handle
                type="target"
                position={Position.Top}
                id="top"
                className="!bg-neutral-600 !w-1 !h-1 !border-none"
            />

            {/* Image Frame */}
            <div className="relative aspect-video w-full rounded bg-neutral-950 overflow-hidden mb-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={data.img}
                    alt={data.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Frame Title & Caption */}
            <div className="px-0.5 pb-0.5">
                <p className="text-[11px] font-medium text-neutral-200 truncate">
                    <span className="font-mono text-neutral-500 mr-1">
                        {data.num}
                    </span>
                    {data.title}
                </p>
                <p className="text-[9px] text-neutral-500 leading-tight mt-0.5 line-clamp-1">
                    {data.desc}
                </p>
            </div>

            <Handle
                type="source"
                position={Position.Right}
                className="!bg-neutral-600 !w-1 !h-1 !border-none"
            />
            <Handle
                type="source"
                position={Position.Bottom}
                id="bottom"
                className="!bg-neutral-600 !w-1 !h-1 !border-none"
            />
        </div>
    );
}

const initialNodes: Node[] = [
    {
        id: 'spec-1',
        type: 'specNode',
        position: { x: 0, y: -10 },
        data: {
            title: 'Pipeline Overview',
            stages: [
                { num: '01', text: 'Storyboarding' },
                { num: '02', text: 'Reference' },
                { num: '03', text: 'Modeling' },
                { num: '04', text: 'Animation / Motion' },
                { num: '05', text: 'Rendering' },
                { num: '06', text: 'Post-Processing' },
                { num: '07', text: 'Video Editing' },
                { num: '08', text: 'Sound Design' }
            ]
        }
    },
    // Row 1: Stages 01 - 04
    {
        id: 'step-1',
        type: 'frameNode',
        position: { x: 235, y: -25 },
        data: {
            num: '01',
            title: 'Storytelling',
            desc: 'Script & structure',
            img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&auto=format&fit=crop&q=80'
        }
    },
    {
        id: 'step-2',
        type: 'frameNode',
        position: { x: 405, y: -25 },
        data: {
            num: '02',
            title: 'Reference',
            desc: 'Moodboard & lighting',
            img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&auto=format&fit=crop&q=80'
        }
    },
    {
        id: 'step-3',
        type: 'frameNode',
        position: { x: 575, y: -25 },
        data: {
            num: '03',
            title: '3D Modeling',
            desc: 'CAD & mesh topology',
            img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&auto=format&fit=crop&q=80'
        }
    },
    {
        id: 'step-4',
        type: 'frameNode',
        position: { x: 745, y: -25 },
        data: {
            num: '04',
            title: 'Animation / Motion',
            desc: 'Camera kinetics & moves',
            img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&auto=format&fit=crop&q=80'
        }
    },
    // Row 2: Stages 05 - 08
    {
        id: 'step-5',
        type: 'frameNode',
        position: { x: 235, y: 165 },
        data: {
            num: '05',
            title: 'Rendering',
            desc: 'Shaders & studio light',
            img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=80'
        }
    },
    {
        id: 'step-6',
        type: 'frameNode',
        position: { x: 405, y: 165 },
        data: {
            num: '06',
            title: 'Post-Processing',
            desc: 'Color grading & bloom',
            img: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&auto=format&fit=crop&q=80'
        }
    },
    {
        id: 'step-7',
        type: 'frameNode',
        position: { x: 575, y: 165 },
        data: {
            num: '07',
            title: 'Video Editing',
            desc: 'Dynamic cut & rhythm',
            img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&auto=format&fit=crop&q=80'
        }
    },
    {
        id: 'step-8',
        type: 'frameNode',
        position: { x: 745, y: 165 },
        data: {
            num: '08',
            title: 'Sound Design',
            desc: 'Foley, risers & mix',
            img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&auto=format&fit=crop&q=80'
        }
    }
];

const initialEdges: Edge[] = [
    {
        id: 'e-spec-1',
        source: 'spec-1',
        target: 'step-1',
        style: { stroke: '#52525b', strokeWidth: 1 }
    },
    {
        id: 'e1-2',
        source: 'step-1',
        target: 'step-2',
        style: { stroke: '#52525b', strokeWidth: 1 }
    },
    {
        id: 'e2-3',
        source: 'step-2',
        target: 'step-3',
        style: { stroke: '#52525b', strokeWidth: 1 }
    },
    {
        id: 'e3-4',
        source: 'step-3',
        target: 'step-4',
        style: { stroke: '#52525b', strokeWidth: 1 }
    },
    {
        id: 'e4-5',
        source: 'step-4',
        target: 'step-5',
        type: 'smoothstep',
        style: { stroke: '#52525b', strokeWidth: 1 }
    },
    {
        id: 'e5-6',
        source: 'step-5',
        target: 'step-6',
        style: { stroke: '#52525b', strokeWidth: 1 }
    },
    {
        id: 'e6-7',
        source: 'step-6',
        target: 'step-7',
        style: { stroke: '#52525b', strokeWidth: 1 }
    },
    {
        id: 'e7-8',
        source: 'step-7',
        target: 'step-8',
        style: { stroke: '#52525b', strokeWidth: 1 }
    }
];

function StoryboardFlowContent() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const { fitView } = useReactFlow();
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    // Escape key listener to exit fullscreen
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsFullscreen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Prevent body scrolling when in fullscreen and re-fit view
    useEffect(() => {
        if (isFullscreen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        const timer = setTimeout(() => {
            fitView({ padding: isFullscreen ? 0.2 : 0.16, duration: 400 });
        }, 100);

        return () => {
            document.body.style.overflow = '';
            clearTimeout(timer);
        };
    }, [isFullscreen, fitView]);

    const nodeTypes = useMemo(
        () => ({
            specNode: SpecNode,
            frameNode: FrameNode
        }),
        []
    );

    return (
        <div
            className={cn(
                'transition-all duration-300 bg-[#0e0e11] overflow-hidden',
                isFullscreen
                    ? 'fixed inset-0 z-[9999] w-screen h-screen'
                    : 'relative w-full h-[380px] sm:h-[420px] md:h-[460px] border border-neutral-800/80 rounded-3xl shadow-2xl'
            )}
        >
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{ padding: 0.16 }}
                minZoom={0.2}
                maxZoom={1.5}
                proOptions={{ hideAttribution: true }}
                className="bg-[#0e0e11]"
            >
                <Background color="#27272a" gap={18} size={1} />
                <Controls
                    showInteractive={false}
                    className="!bg-neutral-900/90 !border-neutral-800 !rounded-lg !fill-neutral-400 [&>button]:!border-neutral-800 [&>button]:!bg-transparent hover:[&>button]:!bg-neutral-800"
                />
            </ReactFlow>

            {/* Bottom Overlay Link (When not in fullscreen) */}
            {!isFullscreen && (
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 pointer-events-auto">
                    <button
                        type="button"
                        onClick={() => setIsFullscreen(true)}
                        className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-400 hover:text-neutral-200 bg-neutral-900/80 backdrop-blur-md px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-all shadow-lg group cursor-pointer"
                    >
                        <span>View storyboard</span>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            )}

            {/* Fullscreen Controls (When in fullscreen) */}
            {isFullscreen && (
                <>
                    {/* Top Left Studio Info */}
                    <div className="fixed top-5 left-5 sm:top-6 sm:left-6 z-[10000] flex items-center gap-2 bg-neutral-900/90 backdrop-blur-xl px-3.5 py-2 rounded-lg border border-neutral-800 text-neutral-300 text-xs font-medium shadow-2xl pointer-events-auto">
                        <span className="font-semibold text-neutral-200">
                            Storyboard
                        </span>
                        <span className="text-neutral-500">• 8 Stages</span>
                    </div>

                    {/* Bottom Right Action Buttons */}
                    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[10000] flex items-center gap-2.5 pointer-events-auto">
                        <button
                            type="button"
                            onClick={() =>
                                fitView({ padding: 0.2, duration: 400 })
                            }
                            className="hidden sm:flex items-center gap-1 text-xs text-neutral-400 hover:text-neutral-200 bg-neutral-900/90 backdrop-blur-xl px-3.5 py-2 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-all shadow-xl cursor-pointer"
                        >
                            Reset View
                        </button>

                        <button
                            type="button"
                            onClick={() => setIsFullscreen(false)}
                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-200 hover:bg-white text-neutral-950 font-medium text-xs transition-all shadow-xl cursor-pointer active:scale-95 group"
                            aria-label="Exit Fullscreen"
                        >
                            <span>Exit Fullscreen</span>
                            <X className="w-3.5 h-3.5 text-neutral-700 group-hover:text-neutral-950" />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export function StoryboardFlow() {
    return (
        <ReactFlowProvider>
            <StoryboardFlowContent />
        </ReactFlowProvider>
    );
}

export default StoryboardFlow;
