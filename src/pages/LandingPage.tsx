import { useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import PricingSection from "@/components/PricingSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Rocket, Mail, Phone, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "Land your first AI client in 90 days — or you don't pay",
  "No coding experience required",
  "Full mentorship & live support",
  "Real systems, real results",
];

const LandingPage = () => {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [submitting, setSubmitting] = useState(false);

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
        body: JSON.stringify({ ...form, source: "landing" }),
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
      {/* Hero — same as homepage */}
      <section className="section-padding pt-28 pb-20 min-h-[90vh] flex items-center relative">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
              <span className="text-sm font-display font-medium text-foreground">90-Days Client Guarantee</span>
              <span>⚡</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.2] mb-6">
              Learn AI Agents.<br />
              <span className="serif-italic text-gradient">Automate Businesses.</span><br />
              Get Paid.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto mb-10">
              A complete academy to master n8n, AI agents, voice agents & how to sell them.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mx-auto w-full max-w-xs sm:max-w-none sm:w-auto">
              <Button asChild variant="hero-outline" size="default" className="justify-center gap-2 rounded-full h-12 w-full sm:w-auto sm:h-11 px-7 text-sm">
                <a href="#pricing-section">View Plans <ArrowRight className="w-4 h-4" /></a>
              </Button>
              <Button asChild variant="hero-outline" size="default" className="justify-center rounded-full h-12 w-full sm:w-auto sm:h-11 px-7 text-sm">
                <a href="#enroll-form">Enroll Now</a>
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="mt-10 text-xs uppercase tracking-[0.25em] text-muted-foreground font-display">
              90-DAYS RESULTS GUARANTEE OR $0 COST
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      {/* Enroll / Contact Form */}
      <section id="enroll-form" className="section-padding py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Why Join */}
          <div>
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Start Your <span className="serif-italic text-gradient">Journey?</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fill out the form and our team will reach out to guide you to the perfect plan. No pressure, no spam — just real help.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {[
                { icon: MessageCircle, title: "WhatsApp", value: "+92 320 5067483", href: "https://wa.me/923205067483" },
                { icon: Mail, title: "Email", value: "appointfunnels@gmail.com", href: "mailto:appointfunnels@gmail.com" },
                { icon: Phone, title: "Phone", value: "+92 320 5067483", href: "tel:+923205067483" },
              ].map((c, i) => (
                <ScrollReveal key={c.title} delay={i * 80}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer">
                    <GlassCard className="flex items-center gap-4 !py-5">
                      <span className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <c.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-sm">{c.title}</h3>
                        <p className="text-sm text-muted-foreground">{c.value}</p>
                      </div>
                    </GlassCard>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <ScrollReveal delay={200}>
            <GlassCard hover={false}>
              <h2 className="text-2xl font-display font-bold mb-6">Enroll Now</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="lp-name" className="text-sm font-medium mb-1.5 block">Name *</Label>
                  <Input id="lp-name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} maxLength={100} />
                </div>
                <div>
                  <Label htmlFor="lp-email" className="text-sm font-medium mb-1.5 block">Email *</Label>
                  <Input id="lp-email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} maxLength={255} />
                </div>
                <div>
                  <Label htmlFor="lp-whatsapp" className="text-sm font-medium mb-1.5 block">WhatsApp Number</Label>
                  <Input id="lp-whatsapp" name="whatsapp" placeholder="+92 300 1234567" value={form.whatsapp} onChange={handleChange} maxLength={20} />
                </div>
                <div>
                  <Label htmlFor="lp-message" className="text-sm font-medium mb-1.5 block">Message (optional)</Label>
                  <Textarea id="lp-message" name="message" placeholder="Any questions or preferred plan?" rows={3} value={form.message} onChange={handleChange} maxLength={500} />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Sending..." : <>Submit & Enroll <Rocket className="ml-2 w-4 h-4" /></>}
                </Button>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <div id="pricing-section">
        <PricingSection />
      </div>
    </div>
  );
};

export default LandingPage;
