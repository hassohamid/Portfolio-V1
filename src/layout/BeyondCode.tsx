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
                        Drink coffee. Go to bed. Nap for 30min. Wake up feeling
                        more energized than ever. Sounds crazy but works.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item 2">
                      <AccordionTrigger className="cursor-pointer">
                        Three apps that makes my life easier?
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed tracking-tight ">
                        ChatGPT, Notes & Spotify.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item 3">
                      <AccordionTrigger className="cursor-pointer">
                        Early bird or night owl?
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed tracking-tight ">
                        Depends on which phase I'm in. When I work on something
                        with passion definitely a night owl.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item 4">
                      <AccordionTrigger className="cursor-pointer">
                        The most beautiful place I've ever visited?
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed tracking-tight ">
                        Phi Phi Islands in Thailand, no doubt.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item 5">
                      <AccordionTrigger className="cursor-pointer">
                        My favorite movie?
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed tracking-tight ">
                        Current fav is Whiplash (2014). Crazy tension throughout
                        the entire movie.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item 6">
                      <AccordionTrigger className="cursor-pointer">
                        Goals I want to achieve?
                      </AccordionTrigger>
                      <AccordionContent className="leading-relaxed tracking-tight ">
                        Shipping at warp speed.
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
                        Not getting into coding earlier.
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
