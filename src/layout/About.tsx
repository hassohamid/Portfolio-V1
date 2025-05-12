import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
              I’m Hasso, a Fullstack Developer with a true passion for Frontend
              and UX/UI design. My enthusiasm for crafting intuitive, beautiful
              interfaces began when I first experimented with HTML and CSS—I
              loved the feeling of being “in control” of every detail.
            </p>

            <p className="leading-relaxed">
              Early in my career, I built e-commerce sites on Shopify. While I
              enjoyed the work, I found the platform limiting and longed for the
              freedom to bring any idea to life. That drive led me to fully
              commit to web development, where I could shape every aspect of a
              project from the ground up.
            </p>

            <p className="leading-relaxed">
              We live in a very exciting time for the tech world as there are so
              many new things coming out especially with AI. This only inspires
              me and motivates me to explore and become better at my craft.
            </p>
          </div>

          <AlertDialog>
            <div className="mt-8 flex justify-center">
              <AlertDialogTrigger>
                <Button variant="outline" className="cursor-pointer">
                  Download Resume
                  <Download />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="flex flex-col justify-center ">
                <AlertDialogHeader className="">
                  <AlertDialogTitle>Choose preferred language</AlertDialogTitle>
                  <AlertDialogDescription>
                    The resume will be downloaded in PDF-format.
                  </AlertDialogDescription>
                  <AlertDialogCancel className="absolute top-2 right-2 text-xs cursor-pointer h-4 w-4 p-2.5">
                    X
                  </AlertDialogCancel>
                </AlertDialogHeader>
                <AlertDialogAction
                  asChild
                  className="cursor-pointer rounded-full  "
                >
                  <a
                    href="/public/ENG.pdf"
                    download
                    className="flex justify-center items-center gap-1"
                  >
                    ENG <img src="ENG.svg" className="h-3" />
                  </a>
                </AlertDialogAction>
                <AlertDialogAction
                  asChild
                  className="cursor-pointer rounded-full "
                >
                  <a
                    href="/public/SWE.pdf"
                    download
                    className="flex justify-center items-center gap-1"
                  >
                    SWE <img src="SWE.svg" className="h-3" />
                  </a>
                </AlertDialogAction>
              </AlertDialogContent>
            </div>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
}
