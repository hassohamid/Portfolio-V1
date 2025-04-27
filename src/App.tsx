import { ThemeProvider } from "@/theme/ThemeProvider";
import { Header } from "@/layout/Header";
import Hero from "@/layout/Hero";
import About from "@/layout/About";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background transition-colors ">
        <Header />
        <main>
          <Hero />
          <About />
          <About />
        </main>
      </div>
    </ThemeProvider>
  );
}
