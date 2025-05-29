import { Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "motion/react";

export default function SocialLinks() {
  return (
    <div className="flex gap-2 md:gap-1 justify-center items-center ">
      <motion.a
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeIn", duration: 0.2 }}
        href="https://github.com/hassohamid"
        target="_blank"
        className="border-1 p-2 rounded-lg  hover:bg-[#333] hover:text-white "
      >
        <Github size={14} />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeIn", duration: 0.4 }}
        href="https://linkedin.com/in/hassohamid"
        target="_blank"
        className="border-1 p-2 rounded-lg  hover:bg-[#0077B5] hover:text-white "
      >
        <Linkedin size={14} />
      </motion.a>
      <motion.a
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeIn", duration: 0.6 }}
        href="https://www.instagram.com/skhh___"
        target="_blank"
        className="border-1 p-2 rounded-lg  hover:bg-[#E4405F] hover:text-white "
      >
        <Instagram size={14} />
      </motion.a>
    </div>
  );
}
