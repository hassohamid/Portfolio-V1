import {
  RiReactjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
  RiNextjsFill,
} from "react-icons/ri";
import {
  SiTypescript,
  SiShadcnui,
  SiChakraui,
  SiMui,
  SiHtml5,
  SiFigma,
  SiGithub,
  SiTrello,
  SiFirebase,
  SiSupabase,
  SiJira,
  SiDiscord,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiFramer,
  SiVercel,
  SiCanva,
  SiClerk,
  SiPostman,
} from "react-icons/si";
import { BiLogoBootstrap } from "react-icons/bi";
import { TbBrandThreejs } from "react-icons/tb";

export const technologies = {
  frontend: [
    { name: "ReactJS", icon: RiReactjsFill, color: "#61DAFB" },
    { name: "JavaScript", icon: RiJavascriptFill, color: "#F7DF1E" },
    { name: "TailwindCSS", icon: RiTailwindCssFill, color: "#06B6D4" },
    { name: "NextJS", icon: RiNextjsFill },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Material UI", icon: SiMui, color: "#007FFF" },
    { name: "shadcn", icon: SiShadcnui },
    { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
    { name: "Bootstrap", icon: BiLogoBootstrap, color: "#7952B3" },
    { name: "Three.js", icon: TbBrandThreejs },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  ],

  backend: [
    { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
    { name: "ExpressJS", icon: SiExpress },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Clerk", icon: SiClerk, color: "#6C47FF" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  ],

  ui: [
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Canva", icon: SiCanva, color: "#00C4CC" },
    { name: "Motion.dev", icon: SiFramer, color: "#0055FF" },
  ],

  tools: [
    { name: "GitHub", icon: SiGithub },
    { name: "Vercel", icon: SiVercel },
    { name: "Trello", icon: SiTrello, color: "#0052CC" },
    { name: "Jira", icon: SiJira, color: "#0052CC" },
    { name: "Discord", icon: SiDiscord, color: "#5865F2" },
  ],
};
