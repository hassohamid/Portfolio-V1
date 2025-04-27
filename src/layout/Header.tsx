import { ParticlesBackground } from "@/components/Particles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "../theme/ModeToggle";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function Header() {
  return (
    <header className="relative h-[700px] overflow-hidden flex flex-col justify-center items-center">
      <ParticlesBackground />
      <div className="z-11 flex flex-col items-center gap-4">
        <Avatar className="size-32 ring-2 ring-white/10 ring-offset-2 ring-offset-background hover:ring-primary/20 transition-all duration-300">
          <AvatarImage src="av.jpg" alt="HASSO" />
          <AvatarFallback>HH</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">hasso.</h1>
          <div className="h-px w-12 bg-primary/30 mx-auto mb-3"></div>
          <p className="text-xl text-muted-foreground/80 mb-3 font-light tracking-wide">
            Frontend Developer
          </p>
          <p className="max-w-md text-center mb-6 text-muted-foreground/90 font-light tracking-wider">
            <span className="text-primary/90">future-focused</span>
            {" · "}
            <span className="text-primary/90">detail-driven</span>
          </p>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <Button className="px-8 cursor-pointer">Contact me</Button>
          <Heart size={20} className=" animate-pulse" />
          <Button variant="outline" className="px-8 cursor-pointer">
            View My Work
          </Button>
        </div>
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
