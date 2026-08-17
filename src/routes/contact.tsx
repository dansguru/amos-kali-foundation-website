import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
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
  { icon: MapPin, label: "Office", value: "Kali House, Ngong Road, Nairobi, Kenya", action: null },
  { icon: Phone, label: "Phone", value: "+254 799 116 963 / +254 723 479 333", action: "phone", phone: "+254799116963" },
  { icon: Mail, label: "Email", value: "hello@amoskalifoundation.org", action: "email" },
  { icon: Clock, label: "Hours", value: "Monday - Friday, 9AM - 5PM EAT", action: null },
];

const field =
  "h-11 w-full rounded-md border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-primary";

function Contact() {
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSendViaWhatsApp = () => {
    if (!formData.name || !formData.message) {
      toast.error("Please fill in name and message");
      return;
    }
    
    const message = `Hello, my name is ${formData.name}. ${formData.subject ? `Subject: ${formData.subject}. ` : ""}${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/254723479333?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      toast.success("Message sent. We'll reply within two working days.");
    }, 600);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Good Together"
        description="Whether you want to volunteer, partner or simply learn more, our team would love to hear from you."
      />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-5">
          {details.map(({ icon: Icon, label, value, action, phone }) => (
            <div key={label} className="flex gap-4 rounded-lg border border-border bg-card p-6 shadow-card">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 text-sm text-foreground/85">{value}</p>
                {action === "phone" && (
                  <a
                    href={`https://wa.me/254723479333`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-accent transition-colors hover:text-accent/80"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Message via WhatsApp
                  </a>
                )}
                {action === "email" && (
                  <a
                    href="mailto:hello@amoskalifoundation.org"
                    className="mt-3 inline-flex text-xs font-semibold text-accent transition-colors hover:text-accent/80"
                  >
                    Send an email
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-border bg-card p-7 shadow-card md:p-9"
        >
          <h2 className="font-display text-2xl font-semibold text-primary">Send us a message</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={field}
            />
            <input
              required
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={field}
            />
            <input
              placeholder="Phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={field}
            />
            <input
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className={field}
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="How can we help?"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-4 w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
          <div className="mt-6 flex gap-3">
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-green-hover disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {sending ? "Sending..." : "Send Message"}
            </button>
            <button
              type="button"
              onClick={handleSendViaWhatsApp}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3 text-sm font-bold text-accent-foreground transition-colors hover:bg-[#e9870a]"
            >
              <MessageCircle className="h-4 w-4" />
              Send via WhatsApp
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
