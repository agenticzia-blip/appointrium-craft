import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="h-screen overflow-hidden">
      <section className="section-padding pt-28 pb-20 h-full flex items-center relative">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
              <span className="text-sm font-display font-medium text-foreground">60-Days Client Guarantee</span>
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
                <a href="tel:+923303120032">Call Now <Phone className="w-4 h-4" /></a>
              </Button>
              <Button asChild variant="hero-outline" size="default" className="justify-center gap-2 rounded-full h-12 w-full sm:w-auto sm:h-11 px-7 text-sm">
                <a href="https://wa.me/923303120032" target="_blank" rel="noopener noreferrer">Chat on WhatsApp <MessageCircle className="w-4 h-4" /></a>
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <p className="mt-10 text-xs uppercase tracking-[0.25em] text-muted-foreground font-display">
              60-DAYS RESULTS GUARANTEE OR $0 COST
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
