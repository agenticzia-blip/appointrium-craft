import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Copy, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const schema = z.object({
  full_name: z.string().trim().min(1, "Required").max(120),
  phone_number: z.string().trim().min(5, "Required").max(30),
  email: z.string().trim().email("Invalid email").max(255),
  education: z.string().trim().min(1, "Required").max(200),
  current_city: z.string().trim().min(1, "Required").max(120),
  background_details: z.string().trim().min(1, "Required").max(1000),
  past_skills: z.string().trim().min(1, "Required").max(1000),
  current_monthly_income: z.string().trim().min(1, "Required").max(100),
  goals: z.string().trim().min(1, "Required").max(1000),
  income_goal: z.string().trim().min(1, "Required").max(100),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  full_name: "",
  phone_number: "",
  email: "",
  education: "",
  current_city: "",
  background_details: "",
  past_skills: "",
  current_monthly_income: "",
  goals: "",
  income_goal: "",
};

const fields: { key: keyof FormState; label: string; type?: string; textarea?: boolean }[] = [
  { key: "full_name", label: "Full Name" },
  { key: "phone_number", label: "Phone Number" },
  { key: "email", label: "Email Address", type: "email" },
  { key: "education", label: "Education" },
  { key: "current_city", label: "Current City" },
  { key: "background_details", label: "Background Details", textarea: true },
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

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message || "Please fill all fields correctly.");
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from("student_applications")
      .insert([form])
      .select("student_id")
      .single();
    setLoading(false);
    if (error || !data) {
      toast.error("Submission failed. Please try again.");
      return;
    }
    setStudentId(data.student_id);
    toast.success("Application submitted!");
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
              Student <span className="serif-italic text-gradient">Application</span>
            </h1>
            <p className="text-muted-foreground">
              Fill the form below. You'll receive your unique Student ID — copy and send it to us to confirm your enrollment.
            </p>
          </div>
        </ScrollReveal>

        {studentId ? (
          <ScrollReveal>
            <div className="glass-strong rounded-2xl p-8 md:p-12 text-center glow">
              <CheckCircle2 className="w-14 h-14 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-display font-bold mb-2">You're In!</h2>
              <p className="text-muted-foreground mb-6">
                Here's your Student ID. Copy it and send it to us on WhatsApp / email to confirm your spot.
              </p>
              <div className="flex items-center justify-center gap-2 mb-6">
                <code className="glass px-5 py-3 rounded-lg text-lg md:text-2xl font-display font-bold tracking-widest">
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
                Submit another application
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
