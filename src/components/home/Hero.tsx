export default function Hero() {
  return (
    <section className="bg-blue-900 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-5xl font-bold">
          Plan Your Perfect Getaway
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-blue-100">
          Discover amazing holiday packages, flights, hotels,
          visa assistance and unforgettable travel experiences
          with Book Your Holidayz.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900">
            Explore Packages
          </button>

          <button className="rounded-lg border border-white px-6 py-3 font-semibold">
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
