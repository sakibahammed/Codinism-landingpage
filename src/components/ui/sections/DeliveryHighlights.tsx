import { Lightbulb, Shield } from "lucide-react";

const highlights = [
  {
    variant: "featured" as const,
    title: "10X Faster Delivery",
    description:
      "AI-accelerated workflows and senior engineers ship production-ready features in a fraction of the usual timeline—without cutting corners on quality.",
  },
  {
    variant: "icon" as const,
    icon: Shield,
    title: "IP Protection",
    description:
      "Strict NDAs, secure tooling, and clear ownership so your codebase and ideas stay yours from kickoff to handoff.",
  },
  {
    variant: "icon" as const,
    icon: Lightbulb,
    title: "Top 1% Talent",
    description:
      "Vetted specialists across product, AI, and engineering—embedded with your team and aligned to your outcomes.",
  },
];

export default function DeliveryHighlights() {
  return (
    <section
      className="border-t border-neutral-200 bg-white py-12 md:py-16"
      aria-labelledby="delivery-highlights-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <h2 id="delivery-highlights-heading" className="sr-only">
          Why teams choose our delivery model
        </h2>

        <div className="grid gap-0 md:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={[
                "flex flex-col gap-4 px-0 py-8 md:px-8 md:py-6",
                index > 0
                  ? "border-t border-neutral-200 md:border-t-0 md:border-l md:border-neutral-200"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {item.variant === "featured" ? (
                <div className="flex gap-4">
                  <span
                    className="mt-1 hidden h-full min-h-[3rem] w-1 shrink-0 rounded-full bg-[#0154ca] sm:block"
                    aria-hidden
                  />
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-neutral-950 md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600 md:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <item.icon className="h-9 w-9 text-[#0154ca]" strokeWidth={1.25} aria-hidden />
                  <div>
                    <h3 className="text-base font-bold text-neutral-950 md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 md:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
