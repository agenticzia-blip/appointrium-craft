import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Mail, Phone, MessageCircle, Clock, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MessageCircle, title: "WhatsApp", value: "+92 330 3120032", sub: "Fastest response", href: "https://wa.me/923303120032" },
  { icon: Mail, title: "Email", value: "appointfunnels@gmail.com", href: "mailto:appointfunnels@gmail.com" },
  { icon: Phone, title: "Phone", value: "+92 330 3120032", href: "tel:+923303120032" },
];

const FormPage = () => {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Please fill in your name and email", variant: "destructive" });
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
      setForm({ name: "", email: "", whatsapp: "", message: "" });
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
              Ready to Start Your <span className="serif-italic text-gradient">Journey?</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Fill out the form and our team will reach out to guide you to the perfect plan. No pressure, no spam — just real help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content — Form on top for mobile */}
      <section className="section-padding pt-8 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form — appears first on mobile */}
          <ScrollReveal className="order-1">
            <GlassCard hover={false}>
              <h2 className="text-2xl font-display font-bold mb-6">Apply Now</h2>
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
                  <Label htmlFor="fp-message" className="text-sm font-medium mb-1.5 block">Message (optional)</Label>
                  <Textarea id="fp-message" name="message" placeholder="Any questions or preferred plan?" rows={3} value={form.message} onChange={handleChange} maxLength={500} />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Sending..." : <>Submit & Enroll <Rocket className="ml-2 w-4 h-4" /></>}
                </Button>
              </form>
            </GlassCard>
          </ScrollReveal>

          {/* Contact Info — appears second on mobile */}
          <div className="order-2">
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
