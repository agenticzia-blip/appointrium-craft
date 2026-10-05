import { Crown, Gem, Zap, type LucideIcon } from "lucide-react";

export type PlanSlug = "starter" | "professional" | "elite";

export type PricingPlan = {
  slug: PlanSlug;
  name: string;
  price: string;
  amount: number;
  icon: LucideIcon;
  recommended: boolean;
  features: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    slug: "starter",
    name: "Starter",
    price: "10,000",
    amount: 10000,
    icon: Zap,
    recommended: false,
    features: [
      "20 Recorded Lectures",
      "N8N Masterclass",
      "Client Hunting Program",
      "Full Chat Support",
      "Basics of GoHighLevel",
      "AI Chatbot",
      "MCP Connections",
      "No Done-For-You System Delivery",
      "No Client Guarantee",
      "No Live Classes",
    ],
  },
  {
    slug: "professional",
    name: "Professional",
    price: "30,000",
    amount: 30000,
    icon: Crown,
    recommended: true,
    features: [
      "Everything in Starter",
      "Full Done-For-You Program",
      "1 Client Guaranteed in 45 Days",
      "Refund Guarantee If Results Don't Come",
      "Free N8N Yearly Account",
      "20+ AppointFunnels Real Results Access",
      "5+ Tool Stack Worth $400+: Apollo, Claude Code, N8N, Instantly, GoHighLevel & Retell AI",
      "Cold SMS Systems",
      "20% Revenue Share per Converted Client",
      "Live Classes & Mentorship",
    ],
  },
  {
    slug: "elite",
    name: "Elite",
    price: "60,000",
    amount: 60000,
    icon: Gem,
    recommended: false,
    features: [
      "Everything in Professional",
      "2 Clients Guaranteed in 45 Days",
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
];

export const getPricingPlan = (slug: string | null) =>
  pricingPlans.find((plan) => plan.slug === slug);