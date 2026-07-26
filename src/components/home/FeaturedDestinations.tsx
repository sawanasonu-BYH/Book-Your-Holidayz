import React from "react";
import { destinations } from "@/data/destinations";
import DestinationCard from "@/components/destination/DestinationCard";
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
            <DestinationCard
              key={destination.slug}
              destination={destination}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
