import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "@/theme/ThemeProvider";

export function ParticlesBackground() {
  const { theme } = useTheme();

  // Star-like color palettes
  const particleColors =
    theme === "dark"
      ? [
          "#ffffff", // Pure white
          "#fffceb", // Warm white
          "#f8f7ff", // Cool white
          "#e6f1ff", // Light blue tint
          "#fff0f9", // Light pink tint
        ]
      : [
          "#0066cc", // Vibrant blue
          "#6644ff", // Purple
          "#3a86ff", // Bright blue
          "#4895ef", // Mid blue
          "#7209b7", // Magenta
        ];

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
      className="absolute inset-0 -z-10 h-full w-full"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fullScreen: {
          enable: false,
        },
        fpsLimit: 60, // Lower for stars
        particles: {
          color: {
            value: particleColors,
          },
          links: {
            enable: false, // Disable links for stars
          },
          collisions: {
            enable: false, // Disable collisions
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out", // Change to "out" for more natural star movement
            },
            random: true, // Random movement
            speed: theme === "dark" ? 0.2 : 0.3, // Slow, subtle movement
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: theme === "dark" ? 100 : 80, // More stars in dark mode
          },
          opacity: {
            value: { min: 0.1, max: theme === "dark" ? 0.9 : 0.7 }, // Higher opacity for more visible stars
            animation: {
              enable: true,
              speed: 0.2, // Slow animation for subtle twinkling
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle", // Keep as circle for stars
          },
          size: {
            value: { min: 0.5, max: theme === "dark" ? 2 : 2.5 }, // Varied sizes
            animation: {
              enable: false, // Disable size animation for stars
            },
          },
          twinkle: {
            lines: {
              enable: false,
            },
            particles: {
              enable: true,
              frequency: theme === "dark" ? 0.1 : 0.08, // Increased frequency for more twinkling
              opacity: theme === "dark" ? 1 : 0.8, // Brighter twinkles
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble", // Change to bubble for star-like effect
            },
          },
          modes: {
            bubble: {
              distance: 200,
              size: theme === "dark" ? 3 : 4,
              duration: 2,
              opacity: theme === "dark" ? 1 : 0.8,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
