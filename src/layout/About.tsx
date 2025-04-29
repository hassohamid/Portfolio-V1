import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-12 md:px-14">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 pb-2 relative">
            About Me
            <span className="absolute bottom-0 left-0 w-12 border-b-3 rounded-full border-primary/50"></span>
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
