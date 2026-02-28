"use client";

import AnimateInView from "./AnimateInView";
import Image from "next/image";

const caseStudies = [
    {
        label: "Client success",
        title: "Scaling a ",
        highlight: "finance channel",
        titleEnd: " with performance edits",
        description:
            "A personal finance creator partnered with us to sharpen pacing, tighten structure, and optimise content for long-form YouTube and short-form distribution.",
        stats: [
            { value: "+187%", label: "Subscriber growth" },
            { value: "2.4M", label: "New views" },
        ],
        image:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=400&fit=crop",
        layout: "left",
    },
    {
        label: "Client success",
        title: "Turning a ",
        highlight: "podcast",
        titleEnd: " into a growth channel",
        description:
            "A weekly podcast partnered with us to transform long-form episodes into short-form clips for TikTok, Reels, and YouTube Shorts—focused on discoverability and consistent output.",
        stats: [
            { value: "+340%", label: "Audience growth" },
            { value: "1.8M", label: "New views" },
        ],
        image:
            "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=500&h=400&fit=crop",
        layout: "right",
    },
];

export default function Results() {
    return (
        <section className="py-24 lg:py-32" id="results">
            <div className="max-w-[1320px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <AnimateInView>
                        <p className="section-label mb-4">Results</p>
                    </AnimateInView>
                    <AnimateInView delay={0.1}>
                        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight max-w-2xl mx-auto">
                            Content outcomes you can actually measure
                        </h2>
                    </AnimateInView>
                </div>

                {/* Case Studies */}
                <div className="space-y-24">
                    {caseStudies.map((study, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${study.layout === "right" ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image */}
                            <AnimateInView
                                delay={0.1}
                                className={study.layout === "right" ? "lg:order-2" : ""}
                            >
                                <div className="bg-bg-card rounded-3xl overflow-hidden border border-border aspect-[5/4] relative">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </AnimateInView>

                            {/* Content */}
                            <AnimateInView
                                delay={0.2}
                                className={study.layout === "right" ? "lg:order-1" : ""}
                            >
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-dark/40 mb-4">
                                        {study.label}
                                    </p>
                                    <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight tracking-tight mb-4">
                                        {study.title}
                                        <span className="text-accent">{study.highlight}</span>
                                        {study.titleEnd}
                                    </h3>
                                    <p className="text-sm text-dark/60 leading-relaxed mb-8 max-w-md">
                                        {study.description}
                                    </p>
                                    <div className="flex items-center gap-12">
                                        {study.stats.map((stat, si) => (
                                            <div key={si}>
                                                <p className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-dark">
                                                    {stat.value}
                                                </p>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-dark/40">
                                                    {stat.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimateInView>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
