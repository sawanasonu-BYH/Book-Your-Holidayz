import React from "react";

const destinations = [
  {
    name: "Dubai",
    description: "Luxury experiences, desert adventures and iconic attractions.",
  },
  {
    name: "Maldives",
    description: "Relax on pristine beaches with beautiful island resorts.",
  },
  {
    name: "Bali",
    description: "Tropical escapes, culture and unforgettable experiences.",
  },
  {
    name: "Thailand",
    description: "Beaches, nightlife and amazing holiday experiences.",
  },
  {
    name: "Singapore",
    description: "Modern city experiences with family-friendly attractions.",
  },
  {
    name: "Europe",
    description: "Explore history, culture and breathtaking landscapes.",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="bg-gray-50 px-6 py-20">

      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Explore Top Destinations</h2>

          <p className="mt-4 text-gray-600">Discover amazing places curated by our travel experts.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1"
            >

              <h3 className="text-2xl font-semibold text-blue-700">{destination.name}</h3>

              <p className="mt-3 text-gray-600">{destination.description}</p>

              <button className="mt-6 text-blue-600 font-medium">Explore More →</button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
