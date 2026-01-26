"use server";

import { z } from "zod";
import { Resend } from "resend";

// Initialize Resend with API key (will use env variable in production)
const resend = new Resend(process.env.RESEND_API_KEY || "re_123456789");

const ContactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Please select a subject"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactState = {
    success: boolean;
    message?: string;
    errors?: {
        name?: string[];
        email?: string[];
        subject?: string[];
        message?: string[];
    };
};

export async function submitContactForm(prevState: ContactState, formData: FormData): Promise<ContactState> {
    const validatedFields = ContactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please check the form for errors.",
        };
    }

    const { name, email, subject, message } = validatedFields.data;

    try {
        // In a real scenario, we would send the email here using Resend
        // await resend.emails.send({
        //   from: 'Mindsake <onboarding@resend.dev>',
        //   to: 'info@mindsake.in',
        //   subject: `New Contact: ${subject}`,
        //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        // });

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return {
            success: true,
            message: "Thank you! Your message has been sent successfully.",
        };
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong. Please try again later.",
        };
    }
}
