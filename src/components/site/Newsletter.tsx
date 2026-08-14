import { useState } from "react";
import { Mail } from "lucide-react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="container-page pb-16">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Thank you for subscribing to our updates.");
          setEmail("");
        }}
        className="grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-card md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8 md:px-8"
      >
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
            <Mail className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-base font-bold">Stay Updated</p>
            <p className="truncate text-sm text-muted-foreground">Stories and updates from the field.</p>
          </div>
        </div>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="h-11 w-full rounded-full border border-border bg-background px-5 text-sm outline-none transition-colors focus:border-primary"
        />
        <button
          type="submit"
          className="h-11 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
