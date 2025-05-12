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

export default function Projects() {
  const autoplayPlugin = useRef(
    AutoPlay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnMouseEnter: false,
    })
  );

  return (
    <section
      id="projects"
      className="py-20 container mx-auto px-12 md:px-14 relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 sm:right-20 w-50 h-50 pointer-events-none opacity-3 dark:opacity-3 dark:invert dark:brightness-200 dark:contrast-125"
        style={{
          backgroundImage: `url("jigsaw.svg")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px auto",
        }}
      ></div>
      <div className="mb-16 text-center">
        <div className="relative inline-block mb-6">
          <span className="text-6xl font-black text-muted/40 absolute -top-4 left-1/2 -translate-x-1/2">
            0{ProjectList.length}
          </span>
          <h2 className="text-xl text-foreground uppercase tracking-widest font-medium relative z-10">
            My Craft
          </h2>
        </div>
        <p className="text-muted-foreground max-w-lg mx-auto text-base border-l-2 border-primary/30 pl-4 py-1 inline-block">
          A collection of projects I've built
        </p>
      </div>

      <Carousel
        className="m-2 mt-10"
        plugins={[autoplayPlugin.current]}
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {ProjectList.map((project) => (
            <CarouselItem
              key={project.name}
              className="md:basis-1/2 lg:basis-1/2"
            >
              <Card className="h-full flex flex-col overflow-hidden rounded-none dark:bg-[#080808] pt-0 ">
                <div className="relative overflow-hidden">
                  <Dialog>
                    <DialogTrigger>
                      <img
                        src={project.img}
                        className="cursor-pointer transition-transform duration-300 hover:scale-105 "
                        alt={project.name}
                      />
                    </DialogTrigger>

                    <DialogContent className="!w-full sm:!max-w-[70vw]   p-0 overflow-hidden border-0 !max-w-[96vw] ">
                      <DialogHeader className=" flex justify-center items-center py-2">
                        <p className=" pt-2 "></p>
                      </DialogHeader>
                      <img src={project.img} alt={project.name} />
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
        <div className="flex justify-center gap-4 mt-8">
          <CarouselPrevious className="static cursor-pointer" />
          <CarouselNext className="static cursor-pointer" />
        </div>
      </Carousel>
    </section>
  );
}
