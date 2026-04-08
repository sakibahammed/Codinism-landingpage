import StartYourJourney from "@/components/modules/start-your-journey";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { Metadata } from "next";
import Script from "next/script";
import React from "react";

export const metadata: Metadata = generateSEOMetadata({
  title: "Start Your Journey - Partner With Codinism",
  description:
    "Ready to scale your engineering team? Start your journey with Codinism today. Get custom software development solutions tailored to your business needs.",
  canonical: "/start-your-journey",
  keywords: [
    "start project",
    "hire developers",
    "software development consultation",
    "project estimation",
  ],
});

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Start Your Journey", url: "/start-your-journey" },
]);

export default function StartYourJourneyPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        strategy="beforeInteractive"
      />
      <StartYourJourney />
    </>
  );
}
