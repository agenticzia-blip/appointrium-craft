import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { CheckCircle } from "lucide-react";

const steps = [
  "Full Cold Emailing Engine Setup",
  "Finding High-Value Prospects",
  "Crafting Irresistible Offers",
  "Outreach Scripts & Templates",
  "Follow-Up Sequences That Convert",
  "Closing Your First Deal",
  "Pricing Your AI Services",
  "Client Onboarding Systems",
];

const GetFirstClient = () => (
  <div>
    <PageHero title="Get Your" highlight="First Client" subtitle="A complete system to find, pitch, and close your first AI automation client in 90 days or less." />
    <section className="section-padding pt-8">
      <div className="container-narrow">
        <ScrollReveal>
          <GlassCard hover={false} className="mb-8">
            <h3 className="font-display font-bold text-xl mb-6">The Client Acquisition Playbook</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {steps.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 opacity-60" />
                  <span className="text-sm text-muted-foreground">{s}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="glass-strong rounded-2xl p-8 text-center glow">
            <p className="text-xl font-display font-semibold mb-2">Our Guarantee</p>
            <p className="text-muted-foreground">Get your first AI automation client in 90 days or you don't pay.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={250}>
          <div className="text-center mt-10">
            <Button asChild variant="hero" size="lg">
              <Link to="/pricing">Start Now</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default GetFirstClient;
