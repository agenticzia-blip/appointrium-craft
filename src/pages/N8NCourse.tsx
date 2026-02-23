import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { CheckCircle, Play, Code, Database, Zap } from "lucide-react";

const stats = [
  { icon: Play, title: "50+ Video Lessons", desc: "Comprehensive step-by-step tutorials" },
  { icon: Code, title: "20+ Templates", desc: "Ready-to-deploy workflow blueprints" },
  { icon: Database, title: "Real Projects", desc: "Build actual client solutions" },
  { icon: Zap, title: "Live Support", desc: "Get help when you're stuck" },
];

const curriculum = [
  "n8n Interface & Login",
  "Triggers & Webhooks",
  "HTTP Requests & APIs",
  "Data Transformation",
  "Conditional Logic & Loops",
  "Database Operations",
  "Error Handling & Debugging",
  "Production Deployment",
];

const builds = [
  "Lead capture & CRM automation",
  "Email Automations",
  "Google Review Agent",
  "Invoice & payment systems",
  "Database Operations",
  "Facebook Library Scraping Automation",
];

const N8NCourse = () => (
  <div>
    {/* Hero */}
    <section className="section-padding pt-32 pb-16 text-center">
      <div className="container-narrow">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary mb-6">
            <Zap className="w-4 h-4" /> Most Popular Course
          </span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            n8n <span className="serif-italic text-gradient">Full Course</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Master n8n from absolute beginner to advanced automation architect. Build workflows that businesses pay $5K-$50K for.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Stat Cards */}
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

    {/* Curriculum + What You'll Build */}
    <section className="section-padding pt-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left: Curriculum */}
        <div className="lg:col-span-3">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Complete <span className="serif-italic text-gradient">Curriculum</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Our n8n course takes you from zero experience to building complex, production-ready automations that solve real business problems.
            </p>
          </ScrollReveal>
          <div className="space-y-3">
            {curriculum.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <GlassCard hover={false} className="flex items-center gap-4 !py-4">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-medium text-sm">{item}</span>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right: What You'll Build */}
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

export default N8NCourse;
