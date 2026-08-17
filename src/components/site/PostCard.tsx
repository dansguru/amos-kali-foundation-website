import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/lib/site-data";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition-colors hover:border-primary/25">
      <div className="aspect-[10/7] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          width={800}
          height={560}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
          {post.date} <span className="mx-2 text-border">/</span>
          <span className="text-accent">{post.category}</span>
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-primary">{post.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <Link
          to="/blog"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
        >
          Read More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
