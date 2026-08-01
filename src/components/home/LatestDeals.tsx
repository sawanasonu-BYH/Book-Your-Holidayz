import Image from "next/image";

const deals = [
  {
    destination: "Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    price: "Starting ₹34,999",
  },
  {
    destination: "Andaman",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    price: "Starting ₹37,000",
  },
  {
    destination: "Maldives",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80",
    price: "Starting ₹54,999",
  },
];

export default function LatestDeals() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold">
            Latest Travel Deals
          </h2>

          <p className="mt-4 text-gray-600">
            Limited-time offers curated by Book Your Holidayz.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {deals.map((deal) => (
            <div
              key={deal.destination}
              className="overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              <div className="relative h-64">
                <Image
                  src={deal.image}
                  alt={deal.destination}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {deal.destination}
                </h3>

                <p className="mt-3 text-blue-700 font-bold">
                  {deal.price}
                </p>

                <button className="mt-6 w-full rounded-xl bg-blue-700 py-3 text-white hover:bg-blue-800">
                  View Offer
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}