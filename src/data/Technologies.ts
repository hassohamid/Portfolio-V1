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
  SiFigma,
  SiGithub,
  SiTrello,
  SiSupabase,
  SiJira,
  SiDiscord,
  SiNodedotjs,
  SiExpress,
  SiFramer,
  SiVercel,
  SiCanva,
  SiClerk,
  SiPostman,
} from "react-icons/si";

export const technologies = {
  frontend: [
    { name: "React", icon: RiReactjsFill, color: "#61DAFB" },
    { name: "JavaScript", icon: RiJavascriptFill, color: "#F7DF1E" },
    { name: "TailwindCSS", icon: RiTailwindCssFill, color: "#06B6D4" },
    { name: "Next.js", icon: RiNextjsFill },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Material UI", icon: SiMui, color: "#007FFF" },
    { name: "shadcn", icon: SiShadcnui },
    { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
    { name: "Motion", icon: SiFramer, color: "#0055FF" },
  ],

  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Clerk", icon: SiClerk, color: "#6C47FF" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  ],

  ui: [
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Canva", icon: SiCanva, color: "#00C4CC" },
  ],

  tools: [
    { name: "GitHub", icon: SiGithub },
    { name: "Vercel", icon: SiVercel },
    { name: "Trello", icon: SiTrello, color: "#0052CC" },
    { name: "Jira", icon: SiJira, color: "#0052CC" },
    { name: "Discord", icon: SiDiscord, color: "#5865F2" },
  ],
};
