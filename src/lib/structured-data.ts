import { siteConfig } from "./seo";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.company.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logos/Logo.png`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.company.address.streetAddress,
    addressLocality: siteConfig.company.address.addressLocality,
    addressRegion: siteConfig.company.address.addressRegion,
    postalCode: siteConfig.company.address.postalCode,
    addressCountry: siteConfig.company.address.addressCountry,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.company.phone,
    contactType: "Customer Service",
    areaServed: "US",
    availableLanguage: ["English"],
  },
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.github,
    `https://twitter.com/${siteConfig.social.twitter.replace("@", "")}`,
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.company.name,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const softwareApplicationSchema = (product: {
  name: string;
  description: string;
  url: string;
  image: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: product.name,
  description: product.description,
  url: product.url,
  image: `${siteConfig.url}${product.image}`,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  ...(product.aggregateRating && {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.aggregateRating.ratingValue,
      reviewCount: product.aggregateRating.reviewCount,
    },
  }),
});

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Software Development",
  provider: {
    "@type": "Organization",
    name: siteConfig.company.name,
    url: siteConfig.url,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          description:
            "Build scalable, secure, and efficient custom software solutions tailored to your business needs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Team Augmentation",
          description:
            "Extend your engineering capacity without the overhead of hiring full-time employees.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "EdTech Platform Development",
          description:
            "Create engaging educational technology platforms with AI-powered learning experiences.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web & Mobile App Development",
          description:
            "Develop responsive web applications and native mobile apps for iOS and Android.",
        },
      },
    ],
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteConfig.url}${item.url}`,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
