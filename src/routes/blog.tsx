import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { PostCard } from "@/components/site/PostCard";
import { Newsletter } from "@/components/site/Newsletter";
import { posts } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Amos Kali Foundation" },
      {
        name: "description",
        content: "News, field stories and programme updates from Amos Kali Foundation teams across Africa.",
      },
      { property: "og:title", content: "Blog | Amos Kali Foundation" },
      { property: "og:description", content: "Field stories and updates from our teams." },
    ],
  }),
  component: Blog,
});

function Blog() {
  const location = useLocation();

  if (location.pathname !== "/blog") {
    return <Outlet />;
  }

  return (
    <>
      <PageHero
        eyebrow="Stories of Help & Hope"
        title="Community Stories"
        description="Real stories from the field about kindness, service, and the everyday moments that change lives."
      />

      <section className="container-page grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </section>

      <Newsletter />
    </>
  );
}
