import { ThemeProvider } from "./theme/ThemeProvider";
import { Header } from "./layout/Header";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
    </ThemeProvider>
  );
}

export default App;
