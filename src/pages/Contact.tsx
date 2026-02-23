import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

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
    value: "+92 320 5067483",
    sub: "Fastest response",
    href: "https://wa.me/923205067483",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+92 320 5067483",
    sub: undefined,
    href: "tel:+923205067483",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}\nSubject: ${form.subject}\n\n${form.message}`
    );
    window.open(`mailto:appointfunnels@gmail.com?subject=${encodeURIComponent(form.subject || "Contact Form")}&body=${body}`, "_blank");
    toast({ title: "Opening your email client..." });
  };

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

      {/* Main Content */}
      <section className="section-padding pt-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Contact Info */}
          <div>
            <ScrollReveal>
              <h2 className="text-2xl font-display font-bold mb-6">Contact Information</h2>
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

          {/* Right — Form */}
          <ScrollReveal delay={200}>
            <GlassCard hover={false}>
              <h2 className="text-2xl font-display font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-1.5 block">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} maxLength={100} />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-1.5 block">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} maxLength={255} />
                </div>
                <div>
                  <Label htmlFor="whatsapp" className="text-sm font-medium mb-1.5 block">WhatsApp Number</Label>
                  <Input id="whatsapp" name="whatsapp" placeholder="+92 300 1234567" value={form.whatsapp} onChange={handleChange} maxLength={20} />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium mb-1.5 block">Subject</Label>
                  <Input id="subject" name="subject" placeholder="How can we help?" value={form.subject} onChange={handleChange} maxLength={200} />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-1.5 block">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us more..." rows={4} value={form.message} onChange={handleChange} maxLength={1000} />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message →
                </Button>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom Icons Row */}
      <section className="section-padding pt-8 pb-16">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Mail, label: "Email Us", value: "appointfunnels@gmail.com" },
            { icon: Phone, label: "Call Us", value: "+92 320 5067483" },
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
