import {
  BookOpen,
  Droplets,
  HeartPulse,
  Salad,
  ShieldCheck,
  Globe2,
  Users,
  Award,
  type LucideIcon,
} from "lucide-react";

import campaignWater from "@/assets/donations/IMG-20260729-WA0681.jpg";
import campaignFood from "@/assets/donations/IMG-20260729-WA0684.jpg";
import blogSchool from "@/assets/freeeducation/IMG-20260729-WA0598.jpg";
import blogWater from "@/assets/freeeducation/IMG-20260729-WA0606.jpg";
import blogHealth from "@/assets/freeeducation/IMG-20260729-WA0658.jpg";

export type Program = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const programs: Program[] = [
  {
    title: "Spiritual Nourishing",
    description: "Promoting Christian values, prayer, discipleship and biblical teachings that strengthen faith and inspire righteous living.",
    icon: BookOpen,
  },
  {
    title: "Nurturing Talents",
    description: "Identifying and developing talents in sports, arts, leadership and other areas for young people to maximise their potential.",
    icon: Award,
  },
  {
    title: "Building Communities",
    description: "Strengthening communities through partnerships, volunteerism and initiatives that promote unity and social cohesion.",
    icon: Users,
  },
  {
    title: "Empowering Youth",
    description: "Equipping youth with leadership skills, mentorship and entrepreneurship opportunities for positive engagement.",
    icon: HeartPulse,
  },
  {
    title: "Livelihoods",
    description: "Supporting families through economic empowerment, vocational skills and financial literacy programmes.",
    icon: Droplets,
  },
  {
    title: "Children Support",
    description: "Protecting and nurturing children with access to education, nutrition, healthcare and mentorship.",
    icon: Salad,
  },
];

export const values = [
  {
    title: "Faith in God",
    description: "Our work is rooted in Christian values and guided by God's love for humanity.",
    icon: Globe2,
  },
  {
    title: "Love and Compassion",
    description: "We serve with genuine care, seeing the dignity and potential in every person we meet.",
    icon: Award,
  },
  {
    title: "Integrity and Accountability",
    description: "We answer to God, our donors and the communities we serve with complete transparency.",
    icon: ShieldCheck,
  },
  {
    title: "Service to Humanity",
    description: "Genuine faith is demonstrated through practical community action and service.",
    icon: Users,
  },
];

export const stats = [
  { value: "180,000+", label: "Lives Impacted" },
  { value: "240+", label: "Communities Reached" },
  { value: "1,900+", label: "Volunteers Engaged" },
  { value: "$4.2M+", label: "Funds Raised" },
];

export type Cause = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  raised: number;
  goal: number;
};

export const causes: Cause[] = [
  {
    slug: "donate-food",
    title: "Donate Food to the Needy",
    summary: "Providing nutritious meals and food supplies to families in need across rural communities.",
    image: campaignWater,
    raised: 21400,
    goal: 45000,
  },
  {
    slug: "feed-a-child",
    title: "Feed a Child Every School Day",
    summary: "A warm daily meal keeps children nourished, present and learning.",
    image: campaignFood,
    raised: 15900,
    goal: 32000,
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
};

export const posts: Post[] = [
  {
    slug: "new-school-opens",
    title: "A New School Opens in Kitui County",
    excerpt: "Two hundred children now learn in permanent classrooms built with their own community.",
    date: "May 12, 2026",
    category: "Education",
    image: blogSchool,
  },
  {
    slug: "clean-water-changes-lives",
    title: "Clean Water Changes Everything",
    excerpt: "How a single borehole cut waterborne illness by more than half in one season.",
    date: "April 28, 2026",
    category: "Water",
    image: blogWater,
  },
  {
    slug: "health-camp-brings-hope",
    title: "Health Camp Brings Care to Families",
    excerpt: "Our mobile clinic team reached 1,400 patients across four remote settlements.",
    date: "April 06, 2026",
    category: "Health",
    image: blogHealth,
  },
];
