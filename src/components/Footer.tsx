"use client";

import Link from "next/link";
import AnimateInView from "./AnimateInView";

const pageLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#blog", label: "Blog" },
];

const supportLinks = [
    { href: "#", label: "Terms" },
    { href: "#", label: "404" },
];

const socialLinks = [
    { href: "#", label: "X (Twitter)" },
    { href: "#", label: "YouTube" },
    { href: "#", label: "Instagram" },
];

export default function Footer() {
    return (
        <footer className="relative footer-gradient pt-32 pb-8 overflow-hidden">
            {/* Giant EDITR Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <h2
                    className="text-[clamp(8rem,20vw,20rem)] font-black text-dark/[0.03] tracking-tighter leading-none select-none"
                    style={{ filter: "blur(2px)" }}
                >
                    EDITR
                </h2>
            </div>

            <div className="max-w-[1320px] mx-auto px-6 relative z-10">
                <AnimateInView>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                        {/* Logo + Description */}
                        <div className="md:col-span-1">
                            <Link href="/" className="flex items-center gap-2 mb-4">
                                <div className="w-9 h-9 bg-dark rounded-lg flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <rect
                                            x="3"
                                            y="3"
                                            width="7"
                                            height="7"
                                            rx="1.5"
                                            fill="white"
                                        />
                                        <rect
                                            x="14"
                                            y="3"
                                            width="7"
                                            height="7"
                                            rx="1.5"
                                            fill="white"
                                        />
                                        <rect
                                            x="3"
                                            y="14"
                                            width="7"
                                            height="7"
                                            rx="1.5"
                                            fill="white"
                                        />
                                        <rect
                                            x="14"
                                            y="14"
                                            width="7"
                                            height="7"
                                            rx="1.5"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <span className="text-lg font-bold text-dark">Editr</span>
                            </Link>
                            <p className="text-sm text-dark/50 leading-relaxed max-w-[240px]">
                                We help creators and brands turn raw footage into impactful,
                                results-driven content.
                            </p>
                        </div>

                        {/* Pages */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-dark/40 mb-4">
                                Pages
                            </p>
                            <ul className="space-y-3">
                                {pageLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-dark/60 hover:text-dark transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-dark/40 mb-4">
                                Support
                            </p>
                            <ul className="space-y-3">
                                {supportLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-dark/60 hover:text-dark transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Socials */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-dark/40 mb-4">
                                Socials
                            </p>
                            <ul className="space-y-3">
                                {socialLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-dark/60 hover:text-dark transition-colors duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AnimateInView>

                {/* Bottom Bar */}
                <div className="border-t border-dark/10 pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-1 text-xs text-dark/40">
                            <span>Created by</span>
                            <a
                                href="#"
                                className="font-medium text-dark/60 hover:text-dark transition-colors"
                            >
                                Ramish Aziz
                            </a>
                        </div>
                        <p className="text-xs text-dark/40">
                            © 2025 browser.supply. Framer templates
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
