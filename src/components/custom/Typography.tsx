import React from "react";
import clsx from "clsx";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "small";
type Color =
  | "primary"
  | "secondary"
  | "muted"
  | "danger"
  | "success"
  | "warning"
  | "inherit"
  | string;

interface TypographyProps {
  children: React.ReactNode;
  variant?: Variant;
  color?: Color;
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  className?: string;
  as?: React.ElementType; // ✅ instead of keyof JSX.IntrinsicElements
}

const variantClasses: Record<Variant, string> = {
  h1: "text-4xl md:text-5xl font-bold leading-tight",
  h2: "text-3xl md:text-4xl font-semibold leading-snug",
  h3: "text-2xl md:text-3xl font-semibold leading-snug",
  h4: "text-xl md:text-2xl font-medium leading-snug",
  h5: "text-lg md:text-xl font-medium leading-snug",
  h6: "text-base md:text-lg font-medium leading-snug",
  body: "text-base leading-relaxed",
  small: "text-sm leading-snug",
};

const weightClasses: Record<NonNullable<TypographyProps["weight"]>, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorClasses: Record<Exclude<Color, string>, string> = {
  primary: "text-blue-600",
  secondary: "text-gray-700",
  muted: "text-gray-500",
  danger: "text-red-600",
  success: "text-green-600",
  warning: "text-yellow-600",
  inherit: "text-inherit",
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body",
  color = "inherit",
  weight,
  className,
  as,
}) => {
  // ✅ Force Component to be a valid React.ElementType
  const Component: React.ElementType = as || (variant.startsWith("h") ? variant : "p");

  const colorClass =
    color in colorClasses ? colorClasses[color as keyof typeof colorClasses] : color;

  return (
    <Component
      className={clsx(
        variantClasses[variant],
        colorClass,
        weight ? weightClasses[weight] : undefined,
        className,
      )}
    >
      {children}
    </Component>
  );
};
