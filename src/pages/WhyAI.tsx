import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { TrendingUp, DollarSign, Clock, Globe } from "lucide-react";

const reasons = [
  { icon: TrendingUp, title: "Explosive Market Growth", desc: "AI automation is a multi-billion dollar industry growing 40%+ year over year. Early movers win." },
  { icon: DollarSign, title: "High-Ticket Services", desc: "AI automation services command $2,000–$10,000+ per client. Build once, earn repeatedly." },
  { icon: Clock, title: "Save Businesses Hours", desc: "Businesses waste 30+ hours/week on tasks AI can handle. You become their solution." },
  { icon: Globe, title: "Work From Anywhere", desc: "Serve clients globally. All you need is a laptop and the skills we teach." },
];

const WhyAI = () => (
  <div>
    <PageHero title="Why" highlight="AI Automation?" subtitle="The biggest wealth transfer in history is happening right now. AI automation is how you capture it." />
    <section className="section-padding pt-8">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 100}>
              <GlassCard className="flex gap-4 items-start">
                <r.icon className="w-8 h-8 shrink-0 opacity-80 mt-1" />
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default WhyAI;
