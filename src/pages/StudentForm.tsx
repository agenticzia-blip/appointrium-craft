import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Copy, CheckCircle2, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const WEBHOOK_URL = "https://ziauddinshah32.app.n8n.cloud/webhook/63225e77-424c-4cf4-bdf1-2efad9d787ab";

const PLAN_OPTIONS = ["Starter (PKR 10,000)", "Professional (PKR 30,000)", "Elite (PKR 50,000)"] as const;

const schema = z.object({
  full_name: z.string().trim().min(1, "Required").max(120),
  phone_number: z.string().trim().min(5, "Required").max(30),
  email: z.string().trim().email("Invalid email").max(255),
  education: z.string().trim().min(1, "Required").max(200),
  current_city: z.string().trim().min(1, "Required").max(120),
  past_skills: z.string().trim().min(1, "Required").max(1000),
  current_monthly_income: z.string().trim().min(1, "Required").max(100),
  goals: z.string().trim().min(1, "Required").max(1000),
  income_goal: z.string().trim().min(1, "Required").max(100),
  free_hours: z.string().trim().min(1, "Required").max(50),
  plan: z.string().trim().min(1, "Please select a plan").max(100),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  full_name: "",
  phone_number: "",
  email: "",
  education: "",
  current_city: "",
  past_skills: "",
  current_monthly_income: "",
  goals: "",
  income_goal: "",
  free_hours: "",
  plan: "",
};

const fields: { key: keyof FormState; label: string; type?: string; textarea?: boolean }[] = [
  { key: "full_name", label: "Full Name" },
  { key: "phone_number", label: "Phone Number" },
  { key: "email", label: "Email Address", type: "email" },
  { key: "education", label: "Education" },
  { key: "current_city", label: "Current City" },
  { key: "past_skills", label: "Past Skills / Experience", textarea: true },
  { key: "current_monthly_income", label: "Current Monthly Income" },
  { key: "goals", label: "Goals", textarea: true },
  { key: "income_goal", label: "Monthly Income Goal After Completing This Course" },
];

const StudentForm = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [loading, setLoading] = useState(false);
  const [studentId, setStudentId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const update = (k: keyof FormState, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const generateStudentId = (fullName: string) => {
    const firstName = fullName.trim().split(/\s+/)[0] || "STU";
    const nameSlug = firstName.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 12) || "STU";
    const year = new Date().getFullYear().toString().slice(-2);
    const bytes = new Uint8Array(4);
    crypto.getRandomValues(bytes);
    const randomPart = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("").toUpperCase();

    return `APX-${nameSlug}-${year}-${randomPart}`;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message || "Please fill all fields correctly.");
      return;
    }
    setLoading(true);

    const newStudentId = generateStudentId(form.full_name);
    const payload = {
      student_id: newStudentId,
      username: newStudentId,
      full_name: parsed.data.full_name,
      phone_number: parsed.data.phone_number,
      email: parsed.data.email,
      education: parsed.data.education,
      current_city: parsed.data.current_city,
      past_skills: parsed.data.past_skills,
      current_monthly_income: parsed.data.current_monthly_income,
      goals: parsed.data.goals,
      income_goal: parsed.data.income_goal,
      plan: parsed.data.plan,
      submitted_at: new Date().toISOString(),
      source: "student_onboarding_form",
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      void supabase
        .from("student_applications")
        .insert({
          student_id: payload.student_id,
          full_name: payload.full_name,
          phone_number: payload.phone_number,
          email: payload.email,
          education: payload.education,
          current_city: payload.current_city,
          past_skills: payload.past_skills,
          current_monthly_income: payload.current_monthly_income,
          goals: payload.goals,
          income_goal: payload.income_goal,
          background_details: `Plan: ${payload.plan}`,
        })
        .then(({ error }) => {
          if (error) console.error("Database save failed", error);
        });

      window.scrollTo({ top: 0, behavior: "smooth" });
      setStudentId(newStudentId);
      toast.success("Submitted successfully! Copy your Student ID.");
    } catch (err) {
      console.error("Webhook delivery failed", err);
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyId = async () => {
    if (!studentId) return;
    await navigator.clipboard.writeText(studentId);
    setCopied(true);
    toast.success("Student ID copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-padding pt-28 pb-20 min-h-screen">
      <div className="container-narrow max-w-2xl">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Student <span className="serif-italic text-gradient">Onboarding</span>
            </h1>
            <p className="text-muted-foreground">
              Fill the onboarding form below. You'll receive your unique Student ID — copy and send it to us to complete your onboarding.
            </p>
          </div>
        </ScrollReveal>

        {studentId ? (
          <ScrollReveal>
            <div className="glass-strong rounded-2xl p-8 md:p-12 text-center glow">
              <CheckCircle2 className="w-14 h-14 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-display font-bold mb-2">You're In!</h2>
              <p className="text-muted-foreground mb-6">
                Here's your unique Student ID. Copy it and send it to us on WhatsApp / email to confirm your spot.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <code className="glass px-5 py-3 rounded-lg text-base md:text-2xl font-display font-bold tracking-widest break-all">
                  {studentId}
                </code>
                <Button onClick={copyId} variant="hero-outline" size="icon" aria-label="Copy student ID">
                  {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <Button
                onClick={() => {
                  setStudentId(null);
                  setForm(initial);
                }}
                variant="hero-outline"
              >
                Submit another onboarding
              </Button>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <form onSubmit={submit} className="glass-strong rounded-2xl p-6 md:p-10 space-y-5">
              {fields.map((f) => (
                <div key={f.key} className="space-y-2">
                  <Label htmlFor={f.key}>{f.label}</Label>
                  {f.textarea ? (
                    <Textarea
                      id={f.key}
                      value={form[f.key]}
                      onChange={(e) => update(f.key, e.target.value)}
                      rows={3}
                      required
                    />
                  ) : (
                    <Input
                      id={f.key}
                      type={f.type || "text"}
                      value={form[f.key]}
                      onChange={(e) => update(f.key, e.target.value)}
                      required
                    />
                  )}
                </div>
              ))}

              <div className="space-y-3 rounded-xl border border-primary/20 bg-primary/5 p-5">
                <Label className="text-base font-display font-semibold">Which plan did you take admission in?</Label>
                <p className="text-xs text-muted-foreground">Select the course plan you've enrolled / paying for.</p>
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {PLAN_OPTIONS.map((p) => (
                    <label
                      key={p}
                      className={`flex items-center gap-3 cursor-pointer rounded-lg border px-4 py-3 transition-colors ${
                        form.plan === p ? "border-primary bg-primary/10" : "border-border hover:border-primary/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="plan"
                        value={p}
                        checked={form.plan === p}
                        onChange={(e) => update("plan", e.target.value)}
                        className="accent-primary"
                        required
                      />
                      <span className="text-sm font-medium">{p}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                {loading ? "Submitting..." : "Get My Student ID"}
              </Button>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default StudentForm;
