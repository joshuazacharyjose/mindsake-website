import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Mail, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
            <Container>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-heading text-xl font-bold text-primary">Mindsake</h3>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                            Professional, trustworthy, and empathetic counseling psychology services.
                            Creating a safe space for your mental well-being.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <Link href="#" className="text-secondary hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-secondary hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="mailto:info@mindsake.in" className="text-secondary hover:text-primary transition-colors">
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Email</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-heading font-semibold text-secondary">Quick Links</h4>
                        <nav className="flex flex-col gap-2">
                            <Link href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                About Us
                            </Link>
                            <Link href="/services" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                Individual Therapy
                            </Link>
                            <Link href="/workshops" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                Group Workshops
                            </Link>
                            <Link href="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Legal & Contact */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-heading font-semibold text-secondary">Information</h4>
                        <nav className="flex flex-col gap-2">
                            <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/disclaimer" className="text-sm text-gray-600 hover:text-primary transition-colors">
                                Disclaimer
                            </Link>
                        </nav>
                        <p className="text-xs text-gray-400 mt-4">
                            © {new Date().getFullYear()} Mindsake. All rights reserved.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
