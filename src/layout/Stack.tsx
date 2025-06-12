import { technologies } from "@/data/Technologies";
import Expertise from "@/components/Expertise";
import Pointers from "@/components/Pointers";
import { motion } from "motion/react";
import { MagicCard } from "@/components/magicui/magic-card";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function Stack() {
  return (
    <>
      <section className="py-25 overflow-hidden px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className=" bg-background border-0 shadow-none container max-w-3xl mx-auto relative px-5 ">
            <BorderBeam
              duration={20}
              size={250}
              className=" from-transparent via-neutral-400 dark:via-neutral-200 to-transparent"
            />
            <BorderBeam
              duration={20}
              delay={10}
              size={250}
              className="from-transparent via-neutral-400 dark:via-neutral-200 to-transparent"
            />
            <CardContent className=" mb-8">
              <div className=" mb-5 pt-5 text-center">
                <h2 className="  text-muted-foreground/40 text-xs uppercase font-semibold ">
                  I build with
                </h2>
              </div>
              <div className="grid grid-cols-4 max-w-3xl mx-auto gap-2">
                {technologies.map((tech) => {
                  return (
                    <MagicCard
                      key={tech.name}
                      className="rounded-md "
                      gradientSize={100}
                      gradientColor=""
                    >
                      <div className="flex flex-col items-center justify-center gap-3 p-4 ">
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
            </CardContent>
          </Card>

          <Pointers />
        </motion.div>
      </section>
      <Expertise />
    </>
  );
}
