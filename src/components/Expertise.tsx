import Marquee from "react-fast-marquee";
import { Diamond } from "lucide-react";

export default function Expertise() {
  return (
    <Marquee
      autoFill
      speed={30}
      gradientColor="#393939
"
      className="bg-[#f8f8f8] dark:bg-[#111111] border-t-1 border-b-1"
    >
      <div
        className="flex
       gap-10 text-muted-foreground/60 p-3 items-center text-xs tracking-wider "
      >
        <h1> USER FRIENDLY </h1>
        <Diamond size={13} strokeWidth={1} />
        <h1> RESPONSIVE </h1>
        <Diamond size={13} strokeWidth={1} />
        <h1> MINIMALIST </h1>
        <Diamond size={13} strokeWidth={1} />
        <h1> INTERACTIVE </h1>
        <Diamond size={13} strokeWidth={1} />
        <h1> PERFOMANT </h1>
        <Diamond size={13} strokeWidth={1} />
        <h1> MODERN </h1>
        <Diamond size={13} strokeWidth={1} />
        <h1> SECURE </h1>
        <Diamond size={13} strokeWidth={1} />
        <h1> SCALABLE </h1>
        <Diamond size={13} strokeWidth={1} />
        <h1> MAINTAINABLE </h1>
        <Diamond size={13} strokeWidth={1} />
        <h1> SEARCH OPTIMIZED </h1>
        <Diamond size={13} strokeWidth={1} />
        <h1></h1>
      </div>
    </Marquee>
  );
}
