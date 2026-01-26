import React from "react";
import { Container } from "@/components/ui/Container";

export default function PrivacyPage() {
    return (
        <Container className="py-20 max-w-3xl">
            <h1 className="text-3xl font-bold font-heading text-secondary mb-8">Privacy Policy</h1>
            <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                <p>
                    At Mindsake, we take your privacy and confidentiality seriously. This Privacy Policy explains how we collect, use, and protect your information.
                </p>

                <h3 className="text-xl font-semibold text-secondary">1. Information We Collect</h3>
                <p>
                    We collect information you voluntarily provide to us, such as your name, email address, and phone number when you contact us or book a session. We do not store sensitive therapy notes on this website.
                </p>

                <h3 className="text-xl font-semibold text-secondary">2. Confidentiality</h3>
                <p>
                    All therapy sessions are strictly confidential in accordance with professional ethical guidelines. Exceptions to confidentiality are made only in cases of immediate risk of harm to self or others, or as required by law.
                </p>

                <h3 className="text-xl font-semibold text-secondary">3. Data Security</h3>
                <p>
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h3 className="text-xl font-semibold text-secondary">4. Contact Us</h3>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at mindsake.co@gmail.com.
                </p>
            </div>
        </Container>
    );
}
