const packages = [
  {
    name: "Dubai Luxury Escape",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    duration: "5 Days / 4 Nights",
    price: "₹34,999",
  },
  {
    name: "Bali Honeymoon",
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&q=80",
    duration: "6 Days / 5 Nights",
    price: "₹42,999",
  },
  {
    name: "Maldives Water Villa",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80",
    duration: "5 Days / 4 Nights",
    price: "₹54,999",
  },
];

export default function PopularPackages() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold">
            Popular Holiday Packages
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Hand-picked packages loved by thousands of travellers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={pkg.image}
                alt={pkg.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {pkg.name}
                </h3>

                <p className="mt-2 text-gray-500">
                  {pkg.duration}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-700">
                    {pkg.price}
                  </span>

                  <button className="rounded-full bg-blue-700 px-5 py-3 text-white hover:bg-blue-800">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}