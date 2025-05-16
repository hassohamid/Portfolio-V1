// This part is made by AI. This just inspired me to learn GSAP in the future.

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SplashScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const splashRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    text.innerHTML = "";

    const commands = [
      "> establishing connection",
      "> accessing portfolio assets",
      "> loading interface components",
      "> initializing environment",
      "> rendering experience",
    ];

    const commandContainers: HTMLDivElement[] = [];

    commands.forEach(() => {
      const cmdContainer = document.createElement("div");
      cmdContainer.className = "overflow-hidden mb-3";
      text.appendChild(cmdContainer);
      commandContainers.push(cmdContainer);
    });

    const finalContainer = document.createElement("div");
    finalContainer.className = "overflow-hidden mt-4 text-green-400 font-bold";
    text.appendChild(finalContainer);    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 600); // Slightly longer delay before completing
      },
    });

    commandContainers.forEach((container, index) => {
      const command = commands[index];      tl.to(container, {
        duration: 0.1,
        opacity: 1,
        onStart: () => {
          let charIndex = 0;
          const typeInterval = setInterval(() => {
            if (charIndex <= command.length) {
              container.textContent = command.substring(0, charIndex);
              if (charIndex < command.length) {
                container.textContent += "▋";
              }
              charIndex++;
            } else {
              clearInterval(typeInterval);
              container.textContent = command;
            }
          }, 35); // Slightly faster typing
        },
        ease: "none",
      });

      // Add more pause time after each command, especially for the last commands
      const pauseDuration = index === commands.length - 1 ? 0.6 : 0.4;
      tl.to({}, { duration: pauseDuration });

      if (index < commands.length - 1) {
        tl.to(container, {
          duration: 0.2,
          color: "rgba(150, 255, 150, 0.7)",
          ease: "power2.in",
        });
      }
    });    tl.to(finalContainer, {
      duration: 0.1,
      opacity: 1,
      onStart: () => {
        const completeMsg = "> portfolio ready";
        let charIndex = 0;
        const typeInterval = setInterval(() => {
          if (charIndex <= completeMsg.length) {
            finalContainer.textContent = completeMsg.substring(0, charIndex);
            if (charIndex < completeMsg.length) {
              finalContainer.textContent += "▋";
            }
            charIndex++;
          } else {
            clearInterval(typeInterval);
            finalContainer.textContent = completeMsg;

            gsap.to(finalContainer, {
              duration: 0.1,
              skewX: 10,
              opacity: 0.8,
              repeat: 5,
              yoyo: true,
              ease: "power1.inOut",
            });
          }
        }, 80); // Slightly slower typing for the final message
      },
    });

    // Longer pause at the end to let users read everything
    tl.to({}, { duration: 1.1 });

    tl.to(text, {
      duration: 0.4,
      opacity: 0,
      y: -30,
      ease: "power3.in",
    }).to(
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
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
      }}
    >      <div className="w-full max-w-lg px-4 mx-auto">        <h1
          ref={textRef}
          className="text-white/70 font-mono text-base sm:text-lg tracking-wider text-center sm:text-left md:text-left"
        ></h1>
      </div>
    </div>
  );
}
