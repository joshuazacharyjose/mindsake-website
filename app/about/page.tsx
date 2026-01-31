"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/lib/motion";
import { TherapistProfileCard } from "@/components/ui/TherapistProfileCard";

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-primary/5 to-white py-16 md:py-24">
                <Container className="text-center">
                    <FadeIn>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
                            About Mindsake
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto font-light">
                            A safe, non-judgmental space dedicated to your mental well-being and personal growth.
                        </p>
                    </FadeIn>
                </Container>
            </section>

            {/* Therapist Profile Section - Using new Profile Card */}
            <section className="py-16 md:py-24 bg-gradient-calm">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                        {/* Profile Card */}
                        <FadeIn className="w-full lg:w-5/12">
                            <TherapistProfileCard
                                imageSrc="/images/therapist.jpg"
                                name="Meet the Therapist"
                                title="Counseling Psychologist"
                                credentials="M.Sc. in Counseling Psychology"
                                highlights={[
                                    "Specialized in Adolescent & Youth Counseling",
                                    "Experience with Anxiety, Stress, and Emotional Regulation",
                                    "Trauma-Informed Approach",
                                    "Creating safe, validating environments"
                                ]}
                                quote="Therapy is not just about fixing problems — it's about understanding yourself and finding your own path to emotional balance."
                            />
                        </FadeIn>

                        {/* Content Column */}
                        <FadeIn delay={0.15} className="w-full lg:w-7/12 flex flex-col gap-6">
                            <div>
                                <h2 className="text-3xl font-bold font-heading text-secondary mb-4">
                                    Your Journey to Wellness
                                </h2>
                            </div>

                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    With a deep commitment to empathetic care, I work with adolescents, youth, and adults to navigate life&apos;s challenges. My approach is rooted in creating a safe, validating environment where you feel heard and understood.
                                </p>
                                <p>
                                    At Mindsake, we believe that therapy is not just about &quot;fixing&quot; problems, but about understanding yourself, building resilience, and finding your own path to emotional balance.
                                </p>
                                <p>
                                    Whether you are dealing with anxiety, stress, relationship issues, or simply seeking personal growth, I am here to support you on your journey.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </Container>
            </section>

            {/* Philosophy Section */}
            <section className="bg-gradient-to-b from-neutral-50 to-white py-16 md:py-24">
                <Container className="text-center max-w-4xl">
                    <FadeIn>
                        <h2 className="text-3xl font-bold font-heading text-secondary mb-8">
                            Our Philosophy
                        </h2>
                    </FadeIn>
                    <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StaggerItem>
                            <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100 h-full">
                                <h3 className="text-xl font-semibold text-primary mb-3">Empathy First</h3>
                                <p className="text-gray-600 text-sm">
                                    We prioritize deep listening and understanding, ensuring you never feel judged.
                                </p>
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100 h-full">
                                <h3 className="text-xl font-semibold text-primary mb-3">Evidence-Based</h3>
                                <p className="text-gray-600 text-sm">
                                    Our methods are grounded in psychological science and proven therapeutic techniques.
                                </p>
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="p-6 bg-white rounded-xl shadow-sm border border-neutral-100 h-full">
                                <h3 className="text-xl font-semibold text-primary mb-3">Holistic Growth</h3>
                                <p className="text-gray-600 text-sm">
                                    We focus on the whole person, addressing emotional, mental, and relational well-being.
                                </p>
                            </div>
                        </StaggerItem>
                    </Stagger>
                </Container>
            </section>
        </div>
    );
}
