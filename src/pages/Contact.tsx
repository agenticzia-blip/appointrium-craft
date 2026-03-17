import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "appointfunnels@gmail.com",
    sub: undefined,
    href: "mailto:appointfunnels@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+92 330 3120032",
    sub: "Fastest response",
    href: "https://wa.me/923303120032",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+92 330 3120032",
    sub: undefined,
    href: "tel:+923303120032",
  },
];

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding pt-32 pb-8 text-center">
        <div className="container-narrow">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
              Get in <span className="serif-italic text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Ready to start your AI automation journey? Reach out and we'll guide you to the right plan.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding pt-8">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-display font-bold mb-6 text-center">Contact Information</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {contactInfo.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 80}>
                <a href={c.href} target="_blank" rel="noopener noreferrer">
                  <GlassCard className="flex items-center gap-4 !py-5">
                    <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-sm">{c.title}</h3>
                      <p className="text-sm text-muted-foreground">{c.value}</p>
                      {c.sub && <p className="text-xs text-muted-foreground">{c.sub}</p>}
                    </div>
                  </GlassCard>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <GlassCard hover={false} className="mt-4 !py-5">
              <h3 className="font-display font-bold text-sm mb-1 flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" strokeWidth={1.5} /> Response Time
              </h3>
              <p className="text-sm text-muted-foreground">
                We typically respond within 24 hours. For urgent inquiries, WhatsApp is the fastest way to reach us.
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom Icons Row */}
      <section className="section-padding pt-8 pb-16">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Mail, label: "Email Us", value: "appointfunnels@gmail.com" },
            { icon: Phone, label: "Call Us", value: "+92 330 3120032" },
            { icon: MapPin, label: "Location", value: "We teach online" },
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 80}>
              <GlassCard className="text-center">
                <item.icon className="w-8 h-8 mx-auto mb-3 text-primary opacity-80" strokeWidth={1.5} />
                <h3 className="font-display font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.value}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
