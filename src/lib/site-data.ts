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

import campaignSchool from "@/assets/campaign-school.jpg";
import campaignWater from "@/assets/campaign-water.jpg";
import campaignFood from "@/assets/campaign-food.jpg";
import blogSchool from "@/assets/blog-school.jpg";
import blogWater from "@/assets/blog-water.jpg";
import blogHealth from "@/assets/blog-health.jpg";

export type Program = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const programs: Program[] = [
  {
    title: "Education",
    description: "Classrooms, scholarships and learning materials for children in underserved communities.",
    icon: BookOpen,
  },
  {
    title: "Healthcare",
    description: "Mobile clinics, maternal care and medical support where hospitals are far away.",
    icon: HeartPulse,
  },
  {
    title: "Clean Water",
    description: "Boreholes, wells and sanitation systems that bring safe water closer to home.",
    icon: Droplets,
  },
  {
    title: "Food & Nutrition",
    description: "School meals and nutrition programmes that help children grow strong and stay in class.",
    icon: Salad,
  },
  {
    title: "Child Protection",
    description: "Safe spaces, counselling and advocacy that protect the rights of every child.",
    icon: ShieldCheck,
  },
];

export const values = [
  {
    title: "Transparent",
    description: "Every shilling is tracked and reported back to the people who gave it.",
    icon: Globe2,
  },
  {
    title: "Accountable",
    description: "We answer to our donors and to the communities we serve, equally.",
    icon: ShieldCheck,
  },
  {
    title: "Community Driven",
    description: "Local leaders design the solutions; we walk alongside them.",
    icon: Users,
  },
  {
    title: "Proven Impact",
    description: "Independent evaluation of every programme we run, each year.",
    icon: Award,
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
    slug: "build-schools",
    title: "Build Schools for Rural Kenya",
    summary: "Three new classroom blocks for children walking more than 8km to learn.",
    image: campaignSchool,
    raised: 28500,
    goal: 60000,
  },
  {
    slug: "clean-water",
    title: "Clean Water for Every Village",
    summary: "Solar-powered boreholes serving 12 villages in the Eastern counties.",
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
