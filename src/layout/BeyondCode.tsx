import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "motion/react";
import { CornerFrame } from "@/components/ui/cornerframe";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

export default function BeyondCode() {
  return (
    <>
      <section className="py-20 bg-[rgb(250,250,250)] dark:bg-[rgb(12,12,12)]">
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="container max-w-3xl mx-auto px-4 md:px-0  ">
            <CornerFrame>
              <div className="flex justify-center ">
                <AnimatedShinyText className=" text-xs tracking-tighter border-b-1 p-0.5 border-dashed flex items-center gap-1">
                  Beyond the Code
                </AnimatedShinyText>
              </div>
              <Card className="w-full border-none rounded-none shadow-none bg-transparent">
                <CardContent>
                  <Accordion
                    type="single"
                    collapsible
                    className="text-primary/80 "
                  >
                    <AccordionItem value="item 1">
                      <AccordionTrigger className="flex items-center cursor-pointer ">
                        My go-to productivity hack?
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed tracking-tight  ">
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
                    <AccordionItem value="item 7">
                      <AccordionTrigger className="cursor-pointer">
                        What do I like to do during free-time?
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed tracking-tight ">
                        Sports-lover. All kind of sports. Grew up with football,
                        fell in love with Tennis.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item 8">
                      <AccordionTrigger className="cursor-pointer">
                        My biggest regret?
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed tracking-tight ">
                        Not getting into web developing earlier.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </CornerFrame>
          </div>
        </motion.div>
      </section>
    </>
  );
}
