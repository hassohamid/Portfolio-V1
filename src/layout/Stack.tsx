import { technologies } from "@/data/Technologies";
import Expertise from "@/components/Expertise";
import { motion } from "motion/react";
import { MagicCard } from "@/components/magicui/magic-card";
import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function Stack() {
  return (
    <>
      <section className="py-20  overflow-hidden px-4  ">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className=" bg-background border-0 shadow-none container max-w-3xl mx-auto relative  ">
            <BorderBeam
              size={300}
              duration={30}
              delay={0}
              className="from-transparent via-purple-500/30 dark:via-purple-500/40 to-transparent"
            />

            <BorderBeam
              size={300}
              duration={30}
              delay={7.5}
              className="from-transparent via-blue-500/30 dark:via-blue-500/40 to-transparent"
            />

            <BorderBeam
              size={300}
              duration={30}
              delay={15}
              className="from-transparent via-pink-400/20 dark:via-pink-400/30 to-transparent"
            />

            <BorderBeam
              size={300}
              duration={30}
              delay={22.5}
              className="from-transparent via-teal-500/25 dark:via-teal-500/35 to-transparent"
            />

            <CardContent className=" mb-8">
              <div className=" mb-5  text-center">
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
        </motion.div>
      </section>
      <div className="container max-w-3xl mx-auto py-20 ">
        <Expertise />
      </div>
    </>
  );
}
