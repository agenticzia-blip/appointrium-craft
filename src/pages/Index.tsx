import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import WhatIsAIAutomationSection from "@/components/WhatIsAIAutomationSection";
import WhatIsAIAgentsSection from "@/components/WhatIsAIAgentsSection";
import AIAgentsVsAutomationSection from "@/components/AIAgentsVsAutomationSection";
import PricingSection from "@/components/PricingSection";
import { BookOpen, Bot, Phone, MessageSquare, Zap, Users, Target, Rocket, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";

const courses = [
{ icon: Zap, title: "N8N Masterclass", desc: "From beginner to advanced. Build real business automations.", path: "/n8n-course" },
{ icon: Bot, title: "AI Agents Course", desc: "Solution-based AI agents for real-world businesses.", path: "/ai-agents-course" },
{ icon: Phone, title: "Voice Agents Program", desc: "Build AI receptionists, cold callers & more.", path: "/voice-agents" },
{ icon: MessageSquare, title: "WhatsApp Automation", desc: "Automate client communication at scale.", path: "/whatsapp-automation" },
{ icon: Target, title: "Get Your First Client", desc: "Full cold emailing engine & outreach systems.", path: "/get-first-client" },
{ icon: Rocket, title: "Appoint Funnels System", desc: "Funnels & outreach that convert.", path: "/appoint-funnels" }];


const faqs = [
{ q: "Do I need coding experience?", a: "No. Our courses are designed for complete beginners. We teach you everything from scratch using no-code and low-code tools like N8N." },
{ q: "How long does it take to get results?", a: "Most students land their first client within 30–90 days. Our bold promise guarantees it — or you don't pay." },
{ q: "What tools will I learn?", a: "N8N, AI agents, voice calling systems, WhatsApp automation, GoHighLevel, and complete funnel-building systems." },
{ q: "Is this a SaaS product?", a: "No. Appointrium Academy is a course-based program. You learn real skills, build real systems, and get real clients." },
{ q: "Can I access courses on mobile?", a: "Yes. All course content is accessible on any device, anytime." },
{ q: "What is the refund policy?", a: "Get your first AI automation client in 90 days or you don't pay. That's our bold promise." }];


const Index = () => {
  return (
    <div>
      {/* Hero */}
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
            <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto mb-10">A complete academy to master n8n, AI agents, voice agents & how to sell them .

            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mx-auto w-full max-w-xs sm:max-w-none sm:w-auto">
              <Button asChild variant="hero-outline" size="default" className="justify-center gap-2 rounded-full h-12 w-full sm:w-auto sm:h-11 px-7 text-sm">
                <Link to="/courses">Explore Courses <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="hero-outline" size="default" className="justify-center rounded-full h-12 w-full sm:w-auto sm:h-11 px-7 text-sm">
                <Link to="/get-first-client">Get Your First Client</Link>
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="mt-10 text-xs uppercase tracking-[0.25em] text-muted-foreground font-display">90-DAYS RESULTS GUARANTEE OR $0 COST

            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Everything You Need */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What You Learn About <span className="serif-italic text-gradient">AI Automation?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-12">
              From zero to client-ready. Real skills, real systems, real income.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c, i) =>
            <ScrollReveal key={c.title} delay={i * 100}>
                <Link to={c.path}>
                  <GlassCard className="text-center h-full">
                    <c.icon className="w-10 h-10 mx-auto mb-4 text-foreground opacity-80" strokeWidth={1.5} />
                    <h3 className="font-display font-semibold text-lg mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground">{c.desc}</p>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* What is AI Automation */}
      <WhatIsAIAutomationSection />

      {/* What is AI Agents */}
      <WhatIsAIAgentsSection />

      {/* AI Agents vs AI Automation */}
      <AIAgentsVsAutomationSection />

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Frequently Asked <span className="serif-italic text-gradient">Questions</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((f, i) =>
                <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-lg px-6 border-none">
                    <AccordionTrigger className="text-left font-display font-medium text-sm hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bold Promise */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <div className="glass-strong rounded-2xl p-10 md:p-16 glow">
              <BookOpen className="w-12 h-12 mx-auto mb-6 opacity-60" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our <span className="serif-italic text-gradient">Bold Promise</span>
              </h2>
              <p className="text-xl md:text-2xl font-display font-semibold mb-4">
                Get your first AI automation client in 90 days or you don't pay.
              </p>
              <p className="text-muted-foreground max-w-lg mx-auto mb-2">
                We're so confident in this program that we put our money where our mouth is.
              </p>
              <p className="text-sm font-display font-semibold mt-4 text-foreground/80">
                🔥 Limited-time Ramadan Offer
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding text-center">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to <span className="serif-italic text-gradient">Start?</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Join hundreds of students building real AI businesses. Your journey starts now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/pricing">Enroll Now</Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/contact">Talk to Us</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>);

};

export default Index;
