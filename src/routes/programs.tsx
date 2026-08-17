import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { Newsletter } from "@/components/site/Newsletter";
import { programs } from "@/lib/site-data";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs | Amos Kali Foundation" },
      {
        name: "description",
        content:
          "Education, healthcare, clean water, nutrition and child protection programmes run with African communities.",
      },
      { property: "og:title", content: "Programs | Amos Kali Foundation" },
      {
        property: "og:description",
        content: "Sustainable programmes that create lasting change for children and families.",
      },
    ],
  }),
  component: Programs,
});

const details: Record<string, string[]> = {
  Education: ["Classroom construction", "Scholarships and school kits", "Teacher training"],
  Healthcare: ["Mobile clinics", "Maternal and child health", "Community health workers"],
  "Clean Water": ["Solar-powered boreholes", "Rainwater harvesting", "Sanitation and hygiene"],
  "Food & Nutrition": ["Daily school meals", "Nutrition screening", "Kitchen gardens"],
  "Child Protection": ["Safe spaces", "Counselling and case work", "Rights advocacy"],
};

function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Programs That Create Lasting Change"
        description="Five focused programmes, designed with communities and measured every year."
      />

      <section className="container-page space-y-6 py-16">
        {programs.map(({ title, description, icon: Icon }, i) => (
          <div
            key={title}
            className="grid gap-6 rounded-lg border border-border bg-card p-7 shadow-card md:grid-cols-[auto_1fr_auto] md:items-center md:p-9"
          >
            <span className="grid h-14 w-14 place-items-center rounded-md bg-primary text-primary-foreground">
              <Icon className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-widest text-muted-foreground">
                0{i + 1}
              </p>
              <h2 className="mt-1 font-display text-xl font-bold">{title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {details[title]?.map((d) => (
                  <li
                    key={d}
                    className="rounded-md border border-border bg-accent-soft px-3 py-1 text-xs font-medium text-foreground/75"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-colors hover:bg-[#e9870a]"
            >
              Support This <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </section>

      <Newsletter />
    </>
  );
}
