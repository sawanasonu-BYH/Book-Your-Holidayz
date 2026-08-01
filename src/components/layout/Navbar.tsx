"use client";

import Link from "next/link";

const menu = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Packages", href: "/packages" },
  { name: "Visa", href: "/visa" },
  { name: "Flights", href: "/flights" },
  { name: "Hotels", href: "/hotels" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-md backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          Book Your Holidayz
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 transition hover:text-blue-700"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/enquiry"
          className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800"
        >
          Get Free Quote
        </Link>
      </div>
    </header>
  );
}