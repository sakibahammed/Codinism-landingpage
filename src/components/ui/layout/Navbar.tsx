"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../button";

// Navigation menu items
const menu = [
  // { path: "#service", label: "Service" },
  { path: "/start-your-journey", label: "Start Working With Us" },
  { path: "#industries", label: "Why Codinism" },
  // { path: "/about", label: "About" },
  { path: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="w-full px-6 md:px-12 py-4 border-t-4 border-primary border-b border-b-[#003570] bg-transparent backdrop-blur-[6px]"
      aria-label="Main navigation"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center">
          <div className="hidden md:block shrink-0">
            <Link href="/" className="block" aria-label="Codinism home">
              <Image
                src="/logos/Logo.png"
                alt="Codinism logo"
                width={200}
                height={96}
                priority
                className="w-[200px] h-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <NavigationMenu className="flex-1">
              <NavigationMenuList className="flex gap-6">
                {menu.map((m, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={m.path}
                        className="text-[16px] text-white hover:text-gray-300 transition-colors"
                      >
                        {m.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:block">
            <Link href="#services" aria-label="View our services">
              <Button
                style={{ filter: "brightness(120%)" }}
                className="rounded-full h-12 px-6 py-3 shadow-lg"
              >
                See Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center md:hidden w-full">
          <button
            className="p-2 focus:outline-none active:scale-95 transition-transform"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="text-white" size={24} aria-hidden="true" />
            ) : (
              <Menu className="text-white" size={24} aria-hidden="true" />
            )}
          </button>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" aria-label="Codinism home">
                    <Image src="/logos/Logo.png" width={200} height={96} alt="Codinism logo" />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-16 left-0 w-full bg-[#000102]/95 z-50 flex flex-col justify-center items-center p-4 gap-4 md:hidden backdrop-blur-md"
          >
            <NavigationMenu className="w-full">
              <NavigationMenuList className="flex flex-col gap-4">
                {menu.map((m, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      className="text-[16px] text-white hover:text-gray-300 transition-colors"
                      href={m.path}
                    >
                      {m.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="#services" aria-label="View our services">
              <Button className="rounded-full h-12 px-6 py-3">See Services</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
