import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { ArrowLeft, Banknote, Check, Copy, MessageCircle, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ScrollReveal from "@/components/ScrollReveal";
import { getPricingPlan } from "@/data/pricingPlans";
import { toast } from "sonner";

const detailsSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  mobile: z
    .string()
    .trim()
    .min(10, "Please enter a valid WhatsApp number.")
    .max(20)
    .regex(/^\+?[0-9\s-]+$/, "Please enter a valid WhatsApp number."),
});

const paymentMethods = [
  {
    name: "United Bank Limited",
    label: "Account Number",
    value: "1373369728458",
    icon: Banknote,
  },
  { name: "NayaPay", label: "Mobile Number", value: "03303120032", icon: Smartphone },
  { name: "JazzCash", label: "Mobile Number", value: "03303120032", icon: Smartphone },
];

const ACCOUNT_TITLE = "Zia UD Din Shah Gilani";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const plan = getPricingPlan(searchParams.get("plan"));
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [confirmedDetails, setConfirmedDetails] = useState<{ fullName: string; mobile: string } | null>(null);
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  if (!plan) {
    return (
      <section className="section-padding pt-32 min-h-screen text-center">
        <div className="container-narrow max-w-xl">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Choose a Package First</h1>
          <p className="text-muted-foreground mb-8">Select a package on the pricing page before continuing to payment.</p>
          <Button asChild variant="hero">
            <Link to="/pricing">View Packages</Link>
          </Button>
        </div>
      </section>
    );
  }

  const submitDetails = (event: React.FormEvent) => {
    event.preventDefault();
    const parsed = detailsSchema.safeParse({ fullName, mobile });
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message ?? "Please check your details.");
      return;
    }
    setConfirmedDetails({ fullName: parsed.data.fullName, mobile: parsed.data.mobile });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyValue = async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedValue(value);
    toast.success(`${label} copied`);
    window.setTimeout(() => setCopiedValue(null), 1800);
  };

  const message = confirmedDetails
    ? [
        "Hi AgenticMyze, I have completed my payment.",
        `Name: ${confirmedDetails.fullName}`,
        `WhatsApp: ${confirmedDetails.mobile}`,
        `Package: ${plan.name}`,
        `Amount: PKR ${plan.price}`,
        "I will attach my payment receipt in this WhatsApp chat for confirmation.",
      ].join("\n")
    : "";

  return (
    <section className="section-padding pt-28 pb-20 min-h-screen">
      <div className="container-narrow max-w-4xl">
        <ScrollReveal>
          <Link to="/pricing" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to packages
          </Link>
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Secure your seat</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Complete Your <span className="serif-italic text-gradient">Payment</span>
            </h1>
            <p className="text-muted-foreground">Follow the steps below. Your selected package is already reserved.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
          <ScrollReveal>
            <aside className="glass rounded-lg border border-border p-6 lg:sticky lg:top-24">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Selected package</p>
              <h2 className="text-2xl font-display font-bold">{plan.name}</h2>
              <p className="text-3xl font-display font-bold mt-2">PKR {plan.price}</p>
              <p className="text-sm text-muted-foreground mt-1">One-time payment</p>
            </aside>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            {!confirmedDetails ? (
              <form onSubmit={submitDetails} className="glass-strong rounded-lg border border-border p-6 md:p-8 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Step 1</p>
                  <h2 className="text-2xl font-display font-bold">Your Details</h2>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment-full-name">Full Name</Label>
                  <Input
                    id="payment-full-name"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    maxLength={120}
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment-mobile">Mobile Number with WhatsApp</Label>
                  <Input
                    id="payment-mobile"
                    value={mobile}
                    onChange={(event) => setMobile(event.target.value)}
                    maxLength={20}
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="03XX XXXXXXX"
                    required
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">Continue to Payment Details</Button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="glass-strong rounded-lg border border-border p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Step 2</p>
                      <h2 className="text-2xl font-display font-bold">Transfer the Payment</h2>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setConfirmedDetails(null)}>Edit details</Button>
                  </div>

                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <div key={method.name} className="rounded-lg border border-border bg-muted/30 p-4">
                        <div className="flex items-center gap-3 mb-4">
                          <method.icon className="w-5 h-5" />
                          <h3 className="font-display font-semibold">{method.name}</h3>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                              <p className="text-xs text-muted-foreground">Account Title</p>
                              <p className="font-medium break-words">{ACCOUNT_TITLE}</p>
                            </div>
                            <Button type="button" variant="ghost" size="icon" aria-label={`Copy ${method.name} account title`} onClick={() => copyValue(ACCOUNT_TITLE, "Account title")}>
                              {copiedValue === ACCOUNT_TITLE ? <Check /> : <Copy />}
                            </Button>
                          </div>
                          <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                              <p className="text-xs text-muted-foreground">{method.label}</p>
                              <p className="font-display font-semibold break-all">{method.value}</p>
                            </div>
                            <Button type="button" variant="ghost" size="icon" aria-label={`Copy ${method.name} ${method.label.toLowerCase()}`} onClick={() => copyValue(method.value, method.label)}>
                              {copiedValue === method.value ? <Check /> : <Copy />}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass rounded-lg border border-border p-6 md:p-8">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Step 3</p>
                  <h2 className="text-xl font-display font-bold mb-3">Send Your Receipt</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Once payment is completed, open WhatsApp below and attach your payment screenshot so we can verify it and onboard you.
                  </p>
                  <p className="text-sm text-foreground leading-relaxed mb-6">
                    Our team will contact you within the next hour. Please attend the call; if you cannot, we will follow up on WhatsApp.
                  </p>
                  <Button asChild variant="hero" size="lg" className="w-full">
                    <a href={`https://wa.me/923303120032?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" /> Open WhatsApp & Send Receipt
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Payment;