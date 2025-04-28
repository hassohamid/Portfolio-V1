import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-6 border-t border-border/40 bg-background/70 backdrop-blur-sm">
      <div className="container  mx-auto px-6">
        <p className="flex justify-center items-center gap-1 text-center text-sm text-muted-foreground/80">
          made with <Heart size={12} /> by
          <a
            href="https://github.com/hassohamid"
            target="_blank"
            className="text-primary hover:text-primary/80 "
          >
            hassohamid
          </a>
        </p>
      </div>
    </footer>
  );
}
