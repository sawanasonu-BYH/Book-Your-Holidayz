import React from "react";

const packages = [
  {
    title: "Dubai Luxury Escape",
    duration: "5 Nights / 6 Days",
    price: "Starting from ₹49,999",
    details: "Hotel | Transfers | Sightseeing | Breakfast",
  },
  {
    title: "Maldives Island Retreat",
    duration: "4 Nights / 5 Days",
    price: "Starting from ₹69,999",
    details: "Resort Stay | Transfers | Breakfast | Beach Experience",
  },
  {
    title: "Thailand Holiday Package",
    duration: "5 Nights / 6 Days",
    price: "Starting from ₹39,999",
    details: "Hotel | Tours | Transfers | Breakfast",
  },
  {
    title: "Bali Paradise Tour",
    duration: "6 Nights / 7 Days",
    price: "Starting from ₹55,999",
    details: "Villa Stay | Sightseeing | Transfers",
  },
];

export default function PopularPackages() {
  return (
    <section className="px-6 py-20">

      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Popular Holiday Packages</h2>

          <p className="mt-4 text-gray-600">Handpicked holidays designed for unforgettable experiences.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2"
            >

              <h3 className="text-xl font-bold">{pkg.title}</h3>

              <p className="mt-3 text-gray-600">{pkg.duration}</p>

              <p className="mt-4 text-2xl font-bold text-blue-700">{pkg.price}</p>

              <p className="mt-4 text-sm text-gray-600">{pkg.details}</p>

              <button className="mt-6 w-full rounded-full bg-blue-600 py-3 text-white hover:bg-blue-700">
                Enquire Now
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
