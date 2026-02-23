import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import GlassCard from "@/components/GlassCard";
import { Zap, Bot, Phone, MessageSquare, Target, Rocket, BookOpen, Video, Cpu, Users } from "lucide-react";

const allCourses = [
  { icon: Zap, title: "N8N Masterclass", desc: "Full N8N beginner to advanced. Includes self-host free method & real business automations.", path: "/n8n-course" },
  { icon: Bot, title: "AI Agents Course", desc: "Solution-based AI agents for real businesses. Build systems clients actually pay for.", path: "/ai-agents-course" },
  { icon: Phone, title: "Voice Agents Program", desc: "AI receptionists, cold callers, lead reactivation & order confirmation agents.", path: "/voice-agents" },
  { icon: MessageSquare, title: "WhatsApp Automation", desc: "Full WhatsApp automation systems for client communication at scale.", path: "/whatsapp-automation" },
  { icon: Video, title: "Live Classes & Mentorship", desc: "Weekly live sessions, Q&A, and direct mentorship from industry practitioners.", path: "/live-classes" },
  { icon: Cpu, title: "Solution-Based AI Agents", desc: "Build AI agents that solve specific business problems for specific industries.", path: "/solution-agents" },
  { icon: Target, title: "Get Your First Client", desc: "Full cold emailing engine, outreach systems, and client acquisition strategies.", path: "/get-first-client" },
  { icon: Rocket, title: "Appoint Funnels System", desc: "Complete funnel building, lead generation & conversion systems.", path: "/appoint-funnels" },
  { icon: BookOpen, title: "Tools You'll Master", desc: "N8N, GoHighLevel, AI APIs, voice platforms, and more.", path: "/tools" },
  { icon: Users, title: "Student Results", desc: "Real testimonials and results from our students.", path: "/results" },
];

const Courses = () => (
  <div>
    <PageHero title="All" highlight="Courses" subtitle="Everything you need to go from zero to a thriving AI automation business." />
    <section className="section-padding pt-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80}>
              <Link to={c.path} className="block h-full">
                <GlassCard className="h-full text-center">
                  <c.icon className="w-10 h-10 mx-auto mb-4 opacity-80" />
                  <h3 className="font-display font-semibold text-lg mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </GlassCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Courses;
