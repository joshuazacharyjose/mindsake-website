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
        <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
            <nav
                className="mx-auto max-w-7xl rounded-2xl"
                style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)',
                }}
            >
                <Container className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                            <img
                                src="/images/logo.jpg"
                                alt="Mindsake Logo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <span className="font-heading text-xl font-bold text-primary-dark tracking-tight hidden sm:block">
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
                                    "text-sm font-medium transition-colors hover:text-primary-dark",
                                    pathname === link.href ? "text-primary-dark font-semibold" : "text-secondary"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button size="sm" href="https://forms.gle/a23Fe4UPjVquuAVZA" target="_blank">Book Session</Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-secondary hover:text-primary-dark transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </Container>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="mt-2 mx-auto max-w-7xl rounded-xl p-4 md:hidden"
                    style={{
                        background: 'rgba(255, 255, 255, 0.85)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
                    }}
                >
                    <div className="flex flex-col space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-base font-medium transition-colors hover:text-primary-dark",
                                    pathname === link.href ? "text-primary-dark" : "text-secondary"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button className="w-full" href="https://forms.gle/a23Fe4UPjVquuAVZA" target="_blank">Book Session</Button>
                    </div>
                </div>
            )}
        </div>
    );
}
