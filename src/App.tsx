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
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import { useEffect } from "react";
import { SmoothScroll } from "./lib/scroll";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    SmoothScroll();
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="min-h-screen bg-background transition-colors ">
          <Header />
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
