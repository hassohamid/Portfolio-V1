import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const splashRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  useEffect(() => {
    if (
      !textRef.current ||
      !progressRef.current ||
      !splashRef.current ||
      !dotsRef.current
    )
      return;

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 300);
      },
    });
    const dots = dotsRef.current.children;
    tl.fromTo(
      dots,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.25,
        duration: 0.5,
        ease: "power2.out",
      }
    );

    tl.to(dotsRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });

    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      }
    );

    tl.fromTo(
      progressRef.current,
      { width: "0%" },
      {
        width: "100%",
        duration: 1.5,
        ease: "power2.inOut",
      },
      "-=0.2"
    );

    tl.to({}, { duration: 0.5 });

    tl.to([textRef.current, progressRef.current, dotsRef.current], {
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
    });

    tl.to(
      splashRef.current,
      {
        y: "-100%",
        duration: 1,
        ease: "power3.inOut",
      },
      "-=0.3"
    );
  }, [onComplete]);
  return (
    <div
      ref={splashRef}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%)`,
      }}
    >
      <div className="relative flex flex-col items-center justify-center gap-8 px-4">
        <div ref={dotsRef} className="flex gap-2 mb-2 absolute">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-2 w-2 rounded-full bg-primary/80"></div>
          ))}
        </div>

        <div
          ref={textRef}
          className="text-white/90 font-light text-3xl tracking-[0.2em] uppercase opacity-0"
        >
          HELLO
        </div>

        <div className="w-40 h-[1px] bg-black/20 dark:bg-white/10 mt-1 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-primary/80 to-primary"
          ></div>
        </div>
      </div>
    </div>
  );
}
