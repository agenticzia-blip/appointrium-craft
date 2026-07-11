import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE = "https://appointrium-craft.lovable.app";
const BRAND = "Appointrium Academy";

type Meta = {
  title: string;
  description: string;
  jsonLd?: object | object[];
};

const META: Record<string, Meta> = {
  "/": {
    title: "Appointrium Academy — Land Your First AI Client in 60 Days",
    description:
      "Master AI automation, N8N, and AI agents. Land your first paying client in 60 days — or you don't pay.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need coding experience to join?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Appointrium Academy is designed for beginners — no prior coding required.",
          },
        },
        {
          "@type": "Question",
          name: "What is the 60-day client guarantee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Land your first AI automation client within 60 days of finishing the course, or you don't pay.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Plans start at PKR 4,000 (Starter). Professional is PKR 12,000 and Elite is PKR 16,000.",
          },
        },
      ],
    },
  },
  "/about": {
    title: "About — Appointrium Academy",
    description:
      "Learn how Appointrium Academy helps students master AI automation and secure their first paying client.",
  },
  "/why-ai": {
    title: "Why AI Automation — Appointrium Academy",
    description:
      "Why AI automation is one of the highest-demand freelance skills in 2026 and beyond.",
  },
  "/what-is-ai-automation": {
    title: "What Is AI Automation? — Appointrium Academy",
    description:
      "A beginner-friendly explainer on AI automation, agents, and how businesses use them today.",
  },
  "/courses": {
    title: "Courses — Appointrium Academy",
    description:
      "Explore every Appointrium course: N8N, AI Agents, Voice Agents, WhatsApp Automation and more.",
  },
  "/n8n-course": {
    title: "N8N Masterclass — Appointrium Academy",
    description:
      "Master N8N workflow automation from zero to production and build systems clients pay for.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "N8N Masterclass",
      description:
        "End-to-end N8N workflow automation course covering triggers, integrations, and production deployments.",
      provider: { "@type": "Organization", name: BRAND, sameAs: SITE },
    },
  },
  "/ai-agents-course": {
    title: "AI Agents Course — Appointrium Academy",
    description:
      "Build intelligent AI agents that solve real business problems and generate recurring revenue.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "AI Agents Course",
      description:
        "Design, build, and deploy production AI agents for support, sales, onboarding, and more.",
      provider: { "@type": "Organization", name: BRAND, sameAs: SITE },
    },
  },
  "/voice-agents": {
    title: "Voice Agents — Appointrium Academy",
    description:
      "Build AI voice agents for calls, booking, and customer support using industry-standard tools.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "Voice Agents",
      description: "Design and deploy AI voice agents for real business use cases.",
      provider: { "@type": "Organization", name: BRAND, sameAs: SITE },
    },
  },
  "/whatsapp-automation": {
    title: "WhatsApp Automation — Appointrium Academy",
    description:
      "Automate sales, support, and onboarding on WhatsApp using AI agents and workflows.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Course",
      name: "WhatsApp Automation",
      description: "Build production WhatsApp automations for lead capture, sales, and support.",
      provider: { "@type": "Organization", name: BRAND, sameAs: SITE },
    },
  },
  "/live-classes": {
    title: "Live Classes — Appointrium Academy",
    description: "Live, mentor-led sessions to accelerate your AI automation journey.",
  },
  "/solution-agents": {
    title: "Solution Agents — Appointrium Academy",
    description: "Industry-specific AI agents that solve real problems for real businesses.",
  },
  "/get-first-client": {
    title: "Get Your First Client — Appointrium Academy",
    description:
      "The exact playbook Appointrium students use to land their first paying AI automation client.",
  },
  "/appoint-funnels": {
    title: "Appointment Funnels — Appointrium Academy",
    description:
      "Build high-converting appointment funnels for AI automation service providers.",
  },
  "/tools": {
    title: "Tools You'll Master — Appointrium Academy",
    description:
      "Industry-standard tools and platforms behind every modern AI automation business.",
  },
  "/results": {
    title: "Student Results — Appointrium Academy",
    description: "Real wins from Appointrium Academy students landing paying AI clients.",
  },
  "/pricing": {
    title: "Pricing — Appointrium Academy",
    description:
      "Starter, Professional, and Elite plans — plus the 60-day first-client guarantee.",
  },
  "/contact": {
    title: "Contact — Appointrium Academy",
    description: "Reach Appointrium Academy on WhatsApp or email — no forms, just real people.",
  },
  "/landing": {
    title: "Appointrium Academy — Start Now",
    description: "Land your first AI automation client in 60 days with Appointrium Academy.",
  },
  "/student-form": {
    title: "Student Onboarding — Appointrium Academy",
    description: "Onboarding form for enrolled Appointrium Academy students.",
  },
  "/privacy-policy": {
    title: "Privacy Policy — Appointrium Academy",
    description: "Privacy, refund, and course flexibility policies for Appointrium Academy.",
  },
};

const FALLBACK: Meta = {
  title: "Appointrium Academy — Master AI Automation",
  description:
    "Master AI systems and land your first client in 60 days — or you don't pay.",
};

const SEO = () => {
  const { pathname } = useLocation();
  const meta = META[pathname] ?? FALLBACK;
  const url = `${SITE}${pathname}`;
  const jsonLdArray = meta.jsonLd
    ? Array.isArray(meta.jsonLd)
      ? meta.jsonLd
      : [meta.jsonLd]
    : [];

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {jsonLdArray.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
