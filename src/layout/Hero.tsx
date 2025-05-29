import { ParticlesBackground } from "@/components/Particles";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, BadgeCheck, Mail, Fingerprint } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden flex items-center py-24 md:py-32 lg:py-40"
      id="intro"
    >
      <ParticlesBackground />

      <div className="container mx-auto max-w-8xl px-4 z-10 sm:px-15">
        <div className="max-w-3xl mx-auto">
          <div className="dark:bg-background/50 backdrop-blur-xs sm:border-l p-6 md:p-8  ">
            <div className="flex flex-col sm:flex-row items-center gap-8 relative ">
              <Avatar className="size-32 sm:size-36 ring-2 ring-white/10 ring-offset-2 ring-offset-background hover:ring-primary/20 transition-all duration-200   ">
                <ReactCompareSlider
                  onlyHandleDraggable={true}
                  changePositionOnHover={true}
                  position={100}
                  style={{
                    pointerEvents: "none",
                  }}
                  itemOne={<ReactCompareSliderImage src="Avat1.webp" />}
                  itemTwo={<ReactCompareSliderImage src="moi.jpg" />}
                />
              </Avatar>

              <div className="flex flex-col items-center space-y-1 ">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight flex items-center justify-center sm:justify-start gap-2">
                  hasso
                  <BadgeCheck className="text-primary size-6 md:size-7" />
                </h1>

                <div className="flex flex-col items-center  gap-4 ">
                  <h1 className="text-[12px] tracking-widest text-muted-foreground/90 font-semibold flex items-center justify-center   ">
                    BASED IN STOCKHOLM
                  </h1>

                  <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-muted/30">
                    <span className="text-primary/90 mr-1.5 font-mono text-xs opacity-70">
                      role
                    </span>
                    <span className="font-mono text-sm">frontendDeveloper</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block absolute top-3 right-2">
                <Fingerprint size={35} strokeWidth={1} />
              </div>
            </div>

            <div className="flex  items-center justify-center gap-3 mt-8 pt-6 border-t ">
              <Drawer>
                <DrawerTrigger>
                  <Button
                    variant="outline"
                    className=" cursor-pointer sm:!px-8 !px-5 !py-5 dark:bg-background "
                  >
                    <span>Say Hello</span>
                    <ArrowRight size={16} className="ml-1 " />
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

              <Button
                asChild
                variant="outline"
                className=" !px-5 sm:!px-8  !py-5 dark:bg-background "
              >
                <a href="#projects">Peek Inside</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
