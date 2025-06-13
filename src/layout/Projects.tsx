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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";
import { motion } from "motion/react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { useTheme } from "@/theme/ThemeProvider";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function Projects() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  const autoplayPlugin = useRef(
    AutoPlay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: false,
    })
  );

  return (
    <>
      <section className="relative py-20 min-h-screen overflow-hidden bg-gradient-to-b from-background to-[rgb(250,250,250)] dark:to-[rgb(12,12,12)]">
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
              className=" border-l-5 p-2 text-xl sm:text-2xl  uppercase font-black tracking-tighter flex items-center gap-2  "
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
                {ProjectList.map((project) => (
                  <CarouselItem
                    key={project.name}
                    className="basis-full max-w-2xl"
                  >
                    <Card className="h-full flex flex-col overflow-hidden rounded-none dark:bg-[#080808] pt-0    ">
                      <div className="relative overflow-hidden">
                        <Dialog>
                          <DialogTrigger>
                            <img
                              src={project.img}
                              className="cursor-pointer transition-transform duration-300 hover:scale-105  "
                              alt={project.name}
                            />
                          </DialogTrigger>

                          <DialogContent className=" max-w-[85vw] md:max-w-[75vw] lg:max-w-[65vw] p-0 overflow-hidden border-0  ">
                            <DialogHeader className=" flex justify-center items-center py-2">
                              <p className=" pt-2 "></p>
                            </DialogHeader>
                            <img
                              src={project.img}
                              alt={project.name}
                              className="w-full h-auto object-contain"
                            />
                          </DialogContent>
                        </Dialog>

                        <div className="absolute top-3 right-3">
                          <Button
                            asChild
                            variant="default"
                            size="sm"
                            className="rounded-full shadow-md"
                          >
                            <a
                              target="_blank"
                              href={project.deployment}
                              className="flex items-center gap-1"
                            >
                              <span className="relative flex h-2 w-2 mr-1">
                                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="rounded-full h-full w-full bg-green-500"></span>
                              </span>
                              LIVE
                            </a>
                          </Button>
                        </div>
                      </div>

                      <CardHeader className="px-4 pt-2 ">
                        <CardTitle className="text-xl font-bold">
                          {project.name}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="flex-grow px-4 pt-2">
                        <CardDescription className=" mb-4">
                          {project.description}
                        </CardDescription>

                        <div className="flex flex-wrap gap-2 ">
                          {project.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="default"
                              className="text-xs rounded-full px-3 py-0.5 bg-primary/90 "
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static cursor-pointer" />
              <CarouselNext className="static cursor-pointer " />
            </div>
          </Carousel>
        </motion.div>
      </section>
    </>
  );
}
