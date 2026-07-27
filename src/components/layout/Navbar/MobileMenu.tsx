"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation } from "./NavigationData";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleSection = (label: string) => {
    setExpanded(expanded === label ? null : label);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg p-2 text-gray-700 hover:bg-gray-100"
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed right-0 top-0 z-50 h-full w-80 max-w-full bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b p-5">
              <h2 className="text-xl font-bold text-[#0F4C81]">
                Book Your Holidayz
              </h2>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <div className="overflow-y-auto p-4">
              {navigation.map((item) => (
                <div key={item.label} className="border-b py-2">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleSection(item.label)}
                        className="flex w-full items-center justify-between py-3 font-medium"
                      >
                        {item.label}

                        <ChevronDown
                          size={18}
                          className={`transition ${
                            expanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {expanded === item.label && (
                        <div className="ml-4 space-y-2 pb-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="block rounded-lg px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-[#0F4C81]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href ?? "#"}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-6 space-y-3">
                <a
                  href="tel:+918890414339"
                  className="block rounded-xl border border-[#0F4C81] px-4 py-3 text-center font-semibold text-[#0F4C81]"
                >
                  📞 Call Now
                </a>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl bg-[#0F4C81] px-4 py-3 text-center font-semibold text-white hover:bg-[#0b3a63]"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
