import { PiBracketsAngleFill } from "react-icons/pi";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScanFace } from "lucide-react";
import { Interests } from "@/data/Interests";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FaRegCommentAlt } from "react-icons/fa";
import Gallery from "@/components/Gallery";

export default function BeyondCode() {
  return (
    <>
      <section
        id="BeyondCode"
        className="py-30 bg-[#f8f8f8] dark:bg-[#111111] "
      >
        <div className="flex flex-col items-center pb-10">
          <h1 className="mb-4 text-sm text-muted-foreground/50 tracking-widest">
            INSIGHT
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
            <Card className="w-full rounded-lg border border-border/20 shadow-sm backdrop-blur-sm bg-background/80">
              <CardHeader className="relative ">
                <ScanFace
                  className="text-primary/70 absolute top-3 right-6"
                  size={22}
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
              <CardContent className="grid grid-cols-3 sm:grid-cols-2  gap-4 p-4">
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
            </Card>
            <Card className="w-full rounded-lg border border-border/20 shadow-sm backdrop-blur-sm bg-background/80">
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
                  size={22}
                />
              </CardHeader>
              <CardContent>
                <motion.div
                  className="prose prose-sm dark:prose-invert"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item 1">
                      <AccordionTrigger className="flex items-center cursor-pointer">
                        My go-to productivity hack?
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed tracking-tight ">
                        I might sound crazy but when I feel like I'm falling
                        behind, I drink half a Redbull and nap for 15-30 min.
                        It's actually a real thing, called "The Coffee Nap".
                        Makes me super concentrated for longer periods 😁
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item 2">
                      <AccordionTrigger className="cursor-pointer">
                        Three apps I can't live without?
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed tracking-tight ">
                        I don't really know about not being able to LIVE without
                        them but they definitely make my life easier - Spotify,
                        Notes & Discord.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item 3">
                      <AccordionTrigger className="cursor-pointer">
                        Early bird or night owl?
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed tracking-tight ">
                        When I'm in my "training phase" I'd definitely say early
                        bird. However when I work with something I truly enjoy
                        then most definitely a night owl. I also feel more
                        productive during nights.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item 4">
                      <AccordionTrigger className="cursor-pointer">
                        The most beautiful place I've ever visited?
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed tracking-tight ">
                        Phi Phi Islands in Thailand. Felt like a dream!
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item 5">
                      <AccordionTrigger className="cursor-pointer">
                        My favorite movie?
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed tracking-tight ">
                        One that I will never forget is Whiplash (2014). There
                        wasn't a second where I didn't feel the crazy tension it
                        brought. Amazing movie!
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item 6">
                      <AccordionTrigger className="cursor-pointer">
                        Goals I want to achieve?
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed tracking-tight ">
                        Beating 3km under 12 minutes.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <div className="pt-10 px-5 sm:px-20 md:px-30 pb-20">
        <Gallery />
      </div>
    </>
  );
}
