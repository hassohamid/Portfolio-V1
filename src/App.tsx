import "@/App.css";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { Header } from "@/layout/Header";
import Hero from "@/layout/Hero";
import About from "@/layout/About";
import { Footer } from "@/layout/Footer";
import Stack from "@/layout/Stack";
import Projects from "@/layout/Projects";
import { Toaster } from "./components/ui/sonner";
import BeyondCode from "@/layout/BeyondCode";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { SmoothCursor } from "./components/ui/smooth-cursor";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export default function App() {
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    locomotiveScroll;
  }, []);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="hidden sm:block">
          <SmoothCursor />
        </div>
        <div className="min-h-screen bg-background transition-colors ">
          <Header />
          <ScrollProgress className="h-[2px] bg-primary/50" />
          <main>
            <Hero />
            <About />
            <Stack />
            <Projects />
            <BeyondCode />
          </main>
          <Footer />
          <Toaster />
        </div>
      </ThemeProvider>
    </>
  );
}
