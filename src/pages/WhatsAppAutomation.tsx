import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { CheckCircle, MessageSquare, Send, Users, Bot } from "lucide-react";

const stats = [
  { icon: MessageSquare, title: "Chat Automation", desc: "Full WhatsApp messaging systems" },
  { icon: Send, title: "Drip Campaigns", desc: "Broadcast & nurture sequences" },
  { icon: Bot, title: "AI Chatbots", desc: "Lead qualification on autopilot" },
  { icon: Users, title: "Multi-Agent", desc: "Scalable WhatsApp workflows" },
];

const curriculum = [
  "WhatsApp Business API Setup",
  "Automated Client Onboarding",
  "AI-Powered Response Systems",
  "Broadcast & Drip Campaigns",
  "Lead Qualification Chatbots",
  "Integration with N8N & CRMs",
  "Appointment Booking via Chat",
  "Follow-up & Re-engagement Sequences",
];

const builds = [
  "Automated onboarding flows",
  "AI chatbot for lead qualification",
  "Broadcast campaign systems",
  "Appointment booking via WhatsApp",
  "CRM-integrated messaging",
  "Re-engagement sequences",
];

const WhatsAppAutomation = () => (
  <div>
    <section className="section-padding pt-32 pb-16 text-center">
      <div className="container-narrow">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary mb-6">
            <MessageSquare className="w-4 h-4" /> Communication Automation
          </span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            WhatsApp <span className="serif-italic text-gradient">Automation</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Automate client communication, lead nurturing, and sales through the world's most-used messaging platform.
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
              Build full WhatsApp automation systems from API setup to production-ready messaging workflows.
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

export default WhatsAppAutomation;
