export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-sky-500 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-36">
        <div className="max-w-3xl">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            ✈️ Trusted Travel Partner
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
            Plan Your Perfect Getaway
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Discover unforgettable holidays with Book Your Holidayz.
            Flights, Hotels, Visa Assistance, Cruises, Honeymoon Packages,
            Family Vacations and Corporate Travel — all in one place.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-white px-8 py-4 font-bold text-blue-900 shadow-lg hover:scale-105 transition">
              Explore Packages
            </button>

            <button className="rounded-xl border-2 border-white px-8 py-4 font-bold hover:bg-white hover:text-blue-900 transition">
              Get Free Quote
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm">
            <div>🌍 100+ Destinations</div>
            <div>✈️ Flight Bookings</div>
            <div>🏨 Hotels Worldwide</div>
            <div>🛂 Visa Assistance</div>
          </div>
        </div>
      </div>
    </section>
  );
}
