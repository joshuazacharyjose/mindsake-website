import React from "react";
import { Container } from "@/components/ui/Container";

export default function TermsPage() {
    return (
        <Container className="py-20 max-w-3xl">
            <h1 className="text-3xl font-bold font-heading text-secondary mb-8">Terms of Service</h1>
            <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>

                <h3 className="text-xl font-semibold text-secondary">1. Acceptance of Terms</h3>
                <p>
                    By accessing and using the Mindsake website, you agree to comply with and be bound by these Terms of Service.
                </p>

                <h3 className="text-xl font-semibold text-secondary">2. Educational Content</h3>
                <p>
                    The content provided on this website is for educational and informational purposes only. It is not a substitute for professional psychological advice, diagnosis, or treatment.
                </p>

                <h3 className="text-xl font-semibold text-secondary">3. Booking & Cancellations</h3>
                <p>
                    Appointments are subject to availability. Please refer to our separate cancellation policy provided during booking confirmation for details on rescheduling or canceling sessions.
                </p>

                <h3 className="text-xl font-semibold text-secondary">4. Crisis Disclaimer</h3>
                <p>
                    Mindsake is not an emergency service. If you are experiencing a mental health emergency, please contact your local emergency services immediately.
                </p>
            </div>
        </Container>
    );
}
