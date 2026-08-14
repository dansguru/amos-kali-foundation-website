import { createFileRoute } from "@tanstack/react-router";
import { CircleCheck, Compass, Eye, HeartHandshake } from "lucide-react";

import aboutBoy from "@/assets/about-boy.jpg";
import volunteers from "@/assets/volunteers.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Newsletter } from "@/components/site/Newsletter";
import { stats, values } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Amos Kali Foundation" },
      {
        name: "description",
        content:
          "Learn about the mission, vision and people behind Amos Kali Foundation and our work with African communities.",
      },
      { property: "og:title", content: "About Us | Amos Kali Foundation" },
      {
        property: "og:description",
        content: "Our mission, vision and the communities we walk alongside.",
      },
    ],
  }),
  component: About,
});

const pillars = [
  {
    title: "Our Mission",
    icon: Compass,
    text: "To improve the lives of vulnerable children and families through education, health, water and dignified livelihoods.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    text: "An Africa where every child grows up healthy, educated and free to shape their own future.",
  },
  {
    title: "Our Approach",
    icon: HeartHandshake,
    text: "We listen first. Communities lead the design of every project; we bring resources, structure and accountability.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Empowering Communities, Inspiring Change"
        description="Amos Kali Foundation was founded on a simple belief: lasting change is built with communities, never for them."
      />

      <section className="container-page grid items-center gap-12 py-16 lg:grid-cols-2">
        <img
          src={aboutBoy}
          alt="A child from one of our partner communities"
          loading="lazy"
          width={900}
          height={900}
          className="w-full rounded-[2rem] object-cover shadow-soft"
        />
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            From one classroom to hundreds of communities
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            What began as a single village literacy project has grown into a foundation working across
            education, healthcare, clean water and nutrition. Our teams live in the regions they serve, which
            keeps our work grounded, practical and accountable.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Locally led teams in every region",
              "Independent annual impact evaluation",
              "Transparent reporting to every donor",
              "Long-term partnerships, not short projects",
            ].map((i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-foreground/85">
                <CircleCheck className="h-5 w-5 shrink-0 text-accent" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-sand py-16">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {pillars.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid divide-border rounded-2xl border border-border bg-card py-8 shadow-card sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-4 text-center">
              <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-soft text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-16">
        <img
          src={volunteers}
          alt="Our volunteer community"
          loading="lazy"
          width={1400}
          height={700}
          className="w-full rounded-2xl object-cover shadow-soft"
        />
      </section>

      <Newsletter />
    </>
  );
}
