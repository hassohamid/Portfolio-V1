import Marquee from "react-fast-marquee";
import { Diamond } from "lucide-react";

export default function Expertise() {
  return (
    <Marquee
      autoFill
      gradient
      gradientWidth={70}
      speed={30}
      gradientColor="#393939
"
      className="bg-[#f8f8f8] dark:bg-[#111111] "
    >
      <div
        className="flex
       gap-10 text-muted-foreground p-3 items-center text-xs tracking-wide "
      >
        <h1 className="hover:border-b-2 "> USER FRIENDLY </h1>
        <Diamond size={15} strokeWidth={1} />
        <h1> RESPONSIVE </h1>
        <Diamond size={15} strokeWidth={1} />
        <h1> MINIMALIST </h1>
        <Diamond size={15} strokeWidth={1} />
        <h1> INTERACTIVE </h1>
        <Diamond size={15} strokeWidth={1} />
        <h1> PERFOMANT </h1>
        <Diamond size={15} strokeWidth={1} />
        <h1> MODERN </h1>
        <Diamond size={15} strokeWidth={1} />
        <h1> SECURE </h1>
        <Diamond size={15} strokeWidth={1} />
        <h1> SCALABLE </h1>
        <Diamond size={15} strokeWidth={1} />
        <h1> MAINTAINABLE </h1>
        <Diamond size={15} strokeWidth={1} />
        <h1> SEARCH OPTIMIZED </h1>
        <Diamond size={15} strokeWidth={1} />
        <h1></h1>
      </div>
    </Marquee>
  );
}
