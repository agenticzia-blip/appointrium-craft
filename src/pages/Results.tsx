import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Ahmed R.", result: "Landed 3 clients in first month", quote: "The cold emailing engine alone was worth 10x the investment. I had paying clients within weeks." },
  { name: "Sara K.", result: "Built a 6-figure AI agency", quote: "Appointrium gave me the exact systems I needed. The voice agents module changed everything for my business." },
  { name: "Usman M.", result: "Closed first client in 14 days", quote: "I went from knowing nothing about AI to running automations for a real estate agency. The mentorship was incredible." },
  { name: "Fatima A.", result: "Automated entire clinic workflow", quote: "I built a complete patient intake and appointment system using N8N. The clinic owner couldn't believe it." },
  { name: "Ali H.", result: "Earning $3K/month from AI services", quote: "The solution-based approach made it so easy to pitch clients. They see exactly what they're getting." },
  { name: "Zara T.", result: "Quit 9-5 after 2 months", quote: "The funnel systems and outreach templates gave me everything I needed to go full-time with AI automation." },
];

const Results = () => (
  <div>
    <PageHero title="Student" highlight="Results" subtitle="Real students. Real results. No fluff. See what's possible when you take action." />
    <section className="section-padding pt-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <GlassCard className="h-full flex flex-col">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-foreground text-foreground opacity-60" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-1">"{t.quote}"</p>
                <div>
                  <p className="font-display font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.result}</p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Results;
