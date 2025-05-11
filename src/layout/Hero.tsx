import { ParticlesBackground } from "@/components/Particles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, BadgeCheck, Mail } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Hero() {
  return (
    <section
      className="relative h-[600px] overflow-hidden flex flex-col justify-center items-center"
      id="intro"
    >
      <ParticlesBackground />
      <div className="z-10 flex flex-col items-center gap-4">
        <Avatar className="size-32 ring-2 ring-white/10 ring-offset-2 ring-offset-background hover:ring-primary/20 transition-all duration-200 ">
          <AvatarImage src="av.jpg" alt="HASSO" />
          <AvatarFallback>HH</AvatarFallback>
        </Avatar>
        <div className="text-center space-y-4 ">
          <h1 className="text-4xl font-bold tracking-tight flex items-center justify-center">
            hasso
            <BadgeCheck className="ml-2 mt-1" />
          </h1>

          <div className="inline-block">
            <p className="text-foreground/90 text-sm font-mono tracking-wide px-2 py-0.5 rounded bg-primary/5 border border-primary/10">
              <span className="text-primary">&lt;</span>
              frontend<span className="text-primary/70">Dev</span>
              <span className="text-primary">/&gt;</span>
            </p>
          </div>

          <p className="max-w-md mx-auto text-muted-foreground/90 font-light tracking-wide">
            <span className="text-primary/90 hover:text-primary ">
              future-focused
            </span>
            <span className="mx-2 text-primary/50">•</span>
            <span className="text-primary/90 hover:text-primary">
              detail-driven
            </span>
          </p>
        </div>
        <div className="flex gap-3 justify-center items-center ">
          <Drawer>
            <DrawerTrigger className="flex justify-center items-center gap-1">
              <Button className="px-5 sm:px-6 cursor-pointer">
                Get in Touch <ArrowRight size={16} />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="flex justify-center items-center text-center ">
              <DrawerHeader>
                <DrawerTitle></DrawerTitle>
                <DrawerDescription className="flex items-center justify-center gap-2 mt-2 p-2  ">
                  <Mail size={15} className="text-primary" />
                  <a
                    href="mailto:contact@hasso.io"
                    className="hover:text-primary transition-colors"
                  >
                    hello@hasso.io
                  </a>
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <SocialLinks />
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Heart size={16} className="animate-pulse hearteffect" />
          <Button
            asChild
            variant="outline"
            className="px-5 sm:px-6 cursor-pointer  "
          >
            <a href="#projects">View My Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
