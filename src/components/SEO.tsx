import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE = "https://appointrium-craft.lovable.app";
const BRAND = "AgenticMyze";

type Meta = {
  title: string;
  description: string;
  jsonLd?: object | object[];
};

const META: Record<string, Meta> = {
  "/": {
    title: "AgenticMyze — Build AI Skills and Win Clients",
    description:
      "Master AI automation, N8N, and AI agents with plans ranging from recorded lessons to 45-day client outcomes.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need coding experience to join?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. AgenticMyze is designed for beginners — no prior coding required.",
          },
        },
        {
          "@type": "Question",
          name: "Which packages include a client guarantee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional includes 1 client guaranteed in 45 days and Elite includes 2 clients guaranteed in 45 days. Starter has no client guarantee.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Plans start at PKR 10,000 for Starter. Professional is PKR 30,000 and Elite is PKR 60,000.",
          },
        },
      ],
    },
  },
  "/about": {
    title: "About — AgenticMyze",
    description:
      "Learn how AgenticMyze helps students master AI automation and secure paying clients.",
  },
  "/why-ai": {
    title: "Why AI Automation — AgenticMyze",
    description:
      "Why AI automation is one of the highest-demand freelance skills in 2026 and beyond.",
  },
  "/what-is-ai-automation": {
    title: "What Is AI Automation? — AgenticMyze",
    description:
      "A beginner-friendly explainer on AI automation, agents, and how businesses use them today.",
  },
  "/courses": {
    title: "Courses — AgenticMyze",
    description:
      "Explore every AgenticMyze course: N8N, AI Agents, Voice Agents, WhatsApp Automation and more.",
  },
  "/n8n-course": {
    title: "N8N Masterclass — AgenticMyze",
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
    title: "AI Agents Course — AgenticMyze",
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
    title: "Voice Agents — AgenticMyze",
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
    title: "WhatsApp Automation — AgenticMyze",
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
    title: "Live Classes — AgenticMyze",
    description: "Live, mentor-led sessions to accelerate your AI automation journey.",
  },
  "/solution-agents": {
    title: "Solution Agents — AgenticMyze",
    description: "Industry-specific AI agents that solve real problems for real businesses.",
  },
  "/get-first-client": {
    title: "Get Your First Client — AgenticMyze",
    description:
      "The exact playbook AgenticMyze students use to land their first paying AI automation client.",
  },
  "/appoint-funnels": {
    title: "Appointment Funnels — AgenticMyze",
    description:
      "Build high-converting appointment funnels for AI automation service providers.",
  },
  "/tools": {
    title: "Tools You'll Master — AgenticMyze",
    description:
      "Industry-standard tools and platforms behind every modern AI automation business.",
  },
  "/results": {
    title: "Student Results — AgenticMyze",
    description: "Real wins from AgenticMyze students landing paying AI clients.",
  },
  "/pricing": {
    title: "Pricing — AgenticMyze",
    description:
      "Compare AgenticMyze Starter, Professional, and Elite plans, including package-specific 45-day client outcomes.",
  },
  "/contact": {
    title: "Contact — AgenticMyze",
    description: "Reach AgenticMyze on WhatsApp or email — no forms, just real people.",
  },
  "/landing": {
    title: "AgenticMyze — Start Now",
    description: "Build client-ready AI automation skills with AgenticMyze.",
  },
  "/student-form": {
    title: "Student Enrollment — AgenticMyze",
    description: "Apply to enroll at AgenticMyze. Fill in your details and receive your unique Student ID.",
  },
  "/payment": {
    title: "Payment Details — AgenticMyze",
    description: "Complete your AgenticMyze package payment and send your receipt for confirmation.",
  },
  "/privacy-policy": {
    title: "Privacy Policy — AgenticMyze",
    description: "Privacy, refund, and course flexibility policies for AgenticMyze.",
  },
};

const FALLBACK: Meta = {
  title: "AgenticMyze — Master AI Automation",
  description:
    "Master AI systems, build client-ready workflows, and choose the support package that fits your goals.",
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
