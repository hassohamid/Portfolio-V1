import {
  RiReactjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
  RiNextjsFill,
} from "react-icons/ri";
import { SiTypescript, SiShadcnui, SiChakraui, SiMui } from "react-icons/si";
import { BiLogoBootstrap } from "react-icons/bi";
import { TbBrandThreejs } from "react-icons/tb";

export const technologies = [
  { name: "ReactJS", icon: RiReactjsFill, color: "#61DAFB" },
  { name: "JavaScript", icon: RiJavascriptFill, color: "#F7DF1E" },
  { name: "TailwindCSS", icon: RiTailwindCssFill, color: "#06B6D4" },
  {
    name: "NextJS",
    icon: RiNextjsFill,
  },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "MUI", icon: SiMui, color: "#007FFF" },
  { name: "shadcn", icon: SiShadcnui },
  { name: "chakra", icon: SiChakraui, color: "#319795" },
  { name: "Bootstrap", icon: BiLogoBootstrap, color: "#7952B3" },
  {
    name: "Three.js",
    icon: TbBrandThreejs,
  },
];
