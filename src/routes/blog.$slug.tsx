import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { posts } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
  loader: ({ params }) => {
    const post = posts.find((entry) => entry.slug === params.slug);
    if (!post) {
      throw new Error("Post not found");
    }
    return { post };
  },
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      />

      <main className="container-page py-16">
        <article className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8 shadow-card md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            {post.date} <span className="mx-2 text-border">/</span> <span className="text-accent">{post.category}</span>
          </p>

          <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
