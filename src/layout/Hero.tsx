import { ParticlesBackground } from "@/components/Particles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[700px] overflow-hidden flex flex-col justify-center items-center">
      <ParticlesBackground />
      <div className="z-10 flex flex-col items-center gap-4">
        <Avatar className="size-32 ring-2 ring-white/10 ring-offset-2 ring-offset-background hover:ring-primary/20 transition-all duration-300">
          <AvatarImage src="av.jpg" alt="HASSO" />
          <AvatarFallback>HH</AvatarFallback>
        </Avatar>
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">
            hasso<span className="text-primary">.</span>
          </h1>

          <div className="inline-flex items-center gap-2">
            <div className="h-px w-6 bg-primary/40"></div>
            <p className="text-lg text-muted-foreground/80 font-light">
              Frontend Developer
            </p>
            <div className="h-px w-6 bg-primary/40"></div>
          </div>

          <p className="max-w-md mx-auto text-muted-foreground/90 font-light tracking-wide">
            <span className="text-primary/90 hover:text-primary transition-colors duration-300">
              future-focused
            </span>
            <span className="mx-2 text-primary/50">•</span>
            <span className="text-primary/90 hover:text-primary transition-colors duration-300">
              detail-driven
            </span>
          </p>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <Button className="px-6 cursor-pointer">Contact me</Button>
          <Heart size={16} className="animate-pulse hearteffect" />
          <Button variant="outline" className="px-6 cursor-pointer">
            View My Work
          </Button>
        </div>
      </div>
    </section>
  );
}
