import { PiBracketsAngleFill } from "react-icons/pi";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { ScanFace } from "lucide-react";
import { Interests } from "@/data/Interests";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

import { FaRegCommentAlt } from "react-icons/fa";

export default function BeyondCode() {
  return (
    <section id="BeyondCode" className="py-20 bg-[#f8f8f8] dark:bg-[#111111] ">
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-sm text-muted-foreground/50 tracking-wider">
          MY LIFE
        </h1>
        <h1 className="text-3xl text-center font-bold mb-4 flex items-center gap-1  ">
          Beyond the <span className="text-muted-foreground/70  ">Code</span>
          <PiBracketsAngleFill />
        </h1>
        {/* <p className="text-center text-sm text-muted-foreground mb-4 ">
          Learn more about me and what I like to do.
        </p> */}
      </div>

      <div className="container max-w-8xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 p-4 sm:justify-center"
        >
          <Card className="w-full sm:w-2/3 rounded-lg border border-border/20 shadow-sm backdrop-blur-sm bg-background/80">
            <CardHeader className="relative">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <CardTitle className="text-2xl  tracking-widest ">
                  <Badge className="p-2 dark:bg-teal-400  font-bold ">
                    GET TO KNOW ME
                  </Badge>
                </CardTitle>
                <CardDescription className="mt-2">
                  Who am I outside the techy world?
                </CardDescription>
              </motion.div>
              <FaRegCommentAlt
                className="text-primary/70 absolute top-3 right-6 "
                size={24}
              />
            </CardHeader>
            <CardContent>
              <motion.div
                className="prose prose-sm dark:prose-invert"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <p className="mb-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem officia enim provident et tenetur magnam
                  expedita facilis blanditiis, itaque laboriosam id, sequi
                  suscipit hic recusandae deserunt ad eos eveniet adipisci.
                </p>
              </motion.div>
            </CardContent>
            <CardFooter>
              <blockquote className="border-l-4 border-primary/40 pl-4 italic">
                "Whether you think you can, or you think you can't, you're
                right."
                <footer className="text-xs text-muted-foreground mt-1">
                  — Henry Ford
                </footer>
              </blockquote>
            </CardFooter>
          </Card>
          <Card className="w-full rounded-lg border border-border/20 shadow-sm backdrop-blur-sm bg-background/80">
            <CardHeader className="relative ">
              <ScanFace
                className="text-primary/70 absolute top-3 right-6"
                size={24}
              />

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <CardTitle className="text-2xl text-foreground/90 tracking-widest font-bold">
                  <Badge className="p-2 dark:bg-teal-400  font-bold ">
                    HOBBIES & INTERESTS
                  </Badge>
                </CardTitle>
                <CardDescription className="mt-2">
                  A big part of my life consists of
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent className="grid grid-cols-3 sm:grid-cols-4 gap-4 p-4">
              {Interests.map((interest, index) => {
                return (
                  <motion.div
                    key={index}
                    className="flex items-center flex-col justify-center p-5 rounded-xl 
                             bg-gradient-to-br from-background/90 to-background 
                             border border-border/30 shadow-sm hover:shadow-md 
                             dark:hover:border-primary/30 transition-all duration-300"
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="text-primary/70 mb-2"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <interest.icon size={32} />
                    </motion.div>
                    <h3 className="text-sm font-medium text-foreground/90">
                      {interest.interest}
                    </h3>
                  </motion.div>
                );
              })}
            </CardContent>
          </Card>{" "}
        </motion.div>
      </div>
    </section>
  );
}
