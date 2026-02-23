import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Workflow, Bot, CheckCircle, X } from "lucide-react";

const comparisonData = [
  { feature: "Follows predefined rules", automation: true, agents: false },
  { feature: "Makes autonomous decisions", automation: false, agents: true },
  { feature: "Handles repetitive tasks", automation: true, agents: true },
  { feature: "Adapts to new situations", automation: false, agents: true },
  { feature: "Uses external tools & APIs", automation: true, agents: true },
  { feature: "Understands context & intent", automation: false, agents: true },
  { feature: "Best for predictable workflows", automation: true, agents: false },
  { feature: "Best for complex interactions", automation: false, agents: true },
];

const AIAgentsVsAutomationSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          AI Agents vs <span className="serif-italic text-gradient">AI Automation</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Understanding the difference is key to building the right solutions for your clients.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <ScrollReveal delay={100}>
          <GlassCard className="h-full">
            <div className="flex items-center gap-3 mb-4">
              <Workflow className="w-8 h-8 opacity-70" strokeWidth={1.5} />
              <h3 className="font-display font-bold text-xl">AI Automation</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Rule-based workflows enhanced with AI capabilities. Perfect for predictable, repetitive tasks that need to run consistently.
            </p>
            <ul className="space-y-2">
              {comparisonData.filter(c => c.automation).map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0 opacity-60" />
                  <span className="text-sm text-muted-foreground">{c.feature}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <GlassCard className="h-full">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-8 h-8 opacity-70" strokeWidth={1.5} />
              <h3 className="font-display font-bold text-xl">AI Agents</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Autonomous systems that understand context, make decisions, and take actions to achieve goals. Ideal for complex interactions.
            </p>
            <ul className="space-y-2">
              {comparisonData.filter(c => c.agents).map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0 opacity-60" />
                  <span className="text-sm text-muted-foreground">{c.feature}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={300}>
        <GlassCard className="max-w-2xl mx-auto text-center">
          <p className="text-foreground font-display font-semibold mb-2">The Bottom Line</p>
          <p className="text-sm text-muted-foreground">
            AI Automation handles the repetitive work. AI Agents handle the thinking. Together, they're unstoppable — and we teach you both.
          </p>
        </GlassCard>
      </ScrollReveal>
    </div>

    <div className="text-center mt-10">
      <ScrollReveal>
        <Button asChild variant="hero" size="lg" className="rounded-full">
          <Link to="/pricing">Enroll Now</Link>
        </Button>
      </ScrollReveal>
    </div>
  </section>
);

export default AIAgentsVsAutomationSection;
