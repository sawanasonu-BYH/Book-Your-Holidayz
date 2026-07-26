"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navigation } from "./NavigationData";

export default function DesktopMenu() {
  return (
    <nav className="hidden lg:flex items-center gap-8">

      {navigation.map((item) => (

        <div key={item.label} className="relative group">

          {item.children ? (

            <>
              <button className="flex items-center gap-1 font-medium text-gray-700 transition hover:text-[#0F4C81]">

                {item.label}

                <ChevronDown
                  size={18}
                  className="transition group-hover:rotate-180"
                />

              </button>

              <div className="invisible absolute left-0 top-full mt-4 w-64 rounded-2xl border bg-white p-3 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">

                {item.children.map((child) => (

                  <Link
                    key={child.label}
                    href={child.href}
                    className="block rounded-xl px-4 py-3 text-gray-700 transition hover:bg-blue-50 hover:text-[#0F4C81]"
                  >
                    {child.label}
                  </Link>

                ))}

              </div>
            </>

          ) : (

            <Link
              href={item.href ?? "#"}
              className="font-medium text-gray-700 transition hover:text-[#0F4C81]"
            >
              {item.label}
            </Link>

          )}

        </div>

      ))}

    </nav>
  );
}
