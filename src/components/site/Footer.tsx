import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Clock,
} from "lucide-react";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Our Programs" },
  { to: "/causes", label: "Our Causes" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
] as const;

const causeLinks = ["Education", "Healthcare", "Clean Water", "Food & Nutrition", "Child Protection"];
const supportLinks = ["Donate Now", "Volunteer", "Fundraise", "Partner With Us", "FAQs"];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-foreground">
              <Heart className="h-4.5 w-4.5" strokeWidth={2.2} />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-bold">AMOS KALI</span>
              <span className="block text-[0.65rem] font-semibold tracking-[0.22em] opacity-70">
                FOUNDATION
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-80">
            We work with African communities to build a future where every child can live, learn and thrive.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm opacity-80">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-1 lg:grid-cols-1 lg:gap-10">
          <div>
            <h4 className="text-sm font-semibold tracking-wide">Our Causes</h4>
            <ul className="mt-5 space-y-3 text-sm opacity-80">
              {causeLinks.map((l) => (
                <li key={l}>
                  <Link to="/causes" className="transition-colors hover:text-accent">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden">
            <h4 className="text-sm font-semibold tracking-wide">Support</h4>
            <ul className="mt-5 space-y-3 text-sm opacity-80">
              {supportLinks.map((l) => (
                <li key={l}>
                  <Link to="/donate" className="transition-colors hover:text-accent">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide">Contact Us</h4>
          <ul className="mt-5 space-y-4 text-sm opacity-80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              Kali House, Ngong Road, Nairobi, Kenya
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              +254 700 123 456
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              hello@amoskalifoundation.org
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              Mon – Fri, 9AM – 5PM
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-3 py-5 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Amos Kali Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
