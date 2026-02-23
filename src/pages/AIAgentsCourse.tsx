import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { CheckCircle } from "lucide-react";

const modules = [
  "What Are AI Agents & Why Businesses Need Them",
  "Building Solution-Based Agents for Specific Industries",
  "Integrating AI Agents with N8N Workflows",
  "Natural Language Processing for Business Tasks",
  "Client Onboarding Automation Agents",
  "Customer Support AI Agents",
  "Sales & Lead Qualification Agents",
  "Deploying & Maintaining Production Agents",
];

const AIAgentsCourse = () => (
  <div>
    <PageHero title="AI Agents" highlight="Course" subtitle="Build intelligent AI agents that solve real business problems and generate recurring revenue." />
    <section className="section-padding pt-8">
      <div className="container-narrow">
        <ScrollReveal>
          <GlassCard hover={false} className="mb-8">
            <h3 className="font-display font-bold text-xl mb-6">Course Modules</h3>
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

export default AIAgentsCourse;
