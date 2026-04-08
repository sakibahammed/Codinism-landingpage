"use client";

import { SectionTitle } from "@/components/custom";
import { IconCloud } from "@/components/ui/icon-cloud";

// List of technology stack slugs for Simple Icons
const iconSlugs = [
  "javascript",
  "typescript",
  "react",
  "vuedotjs",
  "nodedotjs",
  "python",
  "php",
  "django",
  "graphql",
  "android",
  "flutter",
  "swift",
  "postgresql",
  "mongodb",
  "docker",
  "amazonaws",
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-16 md:py-24 bg-[#0a0a0a]"
      aria-labelledby="tech-stack-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <header className="w-[450px] mx-auto text-center mb-12 max-w-full">
          <SectionTitle
            id="tech-stack-heading"
            className="text-center text-white"
            size="2xl"
            as="h2"
          >
            Tech Stack We Know Better With AI
          </SectionTitle>
        </header>

        <div
          className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center mx-auto"
          role="img"
          aria-label="Interactive cloud of technology logos including JavaScript, TypeScript, React, Node.js, Python, and more"
        >
          <IconCloud iconSlugs={iconSlugs} />
        </div>
      </div>
    </section>
  );
}
