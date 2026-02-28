"use client";

import { Check } from "lucide-react";
import AnimateInView from "./AnimateInView";

const plans = [
    {
        name: "Ignite",
        price: "$650",
        period: "",
        description: "Best for one-off videos & first-time clients",
        features: [
            "1 fully edited, platform-ready video",
            "Professional color grading",
            "Up to 2 revision rounds",
            "3–5 day turnaround",
        ],
        cta: "Start your project",
        ctaLink: "#contact",
        highlighted: false,
    },
    {
        name: "Momentum",
        price: "$1,250",
        period: "/m",
        description: "Built for creators and small brands posting regularly.",
        features: [
            "Up to 6 edited videos per month",
            "Short-form + long-form",
            "Platform-native optimization",
            "Up to 3 revision rounds per video",
        ],
        cta: "Start growing",
        ctaLink: "#contact",
        highlighted: true,
    },
    {
        name: "Velocity",
        price: "$2,450",
        period: "/m",
        description:
            "Designed for brands, podcasts & agencies that rely on content.",
        features: [
            "Up to 12 edited videos per month",
            "Multi-platform delivery",
            "Unlimited revisions",
            "Dedicated editor & priority delivery",
        ],
        cta: "Book a call",
        ctaLink: "#contact",
        highlighted: false,
    },
];

export default function Pricing() {
    return (
        <section className="py-24 lg:py-32" id="pricing">
            <div className="max-w-[1320px] mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <AnimateInView>
                        <p className="section-label mb-4">Pricing</p>
                    </AnimateInView>
                    <AnimateInView delay={0.1}>
                        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight max-w-2xl mx-auto">
                            Find the right plan for your content
                        </h2>
                    </AnimateInView>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan, index) => (
                        <AnimateInView key={index} delay={0.1 + index * 0.1}>
                            <div
                                className={`rounded-3xl p-8 border h-full flex flex-col transition-all duration-300 hover:shadow-xl ${plan.highlighted
                                        ? "bg-dark text-white border-dark"
                                        : "bg-white border-border"
                                    }`}
                            >
                                {/* Plan name */}
                                <p
                                    className={`text-sm font-semibold mb-6 ${plan.highlighted ? "text-white/60" : "text-dark/40"
                                        }`}
                                >
                                    {plan.name}
                                </p>

                                {/* Price */}
                                <div className="mb-2">
                                    <span className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-tight">
                                        {plan.price}
                                    </span>
                                    {plan.period && (
                                        <span
                                            className={`text-lg ${plan.highlighted ? "text-white/60" : "text-dark/40"
                                                }`}
                                        >
                                            {plan.period}
                                        </span>
                                    )}
                                </div>

                                {/* Description */}
                                <p
                                    className={`text-sm mb-8 ${plan.highlighted ? "text-white/60" : "text-dark/60"
                                        }`}
                                >
                                    {plan.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feature, fi) => (
                                        <li key={fi} className="flex items-start gap-3">
                                            <Check
                                                size={16}
                                                className={`flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-white/60" : "text-accent"
                                                    }`}
                                            />
                                            <span
                                                className={`text-sm ${plan.highlighted ? "text-white/80" : "text-dark/70"
                                                    }`}
                                            >
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href={plan.ctaLink}
                                    className={`w-full py-3.5 rounded-xl text-sm font-medium text-center transition-all duration-200 block ${plan.highlighted
                                            ? "bg-white text-dark hover:bg-white/90"
                                            : "bg-dark text-white hover:bg-dark/90"
                                        }`}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
