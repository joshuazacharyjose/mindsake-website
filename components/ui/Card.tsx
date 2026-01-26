import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "hover";
}

export function Card({ className, variant = "default", children, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl bg-white p-6 transition-all duration-300",
                variant === "default" && "shadow-sm border border-primary/10",
                variant === "hover" && "shadow-sm border border-primary/10 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
