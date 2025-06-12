import Marquee from "react-fast-marquee";
import { Diamond } from "lucide-react";

export default function Expertise() {
  return (
    <Marquee autoFill speed={30} className="py-4">
      <div className="flex gap-10 text-muted-foreground/70 items-center text-xs tracking-wider">
        <h1 className="font-medium"> USER FRIENDLY </h1>
        <Diamond size={10} strokeWidth={1.5} className="text-primary/60" />
        <h1 className="font-medium"> RESPONSIVE </h1>
        <Diamond size={10} strokeWidth={1.5} className="text-primary/60" />
        <h1 className="font-medium"> MINIMALIST </h1>
        <Diamond size={10} strokeWidth={1.5} className="text-primary/60" />
        <h1 className="font-medium"> INTERACTIVE </h1>
        <Diamond size={10} strokeWidth={1.5} className="text-primary/60" />
        <h1 className="font-medium"> PERFORMANT </h1>
        <Diamond size={10} strokeWidth={1.5} className="text-primary/60" />
        <h1 className="font-medium"> MODERN </h1>
        <Diamond size={10} strokeWidth={1.5} className="text-primary/60" />
        <h1 className="font-medium"> SCALABLE </h1>
        <Diamond size={10} strokeWidth={1.5} className="text-primary/60" />
        <h1 className="font-medium"> MAINTAINABLE </h1>
        <Diamond size={10} strokeWidth={1.5} className="text-primary/60" />
        <h1 className="font-medium"> AI-POWERED </h1>
        <Diamond size={10} strokeWidth={1.5} className="text-primary/60" />
        <h1></h1>
      </div>
    </Marquee>
  );
}
