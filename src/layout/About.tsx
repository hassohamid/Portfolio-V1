import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center relative inline-block">
            About Me
            <div className="absolute -bottom-2 left-0 h-1 w-full bg-primary/20 rounded-full">
              <div className="h-full w-1/3 bg-primary rounded-full"></div>
            </div>
          </h2>

          <div className="space-y-6 text-muted-foreground/90">
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              mollitia sunt facilis est velit placeat totam, error sequi aliquid
              expedita quis possimus voluptas non neque dolore dolores maiores
              quos deleniti?
            </p>

            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              mollitia sunt facilis est velit placeat totam, error sequi aliquid
              expedita quis possimus voluptas non neque dolore dolores maiores
              quos deleniti?
            </p>

            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              mollitia sunt facilis est velit placeat totam, error sequi aliquid
              expedita quis possimus voluptas non neque dolore dolores maiores
              quos deleniti?
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="cursor-pointer">
              Download Resume
              <Download />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
