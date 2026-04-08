export type User = {
  id: string;
  name: string;
};

export interface ProductBadge {
  text: string;
  variant?: "default" | "secondary" | "accent" | "success";
  className?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  badges: ProductBadge[];
  gridSpan: "large" | "medium" | "small";
  caseStudyHref: string;
  features?: string[];
  gradient?: string;
  category?: string;
}
