"use client";

import { SectionTitle } from "@/components/custom";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const productsData: Product[] = [
  {
    id: "joomshaper",
    title: "JoomShaper",
    description: "Since 2010. Home to 300+ trusted Joomla products.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQmeKraZMWWwGZHk-PNvo7k5OKXWr8df9FgjnS0eN4NeZ8cp0I0OZK3CmFcj9aLoJEfa5hThNF9pgVh0e8wTFEbq0pEAgQ061rCmhJj01rmQC2vmKCFeoDu5CCSiF-F7EY0kMGlj4uWac3Hq0VhkhRX8Sw8qg-Hn413JZeYEjPJpGW816qQnNKPqISp_M9DYzXARV7qQrU08PolRSDxLhSpUGzCDpbLsqAFaF7A-RXJHraE6_S3QGR5AClApP9Rkn4EvZQ4Uh5jf4",
    imageAlt: "JoomShaper Interface",
    badges: [
      { text: "140+ Templates", variant: "success" },
      { text: "10M+ Downloads", variant: "success" },
    ],
    gridSpan: "large",
    features: ["SP Page Builder", "EasyStore"],
  },
  {
    id: "tutor-lms",
    title: "Tutor LMS",
    description: "Leading WordPress LMS trusted by educators worldwide.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGMW7Sh8HtAxjO80xOdp2cNoco0HMfhckegCPLH_-9iwWhBkyjs6-OL9AAR6F3Zpt9D0ME_1pIz1g80xynUDrcNP-NR5stb75L5NDpjnD8dtSQAtNvyO-oV8My1qq3Jjh3WWXFTYS1XW_ya8YW1vJNuS4wMfI4qBJuyUdMJUboPMo5VoGE8TssLl8evhpQjIR7v26NnOblgPlETTkYWd1EDVDi9Xm2bzeNjqu2RSGgUZ6fVg9EaD5jmU3d1TZmdfBxSkSgF-Eyo-0",
    imageAlt: "Tutor LMS Dashboard",
    badges: [
      { text: "100K+ Active Installations", variant: "success" },
      { text: "4.9 Rating", variant: "secondary" },
    ],
    gridSpan: "medium",
    gradient: "from-[#2F3AA1]/30 to-transparent",
  },
  {
    id: "droip",
    title: "Droip",
    description: "Next-generation revolutionary no-code WordPress website builder.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBG85P5qKvZSBC2KQDLc6Iw4Ir8h4dUt-YhxbnrchuWExScPTHMJ5oSk7AlL_kWDxPR61sqkvnKzOp5voW6rpfBIPh6Vr4jx9oMkb0K56RVyn__PxnuQIeYiE3O-P0U-lQAGcA90CurGy3IUxev7pdjNw4TgfWqE0KSgpX6PUgfkiwqC1vwkSMUCVVLZdVB0gI7O5Y6CJHJpN5Ei8SBhA0aC3M5qwttrMI02eqWAh8brUocaA5N8usHsnmwtlfgimwtdebg48VctpU",
    imageAlt: "Droip Builder",
    badges: [{ text: "New Generation", variant: "default" }],
    gridSpan: "small",
    category: "New Generation",
  },
  {
    id: "growfund",
    title: "Growfund",
    description: "A complete solution for crowdfunding and donations in WordPress.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBb4aW3mkqCL-QuxnZ4QFnNPFKRBMQw0P5JYWw5WcZEn92XQUERAP-K4U5LXVip9Z_Dtu2umSQJbSlk6yu5eAPm3LWUnvMq_eEZJm6rvi8sRwZctfMnNNyhCVKjM40CnNk3Xo2iCF9G57XjwvzTwuJxpHttwamQTqj79OQVzN7f1QtKFp2ervzptRmymP8ZdMQ_tN_4355HiwwXNuc1n7P4dINdZOHuqzk7wsqrKaRXmSTheGEfcD7Czt3SLQtt7-cmhEvc7rTo6Qs",
    imageAlt: "Growfund Analytics",
    badges: [{ text: "FinTech", variant: "default" }],
    gridSpan: "small",
    category: "FinTech",
  },
];

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const gridSpanClass = {
    large: "col-span-12 lg:col-span-7",
    medium: "col-span-12 lg:col-span-5",
    small: "col-span-12 lg:col-span-6",
  }[product.gridSpan];

  const isLarge = product.gridSpan === "large";
  const isMedium = product.gridSpan === "medium";

  return (
    <div
      className={`${gridSpanClass} ${
        product.gradient ? `bg-gradient-to-br ${product.gradient}` : ""
      } bg-card rounded-3xl overflow-hidden border border-border/10 group hover:border-primary/30 transition-all duration-300`}
    >
      <div className={`p-6 md:p-10 ${isLarge ? "flex flex-col h-full" : ""}`}>
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex-1">
            <h3
              className={`${
                isLarge ? "text-2xl md:text-3xl font-extrabold uppercase tracking-tight" : "text-xl md:text-2xl font-bold"
              } mb-2 text-white`}
            >
              {product.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base">{product.description}</p>
          </div>

          {/* Badges */}
          {product.badges.length > 0 && (
            <div className="flex flex-wrap gap-2 md:gap-3 ml-4">
              {product.badges.map((badge, index) => (
                <Badge
                  key={index}
                  className={
                    badge.variant === "success"
                      ? "bg-[#ADFF2F]/20 border-[#ADFF2F]/40 text-[#ADFF2F] text-[10px] uppercase tracking-widest font-bold px-3 py-1"
                      : badge.variant === "secondary"
                        ? "bg-gray-700 text-white text-xs font-bold px-4 py-2"
                        : "bg-primary/20 border-primary/40 text-primary text-[10px] uppercase tracking-widest px-3 py-1"
                  }
                >
                  {badge.text}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className={`relative ${isLarge ? "mt-auto pt-10" : "mt-auto"}`}>
          {/* Glow effect for large card */}
          {isLarge && (
            <div className="absolute -bottom-20 -right-20 w-full h-full bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          )}

          <div
            className={`relative overflow-hidden ${
              isMedium ? "rounded-2xl" : "rounded-xl"
            } border border-border/20 shadow-2xl ${
              isMedium
                ? "group-hover:scale-105"
                : isLarge
                  ? ""
                  : "aspect-video group-hover:scale-[1.02]"
            } transition-transform duration-700`}
          >
            <Image
              src={product.image}
              alt={product.imageAlt}
              width={800}
              height={isMedium ? 300 : 450}
              className={`w-full object-cover ${
                isLarge
                  ? "translate-y-10 group-hover:translate-y-4 transition-transform duration-700"
                  : isMedium
                    ? "h-[300px]"
                    : "h-full group-hover:scale-110 transition-transform duration-1000"
              }`}
            />

            {/* Gradient overlay for small cards */}
            {!isLarge && !isMedium && (
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            )}
          </div>

          {/* Floating features for large card */}
          {isLarge && product.features && (
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-card/90 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-xl border border-[#ADFF2F]/20 shadow-xl ${
                    index === 1 ? "ml-8" : ""
                  }`}
                >
                  <span className="text-xs font-bold text-[#ADFF2F]">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section className="py-16 md:py-32 bg-[#131313] border-y border-border/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            <span className="text-primary text-xs md:text-sm uppercase tracking-[0.2em] font-semibold">
              Ecosystem
            </span>
            <SectionTitle
              size="2xl"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              Industry-Leading Products
            </SectionTitle>
          </div>

          <Link
            href="#"
            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group text-sm md:text-base"
          >
            Explore other products
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
