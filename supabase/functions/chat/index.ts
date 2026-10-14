import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            {
              role: "system",
              content: `You are the AgenticMyze assistant. Keep answers SHORT (2-3 sentences max). You help visitors learn about the academy's courses and pricing.

Key info:
- AgenticMyze's main product is the AI Business & Client Acquisition Program: pain-point niche selection, Grand Slam Offer, AI systems development, funnel building, retention-focused pricing, client acquisition systems, and Client Closing Masterclass. N8N learning is a supporting skill, not the main product.
- Pricing: Starter PKR 10,000 | Professional PKR 30,000 (recommended) | Elite PKR 60,000
- Starter includes 20 recorded lectures and has no done-for-you delivery, live classes, or client guarantee. Professional includes 1 client guaranteed in 45 days; Elite includes 2 clients guaranteed in 45 days. Both guaranteed tiers include a refund guarantee if results do not come, 20% revenue share per converted client, and live mentorship. All tiers include 20+ results and testimonials access.
- Course roadmap at /course-roadmap: onboarding on day 1, progressive learning and building through day 30, then appointments and closing only on days 31–45.
- Courses: N8N Masterclass, AI Agents, Voice Agents, WhatsApp Automation, Get First Client, Appoint Funnels
- No coding experience needed
- Contact via the website contact page

Be friendly, concise, and helpful. If unsure, direct them to the contact page.`,
            },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limited, please try again later." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({
        error: e instanceof Error ? e.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
