# SectionTitle Component

A highly customizable and reusable section title component built with React, TypeScript, and Tailwind CSS. Perfect for creating consistent section headings throughout your application.

## Features

- 🎨 **Multiple Variants**: Default, centered, with underline, with icon, gradient, and outlined styles
- 📏 **Size Options**: 5 different sizes from small to 2X large
- 🎯 **Weight Control**: Normal, medium, semibold, bold, and extrabold font weights
- 🌈 **Color Themes**: Built-in color variants that work with your design system
- ⚡ **Animation Support**: Optional hover animations
- 🔧 **Fully Customizable**: Support for custom className, styles, and HTML attributes
- 📱 **Responsive**: Mobile-first design with responsive text sizing
- ♿ **Accessible**: Proper semantic HTML with customizable heading levels

## Installation

The component is already included in your project. Import it from the custom components:

```tsx
import { SectionTitle } from "@/components/custom";
// or
import { SectionTitle } from "@/components/custom/SectionTitle";
```

## Basic Usage

```tsx
import { SectionTitle } from "@/components/custom";

function MyComponent() {
  return (
    <div>
      <SectionTitle>My Section</SectionTitle>
    </div>
  );
}
```

## Props

| Prop        | Type                                                                                                      | Default      | Description                                          |
| ----------- | --------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------- |
| `children`  | `React.ReactNode`                                                                                         | -            | The content of the section title                     |
| `as`        | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6"`                                                            | `"h2"`       | The HTML element to render as                        |
| `variant`   | `"default" \| "centered" \| "withUnderline" \| "withIcon" \| "gradient" \| "outlined"`                    | `"default"`  | Visual style variant                                 |
| `size`      | `"sm" \| "md" \| "lg" \| "xl" \| "2xl"`                                                                   | `"md"`       | Size of the title                                    |
| `weight`    | `"normal" \| "medium" \| "semibold" \| "bold" \| "extrabold"`                                             | `"semibold"` | Font weight                                          |
| `color`     | `"default" \| "primary" \| "secondary" \| "muted" \| "accent" \| "destructive" \| "success" \| "warning"` | `"default"`  | Text color                                           |
| `icon`      | `React.ReactNode`                                                                                         | -            | Optional icon (only works with `variant="withIcon"`) |
| `subtitle`  | `string`                                                                                                  | -            | Optional subtitle text                               |
| `animated`  | `boolean`                                                                                                 | `false`      | Whether to add hover animation                       |
| `className` | `string`                                                                                                  | -            | Additional CSS classes                               |
| `style`     | `React.CSSProperties`                                                                                     | -            | Inline styles                                        |

## Variants

### Default

```tsx
<SectionTitle>Default Section Title</SectionTitle>
```

### Centered

```tsx
<SectionTitle variant="centered">Centered Title</SectionTitle>
```

### With Underline

```tsx
<SectionTitle variant="withUnderline">Title with Underline</SectionTitle>
```

### With Icon

```tsx
import { Star } from "lucide-react";

<SectionTitle variant="withIcon" icon={<Star className="h-5 w-5" />}>
  Title with Icon
</SectionTitle>;
```

### Gradient

```tsx
<SectionTitle variant="gradient">Gradient Title</SectionTitle>
```

### Outlined

```tsx
<SectionTitle variant="outlined">Outlined Title</SectionTitle>
```

## Sizes

```tsx
<SectionTitle size="sm">Small</SectionTitle>
<SectionTitle size="md">Medium (Default)</SectionTitle>
<SectionTitle size="lg">Large</SectionTitle>
<SectionTitle size="xl">Extra Large</SectionTitle>
<SectionTitle size="2xl">2X Large</SectionTitle>
```

## Colors

```tsx
<SectionTitle color="primary">Primary</SectionTitle>
<SectionTitle color="secondary">Secondary</SectionTitle>
<SectionTitle color="muted">Muted</SectionTitle>
<SectionTitle color="destructive">Destructive</SectionTitle>
<SectionTitle color="success">Success</SectionTitle>
<SectionTitle color="warning">Warning</SectionTitle>
```

## With Subtitle

```tsx
<SectionTitle subtitle="This provides additional context">Main Title</SectionTitle>
```

## Animated

```tsx
<SectionTitle animated>Hover to see animation</SectionTitle>
```

## Custom Styling

```tsx
<SectionTitle
  className="text-purple-600 dark:text-purple-400"
  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
>
  Custom Styled Title
</SectionTitle>
```

## Real-world Examples

### E-commerce Product Section

```tsx
<SectionTitle
  variant="withIcon"
  icon={<ShoppingBag className="h-5 w-5" />}
  color="primary"
  size="lg"
>
  Featured Products
</SectionTitle>
```

### User Dashboard Section

```tsx
<SectionTitle
  variant="withUnderline"
  color="secondary"
  size="md"
  subtitle="Manage your account settings and preferences"
>
  Account Settings
</SectionTitle>
```

### Hero Section

```tsx
<SectionTitle variant="centered" size="2xl" weight="bold" color="primary" animated>
  Welcome to Our Store
</SectionTitle>
```

## Accessibility

The component automatically uses semantic HTML elements (`h1`, `h2`, etc.) and supports all standard HTML attributes. Make sure to use appropriate heading levels for your content hierarchy:

- `h1`: Main page title (use sparingly)
- `h2`: Major section titles
- `h3`: Subsection titles
- `h4`, `h5`, `h6`: Lower-level headings

## Styling with Tailwind

The component is built with Tailwind CSS and uses CSS variables for theming. You can customize the appearance by:

1. **Using the built-in variants and props**
2. **Adding custom classes via the `className` prop**
3. **Using inline styles via the `style` prop**
4. **Modifying the CSS variables in your global styles**

## TypeScript Support

The component is fully typed with TypeScript. All props are properly typed, and you'll get full IntelliSense support in your IDE.

```tsx
import { SectionTitle, type SectionTitleProps } from "@/components/custom";

// TypeScript will provide autocomplete and type checking
const props: SectionTitleProps = {
  variant: "centered",
  size: "lg",
  color: "primary",
  // ... other props
};
```
