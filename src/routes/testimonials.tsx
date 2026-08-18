import { createFileRoute } from "@tanstack/react-router";
import { Heart, Quote } from "lucide-react";

// Donations pictures
import donationOne from "@/assets/donations/IMG-20260729-WA0566(1).jpg";
import donationTwo from "@/assets/donations/IMG-20260729-WA0569(1).jpg";
import donationThree from "@/assets/donations/IMG-20260729-WA0569.jpg";
import donationFour from "@/assets/donations/IMG-20260729-WA0680.jpg";
import donationFive from "@/assets/donations/IMG-20260729-WA0681.jpg";
import donationSix from "@/assets/donations/IMG-20260729-WA0684.jpg";
import donationSeven from "@/assets/donations/IMG-20260729-WA0685.jpg";
import donationEight from "@/assets/donations/IMG-20260729-WA0733(1).jpg";
import donationNine from "@/assets/donations/IMG-20260729-WA0734.jpg";
import donationTen from "@/assets/donations/IMG-20260729-WA0735(2).jpg";
import donationEleven from "@/assets/donations/IMG-20260729-WA0736(1).jpg";
import donationTwelve from "@/assets/donations/IMG-20260729-WA0737(2).jpg";
import donationThirteen from "@/assets/donations/WhatsApp Image 2026-08-03 at 10.38.18 AM (1).jpeg";
import donationFourteen from "@/assets/donations/WhatsApp Image 2026-08-03 at 10.38.18 AM.jpeg";

// Free Education pictures
import educationOne from "@/assets/freeeducation/IMG-20260729-WA0598.jpg";
import educationTwo from "@/assets/freeeducation/IMG-20260729-WA0606.jpg";
import educationThree from "@/assets/freeeducation/IMG-20260729-WA0658.jpg";
import educationFour from "@/assets/freeeducation/IMG-20260729-WA0664.jpg";

// Children's home visit & Sports pictures
import testimonialOne from "@/assets/testimonials/IMG_0855.jpg";
import testimonialTwo from "@/assets/testimonials/IMG_0885.jpg";
import testimonialThree from "@/assets/testimonials/WhatsApp Image 2026-07-29 at 6.13.29 PM (2).jpeg";
import testimonialFour from "@/assets/testimonials/WhatsApp Image 2026-07-29 at 6.13.31 PM.jpeg";
import testimonialFive from "@/assets/testimonials/WhatsApp Image 2026-07-29 at 6.13.33 PM (2).jpeg";

import { PageHero } from "@/components/site/PageHero";
import { Newsletter } from "@/components/site/Newsletter";
import InteractiveImageBentoGallery from "@/components/ui/bento-gallery";

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

const featuredGalleryItems = [
  {
    id: 1,
    title: "School Support",
    desc: "Children returned to class with renewed hope.",
    url: educationOne,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Food Relief",
    desc: "Meals reaching families in need.",
    url: donationFive,
    span: "md:row-span-1",
  },
  {
    id: 3,
    title: "Water Access",
    desc: "A daily need turned into lasting dignity.",
    url: educationTwo,
    span: "md:row-span-1",
  },
  {
    id: 4,
    title: "Community Care",
    desc: "Listening, serving, and walking alongside families.",
    url: testimonialOne,
    span: "md:row-span-2",
  },
  {
    id: 5,
    title: "Youth Empowerment",
    desc: "Creative spaces that build confidence.",
    url: donationOne,
    span: "md:row-span-1",
  },
  {
    id: 6,
    title: "Shared Joy",
    desc: "Moments of play, connection, and encouragement.",
    url: testimonialFive,
    span: "md:col-span-2 md:row-span-1",
  },
];

const galleryCategories = [
  {
    title: "Donations",
    description: "Generous contributions supporting our communities",
    images: [donationOne, donationTwo, donationThree, donationFour, donationFive, donationSix, donationSeven, donationEight, donationNine, donationTen, donationEleven, donationTwelve, donationThirteen, donationFourteen],
  },
  {
    title: "Free Education",
    description: "Learning moments and educational programs",
    images: [educationOne, educationTwo, educationThree, educationFour],
  },
  {
    title: "Children's Home Visits",
    description: "Connecting with families and children in their communities",
    images: [testimonialOne, testimonialTwo],
  },
  {
    title: "Sports & Recreation",
    description: "Games, activities and community gatherings",
    images: [testimonialThree, testimonialFour, testimonialFive],
  },
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

        <div className="mt-14">
          <InteractiveImageBentoGallery
            imageItems={featuredGalleryItems}
            title="Moments That Matter"
            description="A visual reflection of the people, places, and shared experiences that continue to shape our mission."
          />
        </div>

        {galleryCategories.map((category) => (
          <div key={category.title} className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-primary">{category.title}</h3>
              <p className="mt-2 text-muted-foreground">{category.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {category.images.map((image, index) => (
                <figure
                  key={`${category.title}-${index}`}
                  className="group overflow-hidden bg-muted aspect-[4/3]"
                >
                  <img
                    src={image}
                    alt={`${category.title} image ${index + 1}`}
                    loading="lazy"
                    width={1600}
                    height={1200}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                  />
                </figure>
              ))}
            </div>
          </div>
        ))}
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
