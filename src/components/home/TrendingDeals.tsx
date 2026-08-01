const deals = [
  {
    destination: "Dubai",
    price: "From ₹34,999",
    duration: "5D / 4N",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
  },
  {
    destination: "Thailand",
    price: "From ₹29,999",
    duration: "6D / 5N",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
  },
  {
    destination: "Bali",
    price: "From ₹42,999",
    duration: "6D / 5N",
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&q=80",
  },
];

export default function TrendingDeals() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold">
            🔥 Trending Deals
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Limited-time offers on our most popular holiday destinations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {deals.map((deal) => (
            <div
              key={deal.destination}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={deal.image}
                alt={deal.destination}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                  Limited Offer
                </span>

                <h3 className="mt-4 text-3xl font-bold">
                  {deal.destination}
                </h3>

                <p className="mt-2 text-gray-500">
                  {deal.duration}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-700">
                    {deal.price}
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