import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Shield } from "lucide-react";

const sections = [
  {
    title: "1. Course Content & Roadmap Disclaimer",
    content: `All course content, roadmaps, curricula, and materials provided by Appointrium Academy are subject to change at any time without prior notice. The structure, topics, and deliverables described on this website represent our planned offerings and may be modified based on individual student conditions, goals, experience level, learning pace, and evolving industry standards.

We reserve the right to customize, add, remove, or restructure course modules to better serve each student's unique needs and objectives. The information presented on course pages is for general guidance purposes and does not constitute a binding agreement on exact deliverables.`,
  },
  {
    title: "2. Results & Earnings Disclaimer",
    content: `Any results, testimonials, or income figures displayed on this website are illustrative and represent individual outcomes. Your results may vary depending on your effort, skill level, market conditions, and other factors beyond our control. We do not guarantee any specific financial outcomes or client acquisition results.`,
  },
  {
    title: "3. Information We Collect",
    content: `When you interact with Appointrium Academy, we may collect personal information you voluntarily provide, including your name, email address, phone number, and payment details. We also automatically collect certain data such as your IP address, browser type, and browsing behavior on our website through cookies and similar technologies.`,
  },
  {
    title: "4. How We Use Your Information",
    content: `We use the information collected to provide and improve our educational services, process enrollments and payments, communicate with you about courses and updates, personalize your learning experience, and comply with legal obligations. We do not sell your personal information to third parties.`,
  },
  {
    title: "5. Data Protection",
    content: `We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "6. Third-Party Services",
    content: `Our website may contain links to third-party services, tools, or platforms mentioned in our courses. We are not responsible for the privacy practices of these external services. We encourage you to review their privacy policies before providing any personal information.`,
  },
  {
    title: "7. Refund & Guarantee Policy",
    content: `Our 90-day results guarantee is subject to specific terms and conditions. Eligibility for refunds requires full participation in the program as outlined during enrollment. Detailed terms will be provided at the time of purchase.`,
  },
  {
    title: "8. Changes to This Policy",
    content: `We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the revised policy.`,
  },
  {
    title: "9. Contact Us",
    content: `If you have any questions about this Privacy Policy or our data practices, please reach out through our Contact page or email us directly. We aim to respond to all inquiries within 48 hours.`,
  },
];

const PrivacyPolicy = () => (
  <div>
    <section className="section-padding pt-32 pb-16 text-center">
      <div className="container-narrow">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary mb-6">
            <Shield className="w-4 h-4" /> Legal
          </span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Privacy <span className="serif-italic text-gradient">Policy</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy matters to us. Please read this policy to understand how we handle your information and our course delivery practices.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding pt-0">
      <div className="max-w-3xl mx-auto">
        {/* Important Notice */}
        <ScrollReveal>
          <GlassCard hover={false} className="mb-8 border-primary/20">
            <h3 className="font-display font-bold text-lg mb-3 text-foreground">⚠️ Important Notice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All course roadmaps, curricula, and content described on this website are provided for informational purposes only and are subject to modification. The actual learning path, modules, and materials delivered may be adjusted based on each student's individual goals, prior experience, learning needs, and progress. Appointrium Academy reserves full discretion to tailor the educational experience to best serve each student.
            </p>
          </GlassCard>
        </ScrollReveal>

        <div className="space-y-6">
          {sections.map((s, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              <GlassCard hover={false}>
                <h2 className="font-display font-bold text-lg mb-3 text-foreground">{s.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{s.content}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={100}>
          <p className="text-xs text-muted-foreground text-center mt-12">
            Last updated: February 2026 · Appointrium Academy
          </p>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default PrivacyPolicy;
