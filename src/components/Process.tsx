"use client";

import AnimateInView from "./AnimateInView";

const steps = [
    {
        number: "01",
        title: "Share your footage",
        description:
            "Send raw clips, references, and goals; we review everything with performance in mind before we begin.",
    },
    {
        number: "02",
        title: "We shape the story",
        description:
            "We refine structure, pacing, and visuals to transform your footage into a compelling, high-performing video.",
    },
    {
        number: "03",
        title: "Watch it perform",
        description:
            "You receive a polished, platform-ready video built to drive clicks, engagement, and results today!",
    },
];

export default function Process() {
    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-[1320px] mx-auto px-6">
                {/* Section Header */}
                <AnimateInView>
                    <p className="section-label mb-4">Process</p>
                </AnimateInView>
                <AnimateInView delay={0.1}>
                    <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight max-w-lg mb-16">
                        How we turn content into impact
                    </h2>
                </AnimateInView>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <AnimateInView key={index} delay={0.1 + index * 0.1}>
                            <div className="bg-bg-card rounded-3xl p-8 border border-border hover:shadow-lg transition-all duration-300 h-full group">
                                <div className="text-xs font-bold text-accent mb-6 tracking-wider">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-accent transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-dark/60 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
