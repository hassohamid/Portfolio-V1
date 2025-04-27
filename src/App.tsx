import { ThemeProvider } from "./theme/ThemeProvider";
import { Header } from "./layout/Header";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
