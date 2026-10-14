import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, CalendarDays, CheckCircle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { courseDays, courseLectures, coursePhases } from "@/data/courseRoadmap";
import { pricingPlans, getPlanFeatures } from "@/data/pricingPlans";

const CourseRoadmap = () => (
  <div>
    <section className="section-padding pt-32 pb-12">
      <div className="max-w-5xl mx-auto">
        <p className="flex items-center gap-2 text-sm text-muted-foreground mb-6"><CalendarDays className="w-4 h-4" strokeWidth={1.5} /> 45 days · 20 core lectures · One focused program</p>
        <h1 className="font-display font-bold text-4xl md:text-5xl leading-[1.2] mb-6">AI Business &<br /><span className="serif-italic text-gradient">Client Acquisition Program</span></h1>
        <p className="text-muted-foreground text-lg max-w-2xl mb-8">Choose a niche around real business pain, create a Grand Slam Offer, develop AI systems, build funnels, and close clients.</p>
        <Button asChild variant="hero-outline"><Link to="/pricing">Compare Packages <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-border py-6 mt-10">
          <div><BookOpen className="w-6 h-6 opacity-60 mb-3" strokeWidth={1.5} /><p className="font-semibold">Days 1–30</p><p className="text-sm text-muted-foreground mt-1">Learn, build & prepare to sell</p></div>
          <div><Target className="w-6 h-6 opacity-60 mb-3" strokeWidth={1.5} /><p className="font-semibold">Days 31–45</p><p className="text-sm text-muted-foreground mt-1">Appointments & closing only</p></div>
          <div><CheckCircle className="w-6 h-6 opacity-60 mb-3" strokeWidth={1.5} /><p className="font-semibold">n8n as a supporting skill</p><p className="text-sm text-muted-foreground mt-1">Build the systems behind your offer</p></div>
        </div>
      </div>
    </section>

    <section className="section-padding pt-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 min-w-0">
          <Tabs defaultValue="schedule">
            <TabsList className="mb-6 w-full sm:w-auto">
              <TabsTrigger value="schedule" className="flex-1 gap-2"><CalendarDays className="w-4 h-4" /> 45-Day Roadmap</TabsTrigger>
              <TabsTrigger value="lectures" className="flex-1 gap-2"><BookOpen className="w-4 h-4" /> 20 Lectures</TabsTrigger>
            </TabsList>
            <TabsContent value="schedule">
              <h2 className="text-2xl font-display font-bold mb-2">Your day-by-day plan</h2>
              <p className="text-muted-foreground text-sm mb-8">Onboarding first. Build a client-ready offer and system, then focus exclusively on sales appointments and closing.</p>
              <Accordion type="multiple" defaultValue={["foundation"]} className="space-y-4">
                {coursePhases.map((phase) => (
                  <AccordionItem key={phase.id} value={phase.id} className="border border-border rounded-lg px-5">
                    <AccordionTrigger className="text-left gap-4 hover:no-underline">
                      <span><span className="text-xs text-muted-foreground block mb-1">{phase.label}</span><span className="font-display font-semibold">{phase.title}</span></span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ol className="divide-y divide-border">
                        {courseDays.filter((day) => day.day >= phase.start && day.day <= phase.end).map((day) => (
                          <li key={day.day} className="py-5" data-course-day={day.day}>
                            <div className="flex gap-4">
                              <span className="w-9 shrink-0 text-muted-foreground font-display font-semibold tabular-nums">{String(day.day).padStart(2, "0")}</span>
                              <div className="min-w-0">
                                <h3 className="font-semibold mb-2">{day.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{day.assignment}</p>
                                {day.lecture && <p className="text-xs text-muted-foreground mt-3">Lecture {day.lecture} · {courseLectures[day.lecture - 1]}</p>}
                                <p className="text-sm mt-3 flex gap-2"><CheckCircle className="w-4 h-4 shrink-0 mt-0.5 opacity-60" /><span>{day.outcome}</span></p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            <TabsContent value="lectures">
              <h2 className="text-2xl font-display font-bold mb-2">Core lecture contents</h2>
              <p className="text-sm text-muted-foreground mb-6">Starter includes these 20 recorded lectures. Professional and Elite add done-for-you support, live mentorship, and their client guarantees.</p>
              <ol className="divide-y divide-border">
                {courseLectures.map((lecture, index) => (
                  <li key={lecture} className="py-4 flex gap-4"><span className="text-muted-foreground w-7 shrink-0 tabular-nums">{String(index + 1).padStart(2, "0")}</span><span className="font-medium text-sm">{lecture}</span></li>
                ))}
              </ol>
            </TabsContent>
          </Tabs>
        </div>
        <aside className="lg:col-span-2 min-w-0">
          <div className="border border-border rounded-lg p-6">
            <h2 className="text-xl font-display font-bold mb-5">Your program, your support level</h2>
            <div className="divide-y divide-border">
              {pricingPlans.map((plan) => (
                <div key={plan.slug} className="py-4 first:pt-0">
                  <p className="font-semibold flex flex-wrap justify-between gap-2"><span>{plan.name}</span><span className="text-muted-foreground text-sm">PKR {plan.price}</span></p>
                  <p className="text-sm text-muted-foreground mt-2">{plan.guaranteedClients === 0 ? "20 recorded lectures. Self-paced, with no client guarantee or live classes." : `${plan.guaranteedClients} ${plan.guaranteedClients === 1 ? "client" : "clients"} guaranteed in ${plan.guaranteeDays} days. Done-for-you support & live mentorship.`}</p>
                  {plan.refundGuarantee && <p className="text-sm text-muted-foreground mt-2">Refund guarantee if results don't come.</p>}
                   <ul className="space-y-3 my-4">
                     {getPlanFeatures(plan).map((feature) => (
                       <li key={feature} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle className="w-4 h-4 shrink-0 mt-0.5 opacity-60" /><span>{feature}</span></li>
                     ))}
                   </ul>
                   <Button asChild variant="hero-outline" className="w-full"><Link to={`/payment?plan=${plan.slug}`}>Choose {plan.name} <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground border-t border-border pt-4 mb-6">All tiers cover the same core program and include 20+ results & testimonials access.</p>
            <Button asChild variant="hero" className="w-full"><Link to="/pricing">Apply Now <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
          </div>
        </aside>
      </div>
    </section>
  </div>
);

export default CourseRoadmap;