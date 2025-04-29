import { useTheme } from "@/theme/ThemeProvider";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <>
      <a href="#intro">
        <img
          src={theme === "dark" ? "Dark.svg" : "Light.svg"}
          alt="Logo"
          className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 cursor-pointer "
        />
      </a>
    </>
  );
}
