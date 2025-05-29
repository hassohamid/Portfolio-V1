import { Github, Instagram, Linkedin } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-1 justify-center items-center">
      <a
        href="https://github.com/hassohamid"
        target="_blank"
        className="border-1 p-2 rounded-sm  hover:bg-[#333] hover:text-white "
      >
        <Github size={15} />
      </a>
      <a
        href="https://linkedin.com/in/hassohamid"
        target="_blank"
        className="border-1 p-2 rounded-sm  hover:bg-[#0077B5] hover:text-white "
      >
        <Linkedin size={15} />
      </a>
      <a
        href="https://www.instagram.com/skhh___"
        target="_blank"
        className="border-1 p-2 rounded-sm  hover:bg-[#E4405F] hover:text-white "
      >
        <Instagram size={15} />
      </a>
    </div>
  );
}
