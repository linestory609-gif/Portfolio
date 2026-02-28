"use client";

interface MarqueeProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    className?: string;
    pauseOnHover?: boolean;
}

export default function Marquee({
    children,
    direction = "left",
    speed = "normal",
    className = "",
    pauseOnHover = false,
}: MarqueeProps) {
    const speedClass =
        speed === "fast"
            ? "animate-marquee-fast"
            : speed === "slow"
                ? "animate-marquee-slow"
                : "animate-marquee";

    const animClass =
        direction === "right" ? "animate-marquee-reverse" : speedClass;

    return (
        <div
            className={`overflow-hidden ${className}`}
        >
            <div
                className={`flex w-max ${animClass} ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""
                    }`}
            >
                {children}
                {children}
            </div>
        </div>
    );
}
