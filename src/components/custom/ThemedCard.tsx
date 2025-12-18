import React from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";

export default function ThemedCard({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <Card
      {...props}
      className={cn(
        "group cursor-pointer relative h-full overflow-hidden border border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:border-slate-300 dark:hover:border-slate-600 rounded-sm",
        className,
      )}
    >
      {children}
    </Card>
  );
}
