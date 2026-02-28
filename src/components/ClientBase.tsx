"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import AnimateInView from "./AnimateInView";
import Image from "next/image";

const clients = [
    {
        title: "Content Creators",
        description:
            "Creators building audiences across YouTube, TikTok, and Reels.",
        image:
            "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=500&fit=crop",
    },
    {
        title: "Personal Brands",
        description:
            "Founders, coaches, and operators growing through content.",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    },
    {
        title: "DTC Brands",
        description:
            "Ecommerce brands scaling with performance-driven video.",
        image:
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=500&fit=crop",
    },
    {
        title: "Podcast Hosts",
        description:
            "Long-form creators turning episodes into viral clips.",
        image:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=500&fit=crop",
    },
];

export default function ClientBase() {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 3;

    const next = () => {
        setStartIndex((prev) => (prev + 1) % clients.length);
    };

    const prev = () => {
        setStartIndex((prev) => (prev - 1 + clients.length) % clients.length);
    };

    const getVisibleClients = () => {
        const result = [];
        for (let i = 0; i < visibleCount; i++) {
            result.push(clients[(startIndex + i) % clients.length]);
        }
        return result;
    };

    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-[1320px] mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <AnimateInView>
                            <p className="section-label mb-4">Client base</p>
                        </AnimateInView>
                        <AnimateInView delay={0.1}>
                            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight max-w-lg">
                                Built for those who value content as a result-driver
                            </h2>
                        </AnimateInView>
                    </div>
                    <AnimateInView delay={0.2}>
                        <a
                            href="#contact"
                            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-dark text-sm font-medium rounded-xl border border-border hover:shadow-md transition-all duration-200"
                        >
                            <Phone size={14} />
                            Book a call
                        </a>
                    </AnimateInView>
                </div>

                {/* Carousel */}
                <AnimateInView delay={0.2}>
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden">
                            <AnimatePresence mode="popLayout">
                                {getVisibleClients().map((client, i) => (
                                    <motion.div
                                        key={`${client.title}-${startIndex}-${i}`}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                        className="group relative rounded-3xl overflow-hidden h-[380px] cursor-pointer"
                                    >
                                        <Image
                                            src={client.image}
                                            alt={client.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <h3 className="text-lg font-bold text-white mb-1">
                                                {client.title}
                                            </h3>
                                            <p className="text-sm text-white/70">
                                                {client.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Navigation arrows */}
                        <div className="flex items-center gap-2 mt-6">
                            <button
                                onClick={prev}
                                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-dark/80 transition-colors"
                            >
                                <ChevronLeft size={16} className="text-white" />
                            </button>
                            <button
                                onClick={next}
                                className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-dark/80 transition-colors"
                            >
                                <ChevronRight size={16} className="text-white" />
                            </button>
                        </div>
                    </div>
                </AnimateInView>
            </div>
        </section>
    );
}
