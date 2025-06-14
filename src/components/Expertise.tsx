import Marquee from "react-fast-marquee";
import { Diamond } from "lucide-react";
import { useTheme } from "@/theme/ThemeProvider";

export default function Expertise() {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Marquee
      pauseOnHover
      autoFill
      gradient
      gradientWidth={200}
      gradientColor={isDark ? "#0a0a0a" : "#ffffff"}
      speed={30}
    >
      <div className="flex gap-10 text-muted-foreground/70 items-center text-xs tracking-wider">
        <h1 className="font-medium"> RESPONSIVE </h1>
        <Diamond size={10} strokeWidth={1.5} className="text-primary/60" />
        <h1 className="font-medium"> INTERACTIVE </h1>
        <Diamond size={10} strokeWidth={1.5} className="text-primary/60" />
        <h1 className="font-medium"> PERFORMANT </h1>
        <Diamond size={10} strokeWidth={1.5} className="text-primary/60" />
        <h1 className="font-medium"> UX-FIRST </h1>
        <Diamond size={10} strokeWidth={1.5} className="text-primary/60" />
        <h1 className="font-medium"> AI-POWERED </h1>
        <Diamond size={10} strokeWidth={1.5} className="text-primary/60" />
        <h1></h1>
      </div>
    </Marquee>
  );
}
