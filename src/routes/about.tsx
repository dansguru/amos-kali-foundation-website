import { createFileRoute } from "@tanstack/react-router";
import { CircleCheck, Compass, Eye, HeartHandshake } from "lucide-react";

import aboutBoy from "@/assets/freeeducation/IMG-20260729-WA0664.jpg";
import volunteers from "@/assets/donations/group.jpg";
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
    text: "To demonstrate the love of Christ by empowering communities through spiritual growth, talent development, youth empowerment, sustainable livelihoods, child support and community transformation.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    text: "To build transformed, self-reliant and God-centred communities where every individual has the opportunity to thrive spiritually, socially and economically.",
  },
  {
    title: "Our Approach",
    icon: HeartHandshake,
    text: "Grounded in Christian values of love, compassion and integrity, we combine spiritual guidance with practical community action to serve God through serving people.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Transforming Communities with God's Love"
        description="The Amos Kali Foundation is a Christian faith-based, non-profit organisation founded in 2025 through the inspiration and ministry of the Synagogue Church of All People (SCOAP) – Kajiado."
      />

      <section className="container-page grid items-center gap-12 py-16 lg:grid-cols-2">
        <img
          src={aboutBoy}
          alt="A child from one of our partner communities"
          loading="lazy"
          width={900}
          height={900}
          className="organic-arch aspect-[4/5] w-full object-cover shadow-soft"
        />
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Guided by Christian values, serving communities with compassion
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Amos Kali Foundation believes that genuine faith is demonstrated through service to humanity. Founded in 2025 by SCOAP – Kajiado, we exist to transform lives by sharing God's love through practical community action. Our work is guided by Christian values of love, compassion, integrity and service as we empower individuals and communities to realise their God-given potential.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Faith-based approach grounded in Christian values",
              "Community-led programmes designed with local leaders",
              "Integrated support across spiritual, social and economic needs",
              "Commitment to empowering people toward self-reliance",
            ].map((i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-foreground/85">
                <CircleCheck className="h-5 w-5 shrink-0 text-accent" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-accent-soft py-16">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {pillars.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-lg border border-border bg-card p-7 shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid divide-border rounded-lg border border-border bg-card py-8 shadow-card sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-4 text-center">
              <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-lg border border-border bg-card p-7 shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-accent-soft text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-primary">{title}</h3>
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
          className="w-full rounded-lg object-cover shadow-soft"
        />
      </section>

      <Newsletter />
    </>
  );
}
