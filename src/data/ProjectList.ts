import {
  SiJavascript,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
} from "react-icons/si";

export const ProjectList = [
  {
    name: "Hakim Livs",
    description:
      "Full-stack e-commerce platform for fresh groceries with user authentication, shopping cart functionality, and complete admin CMS for product management.",
    img: "HakimLivs.png",
    deployment: "https://be-webshop-2025-fe-eight.vercel.app/",
    technologies: [
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiBootstrap, name: "Bootstrap" },
      { icon: SiNodedotjs, name: "NodeJS" },
      { icon: SiExpress, name: "Express" },
      { icon: SiSupabase, name: "Supabase" },
    ],
  },
  {
    name: "Portfolio",
    description:
      "A fast and lightweight portfolio site made to showcase work. ",
    img: "PFO.png",
    deployment: "https://hassohamid.com",
    technologies: [
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiShadcnui, name: "shadcn" },
      { icon: SiTailwindcss, name: "TailwindCSS" },
      { icon: SiFramer, name: "Motion" },
    ],
  },
  {
    name: "GridAI",
    description:
      "AI-powered SaaS platform that automatically transforms 9 uploaded photos into aesthetically optimized Instagram feed layouts.",
    img: "GridAI.png",
    deployment: "https://grid-ai-mu.vercel.app/",
    technologies: [
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiShadcnui, name: "shadcn" },
      { icon: SiTailwindcss, name: "TailwindCSS" },
      { icon: SiFramer, name: "Motion" },
      { icon: SiSupabase, name: "Supabase" },
    ],
  },
];
