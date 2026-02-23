import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { CheckCircle, Video, MessageSquare, Calendar, Users } from "lucide-react";

const stats = [
  { icon: Video, title: "Weekly Sessions", desc: "Live classes every week" },
  { icon: MessageSquare, title: "Direct Q&A", desc: "Real-time answers from mentors" },
  { icon: Calendar, title: "1-on-1 Mentorship", desc: "Personalized guidance calls" },
  { icon: Users, title: "Peer Learning", desc: "Collaborate & grow together" },
];

const curriculum = [
  "Latest AI Tools & Strategies",
  "Real-World Case Studies",
  "Live Workflow Building",
  "Client Acquisition Tactics",
  "Business Model Refinement",
  "Advanced Troubleshooting",
  "Industry Guest Sessions",
  "Monthly Mastermind Calls",
];

const builds = [
  "Personalized business roadmap",
  "Client-ready portfolio",
  "Refined outreach strategy",
  "Industry connections & network",
  "Confidence to close deals",
  "Ongoing accountability system",
];

const LiveClasses = () => (
  <div>
    <section className="section-padding pt-32 pb-16 text-center">
      <div className="container-narrow">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-primary mb-6">
            <Video className="w-4 h-4" /> Live & Interactive
          </span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Live Classes & <span className="serif-italic text-gradient">Mentorship</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time learning with direct access to mentors who run successful AI automation businesses.
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
              What's <span className="serif-italic text-gradient">Included</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Get direct access to live sessions, mentorship calls, and a thriving community of AI automation builders.
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
              <h3 className="font-display font-bold text-xl mb-6">What You'll Gain</h3>
              <div className="space-y-4 mb-8">
                {builds.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="hero" size="lg" className="w-full">
                <Link to="/pricing">Join Now →</Link>
              </Button>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </div>
);

export default LiveClasses;
