import { Link } from "@tanstack/react-router";
import {
  Clock,
  Facebook,
  HeartHandshake,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Our Programs" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
] as const;

const supportLinks = [
  { to: "/donate", label: "Donate Now" },
  { to: "/contact", label: "Volunteer" },
  { to: "/contact", label: "Partner With Us" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
] as const;

export function Footer() {
  return (
    <footer className="bg-dark-green text-primary-foreground">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center bg-accent text-accent-foreground [clip-path:polygon(50%_0,100%_25%,100%_100%,0_100%,0_25%)]">
              <HeartHandshake className="h-5 w-5" strokeWidth={2.1} />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold">Amos Kali</span>
              <span className="block text-[0.65rem] font-semibold tracking-[0.22em] text-white/70">
                FOUNDATION
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
            We work with African communities to build a future where every child can live, learn and thrive.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-md bg-white/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-wide text-white">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-wide text-white">Support</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {supportLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-wide text-white">Contact Us</h4>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              Kali House, Ngong Road, Nairobi, Kenya
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+254799116963" className="hover:text-accent">+254 799 116 963</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:hello@amoskalifoundation.org" className="hover:text-accent">
                hello@amoskalifoundation.org
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              Mon - Fri, 9AM - 5PM EAT
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Amos Kali Foundation. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-accent">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
