import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { CauseCard } from "@/components/site/CauseCard";
import { Newsletter } from "@/components/site/Newsletter";
import { causes } from "@/lib/site-data";

export const Route = createFileRoute("/causes")({
  head: () => ({
    meta: [
      { title: "Causes | Amos Kali Foundation" },
      {
        name: "description",
        content: "Support active campaigns for schools, clean water and daily meals across African communities.",
      },
      { property: "og:title", content: "Causes | Amos Kali Foundation" },
      { property: "og:description", content: "Active campaigns you can support today." },
    ],
  }),
  component: Causes,
});

function Causes() {
  return (
    <>
      <PageHero
        eyebrow="Our Causes"
        title="Support Our Current Campaigns"
        description="Each campaign is fully costed, community-led and reported on until it is complete."
      />

      <section className="container-page grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">
        {causes.map((c) => (
          <CauseCard key={c.slug} cause={c} />
        ))}
      </section>

      <Newsletter />
    </>
  );
}
