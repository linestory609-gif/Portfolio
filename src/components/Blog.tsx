"use client";

import AnimateInView from "./AnimateInView";
import Image from "next/image";

const blogPosts = [
    {
        title: "The simple framework behind scroll-stopping hooks",
        description:
            "A breakdown of the hook formulas used by top creators to win the first three seconds and boost retention instantly.",
        author: "Chloe Belle",
        category: "Content Strategy",
        image:
            "https://images.unsplash.com/photo-1618609378039-b572f64c5b42?w=500&h=300&fit=crop",
        link: "#",
    },
    {
        title: "Why pacing matters more than fancy video effects",
        description:
            "Discover why strong pacing outperforms flashy edits, and how creators can hold attention from the very first second.",
        author: "Ivan Salik",
        category: "Editing & Craft",
        image:
            "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
        link: "#",
    },
];

export default function Blog() {
    return (
        <section className="py-24 lg:py-32" id="blog">
            <div className="max-w-[1320px] mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <AnimateInView>
                            <p className="section-label mb-4">Blog</p>
                        </AnimateInView>
                        <AnimateInView delay={0.1}>
                            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight tracking-tight max-w-lg">
                                Creative insights to improve your content
                            </h2>
                        </AnimateInView>
                    </div>
                    <AnimateInView delay={0.2}>
                        <a
                            href="#"
                            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-dark text-sm font-medium rounded-xl border border-border hover:shadow-md transition-all duration-200"
                        >
                            View more
                        </a>
                    </AnimateInView>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogPosts.map((post, index) => (
                        <AnimateInView key={index} delay={0.1 + index * 0.1}>
                            <a href={post.link} className="group block">
                                <div className="bg-white rounded-3xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
                                    {/* Image */}
                                    <div className="aspect-[16/9] relative overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-accent transition-colors duration-300">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-dark/60 leading-relaxed mb-4">
                                            {post.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-dark/40">
                                            <span className="font-medium text-dark/60">
                                                {post.author}
                                            </span>
                                            <span>•</span>
                                            <span>{post.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
