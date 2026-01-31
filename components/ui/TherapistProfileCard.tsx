"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TherapistProfileCardProps {
    imageSrc: string;
    name: string;
    title: string;
    credentials: string;
    highlights: string[];
    quote?: string;
}

/**
 * TherapistProfileCard - Premium glassmorphism profile card
 * 
 * Features:
 * - Subtle 3D tilt on hover (limited to ±8°)
 * - Glass morphism surface with backdrop blur
 * - Soft gradient glow with hover enhancement
 * - Respects prefers-reduced-motion
 * - Keyboard accessible focus states
 */
export function TherapistProfileCard({
    imageSrc,
    name,
    title,
    credentials,
    highlights,
    quote,
}: TherapistProfileCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Check for reduced motion preference
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    // Motion values for 3D tilt - calmed spring config
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Very gentle spring for calm feel (slower than default)
    const springConfig = { stiffness: 150, damping: 25 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Transform to rotation - LIMITED to ±8 degrees (very subtle)
    const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

    // Handle mouse movement for tilt
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (prefersReducedMotion || !cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Normalized position from -0.5 to 0.5
        const normalizedX = (e.clientX - centerX) / rect.width;
        const normalizedY = (e.clientY - centerY) / rect.height;

        x.set(normalizedX);
        y.set(normalizedY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <div className="relative w-full max-w-md mx-auto perspective-1000">
            {/* Ambient glow behind card */}
            <motion.div
                className="absolute inset-0 -m-8 rounded-3xl bg-gradient-to-br from-primary-light/20 via-primary/15 to-secondary/10 blur-3xl"
                animate={{
                    opacity: isHovered ? 0.8 : 0.5,
                    scale: isHovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Main card */}
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX: prefersReducedMotion ? 0 : rotateX,
                    rotateY: prefersReducedMotion ? 0 : rotateY,
                    transformStyle: "preserve-3d",
                }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                className="relative glass-strong p-8 rounded-3xl cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                tabIndex={0}
                role="article"
                aria-label={`Profile card for ${name}`}
            >
                {/* Gradient overlay on card */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-primary/5 pointer-events-none" />

                {/* Subtle border glow */}
                <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                        boxShadow: isHovered
                            ? "inset 0 0 0 1px rgba(164, 212, 201, 0.3), 0 0 30px rgba(128, 178, 169, 0.15)"
                            : "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
                    }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />

                {/* Content container with 3D depth */}
                <div className="relative" style={{ transform: "translateZ(20px)" }}>
                    {/* Profile image */}
                    <div className="flex justify-center mb-6">
                        <motion.div
                            className="relative"
                            animate={{
                                boxShadow: isHovered
                                    ? "0 8px 40px rgba(128, 178, 169, 0.25)"
                                    : "0 4px 20px rgba(0, 0, 0, 0.1)",
                            }}
                            transition={{ duration: 0.4 }}
                            style={{
                                borderRadius: "50%",
                            }}
                        >
                            {/* Soft halo ring */}
                            <div className="absolute inset-0 -m-2 rounded-full bg-gradient-to-br from-primary-light/30 to-primary/20 blur-md" />

                            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20">
                                <Image
                                    src={imageSrc}
                                    alt={`Portrait of ${name}`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Name and title */}
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold font-heading text-secondary mb-2">
                            {name}
                        </h2>
                        <p className="text-primary font-medium text-lg mb-1">
                            {title}
                        </p>
                        <p className="text-gray-500 text-sm">
                            {credentials}
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-6" />

                    {/* Profile highlights */}
                    <div className="space-y-3 mb-6">
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.1 + index * 0.1,
                                    duration: 0.4,
                                    ease: [0.25, 0.1, 0.25, 1.0]
                                }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="text-gray-600 text-sm leading-relaxed">
                                    {highlight}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quote (optional) */}
                    {quote && (
                        <>
                            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mb-6" />
                            <blockquote className="text-center">
                                <p className="text-gray-500 text-sm italic leading-relaxed">
                                    &ldquo;{quote}&rdquo;
                                </p>
                            </blockquote>
                        </>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
