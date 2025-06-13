import { useTheme } from "@/theme/ThemeProvider";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <>
      <img
        src={theme === "dark" ? "Dark.svg" : "Light.svg"}
        alt="Logo"
        className="w-12 h-12  lg:w-17 lg:h-17 cursor-pointer "
      />
    </>
  );
}
