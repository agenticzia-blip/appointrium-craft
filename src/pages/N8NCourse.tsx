import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { CheckCircle } from "lucide-react";

const modules = [
  "N8N Interface & Core Concepts",
  "Triggers, Webhooks & API Integrations",
  "Conditional Logic & Error Handling",
  "Database Connections & Data Transformation",
  "N8N Self-Host Free Method (Professional Plan)",
  "Real Business Automations (Lead Gen, CRM, Email)",
  "Advanced Workflows & Sub-workflows",
  "Client-Ready Templates & Deployment",
];

const N8NCourse = () => (
  <div>
    <PageHero title="N8N" highlight="Masterclass" subtitle="From absolute beginner to advanced automation builder. Master the most powerful open-source automation platform." />
    <section className="section-padding pt-8">
      <div className="container-narrow">
        <ScrollReveal>
          <GlassCard hover={false} className="mb-8">
            <h3 className="font-display font-bold text-xl mb-6">What You'll Learn</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modules.map((m, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 opacity-60" />
                  <span className="text-sm text-muted-foreground">{m}</span>
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

export default N8NCourse;
