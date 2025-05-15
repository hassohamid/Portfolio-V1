import { Button } from "@/components/ui/button";
import { AlignRight } from "lucide-react";
import { ModeToggle } from "@/theme/ModeToggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center gap-4">
      <div className="hidden md:flex items-center gap-4">
        <a
          href="#about"
          className="hover:text-foreground/80 text-foreground/60  relative py-1 group"
        >
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
        <a
          href="#stack"
          className="hover:text-foreground/80 text-foreground/60 relative py-1 group"
        >
          Stack
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
        <a
          href="#projects"
          className="hover:text-foreground/80 text-foreground/60 relative py-1 group"
        >
          Projects
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
        <a
          href="#BeyondCode"
          className="hover:text-foreground/80 text-foreground/60 relative py-1 group"
        >
          Insight
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
      </div>
      <div className="md:hidden">
        <Sheet onOpenChange={setOpen} open={open}>
          <SheetTrigger asChild>
            <Button className="cursor-pointer !transition-none" variant="ghost">
              <AlignRight />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[200px] sm:w-[250px] ">
            <div className="flex flex-col justify-center h-full gap-4 px-3  ">
              <p className="text-xs text-muted-foreground/50 tracking-wider px-4">
                GO TO
              </p>
              <a
                onClick={() => setOpen(false)}
                href="#about"
                className=" px-4 py-2 hover:bg-primary/5 rounded-md transition-all duration-200 text-foreground/70 uppercase tracking-wide "
              >
                About
              </a>
              <a
                onClick={() => setOpen(false)}
                href="#stack"
                className=" px-4 py-2 hover:bg-primary/5 rounded-md transition-all duration-200 text-foreground/70 uppercase tracking-wide "
              >
                Stack
              </a>
              <a
                onClick={() => setOpen(false)}
                href="#projects"
                className="px-4 py-2 hover:bg-primary/5 rounded-md transition-all duration-200 text-foreground/70 uppercase tracking-wide "
              >
                Projects
              </a>
              <a
                onClick={() => setOpen(false)}
                href="#BeyondCode"
                className=" px-4 py-2 hover:bg-primary/5 rounded-md transition-all duration-200 text-foreground/70 uppercase tracking-wide "
              >
                Insight
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <ModeToggle />
    </nav>
  );
}
