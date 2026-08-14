import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, CircleCheck, Heart, Play } from "lucide-react";

import heroChildren from "@/assets/hero-children.jpg";
import aboutBoy from "@/assets/about-boy.jpg";
import volunteers from "@/assets/volunteers.jpg";
import { CauseCard } from "@/components/site/CauseCard";
import { PostCard } from "@/components/site/PostCard";
import { Newsletter } from "@/components/site/Newsletter";
import { causes, posts, programs, stats, values } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amos Kali Foundation | Building Hope Across Africa" },
      {
        name: "description",
        content:
          "Amos Kali Foundation partners with African communities to deliver education, clean water, healthcare and nutrition for every child.",
      },
      { property: "og:title", content: "Amos Kali Foundation | Building Hope Across Africa" },
      {
        property: "og:description",
        content: "Education, clean water, healthcare and nutrition for children across Africa.",
      },
    ],
  }),
  component: Home,
});

const trustLogos = ["UNICEF", "World Vision", "CARE", "Save the Children", "GlobalGiving"];

const reasons = [
  "100% secure donations",
  "Regular updates and reports",
  "Dedicated to long-term impact",
  "Local teams, global standards",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-cream">
        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div className="rise">
            <h1 className="text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              Building Hope.
              <br />
              Creating <span className="text-accent">Change.</span>
              <br />
              Transforming Lives.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Together with African communities, we build a world where every child has the chance to live,
              learn and thrive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:scale-[1.03]"
              >
                <Heart className="h-4 w-4" />
                Donate Now
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary"
              >
                Explore Our Work
                <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-accent-foreground">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="grid h-9 w-9 place-items-center rounded-full border-2 border-background bg-primary-soft text-xs font-bold text-primary"
                  >
                    {["AK", "MW", "JN", "SO"][i]}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Join <span className="font-semibold text-foreground">18,000+</span> supporters worldwide
              </p>
            </div>
          </div>

          <div className="relative rise">
            <div className="absolute -left-6 top-8 hidden h-3 w-3 rounded-full bg-accent md:block" />
            <div className="absolute -right-2 bottom-10 hidden h-3 w-3 rounded-full bg-primary md:block" />
            <img
              src={heroChildren}
              alt="Smiling children supported by Amos Kali Foundation"
              width={1024}
              height={1024}
              className="w-full rounded-[2rem] object-cover shadow-soft"
            />
          </div>
        </div>

        <div className="border-t border-border/70">
          <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6">
            <span className="text-sm text-muted-foreground">Trusted by</span>
            {trustLogos.map((logo) => (
              <span key={logo} className="font-display text-base font-semibold text-foreground/45">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-page -mt-2 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-7 text-center shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent-soft text-accent">
                <Icon className="h-5.5 w-5.5" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-8 grid divide-border rounded-2xl border border-border bg-sand py-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-4 text-center">
              <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="container-page grid items-center gap-12 py-16 lg:grid-cols-2">
        <div className="relative">
          <img
            src={aboutBoy}
            alt="A child from a community we serve"
            loading="lazy"
            width={900}
            height={900}
            className="w-full rounded-full object-cover shadow-soft"
          />
          <span className="absolute -left-3 top-10 hidden h-4 w-4 rounded-full bg-accent lg:block" />
        </div>
        <div>
          <p className="eyebrow">About Us</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Empowering Communities.
            <br />
            Inspiring Change.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Amos Kali Foundation is a non-profit organisation dedicated to improving the lives of vulnerable
            children and families across Africa — through education, health, water and dignity.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Education for every child",
              "Clean water and sanitation",
              "Healthcare and nutrition",
              "Emergency relief and support",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-foreground/85">
                <CircleCheck className="h-5 w-5 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Learn More
            </Link>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-soft">
                <Play className="h-3.5 w-3.5 fill-primary text-primary" />
              </span>
              Watch Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="border-y border-border bg-sand py-16">
        <div className="container-page text-center">
          <p className="eyebrow">Our Programs</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Programs That Create Lasting Change</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            We focus on sustainable programmes that empower communities and help children build a better
            future.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {programs.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-primary-soft text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{description}</p>
                <Link
                  to="/programs"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent"
                >
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="container-page py-16 text-center">
        <p className="eyebrow">Featured Campaigns</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Support Our Current Campaigns</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
          Your support brings hope and change to those who need it most.
        </p>
        <div className="mt-10 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
          {causes.map((c) => (
            <CauseCard key={c.slug} cause={c} />
          ))}
        </div>
        <Link
          to="/causes"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
        >
          View All Campaigns <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Why choose us + Blog */}
      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight">
            Why Thousands
            <br />
            Trust Amos Kali
          </h2>
          <ul className="mt-6 space-y-3">
            {reasons.map((r) => (
              <li key={r} className="flex items-center gap-3 text-sm text-foreground/85">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {r}
              </li>
            ))}
          </ul>
          <Link
            to="/donate"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <Heart className="h-4 w-4" />
            Donate Now
          </Link>
        </div>

        <div>
          <p className="eyebrow">Latest News &amp; Stories</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
          >
            View All News <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="container-page pb-16">
        <div className="grid overflow-hidden rounded-2xl border border-border bg-sand md:grid-cols-2">
          <div className="p-8 md:p-12">
            <p className="eyebrow">Become a Volunteer</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
              Be the Change.
              <br />
              Volunteer Today.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Join our community of volunteers and make a lasting difference in someone's life.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Explore Opportunities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <img
            src={volunteers}
            alt="Volunteers celebrating together"
            loading="lazy"
            width={1400}
            height={700}
            className="h-full min-h-64 w-full object-cover"
          />
        </div>
      </section>

      <Newsletter />
    </>
  );
}
