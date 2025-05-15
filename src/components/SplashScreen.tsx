// components/SplashScreen.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const splashRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const textContent = "> accesing...";
    text.innerHTML = "";

    [...textContent].forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      text.appendChild(span);
    });

    const letters = text.children;

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 300);
      },
    });

    tl.from(letters, {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        letters,
        {
          opacity: 0,
          y: -50,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.in",
        },
        "+=0.5"
      )
      .to(
        splashRef.current,
        {
          y: "-100%",
          duration: 1.2,
          ease: "power3.inOut",
        },
        "-=0.2"
      );
  }, [onComplete]);

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
    >
      <h1
        ref={textRef}
        className="text-white text-7xl font-bold tracking-wider"
      ></h1>
    </div>
  );
}
