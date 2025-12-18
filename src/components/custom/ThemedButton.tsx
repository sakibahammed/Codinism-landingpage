import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type ThemedButtonProps = {
  title: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
} & React.ComponentProps<typeof Button>;

export default function ThemedButton({
  title,
  icon,
  iconPosition = "left",
  className,
  ...props
}: ThemedButtonProps) {
  return (
    <Button
      className={cn(
        "group relative w-fit h-12 px-6 py-3 rounded-full text-slate-800 dark:text-accent-foreground border border-primary shadow-sm transition-colors duration-300 bg-gradient-to-r from-primary/20 to-primary/50 hover:bg-gradient-to-l hover:to-primary/60 active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 cursor-pointer",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "flex items-center justify-center gap-2",
          iconPosition === "right" && "flex-row-reverse",
        )}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {title}
      </span>
    </Button>
  );
}
