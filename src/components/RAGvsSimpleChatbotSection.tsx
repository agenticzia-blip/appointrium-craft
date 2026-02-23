import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Database, MessageCircle, CheckCircle, X } from "lucide-react";

const ragFeatures = [
  "Answers from your actual data & documents",
  "Always up-to-date with latest information",
  "Reduces hallucinations dramatically",
  "Can cite sources for its answers",
  "Handles domain-specific questions accurately",
  "Learns from your knowledge base",
];

const chatbotFeatures = [
  "Generic responses from training data",
  "Knowledge frozen at training cutoff",
  "Prone to hallucinating facts",
  "Cannot reference specific documents",
  "Struggles with niche or proprietary topics",
  "No access to your business data",
];

const RAGvsSimpleChatbotSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
          RAG Agents vs <span className="serif-italic text-gradient">Simple Chatbots</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Not all AI chatbots are created equal. Here's why RAG agents are the future.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <ScrollReveal delay={100}>
          <GlassCard className="h-full">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-8 h-8 opacity-70" strokeWidth={1.5} />
              <h3 className="font-display font-bold text-xl">RAG Agent</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Powered by your real data. Retrieves, understands, and generates accurate responses grounded in facts.
            </p>
            <ul className="space-y-2">
              {ragFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0 opacity-60" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <GlassCard className="h-full">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-8 h-8 opacity-70" strokeWidth={1.5} />
              <h3 className="font-display font-bold text-xl">Simple Chatbot</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Relies only on pre-trained knowledge. No access to your specific business data or documents.
            </p>
            <ul className="space-y-2">
              {chatbotFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <X className="w-4 h-4 shrink-0 opacity-40" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={300}>
        <GlassCard className="max-w-2xl mx-auto text-center">
          <p className="text-foreground font-display font-semibold mb-2">The Bottom Line</p>
          <p className="text-sm text-muted-foreground">
            Simple chatbots guess. RAG agents know. We teach you how to build RAG-powered systems that businesses actually pay for.
          </p>
        </GlassCard>
      </ScrollReveal>

      <div className="text-center mt-10">
        <ScrollReveal>
          <Button asChild variant="hero" size="lg" className="rounded-full">
            <Link to="/pricing">Enroll Now</Link>
          </Button>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default RAGvsSimpleChatbotSection;
