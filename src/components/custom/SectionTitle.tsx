import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionTitleVariants = cva("font-semibold transition-colors", {
  variants: {
    variant: {
      default: "text-left",
      centered: "text-center",
      withUnderline: "text-left border-b border-border pb-2",
      withIcon: "text-left flex items-center gap-2",
      gradient:
        "text-left bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent",
      outlined: "text-left border border-border rounded-lg px-4 py-2 bg-card",
    },
    size: {
      sm: "text-lg md:text-xl",
      md: "text-xl md:text-2xl",
      lg: "text-2xl md:text-3xl",
      xl: "text-3xl md:text-4xl",
      "2xl": "text-4xl md:text-5xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    color: {
      default: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary-foreground",
      muted: "text-muted-foreground",
      accent: "text-accent-foreground",
      destructive: "text-destructive",
      success: "text-emerald-600 dark:text-emerald-400",
      warning: "text-amber-600 dark:text-amber-400",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
    weight: "semibold",
    color: "default",
  },
});

export interface SectionTitleProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    VariantProps<typeof sectionTitleVariants> {
  /**
   * The content of the section title
   */
  children: React.ReactNode;
  /**
   * The HTML element to render as (h1, h2, h3, etc.)
   * @default "h2"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * Optional icon to display with the title (only works with variant="withIcon")
   */
  icon?: React.ReactNode;
  /**
   * Optional subtitle to display below the main title
   */
  subtitle?: string;
  /**
   * Whether to add a subtle animation on hover
   */
  animated?: boolean;
}

const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  (
    {
      children,
      className,
      variant,
      size,
      weight,
      color,
      as = "h2",
      icon,
      subtitle,
      style,
      animated = false,
      ...props
    },
    ref,
  ) => {
    const Component = as;

    return (
      <div className="space-y-1">
        <Component
          ref={ref}
          className={cn(
            sectionTitleVariants({ variant, size, weight, color }),
            animated && "hover:scale-105 transition-transform duration-200",
            className,
          )}
          style={style}
          {...props}
        >
          {variant === "withIcon" && icon && <span className="flex-shrink-0">{icon}</span>}
          {children}
        </Component>
        {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
      </div>
    );
  },
);

SectionTitle.displayName = "SectionTitle";

export { SectionTitle, sectionTitleVariants };
