import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap | Amos Kali Foundation" },
      {
        name: "description",
        content:
          "Browse the Amos Kali Foundation site map for key programmes, stories, donation information, and important policy pages.",
      },
      { property: "og:title", content: "Sitemap | Amos Kali Foundation" },
      {
        property: "og:description",
        content: "An overview of the main pages and sections of the Amos Kali Foundation website.",
      },
    ],
  }),
  component: SitemapPage,
});

const primaryPages = [
  { to: "/", title: "Home", summary: "Overview of our mission, impact, and latest updates." },
  { to: "/about", title: "About Us", summary: "Our story, vision, values, and community approach." },
  { to: "/programs", title: "Programs", summary: "Education, livelihood, youth, child support, and spiritual care initiatives." },
  { to: "/testimonials", title: "Testimonials", summary: "Stories and community voices from those we serve." },
  { to: "/blog", title: "Blog", summary: "Field stories, lessons, and programme updates." },
  { to: "/contact", title: "Contact", summary: "Get in touch to volunteer, partner, or ask us a question." },
  { to: "/donate", title: "Donate", summary: "Support our work with a one-time or recurring contribution." },
];

const supportPages = [
  { to: "/privacy", title: "Privacy Policy", summary: "How we collect, store, and protect personal information." },
  { to: "/terms", title: "Terms of Service", summary: "Website use, donation, and engagement terms." },
  { to: "/sitemap", title: "Sitemap", summary: "This page gives you a quick overview of the site." },
];

function SitemapPage() {
  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title="Explore the full foundation experience"
        description="Whether you are looking for impact stories, programme details, or ways to support our work, this page maps the most important sections of the site."
      />

      <main className="container-page py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-xl border border-border bg-card p-7 shadow-card">
            <h2 className="text-2xl font-semibold text-primary">Primary pages</h2>
            <div className="mt-6 space-y-4">
              {primaryPages.map((page) => (
                <Link
                  key={page.to}
                  to={page.to}
                  className="block rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/40 hover:bg-accent-soft"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-base font-semibold text-foreground">{page.title}</span>
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-accent">Open</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{page.summary}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card p-7 shadow-card">
            <h2 className="text-2xl font-semibold text-primary">Support and policy pages</h2>
            <div className="mt-6 space-y-4">
              {supportPages.map((page) => (
                <Link
                  key={page.to}
                  to={page.to}
                  className="block rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/40 hover:bg-accent-soft"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-base font-semibold text-foreground">{page.title}</span>
                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-accent">Visit</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{page.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-xl border border-border bg-card p-7 shadow-card">
          <h2 className="text-2xl font-semibold text-primary">Program areas at a glance</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              "Education and child development",
              "Clean water and community health",
              "Youth empowerment and livelihoods",
              "Food support and nutrition",
              "Spiritual nurture and discipleship",
              "Partnership and volunteer engagement",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-border bg-background p-4 text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
