"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DesktopMenu from "./Navbar/DesktopMenu";
import MobileMenu from "./Navbar/MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F4C81] text-xl font-bold text-white">
            BY
          </div>

          <div className="hidden sm:block">
            <h2 className="text-lg font-bold text-[#0F4C81]">
              Book Your Holidayz
            </h2>

            <p className="text-xs text-gray-500">Book • Explore • Repeat</p>
          </div>
        </Link>

        <DesktopMenu />

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+918890414339"
            className="rounded-full border border-[#0F4C81] px-4 py-2 text-sm font-semibold text-[#0F4C81] transition hover:bg-[#0F4C81] hover:text-white"
          >
            📞 8890414339
          </a>

          <Link
            href="/contact"
            className="rounded-full bg-[#0F4C81] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0b3a63]"
          >
            Get a Quote
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
