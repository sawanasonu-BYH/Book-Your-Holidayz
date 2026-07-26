import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold">
          Book Your Holidayz
        </Link>

        <div className="hidden gap-4 sm:flex">
          <Link href="/" className="text-sm hover:underline">
            Home
          </Link>
          <Link href="/bookings" className="text-sm hover:underline">
            Bookings
          </Link>
          <Link href="/about" className="text-sm hover:underline">
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/signin"
            className="rounded-md border px-3 py-1 text-sm hover:bg-black/5"
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}
