import Link from "next/link";
import { navigation } from "./NavigationData";

export default function DesktopMenu() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navigation.map((item) => (
        <div key={item.label} className="group relative">
          <Link
            href={item.href ?? "#"}
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            {item.label}
          </Link>

          {item.children && (
            <div className="absolute left-0 top-full mt-3 hidden min-w-[220px] rounded-3xl border border-gray-200 bg-white p-4 shadow-xl group-hover:block">
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  className="block rounded-2xl px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
