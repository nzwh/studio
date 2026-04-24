import Array from "../components/branding/logo/Array";
import Influx from "../components/branding/logo/Influx";
import Phainon from "../components/branding/logo/Phainon";
import Triagent from "../components/branding/logo/Triagent";

export interface Project {
  href: string;
  title: string;
  description: string;
  summary: string;
  project_type: string;
  work_type: string;
  read_time: string;
  date_published: string;
  cover_url?: string;
  Icon: React.ComponentType<{
    className?: string;
    fill?: string;
    stroke?: string;
  }>;
  roles: string[];
}

export const PROJECTS: Project[] = [
  {
    href: "/studies/triagent",
    title: "Triagent",
    description: "AI-powered medical triage & doctor recommendation platform",
    summary:
      "Wrong doctors, wrong information, wrong care.\nSee how we leveraged AI to connect patients with the right care — fast.",
    project_type: "case—study",
    work_type: "collaborative—work",
    read_time: "5m read",
    date_published: "09-2025",
    cover_url: "/images/triagent/triagent-banner.png",
    Icon: Triagent,
    roles: [
      "Design Lead",
      "UX Researcher",
      "UI/UX Designer",
      "Product Designer",
      "Front-end Developer",
      "Quality Assurance",
    ],
  },
  {
    href: "/studies/array",
    title: "Array",
    description:
      "Real-time mentor-mentee journaling platform for structured growth",
    summary:
      "Accountability is the missing piece in most mentorship.\nSee how we built a shared journaling space that keeps mentors and mentees aligned, reflective, and growing together.",
    project_type: "case—study",
    work_type: "collaborative—work",
    read_time: "5m read",
    date_published: "12-2023",
    cover_url: "/images/array/array-banner.png",
    Icon: Array,
    roles: [
      "Design Lead",
      "UI/UX Designer",
      "Product Designer",
      "Quality Assurance",
    ],
  },
  {
    href: "/studies/influx",
    title: "Influx",
    description:
      "Community-driven marketplace for buying, selling, and local discovery",
    summary:
      "Local commerce is fragmented and impersonal.\nSee how we designed Influx to make buying and selling feel like a community experience, not a transaction.",
    project_type: "case—study",
    work_type: "collaborative—work",
    read_time: "5m read",
    date_published: "03-2026",
    cover_url: "/images/influx/influx-banner.png",
    Icon: Influx,
    roles: [
      "Project Manager",
      "Design Lead",
      "UI/UX Designer",
      "Full-stack Developer",
      "Product Designer",
      "Quality Assurance",
    ],
  },
  {
    href: "/studies/phainon",
    title: "Phainon",
    description:
      "Cross-platform trading card game with a player-driven economy",
    summary:
      "Collecting is solitary. Trading is social. Most card games miss the difference.\nSee how we designed Phainon to make every card feel valuable and every trade feel meaningful.",
    project_type: "case—study",
    work_type: "collaborative—work",
    read_time: "5m read",
    date_published: "09-2025",
    cover_url: "/images/phainon/phainon-banner.png",
    Icon: Phainon,
    roles: [
      "Project Manager",
      "Design Lead",
      "UI/UX Designer",
      "Full-stack Developer",
      "Quality Assurance",
    ],
  },
];
