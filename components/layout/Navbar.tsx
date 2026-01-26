"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/workshops", label: "Workshops" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <Container className="flex h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <img
                            src="/images/logo.jpg"
                            alt="Mindsake Logo"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <span className="font-heading text-xl font-bold text-primary tracking-tight hidden sm:block">
                        Mindsake
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:gap-8 md:items-center">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === link.href ? "text-primary font-semibold" : "text-secondary"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button size="sm" href="https://calendly.com" target="_blank">Book Session</Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-secondary"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-20 left-0 w-full border-b border-gray-100 bg-white p-4 shadow-lg md:hidden">
                    <div className="flex flex-col space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-base font-medium transition-colors hover:text-primary",
                                    pathname === link.href ? "text-primary" : "text-secondary"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button className="w-full" href="https://calendly.com" target="_blank">Book Session</Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
