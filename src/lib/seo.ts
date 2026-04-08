export const siteConfig = {
  name: "Codinism",
  title: "Codinism - Scale Engineering Without Increasing Headcount",
  description:
    "Codinism helps startups and growing teams extend their engineering capacity. Ship faster without long hiring cycles or added overhead. Expert software development services with proven EdTech products serving 100K+ daily learners.",
  url: "https://www.codinism.com",
  ogImage: "https://www.codinism.com/og-image.png",
  keywords: [
    "software development",
    "engineering services",
    "EdTech platform",
    "Programming Hero",
    "Phitron",
    "EduLavo",
    "software outsourcing",
    "development team augmentation",
    "custom software development",
    "web development services",
    "mobile app development",
    "AI-powered learning",
    "online programming courses",
    "software engineering company",
    "tech consulting",
    "startup development services",
  ],
  authors: [
    {
      name: "Codinism Team",
      url: "https://www.codinism.com",
    },
  ],
  creator: "Codinism",
  publisher: "Codinism",
  company: {
    name: "Codinism",
    address: {
      streetAddress: "Austin",
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78738",
      addressCountry: "US",
    },
    phone: "+17014124019",
    email: "info@codinism.com",
  },
  social: {
    twitter: "@codinism",
    linkedin: "https://www.linkedin.com/company/codinism",
    github: "https://github.com/codinism",
  },
};

export const generateMetadata = (page?: {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}) => {
  const title = page?.title ? `${page.title} | ${siteConfig.name}` : siteConfig.title;
  const description = page?.description || siteConfig.description;
  const keywords = page?.keywords
    ? [...siteConfig.keywords, ...page.keywords]
    : siteConfig.keywords;
  const ogImage = page?.ogImage || siteConfig.ogImage;
  const canonical = page?.canonical ? `${siteConfig.url}${page.canonical}` : siteConfig.url;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: siteConfig.social.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
  };
};
