import { ParticlesBackground } from "/src/components/Particles";
import { Avatar, AvatarFallback, AvatarImage } from "/src/components/ui/avatar";
import { ModeToggle } from "../theme/ModeToggle";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function Header() {
  return (
    <header className="relative h-[700px] overflow-hidden flex flex-col justify-center items-center">
      <ParticlesBackground />
      <div className="z-10 flex flex-col items-center gap-6">
        <Avatar className="size-35 border-2 bg-gradient-to-br from-blue-500 to-purple-500 p-[2px] dark:from-indigo-500 dark:to-purple-600">
          <div className="h-full w-full rounded-full bg-background overflow-hidden">
            <AvatarImage src="av.jpg" alt="HASSO" />
            <AvatarFallback>HH</AvatarFallback>
          </div>
        </Avatar>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">hasso.</h1>
          <p className="text-xl text-muted-foreground mb-3">
            Frontend Developer
          </p>
          <p className="max-w-md text-center mb-6">
            future-focused, detail-driven.
          </p>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <Button className="px-8 cursor-pointer">Contact me</Button>
          <Heart
            size={20}
            className="text-primary/80 hover:text-primary transition-colors duration-300 animate-pulse"
          />
          <Button variant="outline" className="px-8 cursor-pointer">
            View My Work
          </Button>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
    </header>
  );
}
