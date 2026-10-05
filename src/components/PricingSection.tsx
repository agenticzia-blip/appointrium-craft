import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, Crown } from "lucide-react";
import { pricingPlans } from "@/data/pricingPlans";

const PricingSection = () => (
  <section className="section-padding text-center">
    <div className="container-narrow">
      <ScrollReveal>
         <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Courses <span className="serif-italic text-gradient">Pricing.</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          Limited-time — grab your spot before it's gone.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pricingPlans.map((plan, i) => (
          <ScrollReveal key={plan.name} delay={i * 120}>
            <div
              className={`glass rounded-2xl p-8 text-left relative h-full flex flex-col ${
                plan.recommended ? "border border-foreground/20" : "border border-border"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-primary-foreground text-xs font-display font-semibold px-4 py-1 rounded-full flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5" />
                  Recommended
                </div>
              )}
              <plan.icon className="w-10 h-10 mb-5 opacity-50" strokeWidth={1.5} />
              <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-display font-bold">PKR {plan.price}</span>
                <span className="text-sm text-muted-foreground ml-2">one-time</span>
              </div>
              <div className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 opacity-60" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant={plan.recommended ? "hero" : "hero-outline"} className="w-full">
                <Link to={`/payment?plan=${plan.slug}`}>Choose {plan.name}</Link>
              </Button>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <div className="glass-strong rounded-2xl p-8 mt-12 glow max-w-2xl mx-auto text-center">
          <p className="text-xl font-display font-semibold mb-2">Choose the Support You Need</p>
          <p className="text-muted-foreground">
            Starter is self-paced. Professional and Elite include package-specific 45-day client outcomes.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PricingSection;
