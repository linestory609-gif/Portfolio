"use client";

import { ExternalLink } from "lucide-react";
import AnimateInView from "./AnimateInView";
import Image from "next/image";

const teamMembers = [
    {
        name: "Ivan Salik",
        role: "Creative Director",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
        link: "#",
    },
    {
        name: "Zara Hassan",
        role: "Senior Editor",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
        link: "#",
    },
    {
        name: "Sofia Alvarez",
        role: "Motion Designer",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
        link: "#",
    },
    {
        name: "Chloe Belle",
        role: "Client Manager",
        image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop",
        link: "#",
    },
];

export default function Team() {
    return (
        <section className="py-24 lg:py-32">
            <div className="max-w-[1320px] mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <AnimateInView>
                            <p className="section-label mb-4">Team</p>
                        </AnimateInView>
                        <AnimateInView delay={0.1}>
                            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight tracking-tight max-w-md">
                                Meet the team powering every edit
                            </h2>
                        </AnimateInView>
                    </div>
                    <AnimateInView delay={0.2}>
                        <a
                            href="#"
                            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-dark text-sm font-medium rounded-xl border border-border hover:shadow-md transition-all duration-200"
                        >
                            Join the team
                        </a>
                    </AnimateInView>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {teamMembers.map((member, index) => (
                        <AnimateInView key={index} delay={0.1 + index * 0.08}>
                            <a
                                href={member.link}
                                className="group relative rounded-3xl overflow-hidden aspect-square cursor-pointer block"
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ExternalLink size={16} className="text-white" />
                                </div>
                                <div className="absolute bottom-5 left-5 right-5">
                                    <h3 className="text-base font-bold text-white">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs text-white/70">{member.role}</p>
                                </div>
                            </a>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
