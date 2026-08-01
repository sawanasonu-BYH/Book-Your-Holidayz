const inclusions = [
  "Return Flights (if applicable)",
  "Hotel Accommodation",
  "Daily Breakfast",
  "Airport Transfers",
  "Sightseeing Tours",
  "English Speaking Guide",
  "All Applicable Taxes",
];

export default function Inclusions() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">
        Package Inclusions
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {inclusions.map((item) => (
          <div
            key={item}
            className="rounded-2xl border bg-green-50 p-5"
          >
            ✅ {item}
          </div>
        ))}
      </div>
    </section>
  );
}