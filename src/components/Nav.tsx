import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { ModeToggle } from "@/theme/ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Nav() {
  return (
    <nav className="flex items-center gap-4">
      <div className="hidden md:flex items-center gap-4">
        <a href="#about" className="hover:text-primary relative py-1 group">
          About
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
        <a href="#stack" className="hover:text-primary relative py-1 group">
          Stack
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
        <a href="#projects" className="hover:text-primary relative py-1 group">
          Projects
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
      </div>

      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="cursor-pointer !transition-none" variant="ghost">
              <ArrowDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
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
      </div>

      <ModeToggle />
    </nav>
  );
}
