import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useTheme } from "@/theme/ThemeProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Nav() {
  const { theme } = useTheme();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="cursor-pointer !transition-none" variant="ghost">
            <ArrowDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            {theme === "dark" ? "🖤" : "🤍"}
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <a href="#about" className="cursor-pointer">
              About
            </a>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <a href="#stack" className="cursor-pointer">
              Stack
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
