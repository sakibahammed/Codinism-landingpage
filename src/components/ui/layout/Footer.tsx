"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../button";
import Codinism from "../sections/Codinism";
import { useContactForm } from "@/stores/useContactForm";

export default function Footer() {
  const { setIsOpen } = useContactForm();
  return (
    <section id="contact" className="overflow-hidden md:mx-auto max-w-[1400px] mt-16 relative">
      <footer className="bg-[#000814] text-white border border-secondary" role="contentinfo">
        <div className="grid md:grid-cols-3 border-b border-secondary">
          <div className="p-10 border-b md:border-b-0 md:border-r border-secondary">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logos/Logo.png"
                alt="Codinism logo"
                width={259}
                height={48}
                loading="lazy"
              />
            </div>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              We build extraordinary software solutions with state-of-the-art security and
              efficiency.
            </p>

            {/* <p className="text-white font-semibold mb-3">
              Certified IT experts delivering solutions fast
            </p>

            <div className="flex items-center gap-3">
              <Image src="/icon/badge1.png" alt="badge" width={40} height={40} />
              <Image src="/icon/badge1.png" alt="badge" width={40} height={40} />
              <Image src="/icon/badge1.png" alt="badge" width={40} height={40} />
              <Image src="/icon/badge1.png" alt="badge" width={40} height={40} />
            </div> */}
          </div>

          <div className="p-10 border-b md:border-b-0 md:border-r border-secondary grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-gray-300 font-semibold mb-4">Navigation</h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>Features</li>
                  <li>How it works</li>
                  <li>Services</li>
                </ul>
              </nav>

              <h3 className="text-gray-300 font-semibold mt-8 mb-4">Location</h3>
              <address className="text-gray-400 text-sm leading-relaxed not-italic">
                Austin,
                <br />
                TX-78738, USA
              </address>
            </div>

            <div>
              <h3 className="text-gray-300 font-semibold mb-4">Resources</h3>
              <nav aria-label="Footer resources">
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>Insights</li>
                  <li>Careers</li>
                  <li>FAQs</li>
                </ul>
              </nav>

              <h3 className="text-gray-300 font-semibold mt-8 mb-4">Contact</h3>
              <p className="text-gray-400 text-sm">
                <a href="tel:+17014124019" className="hover:text-white transition-colors">
                  +1 (701) 412-4019
                </a>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-10 flex flex-col justify-center items-start md:items-center">
            <h3 className="text-2xl font-semibold mb-2">Schedule a call</h3>
            <p className="text-gray-400 text-sm mb-6">Let’s work together!</p>
            <Button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg h-12"
              aria-label="Open contact form to send a message"
            >
              Send a Message <ArrowUpRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 items-center text-gray-500 text-sm border-t border-gray-800 p-6">
          <p className="text-center md:text-left">All Rights Reserved © Codinism - 2025</p>
          <div></div>
          <nav className="flex justify-center md:justify-end gap-6" aria-label="Legal">
            <a href="/privacy-policy" className="hover:text-gray-300 cursor-pointer transition">
              Privacy Policy
            </a>
            <a href="/terms-conditions" className="hover:text-gray-300 cursor-pointer transition">
              Terms & Conditions
            </a>
          </nav>
        </div>
      </footer>
      {/* <div className="bg-[url('/layer/fotter-bg.png')] bg-cover bg-center   p-10">
        <Image
          src="/layer/fotter_codinism.png"
          width={1400}
          height={244}
          alt="Footer image"
          className="mx-auto"
        />
      </div> */}

      {/* bottom section */}

      <div className="relative">
        {/* Binary Animation */}
        <Codinism />

        {/* Centered on top of animation */}
        <div className="absolute top-0">
          {" "}
          <Image
            src="/layer/fotter_codinism.png"
            width={1400}
            height={244}
            alt="Footer image"
            className="mt-6"
          />
        </div>
      </div>
    </section>
  );
}
