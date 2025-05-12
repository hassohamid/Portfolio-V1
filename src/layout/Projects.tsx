import { ProjectList } from "@/data/ProjectList";
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
  return (
    <section
      id="projects"
      className="py-20 container mx-auto px-12 md:px-14 relative"
    >
      <div className="mb-12 text-center">
        <h2 className="text-xl text-muted-foreground uppercase tracking-widest mb-2 relative inline-block">
          MY CRAFT
          <span className="absolute -bottom-2 left-1/4 right-1/4 h-0.5 border-b-2 rounded-full border-primary/50"></span>
        </h2>

        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          A collection of projects I've built using modern web technologies
        </p>
      </div>

      <Carousel className="m-2 mt-10">
        <CarouselContent>
          {ProjectList.map((project) => (
            <CarouselItem
              key={project.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-full flex flex-col overflow-hidden  bg-[#f8f8f8] dark:bg-[#111111] pt-0 ">
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
                        <p className="text-xs font-medium tracking-wide text-foreground/70 pt-2 ">
                          Hey you! Try out this page via the LIVE button 👀
                        </p>
                      </DialogHeader>
                      <img src={project.img} alt={project.name} />
                    </DialogContent>
                  </Dialog>

                  <div className="absolute top-3 right-3">
                    <Button
                      asChild
                      variant="secondary"
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
