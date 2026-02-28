"use client";

import AnimateInView from "./AnimateInView";
import Image from "next/image";

const services = [
    {
        title: "Long-form content",
        description: "Structured for retention, clarity, and watch-time growth.",
        image:
            "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
        size: "large",
    },
    {
        title: "Short-form edits",
        description: "Built to stop the scroll and multiply engagement.",
        image:
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
        size: "large",
    },
    {
        title: "Thumbnails",
        description:
            "Creating high-quality visuals as clicks starts before the video plays.",
        image:
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=300&fit=crop",
        size: "small",
    },
    {
        title: "Color grading",
        description:
            "Adjusting colors to make your videos more attractive to view.",
        image:
            "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
        size: "small",
    },
];

export default function Services() {
    return (
        <section className="py-24 lg:py-32" id="services">
            <div className="max-w-[1320px] mx-auto px-6">
                {/* Section Header */}
                <AnimateInView>
                    <p className="section-label mb-4">Services</p>
                </AnimateInView>
                <AnimateInView delay={0.1}>
                    <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight max-w-lg mb-12">
                        Everything you need to scale your content
                    </h2>
                </AnimateInView>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Long-form - spans 2 cols */}
                    <AnimateInView delay={0.15} className="lg:col-span-2">
                        <div className="group relative bg-bg-card rounded-3xl overflow-hidden border border-border h-[360px] hover:shadow-lg transition-all duration-300 cursor-pointer">
                            <Image
                                src={services[0].image}
                                alt={services[0].title}
                                fill
                                className="object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {services[0].title}
                                </h3>
                                <p className="text-sm text-white/70">
                                    {services[0].description}
                                </p>
                            </div>
                        </div>
                    </AnimateInView>

                    {/* Short-form - spans 2 cols */}
                    <AnimateInView delay={0.2} className="lg:col-span-2">
                        <div className="group relative bg-bg-card rounded-3xl overflow-hidden border border-border h-[360px] hover:shadow-lg transition-all duration-300 cursor-pointer">
                            <Image
                                src={services[1].image}
                                alt={services[1].title}
                                fill
                                className="object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {services[1].title}
                                </h3>
                                <p className="text-sm text-white/70">
                                    {services[1].description}
                                </p>
                            </div>
                        </div>
                    </AnimateInView>

                    {/* Thumbnails */}
                    <AnimateInView delay={0.25} className="lg:col-span-2">
                        <div className="group relative bg-bg-card rounded-3xl overflow-hidden border border-border h-[260px] hover:shadow-lg transition-all duration-300 cursor-pointer">
                            <Image
                                src={services[2].image}
                                alt={services[2].title}
                                fill
                                className="object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-lg font-bold text-white mb-1">
                                    {services[2].title}
                                </h3>
                                <p className="text-sm text-white/60">
                                    {services[2].description}
                                </p>
                            </div>
                        </div>
                    </AnimateInView>

                    {/* Color grading */}
                    <AnimateInView delay={0.3} className="lg:col-span-2">
                        <div className="group relative bg-bg-card rounded-3xl overflow-hidden border border-border h-[260px] hover:shadow-lg transition-all duration-300 cursor-pointer">
                            <Image
                                src={services[3].image}
                                alt={services[3].title}
                                fill
                                className="object-cover opacity-70 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-lg font-bold text-white mb-1">
                                    {services[3].title}
                                </h3>
                                <p className="text-sm text-white/60">
                                    {services[3].description}
                                </p>
                            </div>
                        </div>
                    </AnimateInView>
                </div>
            </div>
        </section>
    );
}
