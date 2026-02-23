import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Video, MessageSquare, Calendar, Users } from "lucide-react";

const features = [
  { icon: Video, title: "Weekly Live Sessions", desc: "Join live classes covering the latest AI tools, strategies, and real-world case studies." },
  { icon: MessageSquare, title: "Direct Q&A", desc: "Get your questions answered in real-time by industry practitioners." },
  { icon: Calendar, title: "Scheduled Mentorship", desc: "Book 1-on-1 mentorship calls to get personalized guidance on your journey." },
  { icon: Users, title: "Peer Learning", desc: "Collaborate with fellow students, share wins, and grow together." },
];

const LiveClasses = () => (
  <div>
    <PageHero title="Live Classes &" highlight="Mentorship" subtitle="Real-time learning with direct access to mentors who run successful AI automation businesses." />
    <section className="section-padding pt-8">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 100}>
              <GlassCard className="text-center h-full">
                <f.icon className="w-10 h-10 mx-auto mb-4 opacity-80" />
                <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={300}>
          <div className="text-center mt-10">
            <Button asChild variant="hero" size="lg">
              <Link to="/pricing">Join Now</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default LiveClasses;
