import { Button } from "@/components/ui/button";
import { Download, Highlighter } from "lucide-react";
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
import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { motion } from "motion/react";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

export default function About() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <section id="about" className="py-25 bg-background">
      <div className="container mx-auto px-12 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="border-b border-border/40 pb-1 mb-6 flex items-center justify-between ">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-50 hover:opacity-100 cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-50 hover:opacity-100 cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 opacity-50 hover:opacity-100 cursor-pointer"></div>
            </div>
            <div className="text-xs text-muted-foreground ">about_me.md</div>

            <Toggle
              pressed={isHighlighted}
              onPressedChange={setIsHighlighted}
              size="sm"
              className="cursor-pointer  h-auto w-auto p-1 data-[state=on]:bg-yellow-500/20 data-[state=on]:text-yellow-500"
            >
              <Highlighter size={14} />
            </Toggle>
          </div>

          <div className="pt-2 pb-8 space-y-4 ">
            <p
              className={`leading-loose transition-opacity duration-500 ${
                isHighlighted
                  ? "text-muted-foreground/30"
                  : "text-muted-foreground"
              }`}
            >
              I'm{" "}
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isHighlighted
                    ? "bg-yellow-300/30  rounded text-foreground"
                    : ""
                }`}
              >
                Hasso
              </span>
              , a{" "}
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isHighlighted
                    ? "bg-yellow-300/30 rounded text-foreground"
                    : ""
                }`}
              >
                Frontend Developer
              </span>{" "}
              specializing in{" "}
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isHighlighted
                    ? "bg-yellow-300/30  rounded text-foreground"
                    : ""
                }`}
              >
                UI design
              </span>{" "}
              and creating{" "}
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isHighlighted
                    ? "bg-yellow-300/30 rounded text-foreground"
                    : ""
                }`}
              >
                engaging user experiences
              </span>{" "}
              with great attention to detail.
            </p>

            <p
              className={`leading-loose transition-opacity duration-500 ${
                isHighlighted
                  ? "text-muted-foreground/30"
                  : "text-muted-foreground"
              }`}
            >
              Early in my career, I built e-commerce sites on{" "}
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isHighlighted
                    ? "bg-yellow-300/30  rounded text-foreground"
                    : ""
                }`}
              >
                Shopify
              </span>
              . I enjoyed it, but found the platform limiting. That pushed me to{" "}
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isHighlighted
                    ? "bg-yellow-300/30  rounded text-foreground"
                    : ""
                }`}
              >
                dive into web development
              </span>
              , where I could build anything my way.
            </p>

            <p
              className={`leading-loose transition-opacity duration-500 ${
                isHighlighted
                  ? "text-muted-foreground/30"
                  : "text-muted-foreground"
              }`}
            >
              When coding, my favorite go-to stack is{" "}
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isHighlighted
                    ? "bg-yellow-300/30  rounded text-foreground"
                    : ""
                }`}
              >
                React
              </span>
              ,{" "}
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isHighlighted
                    ? "bg-yellow-300/30 rounded text-foreground"
                    : ""
                }`}
              >
                TypeScript
              </span>
              ,{" "}
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isHighlighted
                    ? "bg-yellow-300/30  rounded text-foreground"
                    : ""
                }`}
              >
                TailwindCSS
              </span>{" "}
              &{" "}
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isHighlighted
                    ? "bg-yellow-300/30 rounded text-foreground"
                    : ""
                }`}
              >
                shadcn
              </span>
              .
            </p>
          </div>

          <AlertDialog>
            <div className="mt-15 flex justify-center">
              <AlertDialogTrigger>
                <Button
                  variant="outline"
                  className="cursor-pointer border-2 border-dashed dark:bg-background !px-5 rounded-none hover:!bg-transparent shadow-none hover:dark:border-primary/30 hover:border-primary/30  "
                >
                  <AnimatedShinyText>Download Resume</AnimatedShinyText>
                  <Download color="gray" />
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
        </motion.div>
      </div>
    </section>
  );
}
