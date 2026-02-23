import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Shield } from "lucide-react";

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
        <ScrollReveal>
          <GlassCard hover={false} className="mb-8 border-primary/20">
            <h3 className="font-display font-bold text-lg mb-3 text-foreground">⚠️ Important Notice</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All course roadmaps, curricula, and content described on this website are provided for informational purposes only and are subject to modification. The actual learning path, modules, and materials delivered may be adjusted based on each student's individual goals, prior experience, learning needs, and progress. Appointrium Academy reserves full discretion to tailor the educational experience to best serve each student.
            </p>
          </GlassCard>
        </ScrollReveal>

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
