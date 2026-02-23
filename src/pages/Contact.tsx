import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <div>
    <section className="section-padding pt-32 text-center">
      <div className="container-narrow">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
            Get in <span className="serif-italic text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            Ready to start your AI automation journey? Reach out and we'll guide you to the right plan.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Mail, label: "Email", value: "appointfunnels@gmail.com", href: "mailto:appointfunnels@gmail.com" },
            { icon: Phone, label: "WhatsApp", value: "+92 320 5067483", href: "https://wa.me/923205067483" },
            { icon: MapPin, label: "Location", value: "Pakistan", href: undefined },
          ].map((c, i) => (
            <ScrollReveal key={c.label} delay={i * 100}>
              <GlassCard className="text-center">
                <c.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                <h3 className="font-display font-semibold text-sm mb-1">{c.label}</h3>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{c.value}</p>
                )}
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="glass-strong rounded-2xl p-8 mt-12 glow max-w-xl mx-auto text-center">
            <p className="text-lg font-display font-semibold mb-2">Prefer a quick chat?</p>
            <p className="text-sm text-muted-foreground mb-4">Message us on WhatsApp for the fastest response.</p>
            <a
              href="https://wa.me/923205067483"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-6 py-3 rounded-lg font-display font-semibold text-sm hover:bg-foreground/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default Contact;
