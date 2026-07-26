type ItineraryItem = {
  day: string;
  title: string;
  description: string;
};

export default function PackageItinerary({
  itinerary,
}: {
  itinerary: ItineraryItem[];
}) {
  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold">
        Day Wise Itinerary
      </h2>


      <div className="mt-8 space-y-6">

        {itinerary.map((item) => (

          <div
            key={item.day}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >

            <div className="text-blue-600 font-bold">
              {item.day}
            </div>

            <h3 className="mt-2 text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-600">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
