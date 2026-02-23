import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Database, Search, FileText, CheckCircle } from "lucide-react";

const ragConcepts = [
  { icon: Search, title: "Retrieval", desc: "The agent searches through your documents, databases, or knowledge bases to find the most relevant information." },
  { icon: Database, title: "Augmented", desc: "The retrieved data is injected into the AI's context, giving it accurate, up-to-date knowledge beyond its training." },
  { icon: FileText, title: "Generation", desc: "The AI generates precise, grounded responses based on your real data — not hallucinated guesses." },
];

const useCases = [
  "A customer support bot that answers questions using your company's actual documentation",
  "An internal assistant that searches through SOPs, policies, and training materials",
  "A legal research agent that pulls from case law databases and generates summaries",
  "A sales assistant that knows your product catalog and pricing inside out",
  "A medical assistant that references clinical guidelines for accurate responses",
];

const WhatIsRAGAgentSection = () => (
  <>
    <section className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            What is a <span className="serif-italic text-gradient">RAG Agent</span><span className="text-gradient">?</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            RAG (Retrieval-Augmented Generation) is the secret behind AI that actually knows your business.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ragConcepts.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 100}>
              <GlassCard className="text-center h-full">
                <c.icon className="w-10 h-10 mx-auto mb-4 opacity-80" strokeWidth={1.5} />
                <h3 className="font-display font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
            RAG Agents in <span className="serif-italic text-gradient">Action</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Real use cases where RAG agents outperform basic chatbots.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <GlassCard className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              {useCases.map((uc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 opacity-70" />
                  <span className="text-sm text-muted-foreground">{uc}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>

    <section className="section-padding pt-0 text-center">
      <ScrollReveal>
        <Button asChild variant="hero" size="lg" className="rounded-full">
          <Link to="/pricing">Enroll Now</Link>
        </Button>
      </ScrollReveal>
    </section>
  </>
);

export default WhatIsRAGAgentSection;
