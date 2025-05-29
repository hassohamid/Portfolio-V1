import { ParticlesBackground } from "@/components/Particles";
import { Avatar } from "@/components/ui/avatar";
import { BadgeCheck, Fingerprint } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden flex items-center py-34 lg:py-40"
      id="intro"
    >
      <ParticlesBackground />

      <div className="container mx-auto max-w-8xl px-4 z-10 sm:px-15 relative">
        <div className="max-w-3xl mx-auto">
          <div className="dark:bg-background/50 backdrop-blur-xs border-dotted sm:border-l-2 sm:border-b-2 p-6  ">
            <div className="flex flex-col sm:flex-row items-center gap-8  ">
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

              <div className="hidden sm:block absolute top-3 right-2">
                <Fingerprint size={30} strokeWidth={0.5} />
              </div>
            </div>

            <div className="hidden sm:flex ml-5 mt-5  ">
              <SocialLinks />
            </div>
          </div>
          <div className="sm:hidden  ">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
