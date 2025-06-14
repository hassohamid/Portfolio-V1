import { cn } from "@/lib/utils";

export function CornerFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative px-1 ", className)}>
      <div className="absolute top-0 left-0 w-4 h-4 border-t-1 border-l-1 border-border  " />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-1 border-r-1 border-border " />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-1 border-l-1 border-border " />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-1 border-r-1 border-border" />
      {children}
    </div>
  );
}
