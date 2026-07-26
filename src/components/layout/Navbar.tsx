import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <div className="text-2xl font-bold text-blue-700">Book Your Holidayz</div>

        <nav className="hidden gap-8 md:flex">
          <Link href="#" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="#" className="hover:text-blue-600">
            Holidays
          </Link>

          <Link href="#" className="hover:text-blue-600">
            Destinations
          </Link>

          <Link href="#" className="hover:text-blue-600">
            Flights
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/signin" className="rounded-md border px-3 py-1 text-sm hover:bg-black/5">
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
