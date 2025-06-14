import "@/App.css";
import { useEffect } from "react";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Header } from "@/layout/Header";
import { Footer } from "@/layout/Footer";
import Hero from "@/layout/Hero";
import About from "@/layout/About";
import Stack from "@/layout/Stack";
import Projects from "@/layout/Projects";
import BeyondCode from "@/layout/BeyondCode";
import Gallery from "./layout/Gallery";
import LocomotiveScroll from "locomotive-scroll";

export default function App() {
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    locomotiveScroll;
  }, []);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <ScrollProgress className="h-[2px] bg-primary/50" />
        <Hero />
        <About />
        <Stack />
        <Projects />
        <BeyondCode />
        <Gallery />
        <Footer />
      </ThemeProvider>
    </>
  );
}
