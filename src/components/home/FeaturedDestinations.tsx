import React from "react";
import Image from "next/image";

const destinations = [
  { id: 1, name: "Bali, Indonesia", image: "/globe.svg" },
  { id: 2, name: "Paris, France", image: "/file.svg" },
  { id: 3, name: "Kyoto, Japan", image: "/window.svg" },
  { id: 4, name: "Cape Town, South Africa", image: "/next.svg" },
];

export default function FeaturedDestinations() {
  return (
    <section className="mt-12 px-6">
      <h2 className="text-2xl font-semibold">Featured destinations</h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((d) => (
          <article key={d.id} className="rounded-lg border p-4 text-center">
            <div className="mx-auto h-24 w-24">
              <Image src={d.image} alt={d.name} width={96} height={96} />
            </div>
            <h3 className="mt-3 font-medium">{d.name}</h3>
            <p className="mt-2 text-sm text-zinc-600">From $499</p>
            <a
              href="#"
              className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-white"
            >
              Explore
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
