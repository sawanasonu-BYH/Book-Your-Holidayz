import React from "react";

const packages = [
  { id: 1, title: "Dubai Luxury Escape", price: "$1,299" },
  { id: 2, title: "Maldives Romantic Retreat", price: "$1,899" },
  { id: 3, title: "Bali Adventure Week", price: "$999" },
];

export default function PopularPackages() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">Popular Packages</h2>
          <p className="mt-3 text-zinc-600">Hand-picked holiday packages for every traveler.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <article key={p.id} className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-4 text-lg text-blue-600">{p.price}</p>
              <p className="mt-3 text-sm text-zinc-600">Includes flights, 4-star hotel and breakfast.</p>
              <div className="mt-6">
                <a className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white" href="#">
                  Book now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
