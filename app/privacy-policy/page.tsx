import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for RedMotion Studio.'
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-[#0c0c0e] text-neutral-300 pt-28 pb-20 px-6 sm:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Back to Home Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-neutral-100 transition-colors mb-8"
                >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Home</span>
                </Link>

                {/* Header */}
                <div className="border-b border-neutral-800 pb-6 mb-10">
                    <h1 className="text-3xl sm:text-5xl font-bold text-neutral-100 tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-sm font-mono text-neutral-500 mt-2">
                        Last updated: August 24, 2026
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-10 text-sm sm:text-base leading-relaxed text-neutral-300">
                    {/* 1. Overview */}
                    <section className="space-y-3">
                        <h2 className="text-lg sm:text-xl font-bold text-neutral-100">
                            1. Overview
                        </h2>
                        <p>
                            At <strong>RedMotion</strong>, we create 3D product
                            animation and motion design for global brands and
                            technology companies. We value your trust and are
                            committed to protecting your personal information
                            and project assets.
                        </p>
                    </section>

                    {/* 2. Information We Collect */}
                    <section className="space-y-3">
                        <h2 className="text-lg sm:text-xl font-bold text-neutral-100">
                            2. Information We Collect
                        </h2>
                        <p>
                            We only collect information necessary to provide our
                            motion design services:
                        </p>
                        <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-300">
                            <li>
                                <strong>Contact Details:</strong> Name, email
                                address, company name, and project requirements
                                submitted through our contact channels.
                            </li>
                            <li>
                                <strong>Project Files & 3D Assets:</strong>
                                reference images, style guides, and creative
                                briefs provided for production.
                            </li>
                            <li>
                                <strong>Technical Data:</strong> Basic browser
                                and usage information to ensure our website
                                functions smoothly.
                            </li>
                        </ul>
                    </section>

                    {/* 3. Client Confidentiality & NDAs */}
                    <section className="space-y-3">
                        <h2 className="text-lg sm:text-xl font-bold text-neutral-100">
                            3. Client Confidentiality & NDAs
                        </h2>
                        <p>
                            We regularly work with unreleased products and
                            confidential hardware designs. We strictly protect
                            your intellectual property:
                        </p>
                        <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-300">
                            <li>
                                We readily sign Non-Disclosure Agreements (NDAs)
                                before receiving sensitive files.
                            </li>
                            <li>
                                Your files are never shared with unauthorized
                                third parties or used for public AI models.
                            </li>
                            <li>
                                Work is only published in our portfolio after
                                your official product launch and with your
                                written approval.
                            </li>
                        </ul>
                    </section>

                    {/* 4. How We Use Information */}
                    <section className="space-y-3">
                        <h2 className="text-lg sm:text-xl font-bold text-neutral-100">
                            4. How We Use Information
                        </h2>
                        <p>Your information is used strictly to:</p>
                        <ul className="list-disc list-inside space-y-1.5 pl-2 text-neutral-300">
                            <li>
                                Deliver project estimates, 3D animations, and
                                motion design assets.
                            </li>
                            <li>
                                Communicate regarding production progress and
                                feedback rounds.
                            </li>
                            <li>
                                Issue invoices and fulfill accounting
                                obligations.
                            </li>
                        </ul>
                    </section>

                    {/* 5. Data Security */}
                    <section className="space-y-3">
                        <h2 className="text-lg sm:text-xl font-bold text-neutral-100">
                            5. Data Security & Storage
                        </h2>
                        <p>
                            Project assets are stored in secure, encrypted cloud
                            environments accessible only by the artists working
                            on your project. Upon project completion, raw
                            project files can be permanently removed from our
                            active workstations upon request.
                        </p>
                    </section>

                    {/* 6. Your Rights */}
                    <section className="space-y-3">
                        <h2 className="text-lg sm:text-xl font-bold text-neutral-100">
                            6. Your Rights
                        </h2>
                        <p>
                            You have the right to request access to, correction
                            of, or permanent deletion of your personal data at
                            any time by contacting us directly.
                        </p>
                    </section>

                    {/* 7. Contact */}
                    <section className="space-y-3 pt-4 border-t border-neutral-800">
                        <h2 className="text-lg sm:text-xl font-bold text-neutral-100">
                            7. Contact Us
                        </h2>
                        <p>
                            For any questions regarding privacy or
                            confidentiality, please reach out:
                        </p>
                        <p className="font-mono text-sm text-neutral-300">
                            Email:{' '}
                            <a
                                href="mailto:filip@redmotion.works"
                                className="text-orange-500 hover:underline"
                            >
                                rmtdesign@redmotion.works
                            </a>
                        </p>
                    </section>
                </div>

                {/* Footer Back Link */}
                <div className="mt-14 pt-8 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-500">
                    <span>© 2026 RedMotion</span>
                    <Link
                        href="/"
                        className="text-neutral-400 hover:text-neutral-200 transition-colors"
                    >
                        Back to Home ↑
                    </Link>
                </div>
            </div>
        </main>
    );
}
