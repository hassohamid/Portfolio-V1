import { ModeToggle } from "@/theme/ModeToggle";
import { WordRotate } from "@/components/magicui/word-rotate";

export default function Nav() {
  return (
    <nav className="flex items-center gap-2 ">
      <a href="mailto:hasso1999@hotmail.com">
        <WordRotate
          duration={4000}
          words={["For inquiries", "Reach out"]}
          className=" flex items-center gap-1  uppercase tracking-tighter text-xs hover:text-primary/80 border-b-1 border-dotted dark:border-primary/30"
        />
      </a>
      <ModeToggle />
    </nav>
  );
}
