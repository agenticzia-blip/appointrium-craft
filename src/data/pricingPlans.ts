import { Building2, Crown, Gem, Zap, type LucideIcon } from "lucide-react";

export type PlanSlug = "starter" | "professional" | "elite" | "enterprise";

export type PricingPlan = {
  slug: PlanSlug;
  name: string;
  price: string;
  amount: number;
  icon: LucideIcon;
  recommended: boolean;
  guaranteedClients: number;
  guaranteeDays: number | null;
  refundGuarantee: boolean;
  recordedLectures: number;
  features: string[];
};

export const coreProgramFeatures = [
  "Niche Selection Based on Business Pain Points",
  "Grand Slam Offer: An Offer People Can't Reject",
  "AI Systems Development",
  "Funnel Building",
  "Pricing Models That Retain Clients",
  "Client Acquisition Systems Building",
  "Client Closing Masterclass",
  "20+ Results & Testimonials Access",
  "n8n Learning for AI Systems (Supporting Skill)",
];

export const pricingPlans: PricingPlan[] = [
  {
    slug: "starter",
    name: "Quick-Scale",
    price: "10,000",
    amount: 10000,
    icon: Zap,
    recommended: false,
    guaranteedClients: 0,
    guaranteeDays: null,
    refundGuarantee: false,
    recordedLectures: 20,
    features: [
      "Full Client Acquisition Program — 20 Recorded Lectures",
      ...coreProgramFeatures,
      "Full Chat Support",
      "No Done-For-You System Delivery",
      "No Client Guarantee",
      "No Live Classes",
    ],
  },
  {
    slug: "professional",
    name: "Growth Catalyst",
    price: "30,000",
    amount: 30000,
    icon: Crown,
    recommended: true,
    guaranteedClients: 1,
    guaranteeDays: 45,
    refundGuarantee: true,
    recordedLectures: 20,
    features: [
      "All Quick-Scale Course Content & Recorded Lectures",
      "Full Done-For-You Program",
      "1 Client Guaranteed in 45 Days",
      "Refund Guarantee If Results Don't Come",
      "Free N8N Yearly Account",
      "20+ Results & Testimonials Access",
      "5+ Tool Stack Worth $400+: Apollo, Claude Code, N8N, Instantly, GoHighLevel & Retell AI",
      "Cold SMS Systems",
      "20% Revenue Share per Converted Client",
      "Live Classes & Mentorship",
    ],
  },
  {
    slug: "elite",
    name: "Scale",
    price: "60,000",
    amount: 60000,
    icon: Gem,
    recommended: false,
    guaranteedClients: 2,
    guaranteeDays: 45,
    refundGuarantee: true,
    recordedLectures: 20,
    features: [
      "All Growth Catalyst Content, Tools & Mentorship",
      "2 Clients Guaranteed in 45 Days",
      "Refund Guarantee If Results Don't Come",
      "20% Revenue Share per Converted Client",
      "Full Business Launch",
      "Website Design for Your Agency",
      "Handle First 10 Sales Calls",
      "1-on-1 Weekly Coaching Calls",
      "One Auto Dialer for Calling",
      "Cold Calling & Cold Emailing Scripts",
      "Done-For-You Templates",
      "White-Label Resources",
      "Agency Building Blueprint",
      "Lifetime Updates",
      "Claude Code Masterclass",
      "Claude Code Free Subscription",
    ],
  },
  {
    slug: "enterprise",
    name: "Enterprise",
    price: "200,000",
    amount: 200000,
    icon: Building2,
    recommended: false,
    guaranteedClients: 5,
    guaranteeDays: null,
    refundGuarantee: false,
    recordedLectures: 0,
    features: [
      "Build and launch your business from day one around your own idea or an existing business",
      "A direct 1-on-1 Zoom call with the business owner is required before starting",
      "5 clients guaranteed; no delivery timeframe specified",
      "Done-for-you launch: our team sets up and delivers the systems and tools for your business",
      "For established, revenue-generating agencies, accounting firms, medical billing companies, BPOs, and other B2B businesses",
      "Not for marketing agencies",
      "Physical businesses such as import/export may also be suitable",
    ],
  },
];

export const getPricingPlan = (slug: string | null) =>
  pricingPlans.find((plan) => plan.slug === slug);
// Expand inherited benefits so each package can be understood independently.
export const getPlanFeatures = (plan: PricingPlan): string[] => {
  if (plan.slug === "enterprise") return plan.features;
  const index = pricingPlans.findIndex((item) => item.slug === plan.slug);
  const inherited = index > 0 ? pricingPlans[index - 1] : undefined;
  const own = plan.features.filter((feature) => !feature.startsWith("All Quick-Scale") && !feature.startsWith("All Growth Catalyst"));
  const base = inherited ? getPlanFeatures(inherited).filter((feature) => !feature.startsWith("No ") && !feature.includes("Client Guaranteed") && !feature.includes("Clients Guaranteed")) : [];
  return [...new Set([...base, ...own])];
};
