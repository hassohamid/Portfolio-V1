import { PiBracketsAngleFill } from "react-icons/pi";
import {
  Card,
  Cardtitle,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export default function BeyondCode() {
  return (
    <section className="py-20 bg-[#f8f8f8] dark:bg-[#111111] ">
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-sm text-muted-foreground/50 tracking-wider">
          {" "}
          MY LIFE{" "}
        </h1>
        <h1 className="text-3xl text-center font-bold mb-4 flex items-center gap-1  ">
          Beyond the <span className="text-muted-foreground/70  ">Code</span>
          <PiBracketsAngleFill />
        </h1>
        <p className="text-center text-sm text-muted-foreground mb-4 ">
          Learn more about me and what I like to do.
        </p>
      </div>
      <div className="container max-w-5xl mx-auto">
        <div className="flex justify-center gap-2 p-2">
          <Card className="w-2/3 rounded-none "></Card>
          <Card className=" w-full rounded-none"> </Card>
        </div>
        <div className=" p-2 ">
          <Card className="rounded-none"></Card>
        </div>
      </div>
    </section>
  );
}
