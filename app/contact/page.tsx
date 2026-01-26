import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
    return (
        <div className="bg-white">
            <section className="bg-primary/5 py-16">
                <Container className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto font-light">
                        Have questions? We are here to help. Reach out to us for inquiries about therapy sessions or workshops.
                    </p>
                </Container>
            </section>

            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold font-heading text-secondary mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Email</h3>
                                            <a href="mailto:info@mindsake.in" className="text-gray-600 hover:text-primary transition-colors">
                                                info@mindsake.in
                                            </a>
                                            <p className="text-sm text-gray-400 mt-1">We typically reply within 24 hours.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Phone</h3>
                                            <p className="text-gray-600">+91 999 999 9999</p>
                                            <p className="text-sm text-gray-400 mt-1">Available Mon-Fri, 10am - 6pm.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Location</h3>
                                            <p className="text-gray-600">Online & In-person<br />Bangalore, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
                                <h3 className="font-bold text-yellow-800 mb-2">Important Note</h3>
                                <p className="text-yellow-700 text-sm leading-relaxed">
                                    Mindsake is <strong>not</strong> a crisis intervention service. If you or someone you know is in immediate danger or experiencing a medical emergency, please call your local emergency number or visit the nearest hospital immediately.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <ContactForm />
                    </div>
                </Container>
            </section>
        </div>
    );
}
