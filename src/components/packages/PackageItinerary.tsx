import React from "react";

type ItineraryItem = {
  day: string;
  title: string;
  description: string;
};

export default function PackageItinerary({
  itinerary,
  className,
}: {
  itinerary: ItineraryItem[];
  className?: string;
}) {
  if (!itinerary || itinerary.length === 0) return null;

  return (
    <aside className={className}>
      <h3 className="text-2xl font-semibold">Itinerary</h3>
      <ol className="mt-4 space-y-6">
        {itinerary.map((item) => (
          <li key={item.day} className="flex gap-4">
            <div className="min-w-[96px] text-sm font-medium text-blue-700">{item.day}</div>
            <div>
              <div className="text-lg font-semibold">{item.title}</div>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </aside>
  );
}
