import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Bot, Zap, Repeat, BrainCircuit, Workflow, ArrowRight, CheckCircle } from "lucide-react";

const whatIsCards = [
  { icon: BrainCircuit, title: "AI (Artificial Intelligence)", desc: "Software that can understand, learn, and make decisions — like a digital brain trained to handle specific tasks." },
  { icon: Workflow, title: "Automation", desc: "Setting up systems that run tasks automatically without manual effort — saving time, money, and energy." },
  { icon: Bot, title: "AI Automation", desc: "Combining AI + automation to create intelligent workflows that think, decide, and act on their own — 24/7." },
];

const examples = [
  "An AI receptionist that answers calls, books appointments, and follows up — without a human",
  "A WhatsApp bot that qualifies leads and sends personalized responses instantly",
  "An AI agent that scrapes data, writes emails, and sends outreach on autopilot",
  "Automated invoicing, CRM updates, and client onboarding flows",
  "Voice agents that handle customer support calls around the clock",
];

const benefits = [
  { icon: Zap, title: "Speed", desc: "Tasks that take hours are completed in seconds." },
  { icon: Repeat, title: "Consistency", desc: "No human error. Every task runs the same way, every time." },
  { icon: Bot, title: "Scalability", desc: "Serve 10 or 10,000 clients without hiring more staff." },
];

const WhatIsAIAutomation = () => (
  <div>
    <PageHero
      title="What is"
      highlight="AI Automation?"
      subtitle="The simplest explanation of the technology reshaping every industry — and how you can profit from it."
    />

    {/* Core Concepts */}
    <section className="section-padding pt-8">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            Breaking It <span className="serif-italic text-gradient">Down</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            AI Automation is two powerful concepts merged into one.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whatIsCards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 100}>
              <GlassCard className="text-center h-full">
                <c.icon className="w-10 h-10 mx-auto mb-4 opacity-80" />
                <h3 className="font-display font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Real-World Examples */}
    <section className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            Real-World <span className="serif-italic text-gradient">Examples</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Here's what AI automation looks like in action.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <GlassCard className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {examples.map((ex, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 opacity-70" />
                  <span className="text-sm text-muted-foreground">{ex}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>

    {/* Why It Matters */}
    <section className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            Why It <span className="serif-italic text-gradient">Matters</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Businesses that don't automate will be left behind. Those who build these systems get paid.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 100}>
              <GlassCard className="text-center h-full">
                <b.icon className="w-10 h-10 mx-auto mb-4 opacity-80" />
                <h3 className="font-display font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding text-center">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="glass-strong rounded-2xl p-10 md:p-16 glow">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to <span className="serif-italic text-gradient">Learn This</span>?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              We teach you how to build, sell, and deliver AI automation systems — from scratch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/why-ai">Why AI Automation? <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default WhatIsAIAutomation;
