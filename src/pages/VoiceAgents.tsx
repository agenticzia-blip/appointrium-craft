import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { PhoneCall, PhoneIncoming, RotateCcw, ClipboardCheck } from "lucide-react";

const agents = [
  { icon: PhoneIncoming, title: "AI Receptionist", desc: "Answer calls 24/7, book appointments, handle inquiries — all automatically. Never miss a lead again." },
  { icon: PhoneCall, title: "AI Cold Caller", desc: "Outbound AI that prospects, qualifies leads, and books meetings on autopilot." },
  { icon: RotateCcw, title: "AI Lead Reactivation", desc: "Re-engage dead leads with personalized AI calls. Turn old contacts into fresh revenue." },
  { icon: ClipboardCheck, title: "AI Order Confirmation", desc: "Automate order confirmations, follow-ups, and upsells with natural voice AI." },
];

const VoiceAgents = () => (
  <div>
    <PageHero title="Voice Agents" highlight="Program" subtitle="Build AI voice systems that handle calls, book appointments, and close deals — without human intervention." />
    <section className="section-padding pt-8">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 100}>
              <GlassCard className="flex gap-4 items-start h-full">
                <a.icon className="w-10 h-10 shrink-0 opacity-80 mt-1" />
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
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

export default VoiceAgents;
