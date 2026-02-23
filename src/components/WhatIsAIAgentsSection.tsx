import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Bot, BrainCircuit, Workflow, CheckCircle } from "lucide-react";

const whatAreCards = [
  { icon: BrainCircuit, title: "Autonomous Decision-Making", desc: "AI agents analyze context and make decisions without step-by-step instructions from a human." },
  { icon: Workflow, title: "Goal-Oriented", desc: "Given a goal, an AI agent figures out the steps to achieve it — planning, executing, and adapting along the way." },
  { icon: Bot, title: "Tool Usage", desc: "AI agents can use external tools — browse the web, call APIs, send emails, and interact with software on your behalf." },
];

const useCases = [
  "A sales agent that researches leads, writes personalized emails, and follows up automatically",
  "A support agent that understands customer issues and resolves them without human intervention",
  "A research agent that gathers data from multiple sources and compiles reports",
  "A booking agent that handles scheduling, rescheduling, and reminders end-to-end",
];

const WhatIsAIAgentsSection = () => (
  <>
    <section className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            What are <span className="serif-italic text-gradient">AI Agents</span>?
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            AI Agents are autonomous systems that think, plan, and act — going far beyond simple automation.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whatAreCards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 100}>
              <GlassCard className="text-center h-full">
                <c.icon className="w-10 h-10 mx-auto mb-4 opacity-80" strokeWidth={1.5} />
                <h3 className="font-display font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            AI Agents in <span className="serif-italic text-gradient">Action</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Real use cases that businesses pay thousands for.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <GlassCard className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {useCases.map((uc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 opacity-70" />
                  <span className="text-sm text-muted-foreground">{uc}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding pt-0 text-center">
      <ScrollReveal>
        <Button asChild variant="hero" size="lg" className="rounded-full">
          <Link to="/pricing">Enroll Now</Link>
        </Button>
      </ScrollReveal>
    </section>
  </>
);

export default WhatIsAIAgentsSection;
