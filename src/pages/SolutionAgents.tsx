import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Briefcase, Building2, ShoppingCart, HeartPulse } from "lucide-react";

const solutions = [
  { icon: Building2, title: "Real Estate Agents", desc: "AI lead qualification, appointment booking, and follow-up systems for real estate professionals." },
  { icon: HeartPulse, title: "Healthcare Clinics", desc: "Patient intake automation, appointment reminders, and AI receptionists for medical practices." },
  { icon: ShoppingCart, title: "E-commerce Stores", desc: "Order processing, customer support, and inventory management AI agents." },
  { icon: Briefcase, title: "Service Businesses", desc: "Client onboarding, quote generation, and workflow automation for agencies and consultants." },
];

const SolutionAgents = () => (
  <div>
    <PageHero title="Solution-Based" highlight="AI Agents" subtitle="Industry-specific AI agents built to solve real problems for real businesses. Sell solutions, not features." />
    <section className="section-padding pt-8">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100}>
              <GlassCard className="flex gap-4 items-start h-full">
                <s.icon className="w-10 h-10 shrink-0 opacity-80 mt-1" />
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={300}>
          <div className="text-center mt-10">
            <Button asChild variant="hero" size="lg">
              <Link to="/pricing">Enroll Now</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default SolutionAgents;
