"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { submitContactForm } from "@/app/actions";

const ContactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Please select a subject"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof ContactSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message?: string } | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(ContactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus(null);
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => formData.append(key, value));

        try {
            const result = await submitContactForm({ success: false }, formData);
            setSubmitStatus({ success: result.success, message: result.message });
            if (result.success) {
                reset();
            }
        } catch (error) {
            setSubmitStatus({ success: false, message: "An unexpected error occurred." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h2 className="text-2xl font-bold font-heading text-secondary mb-6">Send a Message</h2>

            {submitStatus && (
                <div className={`mb-6 p-4 rounded-xl text-sm ${submitStatus.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {submitStatus.message}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        {...register("name")}
                        type="text"
                        id="name"
                        className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                        placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        {...register("email")}
                        type="email"
                        id="email"
                        className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                        placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <select
                        {...register("subject")}
                        id="subject"
                        className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white ${errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                        defaultValue=""
                    >
                        <option value="" disabled>Select a topic</option>
                        <option value="Individual Therapy">Individual Therapy</option>
                        <option value="Workshop Inquiry">Workshop Inquiry</option>
                        <option value="General Inquiry">General Inquiry</option>
                    </select>
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        {...register("message")}
                        id="message"
                        rows={4}
                        className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                        placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <Button className="w-full" size="lg" disabled={isSubmitting} isLoading={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </div>
    );
}
