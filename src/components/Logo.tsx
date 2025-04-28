import { useTheme } from "@/theme/ThemeProvider";

export default function Logo() {
  const { theme } = useTheme();

  return (
    <>
      <a href="#intro">
        <img
          src={theme === "dark" ? "WhiteVersion.png" : "BlackVersion.png"}
          alt="Logo"
          className="w-11"
        />
      </a>
    </>
  );
}
