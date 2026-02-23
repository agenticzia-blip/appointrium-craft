import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { CheckCircle } from "lucide-react";

const features = [
  "High-converting landing page templates",
  "Lead magnet & opt-in systems",
  "Automated email sequences",
  "Sales page frameworks",
  "Upsell & cross-sell funnels",
  "Analytics & conversion tracking",
  "Integration with N8N & CRM",
  "Full outreach campaign setup",
];

const AppointFunnels = () => (
  <div>
    <PageHero title="Appoint Funnels" highlight="System" subtitle="Complete funnel building, lead generation, and conversion systems built for AI automation agencies." />
    <section className="section-padding pt-8">
      <div className="container-narrow">
        <ScrollReveal>
          <GlassCard hover={false} className="mb-8">
            <h3 className="font-display font-bold text-xl mb-6">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 opacity-60" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="text-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/pricing">Enroll Now</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default AppointFunnels;
