import { technologies } from "@/data/Technologies";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Expertise from "@/components/Expertise";
import Pointers from "@/components/Pointers";
import { motion } from "motion/react";

export default function Stack() {
  return (
    <>
      <section
        id="stack"
        className="py-24 md:py-32 relative overflow-hidden bg-[#f8f8f8] dark:bg-[#0e0e0e]"
      >
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-6 sm:px-8 md:px-10 relative z-10"
        >
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 px-4 text-center">
              <div className="relative mb-8">
                <h2 className="text-5xl  font-extrabold tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                    TECH
                  </span>
                  <span className="text-foreground">STACK</span>
                </h2>
                <div className="w-24 h-0.5 bg-primary mx-auto mt-6"></div>
              </div>
            </div>

            <Tabs defaultValue="frontend">
              <div className="flex justify-center mb-8">
                <TabsList className="  dark:bg-neutral-950 w-full shadow-lg  ">
                  <TabsTrigger
                    className="cursor-pointer text-xs sm:text-sm "
                    value="frontend"
                  >
                    Frontend
                  </TabsTrigger>
                  <TabsTrigger
                    className="cursor-pointer text-xs sm:text-sm"
                    value="backend"
                  >
                    Backend
                  </TabsTrigger>
                  <TabsTrigger
                    className="cursor-pointer text-xs sm:text-sm"
                    value="ui"
                  >
                    UI/UX
                  </TabsTrigger>
                  <TabsTrigger
                    className="cursor-pointer text-xs sm:text-sm"
                    value="tools"
                  >
                    Tools
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="min-h-[360px]">
                <TabsContent
                  value="frontend"
                  className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 "
                >
                  {technologies.frontend.map((tech, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="flex items-center py-4 sm:py-5 gap-1 bg-background/80 border border-border/40  px-3 rounded-lg shadow-sm  hover:border-l-7   transition-all ease-out  border-l-3 cursor-pointer overflow-hidden"
                      style={{
                        borderLeftColor: [
                          "Next.js",
                          "Three.js",
                          "shadcn",
                        ].includes(tech.name)
                          ? "var(--foreground)"
                          : tech.color,
                      }}
                    >
                      <tech.icon
                        className="h-4 w-4 sm:h-5 sm:w-5 "
                        style={{ color: tech.color }}
                      />
                      <span className="text-[10px] sm:text-sm ">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </TabsContent>
                <TabsContent
                  value="backend"
                  className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 "
                >
                  {technologies.backend.map((tech, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      key={tech.name}
                      className="flex items-center gap-2 bg-background/80 border border-border/40 p-2 px-3 rounded-lg shadow-sm hover:border-l-7 transition-all ease-out  border-l-3 overflow-hidden cursor-pointer py-4 sm:py-5"
                      style={{
                        borderLeftColor: ["Express.js"].includes(tech.name)
                          ? "var(--foreground)"
                          : tech.color,
                      }}
                    >
                      <tech.icon
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        style={{ color: tech.color }}
                      />
                      <span className="text-[10px] sm:text-sm">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </TabsContent>

                <TabsContent
                  value="ui"
                  className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
                >
                  {technologies.ui.map((tech, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      key={tech.name}
                      className="flex items-center gap-2 bg-background/80 border border-border/40 p-2 px-3 rounded-lg shadow-sm hover:border-l-7 transition-all ease-out   border-l-3 overflow-hidden cursor-pointer py-4 sm:py-5"
                      style={{
                        borderLeftColor: tech.color,
                      }}
                    >
                      <tech.icon
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        style={{ color: tech.color }}
                      />
                      <span className="text-[10px] sm:text-sm">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </TabsContent>

                <TabsContent
                  value="tools"
                  className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
                >
                  {technologies.tools.map((tech, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      key={tech.name}
                      className="flex items-center gap-2 bg-background/80 border border-border/40 p-2 px-3 rounded-lg shadow-sm hover:border-l-7 transition-all ease-out  border-l-3 overflow-hidden cursor-pointer py-4 sm:py-5"
                      style={{
                        borderLeftColor: ["GitHub", "Vercel"].includes(
                          tech.name
                        )
                          ? "var(--foreground)"
                          : tech.color,
                      }}
                    >
                      <tech.icon
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        style={{ color: tech.color }}
                      />
                      <span className="text-[10px] sm:text-sm">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </TabsContent>
              </div>
            </Tabs>

            <Pointers />
          </div>
        </motion.div>
      </section>
      <Expertise />
    </>
  );
}
