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
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "food-donation-exercise-ngakaa-sublocation",
    title: "Food Donation Exercise – Ngakaa Sublocation",
    excerpt: "150 vulnerable households received maize and beans, while local leaders joined the outreach to strengthen community support.",
    date: "May 12, 2026",
    category: "Food Relief",
    image: blogSchool,
    content: [
      "A food donation exercise was conducted in Ngakaa Sublocation, bringing together 150 vulnerable community members drawn from 20 villages. The initiative aimed at supporting households facing food insecurity and providing immediate relief to vulnerable members of the community.",
      "Each of the 150 beneficiaries received 10 kg of maize and 5 kg of beans, providing essential food supplies to support their households. The distribution was carried out in an organized and inclusive manner, ensuring that vulnerable members identified across the 20 villages were reached.",
      "As part of the outreach, the team also visited a community member who had undergone an amputation after his leg was cut, to offer both material and moral support. During the visit, the team donated a 90 kg bag of maize to assist the individual and his household during the recovery period.",
      "The activity was graced by local government administration officials, including Assistant County Commissioner Mr. Mutai, the Chief of Twaandu Location, and the Assistant Chief of Ngakaa. Their presence demonstrated the importance of collaboration between community members, local leadership and development partners in addressing food insecurity and supporting vulnerable households.",
      "The donation was not only about providing food but also demonstrated community solidarity, compassion and collective responsibility towards supporting vulnerable members, particularly households experiencing difficult circumstances. The initiative provided immediate food relief while strengthening the relationship between local administration, community leadership and residents.",
      "Key outcomes: 150 vulnerable beneficiaries supported; beneficiaries drawn from 20 villages within Ngakaa Sublocation; each beneficiary received 10 kg of maize and 5 kg of beans; another vulnerable community member received an additional 90 kg bag of maize; local administration participated in and supported the exercise; the activity strengthened community cohesion and support for vulnerable households.",
    ],
  },
  {
    slug: "a-community-built-together",
    title: "A Community Built Together",
    excerpt: "When a school was rebuilt with local hands and generous hearts, children returned to class with renewed hope.",
    date: "April 28, 2026",
    category: "Education",
    image: blogSchool,
    content: [
      "A new classroom block is more than bricks and timber. In Kitui County, it became a symbol of renewed faith in what a community can achieve when it comes together.",
      "Parents, volunteers, local leaders, and partner teams joined hands to rebuild a learning space that had long been in need. The result was not only a stronger school facility, but a renewed sense of belonging and momentum.",
      "For the children, the difference was immediate. They returned to class with confidence, comfort, and the knowledge that their future matters. The transformation was practical, emotional, and deeply communal.",
    ],
  },
  {
    slug: "clean-water-is-kindness-in-action",
    title: "Clean Water Is Kindness in Action",
    excerpt: "One borehole, a hundred families, and a quiet transformation in the way a village begins to breathe again.",
    date: "April 06, 2026",
    category: "Water",
    image: blogWater,
    content: [
      "Access to clean water changes the rhythm of daily life. It reduces illness, saves time, and restores dignity to households that previously had to walk long distances for a safe supply.",
      "When a borehole was installed in a rural community, the impact spread far beyond the pump itself. Families spent less time searching for water and more time caring for their children, working, and tending to their homes.",
      "The strongest change was not only physical. It was emotional. People felt seen, supported, and encouraged that their needs were not forgotten.",
    ],
  },
  {
    slug: "care-that-arrives-when-it-matters-most",
    title: "Care That Arrives When It Matters Most",
    excerpt: "A mobile health outreach brought treatment, comfort, and dignity to families who had been waiting for help.",
    date: "March 21, 2026",
    category: "Health",
    image: blogHealth,
    content: [
      "In remote settlements, medical care does not always reach people at the moment they need it most. That is why outreach teams make a meaningful difference.",
      "During a field health camp, mothers, elders, and children were reached with treatment, guidance, and compassionate care. Many families were seeing a healthcare team for the first time in a long while.",
      "The experience was about more than medication. It was a reminder that dignity, listening, and presence matter just as much as clinical support.",
    ],
  },
];
