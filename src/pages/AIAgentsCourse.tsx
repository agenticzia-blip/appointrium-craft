import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { CheckCircle, Bot, Brain, Cpu, HeadphonesIcon } from "lucide-react";

const stats = [
  { icon: Bot, title: "8+ Agent Types", desc: "Industry-specific AI agents" },
  { icon: Brain, title: "NLP & LLMs", desc: "Natural language processing mastery" },
  { icon: Cpu, title: "Production Ready", desc: "Deploy agents clients pay for" },
  { icon: HeadphonesIcon, title: "Live Support", desc: "Direct mentorship access" },
];

const curriculum = [
  "What Are AI Agents & Why Businesses Need Them",
  "Building Solution-Based Agents",
  "Integrating AI Agents with N8N Workflows",
  "Natural Language Processing for Business",
  "Client Onboarding Automation Agents",
  "Customer Support AI Agents",
  "Sales & Lead Qualification Agents",
  "Deploying & Maintaining Production Agents",
];

const builds = [
  "Customer support chatbots",
  "Lead qualification agents",
  "Client onboarding systems",
  "Sales automation agents",
  "Industry-specific AI solutions",
  "Multi-agent workflows",
];

const AIAgentsCourse = () => (
  <div>
    <section className="section-padding pt-32 pb-16 text-center">
      <div className="container-narrow">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary mb-6">
            <Bot className="w-4 h-4" /> High-Demand Skill
          </span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            AI Agents <span className="serif-italic text-gradient">Course</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Build intelligent AI agents that solve real business problems and generate recurring revenue.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <section className="px-4 pb-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 80}>
            <GlassCard className="h-full">
              <s.icon className="w-8 h-8 mb-3 text-primary" />
              <h3 className="font-display font-bold text-base mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>

    <section className="section-padding pt-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Complete <span className="serif-italic text-gradient">Curriculum</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Learn to build AI agents from scratch — from concept to production deployment for real paying clients.
            </p>
          </ScrollReveal>
          <div className="space-y-3">
            {curriculum.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <GlassCard hover={false} className="flex items-center gap-4 !py-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</span>
                  <span className="font-medium text-sm">{item}</span>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <ScrollReveal delay={200}>
            <GlassCard hover={false} className="sticky top-28">
              <h3 className="font-display font-bold text-xl mb-6">What You'll Build</h3>
              <div className="space-y-4 mb-8">
                {builds.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="hero" size="lg" className="w-full">
                <Link to="/pricing">Enroll Now →</Link>
              </Button>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </div>
);

export default AIAgentsCourse;
