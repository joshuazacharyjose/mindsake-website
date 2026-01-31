import React from "react";
import { cn } from "@/lib/utils";

interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    /** Glass intensity variant */
    variant?: "default" | "soft" | "strong";
}

/**
 * GlassContainer - A glassmorphism container wrapper
 *
 * Use for section backgrounds, panels, and large content areas.
 * Applies translucent background with backdrop blur effect.
 */
export function GlassContainer({
    children,
    className,
    variant = "default",
    ...props
}: GlassContainerProps) {
    const variants = {
        default: "glass-panel",
        soft: "glass-soft",
        strong: "glass-strong",
    };

    return (
        <div
            className={cn(variants[variant], "p-6 md:p-8", className)}
            {...props}
        >
            {children}
        </div>
    );
}

