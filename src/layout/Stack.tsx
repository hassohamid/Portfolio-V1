import { technologies } from "@/data/Technologies";
import Expertise from "@/components/Expertise";
import Pointers from "@/components/Pointers";
import { motion } from "motion/react";
import { MagicCard } from "@/components/magicui/magic-card";

export default function Stack() {
  return (
    <>
      <section id="stack" className="pt-10 relative overflow-hidden ">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-6 sm:px-8 md:px-10 relative z-10"
        >
          <div className="max-w-5xl mx-auto">
            <div className="mb-20  text-center">
              <div className="relative mb-8 border-t-1 max-w-3xl mx-auto pt-5">
                <h2 className=" text-sm text-muted-foreground/50 tracking-widest ">
                  STACK
                </h2>

                <h1 className="tracking-tighter text-sm font-semibold text-muted-foreground/90 ">
                  Building with
                </h1>
              </div>
              <div className="grid grid-cols-4 max-w-3xl mx-auto gap-2">
                {technologies.map((tech) => {
                  return (
                    <MagicCard
                      key={tech.name}
                      className="rounded-md"
                      gradientSize={100}
                      gradientColor=""
                    >
                      <div className="flex flex-col items-center justify-center gap-3 p-4">
                        <div className="transition-transform duration-300 ">
                          <tech.icon
                            size={26}
                            color={tech.color}
                            className="dark:text-white text-black"
                          />
                        </div>
                        <h3 className="hidden sm:flex text-[10px] sm:text-xs text-primary/80">
                          {tech.name}
                        </h3>
                      </div>
                    </MagicCard>
                  );
                })}
              </div>
            </div>

            <Pointers />
          </div>
        </motion.div>
      </section>
      <Expertise />
    </>
  );
}
