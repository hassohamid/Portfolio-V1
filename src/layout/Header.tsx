import Nav from "@/components/Nav";
import Logo from "@/components/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md bg-background/70 border-b border-border/40  ">
      <Logo />
      <Nav />
    </header>
  );
}
