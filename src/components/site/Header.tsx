import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { HeartHandshake, Menu, MessageCircle, Phone } from "lucide-react";

import logo from "@/assets/logo.jpg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/testimonials", label: "Stories" },
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
      <div className="container-page flex items-center justify-between gap-4 py-4">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <img src={logo} alt="Amos Kali Foundation Logo" className="h-10 w-10 shrink-0 rounded-md object-cover" />
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
                href={contact.phone.includes("WhatsApp") ? "https://wa.me/254723479333" : `tel:${contact.phone}`}
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

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-foreground shadow-sm transition-colors hover:bg-accent lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>

          <SheetContent side="left" className="w-[84vw] max-w-sm border-r bg-background p-0 sm:max-w-sm">
            <div className="flex h-full flex-col">
              <SheetHeader className="border-b border-border px-5 py-4 text-left">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Amos Kali Foundation Logo" className="h-10 w-10 rounded-md object-cover" />
                  <div>
                    <SheetTitle className="text-base font-semibold text-foreground">Amos Kali Foundation</SheetTitle>
                    <SheetDescription className="text-xs text-muted-foreground">Building hope together</SheetDescription>
                  </div>
                </div>
              </SheetHeader>

              <nav className="flex-1 space-y-1 px-3 py-4">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "bg-accent-soft text-primary" }}
                    onClick={() => setOpen(false)}
                    className="flex items-center rounded-xl px-3 py-3 text-base font-semibold text-foreground/80 transition-colors hover:bg-accent-soft hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="border-t border-border p-4">
                <Link
                  to="/donate"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-accent-foreground shadow-card transition-colors hover:bg-[#e9870a]"
                >
                  <HeartHandshake className="h-4 w-4" />
                  Donate Now
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
