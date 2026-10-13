export type CourseDay = {
  day: number;
  title: string;
  focus: "learning" | "appointments" | "closing";
  lecture?: number;
  assignment: string;
  outcome: string;
};

export const courseLectures = [
  "Onboarding & Your 45-Day Goals",
  "Business Pain Points & Niche Selection",
  "Validate Your Niche & Ideal Client",
  "Build Your Grand Slam Offer",
  "Offer Positioning & Proof",
  "AI Systems Development: Solution Design",
  "n8n Foundations & Workflow Building",
  "Connect AI, CRM & Business Tools",
  "Develop Your Client Demo",
  "Test & Prepare Your AI System",
  "Funnel Building: Message & Structure",
  "Build Your Appointment Funnel",
  "Pricing Models That Retain Clients",
  "Present Your Packages & Proposal",
  "Client Acquisition Systems Building",
  "Build Your Prospect List & Outreach",
  "Follow-Ups & Appointment Setting",
  "Client Closing Masterclass: Discovery",
  "Client Closing Masterclass: Objections & Negotiation",
  "Closing Rehearsal & Appointment Readiness",
];

const preparation: [string, number | undefined, string, string][] = [
  ["Onboarding & goals", 1, "Complete onboarding, assess your starting skills, and set your daily availability and client goal.", "Personal 45-day action plan"],
  ["Find business pain points", 2, "Compare business niches and list costly problems, missed leads, and repetitive work.", "Business pain-point shortlist"],
  ["Choose your niche", 3, "Validate demand and buying ability; choose one niche and define your ideal client.", "Validated niche and ideal client profile"],
  ["Build a Grand Slam Offer", 4, "Turn one painful problem into a clear outcome with scope, value, and delivery timeline.", "First offer draft"],
  ["Position your offer", 5, "Refine your promise and study the 20+ results and testimonials without claiming others’ results as your own.", "Clear offer and proof-based positioning"],
  ["Design your AI solution", 6, "Map the business process and specify where AI helps, where people approve, and what tools connect.", "AI solution blueprint"],
  ["Learn n8n foundations", 7, "Practice triggers, nodes, webhooks, data mapping, and a simple end-to-end workflow.", "Working practice workflow"],
  ["Connect your tools", 8, "Connect your AI service and CRM; map inputs, outputs, and safe handling of client data.", "Connected AI workflow"],
  ["Build your core AI system", 9, "Build the solution for your selected pain point with a useful client-facing demonstration.", "First functional demo"],
  ["Improve your demo", undefined, "Practice realistic scenarios and refine the workflow around your niche’s needs.", "Niche-specific demo"],
  ["Test reliability", 10, "Test missing data, failures, and human handoffs; document limitations and recovery steps.", "Tested demo and issue checklist"],
  ["Prepare the system presentation", undefined, "Record a walkthrough showing the problem, the workflow, and the practical business value.", "Client demo walkthrough"],
  ["Plan your funnel", 11, "Write the funnel headline, offer, proof section, and appointment call to action.", "Appointment funnel outline"],
  ["Build your funnel", 12, "Build a clear service page and connect the appointment booking journey.", "Working appointment funnel"],
  ["Check the booking journey", undefined, "Test the page, booking confirmation, and follow-up from a prospect’s perspective.", "Verified funnel and booking journey"],
  ["Choose retention-focused pricing", 13, "Define setup fees, recurring support, clear scope, and measurable ongoing value.", "Sustainable pricing model"],
  ["Prepare packages & proposal", 14, "Write a concise proposal with outcomes, scope, pricing, and responsibilities.", "Client-ready proposal"],
  ["Build your acquisition system", 15, "Map prospect sourcing, outreach, follow-up, appointment booking, and pipeline tracking.", "Client acquisition workflow"],
  ["Source qualified prospects", 16, "Build a relevant prospect list using public business information and clear fit criteria.", "Qualified prospect list"],
  ["Write your outreach", undefined, "Write personalized messages tied to business pain points and a clear next step.", "Outreach message set"],
  ["Prepare follow-ups & booking", 17, "Create respectful follow-ups and appointment confirmation messages; honor opt-outs.", "Follow-up and appointment sequence"],
  ["Launch your acquisition system", undefined, "Start outreach to qualified prospects and log replies, opportunities, and appointments.", "Active client acquisition pipeline"],
  ["Closing masterclass: discovery", 18, "Practice questions that uncover the problem, its cost, decision process, and desired outcome.", "Discovery call framework"],
  ["Closing masterclass: objections", 19, "Practice handling price, trust, and timing concerns with honest answers and clear value.", "Objection handling framework"],
  ["Rehearse the close", 20, "Run a mock discovery, demo, pricing discussion, and next-step agreement.", "Complete closing call rehearsal"],
  ["Refine your proposal", undefined, "Refine your proposal and offer using mock-call feedback without changing your chosen niche.", "Final sales proposal"],
  ["Review acquisition performance", undefined, "Review replies and lead quality; improve targeting and message clarity before the closing phase.", "Refined acquisition system"],
  ["Practice sales conversations", undefined, "Rehearse discovery and objections with your niche-specific demo and proposal.", "Confident sales presentation"],
  ["Prepare your appointments", undefined, "Qualify interested prospects and confirm agendas, decision-makers, and appointment times.", "Qualified appointment calendar"],
  ["Appointment & closing readiness", undefined, "Check your booking calendar, demo, proposal, and call preparation before the final phase.", "Ready-to-close pipeline"],
];

const sales: [string, "appointments" | "closing", string, string][] = [
  ["Confirm sales appointments", "appointments", "Confirm scheduled calls and invite interested prospects to available appointment slots.", "Confirmed appointment calendar"],
  ["Run discovery appointments", "appointments", "Hold scheduled calls to confirm needs, budget, authority, and urgency.", "Qualified sales opportunities"],
  ["Present solutions & proposals", "closing", "Use your prepared demo and proposal to connect the prospect’s problem to your offer.", "Proposals presented on sales calls"],
  ["Follow up on proposals", "closing", "Follow up with decision-makers, answer concerns, and agree a decision date.", "Clear decisions and next steps"],
  ["Conduct closing calls", "closing", "Discuss scope and commercial terms and ask qualified prospects for a commitment.", "Documented sales decisions"],
  ["Confirm the next appointments", "appointments", "Confirm upcoming calls and reschedule missed appointments with interested prospects.", "Updated appointment calendar"],
  ["Run decision-maker appointments", "appointments", "Meet decision-makers and confirm fit and purchase readiness.", "Decision-maker conversations completed"],
  ["Handle closing objections", "closing", "Address unresolved concerns directly on calls and agree a clear next step.", "Resolved objections or recorded decisions"],
  ["Follow up on open deals", "closing", "Contact prospects with pending proposals and confirm what is needed for a decision.", "Active deal decisions"],
  ["Run closing appointments", "closing", "Hold final proposal discussions and confirm agreed scope and price.", "Confirmed commercial decisions"],
  ["Confirm remaining appointments", "appointments", "Confirm remaining qualified prospect calls and reschedule no-shows.", "Final appointment calendar"],
  ["Present to remaining prospects", "closing", "Present your prepared solution and proposal during scheduled sales calls.", "Remaining proposals discussed"],
  ["Follow up with decision-makers", "closing", "Follow up on final questions and seek a clear acceptance or decline.", "Recorded proposal decisions"],
  ["Conduct final closing calls", "closing", "Finalize commercial discussions with ready prospects and confirm commitments.", "Agreed client commitments"],
  ["Final appointments & closing", "closing", "Complete scheduled closing calls and confirm outstanding proposal decisions.", "Final sales decisions and client commitments"],
];

export const courseDays: CourseDay[] = [
  ...preparation.map(([title, lecture, assignment, outcome], index) => ({ day: index + 1, title, lecture, assignment, outcome, focus: "learning" as const })),
  ...sales.map(([title, focus, assignment, outcome], index) => ({ day: index + 31, title, focus, assignment, outcome })),
];

export const coursePhases = [
  { id: "foundation", label: "Days 1–5", title: "Niche & offer", start: 1, end: 5 },
  { id: "systems", label: "Days 6–12", title: "AI systems", start: 6, end: 12 },
  { id: "funnel", label: "Days 13–17", title: "Funnels & pricing", start: 13, end: 17 },
  { id: "acquisition", label: "Days 18–22", title: "Client acquisition", start: 18, end: 22 },
  { id: "readiness", label: "Days 23–30", title: "Closing preparation", start: 23, end: 30 },
  { id: "closing", label: "Days 31–45", title: "Appointments & closing", start: 31, end: 45 },
];