import React from "react";
import { SectionTitle } from "./SectionTitle";
import { Star, ShoppingBag, Users } from "lucide-react";

/**
 * Examples of how to use the SectionTitle component
 * This file demonstrates various configurations and use cases
 */

export const SectionTitleExamples = () => {
  return (
    <div className="space-y-8 p-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Basic Usage</h3>
        <SectionTitle>Default Section Title</SectionTitle>
        <SectionTitle as="h1" size="xl">
          Large Main Title
        </SectionTitle>
        <SectionTitle as="h3" size="sm">
          Small Section Title
        </SectionTitle>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Variants</h3>
        <SectionTitle variant="centered">Centered Title</SectionTitle>
        <SectionTitle variant="withUnderline">Title with Underline</SectionTitle>
        <SectionTitle variant="withIcon" icon={<Star className="h-5 w-5" />}>
          Title with Icon
        </SectionTitle>
        <SectionTitle variant="gradient">Gradient Title</SectionTitle>
        <SectionTitle variant="outlined">Outlined Title</SectionTitle>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Colors</h3>
        <SectionTitle color="primary">Primary Color</SectionTitle>
        <SectionTitle color="secondary">Secondary Color</SectionTitle>
        <SectionTitle color="muted">Muted Color</SectionTitle>
        <SectionTitle color="destructive">Destructive Color</SectionTitle>
        <SectionTitle color="success">Success Color</SectionTitle>
        <SectionTitle color="warning">Warning Color</SectionTitle>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Sizes</h3>
        <SectionTitle size="sm">Small Size</SectionTitle>
        <SectionTitle size="md">Medium Size (Default)</SectionTitle>
        <SectionTitle size="lg">Large Size</SectionTitle>
        <SectionTitle size="xl">Extra Large Size</SectionTitle>
        <SectionTitle size="2xl">2X Large Size</SectionTitle>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Weights</h3>
        <SectionTitle weight="normal">Normal Weight</SectionTitle>
        <SectionTitle weight="medium">Medium Weight</SectionTitle>
        <SectionTitle weight="semibold">Semibold Weight (Default)</SectionTitle>
        <SectionTitle weight="bold">Bold Weight</SectionTitle>
        <SectionTitle weight="extrabold">Extra Bold Weight</SectionTitle>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">With Subtitles</h3>
        <SectionTitle subtitle="This is a subtitle that provides additional context">
          Main Title with Subtitle
        </SectionTitle>
        <SectionTitle variant="centered" subtitle="Centered title with subtitle" color="primary">
          Centered with Subtitle
        </SectionTitle>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Animated</h3>
        <SectionTitle animated>Hover to see animation</SectionTitle>
        <SectionTitle animated variant="withIcon" icon={<ShoppingBag className="h-5 w-5" />}>
          Animated with Icon
        </SectionTitle>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Styling</h3>
        <SectionTitle
          className="text-purple-600 dark:text-purple-400"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
        >
          Custom Styled Title
        </SectionTitle>
        <SectionTitle
          variant="withIcon"
          icon={<Users className="h-6 w-6 text-blue-500" />}
          className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Custom Gradient with Icon
        </SectionTitle>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Real-world Examples</h3>

        {/* E-commerce Product Section */}
        <div className="border rounded-lg p-4">
          <SectionTitle
            variant="withIcon"
            icon={<ShoppingBag className="h-5 w-5" />}
            color="primary"
            size="lg"
          >
            Featured Products
          </SectionTitle>
          <p className="text-muted-foreground mt-2">
            Discover our handpicked selection of premium items
          </p>
        </div>

        {/* User Dashboard Section */}
        <div className="border rounded-lg p-4">
          <SectionTitle
            variant="withUnderline"
            color="secondary"
            size="md"
            subtitle="Manage your account settings and preferences"
          >
            Account Settings
          </SectionTitle>
        </div>

        {/* Hero Section */}
        <div className="border rounded-lg p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
          <SectionTitle variant="centered" size="2xl" weight="bold" color="primary" animated>
            Welcome to Our Store
          </SectionTitle>
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
            Experience the best in online shopping with our curated collection of products
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitleExamples;
