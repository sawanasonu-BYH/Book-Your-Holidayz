import React from "react";

export default function PackageHighlights({
  highlights,
}: {
  highlights: string[];
}) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="mt-8">
      <h3 className="text-2xl font-semibold">Highlights</h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {highlights.map((h) => (
          <li key={h} className="flex items-start gap-3">
            <span className="text-blue-600">✓</span>
            <span className="text-gray-700">{h}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
