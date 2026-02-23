import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Users, Award, Lightbulb } from "lucide-react";

const About = () => (
  <div>
    <PageHero title="About" highlight="Appointrium Academy" subtitle="We exist to make AI automation accessible, practical, and profitable for everyone." />
    <section className="section-padding pt-8">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "Community-Driven", desc: "Built by practitioners who run real AI automation agencies." },
            { icon: Award, title: "Results-First", desc: "Every module is designed around getting you paying clients." },
            { icon: Lightbulb, title: "Always Current", desc: "Updated with the latest AI tools, workflows, and strategies." },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <GlassCard className="text-center">
                <item.icon className="w-10 h-10 mx-auto mb-4 opacity-80" />
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={200}>
          <div className="glass-strong rounded-2xl p-10 mt-12 text-center">
            <h3 className="font-display font-bold text-xl mb-4">Our Mission</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Appointrium Academy was founded to bridge the gap between AI technology and real business results. We don't teach theory — we teach systems that generate revenue. From N8N workflows to voice agents to full client acquisition engines, everything is built for action.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default About;
