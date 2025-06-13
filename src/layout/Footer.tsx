import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-3 border-t border-border/40 bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto  px-6">
        <p className="flex justify-center items-center gap-1 text-center tracking-tighter text-sm text-muted-foreground/60">
          &lt; made with <Heart size={12} strokeWidth={1.5} /> by
          <a
            href="https://github.com/hassohamid"
            target="_blank"
            className="hover:text-primary/80 "
          >
            hasso
          </a>
          /&gt;
        </p>
      </div>
    </footer>
  );
}
