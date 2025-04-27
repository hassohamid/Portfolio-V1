import { ModeToggle } from "../theme/ModeToggle";
import Nav from "@/components/Nav";

export function Header() {
  return (
    <header className="sticky z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md bg-background/70 border-b border-border/40 transition-colors duration-300 ">
      <div className="font-bold text-xl">Portfolio.</div>
      <div className="flex items-center gap-4">
        <Nav />
        <ModeToggle />
      </div>
    </header>
  );
}
