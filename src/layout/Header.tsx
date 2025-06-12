import Nav from "@/components/Nav";
import Logo from "@/components/Logo";

export function Header() {
  return (
    <header className=" backdrop-blur-xs flex justify-between container max-w-3xl mx-auto px-5 pt-2  ">
      <Logo />
      <Nav />
    </header>
  );
}
