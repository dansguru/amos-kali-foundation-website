import { Link } from "@tanstack/react-router";

import type { Post } from "@/lib/site-data";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      aria-label={`Read more about ${post.title}`}
      className="group block rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-soft"
    >
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
        {post.date} <span className="mx-2 text-border">/</span>
        <span className="text-accent">{post.category}</span>
      </p>
      <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-primary transition-colors group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
    </Link>
  );
}
