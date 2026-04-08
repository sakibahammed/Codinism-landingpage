import HomePage from "@/components/modules/home";
import { softwareApplicationSchema } from "@/lib/structured-data";
import Script from "next/script";

const products = [
  {
    name: "Programming Hero",
    description:
      "One of the biggest EdTech platforms in Bangladesh for programming and web development with 100K+ daily learners since 2017.",
    url: "https://www.programming-hero.com/",
    image: "/images/products/programming-hero.png",
    aggregateRating: {
      ratingValue: 4.8,
      reviewCount: 50000,
    },
  },
  {
    name: "Phitron",
    description:
      "Revolutionizing skill development and career pathways in Computer Science in Bangladesh with 12,000+ daily learners.",
    url: "https://phitron.io/",
    image: "/images/products/phitron-hero.png",
    aggregateRating: {
      ratingValue: 4.7,
      reviewCount: 15000,
    },
  },
  {
    name: "EduLavo",
    description:
      "Your personal AI-powered skill coach with personalized, adaptive learning paths that match your ambition, skills, and pace.",
    url: "https://www.edulavo.com/",
    image: "/images/products/edulavo-hero.png",
  },
];

export default function Home() {
  return (
    <>
      {products.map((product, index) => (
        <Script
          key={index}
          id={`product-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema(product)),
          }}
          strategy="beforeInteractive"
        />
      ))}
      <article className="font-sans">
        <HomePage />
      </article>
    </>
  );
}
