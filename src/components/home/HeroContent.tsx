import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="text-white">
      <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
        🌍 Trusted Travel Partner
      </span>

      <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-7xl">
        Plan Your
        <br />
        Perfect Getaway
      </h1>

      <p className="mt-6 max-w-xl text-lg text-blue-100">
        Discover unforgettable holidays, international flights,
        premium hotels, visa assistance, and personalized travel
        experiences with Book Your Holidayz.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/packages"
          className="rounded-full bg-white px-8 py-4 font-semibold text-[#0F4C81] transition hover:scale-105"
        >
          Explore Packages
        </Link>

        <Link
          href="/contact"
          className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0F4C81]"
        >
          Get Free Quote
        </Link>
      </div>
    </div>
  );
}
