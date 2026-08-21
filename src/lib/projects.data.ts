import PhainonIcon from "../components/svgs/logos/PhainonLogo";
import TriagentIcon from "../components/svgs/logos/TriagentLogo";
import ArrayIcon from "../components/svgs/logos/ArrayLogo";
import InfluxIcon from "../components/svgs/logos/InfluxLogo";
import SengeLogo from "../components/svgs/logos/SengeLogo";

import { Project } from "./projects.types";
import { FiFigma } from "react-icons/fi";
import { RiNextjsLine, RiSupabaseLine } from "react-icons/ri";
import { SiDiscorddotjs } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

export const PROJECTS: Project[] = [
  {
    title: "Triagent",
    description: "AI-powered Medical Triage & Doctor Recommendation System",
    summary:
      "Wrong doctors, wrong care.\nSee how AI was used to connect patients to the right care, fast.",

    project_type: "collaborative",
    work_type: "design",
    duration: "sep-2025",
    version: "alpha-v1.0",

    techs: [FiFigma],
    stack: ["Figma", "AI/NLP Integration", "Usability Testing"],
    roles: ["Product Engineer", "UX Researcher"],

    icon: TriagentIcon,
    cover: "/images/projects/triagent/banner.png",
    colors: ["#ffffff", "#8d93ff"],
    href: "https://www.figma.com/community/file/1616703425860952385/triagent",

    slug: "triagent",
  },
  {
    title: "Phainon",
    description: "Multi-culture Card-collecting and Trading Discord Bot",
    summary:
      "Not enough card games with diversity.\nOne decision to build a better one.",

    project_type: "solo",
    work_type: "development",
    duration: "in-development",
    version: "beta-v0.4",

    techs: [SiDiscorddotjs, TbBrandTypescript, RiSupabaseLine],
    stack: ["Discord.js v14", "Typescript", "Supabase", "PostgreSQL"],
    roles: ["Full-stack"],

    icon: PhainonIcon,
    cover: "/images/projects/phainon/banner.gif",
    colors: ["#EAEAFF", "#8799F2"],

    slug: "phainon",
  },
  {
    title: "Array",
    description: "Real-time Mentor-Mentee Journaling Platform ",
    summary: "",

    project_type: "collaborative",
    work_type: "design",
    duration: "dec-2023",
    version: "alpha-v1.0",

    techs: [FiFigma],
    stack: ["Figma"],
    roles: ["Product Engineer"],

    icon: ArrayIcon,
    cover: "/images/projects/array/banner.png",
    colors: [],
    href: "https://www.figma.com/community/file/1616703158808681788/array",

    slug: "array",
  },

  {
    title: "Senge",
    description: "Facebook Messenger Redesign for Productivity",
    summary: "",

    project_type: "collaborative",
    work_type: "design",
    duration: "nov-2022",
    version: "alpha-v1.0",

    techs: [FiFigma],
    stack: ["Figma"],
    roles: ["Product Engineer"],

    icon: SengeLogo,
    cover: "/images/projects/senge/banner.png",
    colors: ["#ffffff", "#8d93ff"],
    href: "https://www.figma.com/community/file/1616702986484755771/senge",

    slug: "senge",
  },
  {
    title: "Influx",
    description: "Community-driven Marketplace for Local Discovery",
    summary: "",

    project_type: "collaborative",
    work_type: "development",
    duration: "mar-2026",
    version: "beta-v2.0",

    techs: [FiFigma, RiNextjsLine, RiSupabaseLine],
    stack: ["Figma", "Next.js", "Supabase"],
    roles: ["Full-stack"],

    icon: InfluxIcon,
    cover: "/images/projects/influx/banner.png",
    colors: [],
    href: "https://www.figma.com/community/file/1616702824695818552/influx",

    slug: "influx",
  },
  // {
  //   title: "Astrail",
  //   description: "Honkai: Star Rail Build Showcase Tool",
  //   summary: "",

  //   project_type: "",
  //   work_type: "",
  //   duration: "",

  //   stack: [],
  //   roles: [],

  //   icon: () => null,
  //   cover: "/placeholder.jpg",
  //   colors: [],
  //   href: "",

  //   article: ARTICLES.find((a) => a.title === "astrail"),
  // },
];
