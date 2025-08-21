import { Highlighter } from "lucide-react";
import { useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { motion } from "motion/react";

export default function About() {
  const [isHighlighted, setIsHighlighted] = useState(false);
  return (
    <section className="py-20 bg-gradient-to-b from-[rgb(250,250,250)] to-background dark:from-[rgb(12,12,12)] dark:to-background">
      <div className="container mx-auto px-8 md:px-14">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className=" pb-1 mb-6 flex items-center  ">
            <h1 className=" border-l-5 p-2 text-xl sm:text-2xl  uppercase font-black tracking-tighter flex items-center gap-2  ">
              Intro
            </h1>

            <Toggle
              pressed={isHighlighted}
              onPressedChange={setIsHighlighted}
              size="sm"
              className="cursor-pointer bg-foreground/5 p-1 data-[state=on]:bg-yellow-500/20 data-[state=on]:text-yellow-500"
            >
              <Highlighter size={14} />
            </Toggle>
          </div>

          <div className="pt-2 pb-8 space-y-4 sm:space-y-6 text-sm sm:text-base tracking-tight max-w-3xl   ">
            <p
              className={`leading-loose sm:leading-relaxed transition-opacity duration-500 ${
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
              className={`leading-loose sm:leading-relaxed transition-opacity duration-500 ${
                isHighlighted
                  ? "text-muted-foreground/30"
                  : "text-muted-foreground"
              }`}
            >
              My current focus is building smart and creative solutions that are{" "}
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isHighlighted
                    ? "bg-yellow-300/30  rounded text-foreground"
                    : ""
                }`}
              >
                AI-integrated
              </span>
              . Solutions that has{" "}
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isHighlighted
                    ? "bg-yellow-300/30  rounded text-foreground"
                    : ""
                }`}
              >
                real-world impact
              </span>
              , that not only look great but also feel right to use.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
