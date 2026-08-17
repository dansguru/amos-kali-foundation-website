import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CircleCheck, Heart, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

import { PageHero } from "@/components/site/PageHero";
import donationImage from "@/assets/donations/IMG-20260729-WA0680.jpg";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate | Amos Kali Foundation" },
      {
        name: "description",
        content: "Give once or monthly to fund schools, clean water, healthcare and meals for children in Africa.",
      },
      { property: "og:title", content: "Donate | Amos Kali Foundation" },
      { property: "og:description", content: "Your gift funds schools, water, health and meals." },
    ],
  }),
  component: Donate,
});

const amounts = [25, 50, 100, 250];
const impact = [
  "$25 provides school meals for a child for a month",
  "$50 supplies textbooks for a full classroom",
  "$100 brings clean water to a family for a year",
  "$250 funds a mobile clinic day in a remote village",
];

function Donate() {
  const [amount, setAmount] = useState<number | "">(50);
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Your Gift Changes a Life"
        description="Every donation is tracked, reported and spent where it was promised."
      />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.3fr_0.7fr]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success(
              `Thank you for your ${frequency === "monthly" ? "monthly" : "one-time"} gift of $${amount || 0}.`,
            );
          }}
          className="border-y border-border bg-card py-7 md:py-9"
        >
          <div className="inline-flex rounded-md border border-border bg-accent-soft p-1">
            {(["once", "monthly"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFrequency(f)}
                className={`rounded-md px-5 py-2 text-sm font-semibold transition-colors ${
                  frequency === f ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                {f === "once" ? "One-time" : "Monthly"}
              </button>
            ))}
          </div>

          <h2 className="mt-7 font-display text-xl font-bold">Choose an amount</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {amounts.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAmount(a)}
                className={`rounded-md border px-4 py-3 text-sm font-semibold transition-colors ${
                  amount === a
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border bg-background text-foreground/80 hover:border-primary"
                }`}
              >
                ${a}
              </button>
            ))}
          </div>
          <input
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
            placeholder="Other amount"
            className="mt-4 h-11 w-full rounded-md border border-border bg-background px-4 text-sm outline-none focus:border-primary"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input required placeholder="Full name" className="h-11 rounded-md border border-border bg-background px-4 text-sm outline-none focus:border-primary" />
            <input required type="email" placeholder="Email address" className="h-11 rounded-md border border-border bg-background px-4 text-sm outline-none focus:border-primary" />
          </div>

          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground transition-colors hover:bg-[#e9870a]"
          >
            <Heart className="h-4 w-4" />
            Give ${amount || 0} {frequency === "monthly" ? "per month" : "now"}
          </button>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Secure donation. You can cancel a monthly gift at any time.
          </p>
        </form>

        <aside className="self-start border-t-4 border-accent bg-accent-soft p-7 md:p-9">
          <img
            src={donationImage}
            alt="Amos Kali Foundation donation work"
            loading="lazy"
            width={960}
            height={1280}
            className="-mx-7 -mt-7 mb-8 aspect-[4/3] w-[calc(100%+3.5rem)] object-cover md:-mx-9 md:-mt-9 md:w-[calc(100%+4.5rem)]"
          />
          <p className="eyebrow">Your Impact</p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight">Where your money goes</h2>
          <ul className="mt-6 space-y-4">
            {impact.map((i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {i}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            88 cents of every dollar goes directly to programmes. Our annual accounts are independently
            audited and published each year.
          </p>
        </aside>
      </section>

      <section className="bg-accent-soft py-16">
        <div className="container-page">
          <div className="mx-auto max-w-2xl rounded-lg border border-border bg-card p-7 shadow-card md:p-9">
            <h2 className="font-display text-2xl font-bold text-primary">Give via Paybill (M-Pesa)</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              If you're in Kenya, you can also donate directly through M-Pesa to our Paybill account:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-border bg-background p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Paybill Number</p>
                <p className="mt-3 text-2xl font-bold text-primary">247247</p>
              </div>
              <div className="rounded-md border border-border bg-background p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Account Number</p>
                <p className="mt-3 text-2xl font-bold text-primary">0700172152628</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Enter the amount you wish to donate, then your account number when prompted. Every gift directly funds our programmes in the communities we serve.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
