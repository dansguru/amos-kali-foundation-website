import { useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { HeartHandshake, Menu, Phone, MessageCircle, ArrowRight, Mail, MapPin, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

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
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const isOpen = useRef(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen.current) {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const openMenu = () => {
    isOpen.current = true;
    if (sidebarRef.current) sidebarRef.current.setAttribute("data-open", "true");
    if (overlayRef.current) overlayRef.current.setAttribute("data-open", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    isOpen.current = false;
    if (sidebarRef.current) sidebarRef.current.setAttribute("data-open", "false");
    if (overlayRef.current) overlayRef.current.setAttribute("data-open", "false");
    document.body.style.overflow = "auto";
  };

  const handleNavClick = () => {
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:flex lg:justify-between">
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={openMenu}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border bg-card text-primary lg:hidden hover:bg-accent-soft transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Mobile Overlay */}
        <div
          ref={overlayRef}
          data-open="false"
          className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 lg:hidden"
          onClick={closeMenu}
          style={{
            opacity: isOpen.current ? 1 : 0,
            pointerEvents: isOpen.current ? "auto" : "none",
          }}
        />

        {/* Mobile Sidebar */}
        <div
          ref={sidebarRef}
          data-open="false"
          className="fixed inset-y-0 left-0 z-40 w-72 border-r border-border bg-background transition-transform duration-200 overflow-y-auto lg:hidden flex flex-col"
          style={{
            transform: isOpen.current ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          {/* Sidebar Header */}
          <div className="border-b border-border px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Amos Kali Foundation Logo" className="h-10 w-10 rounded-lg object-cover" />
              <div>
                <p className="text-sm font-semibold tracking-wider text-primary">AMOS KALI</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Foundation</p>
              </div>
            </div>
            <button
              onClick={closeMenu}
              className="p-1.5 hover:bg-accent-soft rounded-md transition-colors"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-1 px-3 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={handleNavClick}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-accent-soft text-primary" }}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent-soft hover:text-primary"
              >
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="border-t border-border bg-card/60 p-4 shrink-0">
            <Link
              to="/donate"
              onClick={handleNavClick}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-card transition-colors hover:bg-[#e9870a]"
            >
              <HeartHandshake className="h-4 w-4" />
              Donate Now
            </Link>

            <div className="mt-4 space-y-3 text-xs text-muted-foreground">
              <a href="tel:+254799116963" className="flex items-center gap-2 text-left hover:text-primary">
                <Phone className="h-3.5 w-3.5 text-accent shrink-0" />
                +254 799 116 963
              </a>
              <a href="mailto:hello@amoskalifoundation.org" className="flex items-center gap-2 text-left hover:text-primary">
                <Mail className="h-3.5 w-3.5 text-accent shrink-0" />
                hello@amoskalifoundation.org
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                Kali House, Ngong Road, Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
