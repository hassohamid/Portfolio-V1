import Contact from "@/components/Contact";
import Logo from "@/components/Logo";

export function Header() {
  return (
    <header className="backdrop-blur-xs flex justify-between container max-w-3xl mx-auto px-5 pt-3 sm:pt-2  ">
      <Logo />
      <Contact />
    </header>
  );
}
