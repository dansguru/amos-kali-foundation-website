import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Amos Kali Foundation" },
      {
        name: "description",
        content: "Get in touch with Amos Kali Foundation to partner, volunteer or ask about our programmes.",
      },
      { property: "og:title", content: "Contact | Amos Kali Foundation" },
      { property: "og:description", content: "Partner, volunteer or ask us anything." },
    ],
  }),
  component: Contact,
});

const details = [
  { icon: MapPin, label: "Office", value: "Kali House, Ngong Road, Nairobi, Kenya" },
  { icon: Phone, label: "Phone", value: "+254 700 123 456" },
  { icon: Mail, label: "Email", value: "hello@amoskalifoundation.org" },
  { icon: Clock, label: "Hours", value: "Monday – Friday, 9AM – 5PM EAT" },
];

const field =
  "h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-primary";

function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Good Together"
        description="Whether you want to volunteer, partner or simply learn more, our team would love to hear from you."
      />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-5">
          {details.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 text-sm text-foreground/85">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            setTimeout(() => {
              setSending(false);
              (e.target as HTMLFormElement).reset();
              toast.success("Message sent. We'll reply within two working days.");
            }, 600);
          }}
          className="rounded-2xl border border-border bg-card p-7 shadow-card md:p-9"
        >
          <h2 className="font-display text-xl font-bold">Send us a message</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input required placeholder="Full name" className={field} />
            <input required type="email" placeholder="Email address" className={field} />
            <input placeholder="Phone number" className={field} />
            <input placeholder="Subject" className={field} />
          </div>
          <textarea
            required
            rows={5}
            placeholder="How can we help?"
            className="mt-4 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
          <button
            type="submit"
            disabled={sending}
            className="mt-6 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </>
  );
}
