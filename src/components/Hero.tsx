"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Marquee from "./Marquee";
import AnimateInView from "./AnimateInView";
import Image from "next/image";

const trustReviews = [
    "They understand pacing better than any team!",
    "Their edits doubled our watch time in weeks flat!",
    "Best creative partner we have worked with today!",
    "Our content finally looks premium and sharp now!",
];

export default function Hero() {
    return (
        <section className="relative min-h-screen hero-gradient pt-[72px]" id="about">
            <div className="max-w-[1320px] mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 pt-8">
                        {/* Badge */}
                        <AnimateInView delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 w-fit">
                                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse-dot" />
                                <span className="text-xs font-semibold uppercase tracking-wider text-dark/70">
                                    3 spots left for june
                                </span>
                            </div>
                        </AnimateInView>

                        {/* Headline */}
                        <AnimateInView delay={0.2}>
                            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-dark">
                                Turning raw footage into impactful results
                            </h1>
                        </AnimateInView>

                        {/* Subtext */}
                        <AnimateInView delay={0.3}>
                            <p className="text-base text-dark/60 max-w-md leading-relaxed">
                                We turn ideas into polished videos that feel intentional,
                                fast-paced, and impossible to click away from.
                            </p>
                        </AnimateInView>

                        {/* CTAs */}
                        <AnimateInView delay={0.4}>
                            <div className="flex items-center gap-3 flex-wrap">
                                <a
                                    href="#contact"
                                    className="px-6 py-3.5 bg-dark text-white text-sm font-medium rounded-xl hover:bg-dark/90 transition-all duration-200 hover:shadow-lg"
                                >
                                    Transform my videos
                                </a>
                                <a
                                    href="#showreel"
                                    className="px-6 py-3.5 bg-transparent text-dark text-sm font-medium rounded-xl border border-dark/20 hover:border-dark/40 transition-all duration-200 flex items-center gap-2"
                                >
                                    <Play size={16} fill="currentColor" />
                                    View showreel
                                </a>
                            </div>
                        </AnimateInView>
                    </div>

                    {/* Right - Image Card */}
                    <AnimateInView delay={0.3} y={40}>
                        <div className="relative">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-white/60">
                                <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-100 to-gray-200">
                                    <Image
                                        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=450&fit=crop"
                                        alt="Video editing showcase"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Slider controls */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                                        <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors">
                                            <ChevronLeft size={14} />
                                        </button>
                                        <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors">
                                            <ChevronRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Dot indicator */}
                            <div className="flex justify-center mt-4">
                                <div className="w-3 h-3 rounded-full bg-accent" />
                            </div>
                        </div>
                    </AnimateInView>
                </div>
            </div>

            {/* Trust Bar / Marquee */}
            <div className="mt-8 border-t border-dark/10 py-6">
                <div className="max-w-[1320px] mx-auto px-6 mb-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-dark/60 uppercase tracking-wider">
                        <span>Rated</span>
                        <span>Excellent: 5/5</span>
                    </div>
                </div>
                <Marquee speed="normal" pauseOnHover>
                    <div className="flex items-center gap-12 px-6">
                        {trustReviews.map((review, i) => (
                            <div key={i} className="flex items-center gap-4 min-w-max">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden flex-shrink-0">
                                    <Image
                                        src={`https://i.pravatar.cc/80?img=${i + 10}`}
                                        alt="Reviewer"
                                        width={40}
                                        height={40}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, j) => (
                                        <Star
                                            key={j}
                                            size={14}
                                            fill="#E8613A"
                                            className="text-accent"
                                        />
                                    ))}
                                </div>
                                <p className="text-sm font-medium text-dark/80 max-w-[300px]">
                                    {review}
                                </p>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
}
