import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MessageCircle, title: "WhatsApp", value: "+92 320 5067483", sub: "Fastest response", href: "https://wa.me/923205067483" },
  { icon: Mail, title: "Email", value: "appointfunnels@gmail.com", href: "mailto:appointfunnels@gmail.com" },
  { icon: Phone, title: "Phone", value: "+92 320 5067483", href: "tel:+923205067483" },
];

const FormPage = () => {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://appointruim1.app.n8n.cloud/webhook/appointruim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "form-page" }),
      });
      if (!res.ok) throw new Error("Failed");
      toast({ title: "Message sent successfully!" });
      setForm({ name: "", email: "", whatsapp: "", subject: "", message: "" });
    } catch {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="section-padding pt-32 pb-8 text-center">
        <div className="container-narrow">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
              Send Us a <span className="serif-italic text-gradient">Message</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Have a question or ready to get started? Fill out the form and we'll get back to you shortly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content — Form on top for mobile, contact info below */}
      <section className="section-padding pt-8 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form — appears first on mobile */}
          <ScrollReveal className="order-1 lg:order-1">
            <GlassCard hover={false}>
              <h2 className="text-2xl font-display font-bold mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="fp-name" className="text-sm font-medium mb-1.5 block">Name *</Label>
                  <Input id="fp-name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} maxLength={100} />
                </div>
                <div>
                  <Label htmlFor="fp-email" className="text-sm font-medium mb-1.5 block">Email *</Label>
                  <Input id="fp-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} maxLength={255} />
                </div>
                <div>
                  <Label htmlFor="fp-whatsapp" className="text-sm font-medium mb-1.5 block">WhatsApp Number</Label>
                  <Input id="fp-whatsapp" name="whatsapp" placeholder="+92 300 1234567" value={form.whatsapp} onChange={handleChange} maxLength={20} />
                </div>
                <div>
                  <Label htmlFor="fp-subject" className="text-sm font-medium mb-1.5 block">Subject</Label>
                  <Input id="fp-subject" name="subject" placeholder="How can we help?" value={form.subject} onChange={handleChange} maxLength={200} />
                </div>
                <div>
                  <Label htmlFor="fp-message" className="text-sm font-medium mb-1.5 block">Message *</Label>
                  <Textarea id="fp-message" name="message" placeholder="Tell us more..." rows={4} value={form.message} onChange={handleChange} maxLength={1000} />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message →"}
                </Button>
              </form>
            </GlassCard>
          </ScrollReveal>

          {/* Contact Info — appears second on mobile */}
          <div className="order-2 lg:order-2">
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
        </div>
      </section>
    </div>
  );
};

export default FormPage;
