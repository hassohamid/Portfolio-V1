import { Github, Instagram, Linkedin } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center">
      <a
        href="https://github.com/hassohamid"
        target="_blank"
        className="hover:text-[#8400ff] transition-colors"
      >
        <Github size={20} />
      </a>
      <a
        href="https://linkedin.com/in/hassohamid"
        target="_blank"
        className="hover:text-[#8400ff] transition-colors"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="https://www.instagram.com/skhh___"
        target="_blank"
        className="hover:text-[#8400ff] transition-colors"
      >
        <Instagram size={20} />
      </a>
    </div>
  );
}
