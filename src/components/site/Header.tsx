import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { HeartHandshake, Menu, Phone, X, MessageCircle } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const recentContacts = [
  { name: "Main Office", phone: "+254799116963", icon: Phone },
  { name: "WhatsApp", phone: "+254723479333", icon: MessageCircle },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center bg-primary text-primary-foreground [clip-path:polygon(50%_0,100%_25%,100%_100%,0_100%,0_25%)]">
            <HeartHandshake className="h-5 w-5" strokeWidth={2.1} />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary after:scale-x-100" }}
              className="relative text-sm font-semibold text-foreground/70 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-primary hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-4">
            {recentContacts.map((contact) => (
              <a
                key={contact.phone}
                href={contact.phone.includes("WhatsApp") ? `https://wa.me/254723479333` : `tel:${contact.phone}`}
                className="flex items-center gap-1.5 text-xs font-semibold text-foreground/70 transition-colors hover:text-accent"
                title={contact.name}
              >
                <contact.icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{contact.phone}</span>
              </a>
            ))}
          </div>
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-card transition-colors hover:bg-[#e9870a]"
          >
            <HeartHandshake className="h-4 w-4" />
            Donate Now
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border bg-card text-primary lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground/80 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
            >
              <HeartHandshake className="h-4 w-4" />
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
