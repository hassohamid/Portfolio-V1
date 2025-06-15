import { ProjectList } from "@/data/ProjectList";
import AutoPlay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { useTheme } from "@/theme/ThemeProvider";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Safari } from "@/components/magicui/safari";
import { Button } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const autoplayPlugin = useRef(
    AutoPlay({
      delay: 5000,
      stopOnMouseEnter: false,
      stopOnInteraction: false,
    })
  );

  return (
    <>
      <section className="relative py-20 min-h-[900px] overflow-hidden bg-gradient-to-b from-background to-[rgb(250,250,250)] dark:to-[rgb(12,12,12)]">
        <DotPattern
          cr={isDark ? 0.6 : 0.8}
          width={20}
          height={20}
          className="[mask-image:radial-gradient(ellipse_80%_60%_at_center,white_0%,rgba(255,255,255,0.6)_50%,transparent_85%)]"
        />

        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-8 md:px-0 relative"
        >
          <div className="max-w-3xl px-2 mx-auto ">
            <TypingAnimation
              startOnView={true}
              key={theme}
              className="  border-l-5 p-2 text-xl sm:text-2xl  uppercase font-black tracking-tighter flex items-center gap-2  "
            >
              Creations
            </TypingAnimation>
          </div>

          <Carousel
            className="m-2 mt-10"
            plugins={[autoplayPlugin.current]}
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <div className="max-w-3xl mx-auto">
              <CarouselContent>
                {ProjectList.map((project) => {
                  return (
                    <CarouselItem className="">
                      <Card className=" flex flex-col overflow-hidden  py-0 bg-gradient-to-t shadow-none  dark:from-[rgb(12,12,12)] from-[rgb(252,252,252)] to-[rgb(241,241,241)] dark:to-[rgb(19,19,19)] border-0  rounded-none  ">
                        <div className="overflow-hidden hidden sm:flex">
                          <motion.a
                            initial={{ y: 20 }}
                            whileHover={{ y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            href={project.deployment}
                            target="_blank"
                            className="block  "
                          >
                            <Safari
                              imageSrc={project.img}
                              url={project.name}
                              className="cursor-pointer size-full px-5 pt-6   "
                            />
                          </motion.a>
                        </div>
                        <a href={project.deployment} target="_blank">
                          <Safari
                            imageSrc={project.img}
                            url={project.name}
                            className="cursor-pointer size-full sm:hidden pt-4  px-2 "
                          />
                        </a>
                        <div className="sm:hidden px-2  ">
                          <Badge
                            variant="outline"
                            className="px-3 py-1 font-bold  tracking-tight  "
                          >
                            {project.name}
                          </Badge>
                        </div>
                        <p className=" sm:text-center  tracking-tighter px-2 text-[13.5px] sm:px-5 pb-3 text-primary/50 ">
                          {project.description}
                        </p>
                        <Separator />
                        <div className="sm:hidden flex items-center gap-4 px-2">
                          <p className="text-xs border-r-1 p-2 tracking-tighter text-muted-foreground/70">
                            Created with
                          </p>

                          {project.technologies.map((tech) => {
                            return <tech.icon color={tech.color} size={15} />;
                          })}
                        </div>

                        <Button
                          asChild
                          size="sm"
                          variant="default"
                          className="border-none shadow-md sm:hidden"
                        >
                          <a
                            target="_blank"
                            href={project.deployment}
                            className="flex items-center gap-1 tracking-tight shadow-none text-xs  "
                          >
                            <span className="relative flex h-2 w-2 mr-1">
                              <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="rounded-full h-full w-full bg-green-500"></span>
                            </span>
                            View Site
                          </a>
                        </Button>
                      </Card>
                      <div className=" items-center justify-center hidden sm:flex  ">
                        <Dock
                          iconDistance={100}
                          iconMagnification={50}
                          iconSize={40}
                        >
                          <h1 className="text-sm px-5  text-center tracking-tighter font-bold  ">
                            {project.name}
                          </h1>

                          <Separator
                            orientation="vertical"
                            className="h-full"
                          />
                          {project.technologies.map((tech) => (
                            <DockIcon className="hover:bg-primary/5">
                              <tech.icon
                                color={tech.color}
                                className="size-5"
                              />
                            </DockIcon>
                          ))}
                          <Separator
                            orientation="vertical"
                            className="h-full"
                          />

                          <Button
                            asChild
                            variant="ghost"
                            className=" text-xs border-none px-3"
                          >
                            <a
                              target="_blank"
                              href={project.deployment}
                              className="flex items-center gap-1 tracking-tight  "
                            >
                              <span className="relative flex h-2 w-2 mr-1">
                                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="rounded-full h-full w-full bg-green-500"></span>
                              </span>
                              LIVE
                            </a>
                          </Button>
                        </Dock>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </div>
            <div className="flex justify-center gap-4 mt-10 sm:hidden">
              <CarouselPrevious className="static cursor-pointer  " />
              <CarouselNext className="static cursor-pointer   " />
            </div>
          </Carousel>
        </motion.div>
      </section>
    </>
  );
}
