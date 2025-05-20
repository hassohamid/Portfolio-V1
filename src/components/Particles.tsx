import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "@/theme/ThemeProvider";

export function ParticlesBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const particleColors = isDark
    ? ["#ffffff", "#fffceb", "#f8f7ff", "#e6f1ff", "#fff0f9"]
    : ["#0066cc", "#6644ff", "#3a86ff", "#4895ef", "#7209b7"];

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log("Particles container loaded", container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 z-10 h-full w-full"
      options={{
        fullScreen: {
          enable: false,
        },
        particles: {
          color: {
            value: particleColors,
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: isDark ? 0.2 : 0.3,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: isDark ? 100 : 80,
          },
          opacity: {
            value: { min: 0.1, max: isDark ? 0.85 : 0.7 },
            animation: {
              enable: true,
              speed: 0.2,
              minimumValue: 0.1,
            },
          },
          size: {
            value: { min: 0.5, max: isDark ? 2 : 2.5 },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: isDark ? 0.1 : 0.08,
              opacity: isDark ? 1 : 0.8,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              distance: 200,
              size: isDark ? 3 : 4,
              duration: 2,
              opacity: isDark ? 1 : 0.8,
            },
          },
        },
      }}
    />
  );
}
