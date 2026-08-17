import { createFileRoute } from "@tanstack/react-router";
import { Heart, Quote } from "lucide-react";

import testimonialOne from "@/assets/testimonials/IMG-20260729-WA0664.jpg";
import testimonialTwo from "@/assets/testimonials/IMG-20260729-WA0665.jpg";
import testimonialThree from "@/assets/testimonials/IMG-20260729-WA0713.jpg";
import testimonialFour from "@/assets/testimonials/IMG-20260729-WA0733(1).jpg";
import testimonialFive from "@/assets/testimonials/IMG-20260729-WA0736(1).jpg";
import testimonialSix from "@/assets/testimonials/IMG_0855.jpg";
import testimonialSeven from "@/assets/testimonials/IMG_0885.jpg";
import testimonialEight from "@/assets/testimonials/WhatsApp Image 2026-07-29 at 6.13.29 PM (2).jpeg";
import testimonialNine from "@/assets/testimonials/WhatsApp Image 2026-07-29 at 6.13.31 PM.jpeg";
import testimonialTen from "@/assets/testimonials/WhatsApp Image 2026-07-29 at 6.13.33 PM (2).jpeg";
import { PageHero } from "@/components/site/PageHero";
import { Newsletter } from "@/components/site/Newsletter";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials | Amos Kali Foundation" },
      {
        name: "description",
        content: "Shared moments and community voices from Amos Kali Foundation's work.",
      },
      { property: "og:title", content: "Testimonials | Amos Kali Foundation" },
      { property: "og:description", content: "Community voices and shared moments." },
    ],
  }),
  component: Testimonials,
});

const testimonials = [
  testimonialOne,
  testimonialTwo,
  testimonialThree,
  testimonialFour,
  testimonialFive,
  testimonialSix,
  testimonialSeven,
  testimonialEight,
  testimonialNine,
  testimonialTen,
];

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Community Voices"
        title="Stories Shared With Us"
        description="These testimonials offer a window into the relationships and experiences shared with Amos Kali Foundation."
      />

      <section className="container-page py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Quote className="mx-auto h-8 w-8 text-accent" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">Every voice matters</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We are grateful to everyone who takes the time to share their experience. With care and
            respect, we preserve these moments as part of our ongoing conversation with communities.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {testimonials.map((image, index) => (
            <figure
              key={image}
              className={`group overflow-hidden bg-muted ${
                index === 0 || index === 5 ? "col-span-2 aspect-[16/10]" : "aspect-[4/3]"
              } ${index === 4 ? "row-span-2 aspect-auto" : ""}`}
            >
              <img
                src={image}
                alt="Community image shared with Amos Kali Foundation"
                loading={index < 2 ? "eager" : "lazy"}
                width={index === 4 ? 1000 : 1600}
                height={index === 4 ? 1500 : 1200}
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-primary py-14 text-primary-foreground">
        <div className="container-page flex flex-col items-center gap-5 text-center">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-primary-foreground/10">
            <Heart className="h-5 w-5 text-accent" aria-hidden="true" />
          </span>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-primary-foreground">Thank you for sharing</h2>
            <p className="mt-3 leading-relaxed text-primary-foreground/80">
              Your feedback helps us listen more closely, learn continually and strengthen the way we serve.
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
