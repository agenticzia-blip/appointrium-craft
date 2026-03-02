import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, Crown, Zap, Gem, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for beginners who want to learn the fundamentals.",
    price: "3,000",
    originalPrice: "4,000",
    icon: Zap,
    recommended: false,
    features: [
      "N8N Masterclass",
      "Client Hunting Program",
      "Full Chat Support",
      "Basics of GoHighLevel",
      "AI Chatbot",
      "MCP Connections",
      "5 Live Agents Build",
    ],
  },
  {
    name: "Professional",
    subtitle: "Everything you need to build a profitable automation business.",
    price: "7,000",
    originalPrice: "10,000",
    icon: Crown,
    recommended: true,
    features: [
      "Everything in Starter",
      "N8N Self Host Free Method",
      "AI Agents Course",
      "Voice Agents Program",
      "WhatsApp Automation",
      "Solution-Based AI Agents",
      "Live Classes & Mentorship",
      "Appoint Funnels System",
    ],
  },
  {
    name: "Elite",
    subtitle: "Premium mentorship for serious agency builders.",
    price: "12,000",
    originalPrice: "20,000",
    icon: Gem,
    recommended: false,
    features: [
      "All Professional Features",
      "Full Business Launch",
      "Website Design for Your Agency",
      "Handle First 10 Sales Calls",
      "Trained Use of Appoint Funnels Testimonials",
      "One Auto Dialer for Dialing Calls",
      "Use Our Cold Calling & Cold Emailing Scripts",
      "1-on-1 Coaching Calls",
      "Done-For-You Templates",
      "White-Label Resources",
      "Agency Building Blueprint",
      "Lifetime Updates",
      "90-Day Guarantee",
    ],
  },
];
const PricingSection = () => (
  <section className="section-padding text-center">
    <div className="container-narrow">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Pricing & <span className="serif-italic text-gradient">Enrollment</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-4">
          Choose the plan that matches your ambition. All plans include our bold promise.
        </p>
        <p className="text-sm font-display font-semibold text-foreground/80 mb-12">
          🔥 Limited-time Ramadan Offer
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <ScrollReveal key={plan.name} delay={i * 120}>
            <div
              className={`glass rounded-2xl p-8 text-left relative h-full flex flex-col ${
                plan.recommended ? "border border-foreground/20" : "border border-border"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-primary-foreground text-xs font-display font-semibold px-4 py-1 rounded-full flex items-center gap-1.5">
                  Recommended
                </div>
              )}
              <plan.icon className="w-10 h-10 mb-5 opacity-50" strokeWidth={1.5} />
              <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-5">{plan.subtitle}</p>
              <div className="mb-8">
                <span className="text-3xl font-display font-bold">{plan.originalPrice} PKR</span>
                <span className="text-sm text-muted-foreground ml-2">one-time</span>
              </div>
              <div className="flex flex-col gap-3.5 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <CheckCircle className="w-4.5 h-4.5 shrink-0 mt-0.5 text-emerald-500" />
                    <span className="text-sm text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant={plan.recommended ? "hero" : "hero-outline"} className="w-full">
                <Link to="/contact" className="flex items-center justify-center gap-2">Apply Now <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <div className="glass-strong rounded-2xl p-8 mt-12 glow max-w-2xl mx-auto text-center">
          <p className="text-xl font-display font-semibold mb-2">Our Bold Promise</p>
          <p className="text-muted-foreground">
            Get your first AI automation client in 90 days or you don't pay.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PricingSection;
