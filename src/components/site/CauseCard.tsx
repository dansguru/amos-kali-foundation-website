import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import type { Cause } from "@/lib/site-data";

export function CauseCard({ cause }: { cause: Cause }) {
  const pct = Math.min(100, Math.round((cause.raised / cause.goal) * 100));
  const money = (n: number) => `$${n.toLocaleString()}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-soft">
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={cause.image}
          alt={cause.title}
          loading="lazy"
          width={900}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-bold">{cause.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cause.summary}</p>

        <div className="mt-5 flex items-center justify-between text-xs font-semibold">
          <span className="text-muted-foreground">
            Raised <span className="text-primary">{money(cause.raised)}</span>
          </span>
          <span className="text-muted-foreground">
            Goal <span className="text-primary">{money(cause.goal)}</span>
          </span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${pct}%` }} />
        </div>

        <Link
          to="/donate"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
        >
          <Heart className="h-4 w-4" />
          Donate Now
        </Link>
      </div>
    </article>
  );
}
