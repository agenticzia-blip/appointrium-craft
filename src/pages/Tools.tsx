import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Zap, Bot, Phone, Globe, Mail, BarChart3, Database, Layers } from "lucide-react";

const tools = [
  { icon: Zap, name: "N8N", desc: "Open-source workflow automation platform" },
  { icon: Globe, name: "GoHighLevel", desc: "All-in-one CRM & marketing platform" },
  { icon: Bot, name: "AI APIs", desc: "OpenAI, Claude, and custom AI models" },
  { icon: Phone, name: "Voice AI Platforms", desc: "Vapi, Bland, and voice synthesis tools" },
  { icon: Mail, name: "Cold Email Tools", desc: "Instantly, Smartlead & outreach platforms" },
  { icon: BarChart3, name: "Analytics", desc: "Tracking, reporting & optimization tools" },
  { icon: Database, name: "Databases", desc: "Airtable, Supabase & data management" },
  { icon: Layers, name: "Integration Platforms", desc: "APIs, webhooks & middleware connections" },
];

const Tools = () => (
  <div>
    <PageHero title="Tools You'll" highlight="Master" subtitle="Industry-standard tools and platforms that power modern AI automation businesses." />
    <section className="section-padding pt-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 80}>
              <GlassCard className="text-center h-full">
                <t.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <h3 className="font-display font-semibold mb-1">{t.name}</h3>
                <p className="text-xs text-muted-foreground">{t.desc}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Tools;
