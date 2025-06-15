import Contact from "@/components/Contact";
import Logo from "@/components/Logo";

export function Header() {
  return (
    <header className=" border-b ">
      <div className="flex max-w-3xl mx-auto px-5 pt-2 justify-between">
        <Logo />
        <Contact />
      </div>
    </header>
  );
}
