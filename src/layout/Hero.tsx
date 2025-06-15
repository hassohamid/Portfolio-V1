import { Avatar } from "@/components/ui/avatar";
import { BadgeCheck, Fingerprint } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import { Particles } from "@/components/magicui/particles";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/theme/ThemeProvider";

export default function Hero() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <section className="relative overflow-hidden flex items-center py-35 md:py-50 2xl:py-75  bg-gradient-to-b from-background to-[#fafafa] dark:to-[rgb(12,12,12)]">
      <Particles
        color={isDark ? "#ffffff" : "black"}
        className=" absolute w-full h-full"
      />
      <div className="container mx-auto max-w-8xl px-4 z-10 sm:px-15 relative">
        <div className="max-w-3xl mx-auto">
          <div className=" md:dark:bg-background/50 md:backdrop-blur-xs md:border-dotted md:border-l-2 md:border-b-2 pt-6 md:p-6  ">
            <div className="flex flex-col md:flex-row items-center gap-8 ">
              <Avatar className="size-32 md:size-36 ring-2 ring-white/10 ring-offset-2 ring-offset-background hover:ring-primary/20 transition-all duration-200">
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

              <div className="flex flex-col items-center md:items-start  ">
                <div className="flex flex-col md:flex-row items-center  gap-1 md:gap-3 mb-3 md:mb-2">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center gap-2">
                    hasso
                    <BadgeCheck className="text-primary size-6 md:size-7" />
                  </h1>

                  <span className="text-[12px] tracking-widest text-muted-foreground/90 font-semibold">
                    sweden | stockholm
                  </span>
                </div>
                <div className="flex items-center px-2.5 py-1 rounded-md bg-muted/30 mb-3 md:mb-2">
                  <span className="text-primary/90 mr-1.5 font-mono text-xs opacity-70">
                    role
                  </span>
                  <span className="font-mono text-sm">frontendDeveloper</span>
                </div>
                <Separator className="md:hidden" />
                <div className="md:mt-1 mt-3  ">
                  <SocialLinks />
                </div>
                <Separator className="md:hidden mt-3 " />
              </div>

              <div className="hidden md:block absolute top-3 right-2">
                <Fingerprint size={30} strokeWidth={0.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
