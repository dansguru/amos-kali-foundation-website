import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake } from "lucide-react";

import heroImage from "@/assets/hero1.jpeg";
import storyImage from "@/assets/freeeducation/IMG-20260729-WA0664.jpg";
import fieldImage from "@/assets/donations/IMG-20260729-WA0733(1).jpg";
import { Newsletter } from "@/components/site/Newsletter";
import { causes, programs, stats, values } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amos Kali Foundation | Building Hope Across Africa" },
      { name: "description", content: "Amos Kali Foundation partners with African communities to deliver education, clean water, healthcare and nutrition for every child." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="overflow-hidden border-b border-border bg-background">
        <div className="container-page grid min-h-[660px] lg:grid-cols-12 lg:gap-8">
          <div className="relative z-10 flex flex-col justify-center py-16 lg:col-span-7 lg:py-24">
            <p className="eyebrow">Amos Kali Foundation / Est. 2025</p>
            <h1 className="mt-5 max-w-3xl text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.86] tracking-[-0.055em] text-primary">Care that<br />moves <em className="font-display font-medium text-accent">forward.</em></h1>
            <div className="mt-10 grid max-w-xl gap-6 border-l border-accent pl-5 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="text-lg leading-relaxed text-muted-foreground">We work beside communities to create the conditions for children and families to thrive.</p>
              <Link to="/donate" className="inline-flex w-fit items-center gap-2 bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-green-hover">Support the work <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
          <div className="relative min-h-[380px] lg:col-span-5 lg:min-h-0"><div className="absolute inset-0 bg-accent" /><img src={heroImage} alt="Amos Kali Foundation education programme" width={1600} height={1059} className="absolute inset-x-0 top-0 h-[88%] w-full object-cover lg:inset-y-0 lg:h-full" /><p className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.16em] text-primary">Education begins with access</p></div>
        </div>
      </section>

      <section className="border-b border-border"><div className="container-page grid sm:grid-cols-3">{[["01", "Community-led", "Local knowledge informs every decision."], ["02", "Long-term", "We build relationships that endure."], ["03", "Accountable", "Clear reporting at every stage."]].map(([number, title, text]) => <div key={number} className="border-b border-border py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0"><span className="text-xs font-bold tracking-[0.16em] text-accent">{number}</span><h2 className="mt-5 text-2xl font-semibold text-primary">{title}</h2><p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}</div></section>

      <section className="container-page grid gap-12 py-20 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5"><p className="eyebrow">Our point of view</p><h2 className="mt-4 max-w-lg text-4xl font-semibold leading-[0.95] text-primary sm:text-5xl md:text-5xl">Progress is built with people, never around them.</h2></div>
        <div className="md:col-span-7 md:pt-20"><p className="max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">The most durable work starts with listening. We bring structure, resources and commitment; communities bring the insight that makes each programme matter.</p><div className="mt-12 grid border-t border-border grid-cols-2">{values.map(({ title, description }, index) => <article key={title} className="border-b border-border py-6 pr-3 sm:pr-6 sm:odd:border-b sm:even:border-l sm:even:pl-6"><span className="text-xs font-bold tracking-[0.16em] text-accent">0{index + 1}</span><h3 className="mt-3 text-xl sm:text-2xl font-semibold text-primary">{title}</h3><p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{description}</p></article>)}</div></div>
      </section>

      <section className="bg-primary text-primary-foreground"><div className="container-page grid gap-12 py-20 md:grid-cols-12 md:items-end"><div className="md:col-span-4"><p className="eyebrow text-accent">Our impact</p><h2 className="mt-4 text-4xl sm:text-5xl font-semibold leading-[0.95] text-primary-foreground">Measured in what changes.</h2></div><div className="grid border-t border-white/20 grid-cols-2 md:col-span-8 md:grid-cols-4">{stats.map((stat, index) => <div key={stat.label} className="border-b border-white/20 py-6 pr-3 sm:px-4 md:border-b-0 md:px-4 md:first:pl-0 md:not-first:border-l"><p className="text-xs font-bold tracking-[0.16em] text-accent">0{index + 1}</p><p className="mt-5 font-display text-3xl sm:text-4xl font-semibold text-primary-foreground">{stat.value}</p><p className="mt-2 text-xs sm:text-sm text-primary-foreground/70">{stat.label}</p></div>)}</div></div></section>

      <section className="grid border-b border-border lg:grid-cols-2"><div className="min-h-[460px] overflow-hidden"><img src={storyImage} alt="A free education programme" loading="lazy" width={1600} height={1059} className="h-full w-full object-cover" /></div><div className="flex items-center bg-accent-soft px-6 py-20 sm:px-10 lg:px-[max(3rem,calc((100vw-78rem)/2))]"><div className="max-w-xl"><p className="eyebrow">Where we begin</p><h2 className="mt-4 text-5xl font-semibold leading-[0.95] text-primary">A good future should not be out of reach.</h2><p className="mt-7 text-lg leading-relaxed text-muted-foreground">From education and health to water, nutrition and protection, our work meets the practical needs that shape a child&apos;s future.</p><Link to="/about" className="mt-8 inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-sm font-bold text-primary hover:text-green-hover">Meet the foundation <ArrowRight className="h-4 w-4" /></Link></div></div></section>

      <section className="container-page py-20"><div className="grid gap-8 border-b border-border pb-8 md:grid-cols-12 md:items-end"><div className="md:col-span-7"><p className="eyebrow">Our programmes</p><h2 className="mt-4 text-4xl sm:text-5xl font-semibold leading-[0.95] text-primary">The work, in focus.</h2></div><p className="text-xs sm:text-base leading-relaxed text-muted-foreground md:col-span-5">Five connected areas of work, designed for practical and lasting change.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">{programs.map(({ title, description }, index) => <article key={title} className="border-b border-border py-6 sm:py-7 lg:border-b-0 lg:border-r lg:px-4 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"><p className="text-xs font-bold tracking-[0.16em] text-accent">0{index + 1}</p><h3 className="mt-4 sm:mt-10 text-lg sm:text-2xl font-semibold text-primary">{title}</h3><p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{description}</p></article>)}</div><Link to="/programs" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-green-hover">Explore our programmes <ArrowRight className="h-4 w-4 text-accent" /></Link></section>

      <section className="bg-muted py-20"><div className="container-page grid gap-10 md:grid-cols-12"><div className="md:col-span-4"><p className="eyebrow">Give with purpose</p><h2 className="mt-4 text-4xl sm:text-5xl font-semibold leading-[0.95] text-primary">Back what matters now.</h2><Link to="/donate" className="mt-8 inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-bold text-accent-foreground hover:bg-[#e9870a]">Give today <HeartHandshake className="h-4 w-4" /></Link></div><div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:col-span-8">{causes.map((cause, index) => <article key={cause.slug} className="border-t border-primary pt-4"><img src={cause.image} alt={cause.title} loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full object-cover rounded-md" /><p className="mt-4 text-xs font-bold tracking-[0.16em] text-accent">0{index + 1}</p><h3 className="mt-2 text-lg sm:text-2xl font-semibold text-primary">{cause.title}</h3><p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{cause.summary}</p></article>)}</div></div></section>

      <section className="container-page grid gap-10 py-20 lg:grid-cols-12 lg:items-center"><img src={fieldImage} alt="Amos Kali Foundation field work" loading="lazy" width={1500} height={1000} className="aspect-[5/4] w-full object-cover lg:col-span-6" /><div className="lg:col-span-5 lg:col-start-8"><p className="eyebrow">From the field</p><blockquote className="mt-5 text-4xl font-semibold leading-[1.02] text-primary sm:text-5xl">“When a community owns the work, hope becomes something people can hold.”</blockquote><p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Field team reflection / Makueni County</p><Link to="/testimonials" className="mt-8 inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-sm font-bold text-primary">Read community voices <ArrowRight className="h-4 w-4" /></Link></div></section>

      <Newsletter />
    </>
  );
}
