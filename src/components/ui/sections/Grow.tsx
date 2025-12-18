import Accordion from "@/components/accordion";
import { SectionTitle } from "@/components/custom";
import Image from "next/image";

/**
 * Timeline data: Each item represents a step in the growth process
 * isBorder = draws the dotted separator before the last item
 */
const accordionData = [
  {
    number: "01",
    value: "discovery",
    title: "Discovery & Consultation",
    content:
      "We start by understanding your business, goals, and current challenges. Through detailed consultation, we uncover opportunities for growth and identify key focus areas.",
  },
  {
    number: "02",
    value: "strategy",
    title: "Strategy & Planning",
    content:
      "Based on the insights gathered, we design a tailored strategy and actionable roadmap. This includes prioritizing initiatives, defining KPIs, and aligning resources for maximum impact.",
  },
  {
    number: "03",
    value: "execution",
    title: "Execution & Growth",
    content:
      "Our team implements the strategy with precision. From campaigns to operational improvements, we focus on delivering measurable results and accelerating business growth.",
  },
  {
    number: "04",
    value: "monitoring",
    title: "Monitoring & Optimization",
    content:
      "We continuously track performance, analyze data, and optimize processes to ensure sustainable growth. This iterative approach keeps your business ahead of the curve.",
  },
];

export default function Grow() {
  return (
    <section className="mt-16 text-white" id="faq">
      {/* ---------------------------- SECTION TITLE ---------------------------- */}
      <SectionTitle size="2xl" className="text-center text-white">
        How We Can Grow Together
      </SectionTitle>

      {/* ---------------------------- MAIN GRID ---------------------------- */}
      {/* Responsive layout:
        - Single column on mobile
        - Image left + content right on medium & above
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-10 items-center">
        {/* ---------------------------- LEFT IMAGE ---------------------------- */}
        <div className="flex justify-center">
          <Image
            src="/layer/men-working-web.png"
            width={560}
            height={560}
            alt="men-working-image"
            className="max-w-full h-auto object-contain"
            priority
          />
        </div>

        {/* ---------------------------- RIGHT CONTENT ---------------------------- */}
        <div className="">
          <Accordion items={accordionData}></Accordion>
          {/* <Button
            className="
                flex items-center gap-2 bg-primary text-white
                px-6 py-3 rounded-full shadow-lg
                h-12 mt-16
              "
          >
            Send a message <ArrowUpRight size={18} />
          </Button> */}
        </div>
      </div>
    </section>
  );
}
