import { SectionTitle } from "@/components/custom";
import Image from "next/image";

const adventureLogo = [
  // { logo: "/icon/collabs/accenture.svg" },
  { logo: "/logos/Edulavo.png" },
  // { logo: "/icon/collabs/adobe.png" },
  // { logo: "/icon/collabs/microsoft.webp" },
  { logo: "/logos/ProgrammingHero.png" },
  { logo: "/logos/Phitron.png" },
  // { logo: "/icon/collabs/carrefour.svg" },
  // { logo: "/icon/collabs/chase.png" },
  { logo: "/logos/Zenyora.png" },
  { logo: "/logos/space-harpoon.png" },
  { logo: "/logos/rex.png" },
  { logo: "/logos/forward-flow.png" },

  // { logo: "/icon/collabs/shopify.png" },
  // { logo: "/icon/collabs/target.png" },
  // { logo: "/icon/collabs/tesco.png" },
  // { logo: "/icon/collabs/tesla.png" },
];

export default function Adventure() {
  /**
   * Duplicate the list to enable seamless infinite marquee scrolling
   * This ensures when the first set finishes, the second continues smoothly.
   */
  const repeatedLogos = [...adventureLogo, ...adventureLogo];

  return (
    <>
      {/* ---------------------------- SECTION TITLE ---------------------------- */}
      <div className="mt-32">
        <SectionTitle size="2xl" className="text-center text-white">
          They knows us well, We know them better.
        </SectionTitle>
      </div>

      {/* ---------------------------- SINGLE ROW MARQUEE ---------------------------- */}
      <div className="relative overflow-hidden mt-16 border-t border-b border-secondary">
        <div className="flex animate-marquee-left">
          {repeatedLogos.map((item, index) => (
            <div
              key={`left-${index}`}
              className="
                flex-shrink-0
                w-[275px] h-[190px]
                flex items-center justify-center
                border-r border-secondary
              "
            >
              {/* Logo item */}
              <Image
                src={item.logo}
                width={190}
                height={56}
                alt={`adventure logo ${index + 1}`}
                className="object-contain max-h-[56px] w-auto"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
