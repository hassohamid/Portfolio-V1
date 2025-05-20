import { useTheme } from "@/theme/ThemeProvider";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <>
      <a href="#intro">
        <img
          src={theme === "dark" ? "Dark.svg" : "Light.svg"}
          alt="Logo"
          className="w-10 h-10  lg:w-15 lg:h-15 cursor-pointer "
        />
      </a>
    </>
  );
}
