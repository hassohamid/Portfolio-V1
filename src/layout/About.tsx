import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

export default function About() {
  return (
    <section id="about" className="py-25 bg-background">
      <div className="container mx-auto px-12 md:px-14">
        <div className="max-w-3xl mx-auto">
          <div className="border-b border-border/40 pb-1 mb-6 flex items-center justify-between ">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-50 hover:opacity-100 cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-50 hover:opacity-100 cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 opacity-50 hover:opacity-100 cursor-pointer"></div>
            </div>
            <div className="text-xs text-muted-foreground ">about_me.md</div>
            <div></div>
          </div>

          <div className="pt-2 pb-8 space-y-4 ">
            <p className="leading-loose text-muted-foreground/90">
              I'm <span className="text-primary">Hasso</span>, a{" "}
              <span className="text-primary/90">Frontend Developer</span>{" "}
              specializing in <span className="text-primary/80">UI design</span>{" "}
              and crafting engaging user experiences with great attention to
              detail. It all began when I first experimented with{" "}
              <span className="text-primary/90">HTML</span> and{" "}
              <span className="text-primary/90">CSS</span>. I loved the feeling
              of being "in control" of every detail.
            </p>

            <p className="leading-loose text-muted-foreground/90">
              Early in my career, I built e-commerce sites on{" "}
              <span className="text-primary/90">Shopify</span>. I enjoyed it,
              but found the platform limiting. That pushed me to dive into web
              development, where I could build anything my way.
            </p>

            <p className="leading-loose text-muted-foreground/90">
              When coding, my favorite go-to stack is{" "}
              <span className="font-medium text-primary/90">React</span>,{" "}
              <span className="font-medium text-primary/90">TailwindCSS</span> &{" "}
              <span className="font-medium text-primary/90">shadcn</span>.
            </p>
          </div>

          <AlertDialog>
            <div className="mt-15 flex justify-center">
              <AlertDialogTrigger>
                <Button
                  variant="outline"
                  className="cursor-pointer border-2 border-dashed   dark:bg-background !px-5 rounded-none hover:!bg-transparent hover:text-primary/90  shadow-none"
                >
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
                  onClick={() =>
                    toast.success("Thank you for your interest in my work!", {
                      icon: "📄",
                      duration: 3000,
                    })
                  }
                >
                  <a
                    href="Resume_ENG.pdf"
                    download
                    className="flex justify-center items-center gap-1"
                  >
                    ENG <img src="ENG.svg" className="h-3" />
                  </a>
                </AlertDialogAction>
                <AlertDialogAction
                  asChild
                  className="cursor-pointer rounded-full "
                  onClick={() =>
                    toast.success("Thank you for your interest in my work!", {
                      icon: "📄",
                      duration: 3000,
                    })
                  }
                >
                  <a
                    href="Resume_SWE.pdf"
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
