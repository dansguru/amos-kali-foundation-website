import InteractiveImageBentoGallery from "@/components/ui/bento-gallery";

const imageItems = [
  {
    id: 1,
    title: "School Support",
    desc: "A brighter start for every child.",
    url: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Community Care",
    desc: "Compassion in action.",
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    span: "md:row-span-1",
  },
  {
    id: 3,
    title: "Clean Water",
    desc: "Daily health and dignity.",
    url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80",
    span: "md:row-span-1",
  },
  {
    id: 4,
    title: "Food Relief",
    desc: "Meals that restore hope.",
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
    span: "md:row-span-2",
  },
  {
    id: 5,
    title: "Youth Empowerment",
    desc: "Skills, confidence, and opportunity.",
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    span: "md:row-span-1",
  },
  {
    id: 6,
    title: "Shared Moments",
    desc: "Together we build stronger communities.",
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    span: "md:col-span-2 md:row-span-1",
  },
];

export default function BentoGalleryDemo() {
  return (
    <div className="w-full antialiased">
      <InteractiveImageBentoGallery
        imageItems={imageItems}
        title="Stories in Motion"
        description="A visual look at the people, places, and moments that shape our work across communities."
      />
    </div>
  );
}
