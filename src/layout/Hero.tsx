import { ParticlesBackground } from "@/components/Particles";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Heart,
  ArrowRight,
  BadgeCheck,
  Mail,
  Code,
  MapPin,
} from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function Hero() {
  return (
    <section
      className="relative min-h-[calc(100dvh-94px)] overflow-hidden flex items-center py-12"
      id="intro"
    >
      <ParticlesBackground />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="sm:dark:bg-black/5 backdrop-blur-xs  sm:border-l-2 sm:rounded-3xl p-6 md:p-8  ">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Avatar className="size-32 md:size-36 ring-2 ring-white/10 ring-offset-2 ring-offset-background hover:ring-primary/20 transition-all duration-200  ">
                <AvatarImage src="8.jpg" alt="HASSO" />
                <AvatarFallback>HH</AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-center space-y-1 ">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center sm:justify-start gap-2">
                  hasso
                  <BadgeCheck className="text-primary size-6 md:size-7" />
                </h1>

                <div className="flex flex-col items-center  gap-4 ">
                  <h1 className="text-[12px] tracking-widest text-muted-foreground/90 font-semibold flex items-center justify-center   ">
                    BASED IN STOCKHOLM
                  </h1>

                  <div
                    className=" flex items-center gap-1.5 px-3 py-1 rounded-md bg-primary/10
                    border-primary text-sm"
                  >
                    <Code size={14} className="text-primary" />
                    <span className=" font-medium text-primary font-mono">
                      Frontend Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 pt-6 border-t ">
              <Drawer>
                <DrawerTrigger>
                  <Button
                    variant="outline"
                    className=" cursor-pointer sm:!px-8 !px-4 "
                  >
                    <span>Let's Talk</span>
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="flex justify-center items-center text-center">
                  <DrawerHeader>
                    <DrawerDescription className="flex items-center justify-center gap-2 mt-2">
                      <Mail size={16} className="text-primary" />
                      <a
                        href="mailto:hassohamid@hotmail.com"
                        className="hover:text-primary transition-colors"
                      >
                        hassohamid@hotmail.com
                      </a>
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <SocialLinks />
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>

              <div className="flex items-center ">
                <Heart
                  size={16}
                  className=" cursor-pointer animate-pulse hearteffect"
                />
              </div>

              <Button asChild variant="outline" className=" !px-3  sm:!px-8  ">
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
