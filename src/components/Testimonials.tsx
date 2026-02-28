"use client";

import AnimateInView from "./AnimateInView";
import Marquee from "./Marquee";
import Image from "next/image";

const testimonialsRow1 = [
    {
        name: "Evelyn",
        text: "Their editing elevated our brand and helped every video perform noticeably better overall.",
        avatar: "https://i.pravatar.cc/80?img=1",
    },
    {
        name: "Eniola",
        text: "This team refined our footage into content that finally feels polished, impactful, and built to win.",
        avatar: "https://i.pravatar.cc/80?img=2",
    },
    {
        name: "Billy",
        text: "Our videos now carry real momentum and clarity thanks to their sharp pacing and creative direction.",
        avatar: "https://i.pravatar.cc/80?img=3",
    },
    {
        name: "Rashane",
        text: "Working with them improved retention, lifted engagement, and made our content feel truly premium.",
        avatar: "https://i.pravatar.cc/80?img=4",
    },
];

const testimonialsRow2 = [
    {
        name: "Abel",
        text: "The team brought clarity, energy, and structure to our footage, making every clip more engaging.",
        avatar: "https://i.pravatar.cc/80?img=5",
    },
    {
        name: "Daniel",
        text: "Their pacing and storytelling transformed our videos into content that viewers actually finish watching.",
        avatar: "https://i.pravatar.cc/80?img=6",
    },
    {
        name: "Arya",
        text: "Every project feels expertly executed, and our analytics immediately improved after we partnered.",
        avatar: "https://i.pravatar.cc/80?img=7",
    },
    {
        name: "Lena",
        text: "They understand modern platforms deeply; our content finally looks and performs the way it should.",
        avatar: "https://i.pravatar.cc/80?img=8",
    },
];

const testimonialsRow3 = [
    {
        name: "Jason",
        text: "They turned simple clips into high-performing videos that consistently drive stronger results for us.",
        avatar: "https://i.pravatar.cc/80?img=9",
    },
    {
        name: "Janice",
        text: "Our content finally feels intentional and dynamic, with edits that hold attention from the first second.",
        avatar: "https://i.pravatar.cc/80?img=11",
    },
    {
        name: "Eva",
        text: "Their process is smooth, fast, and reliable—every deliverable feels crafted with real precision.",
        avatar: "https://i.pravatar.cc/80?img=12",
    },
    {
        name: "Rebecca",
        text: "We've never had content perform this well before; their editing genuinely elevated our brand voice.",
        avatar: "https://i.pravatar.cc/80?img=13",
    },
];

function TestimonialCard({
    name,
    text,
    avatar,
}: {
    name: string;
    text: string;
    avatar: string;
}) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-border min-w-[320px] max-w-[380px] mx-3 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                        src={avatar}
                        alt={name}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div>
                    <p className="text-sm font-semibold text-dark">{name}</p>
                    <span className="text-xs text-dark/40">•</span>
                </div>
            </div>
            <p className="text-sm text-dark/70 leading-relaxed">{text}</p>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="py-24 lg:py-32" id="testimonials">
            <div className="max-w-[1320px] mx-auto px-6 mb-12">
                <div className="flex items-end justify-between">
                    <div>
                        <AnimateInView>
                            <p className="section-label mb-4">Testimonials</p>
                        </AnimateInView>
                        <AnimateInView delay={0.1}>
                            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight max-w-2xl">
                                Trusted by creators and teams
                            </h2>
                        </AnimateInView>
                    </div>
                    <AnimateInView delay={0.2}>
                        <a
                            href="#contact"
                            className="hidden md:flex items-center gap-2 px-6 py-3 bg-dark text-white text-sm font-medium rounded-xl hover:bg-dark/90 transition-all duration-200"
                        >
                            Level up your content
                        </a>
                    </AnimateInView>
                </div>
            </div>

            {/* Row 1 - Left */}
            <div className="mb-4">
                <Marquee speed="normal" pauseOnHover>
                    <div className="flex">
                        {testimonialsRow1.map((t, i) => (
                            <TestimonialCard key={i} {...t} />
                        ))}
                    </div>
                </Marquee>
            </div>

            {/* Row 2 - Right */}
            <div className="mb-4">
                <Marquee direction="right" speed="normal" pauseOnHover>
                    <div className="flex">
                        {testimonialsRow2.map((t, i) => (
                            <TestimonialCard key={i} {...t} />
                        ))}
                    </div>
                </Marquee>
            </div>

            {/* Row 3 - Left */}
            <div>
                <Marquee speed="slow" pauseOnHover>
                    <div className="flex">
                        {testimonialsRow3.map((t, i) => (
                            <TestimonialCard key={i} {...t} />
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
}
