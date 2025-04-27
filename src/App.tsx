import { ThemeProvider } from "./theme/ThemeProvider";
import { Header } from "@/layout/Header";
import Hero from "./layout/Hero";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background transition-colors duration-300 ">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </ThemeProvider>
  );
}
