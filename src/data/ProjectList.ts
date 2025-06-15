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
      "Full-stack e-commerce platform with authentication, shopping cart, and admin CMS.",
    img: "HakimLivs.png",
    deployment: "https://be-webshop-2025-fe-eight.vercel.app/",
    technologies: [
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
      { icon: SiNodedotjs, name: "NodeJS", color: "#339933" },
      { icon: SiExpress, name: "Express" },
      { icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
    ],
  },
  {
    name: "Portfolio",
    description: "A fast and lightweight portfolio site made to showcase work.",
    img: "PF.png",
    deployment: "https://hassohamid.com",
    technologies: [
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiShadcnui, name: "shadcn" },
      { icon: SiTailwindcss, name: "TailwindCSS", color: "#06B6D4" },
      { icon: SiFramer, name: "Motion", color: "#0055FF" },
    ],
  },
  {
    name: "GridAI",
    description:
      "AI-powered SaaS that transforms 9 uploaded photos into aesthetically Instagram feed layouts.",
    img: "GridAI.png",
    deployment: "https://grid-ai-mu.vercel.app/",
    technologies: [
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiShadcnui, name: "shadcn" },
      { icon: SiTailwindcss, name: "TailwindCSS", color: "#06B6D4" },
      { icon: SiFramer, name: "Motion", color: "#0055FF" },
      { icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
    ],
  },
];
