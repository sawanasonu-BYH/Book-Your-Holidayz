const services = [
  {
    title: "International Holidays",
    icon: "🌍",
    description: "Customized holiday packages across the world.",
  },
  {
    title: "Domestic Tours",
    icon: "🏔️",
    description: "Explore India's most beautiful destinations.",
  },
  {
    title: "Flight Bookings",
    icon: "✈️",
    description: "Best airfare deals for domestic and international flights.",
  },
  {
    title: "Hotel Reservations",
    icon: "🏨",
    description: "Luxury, budget and boutique hotels worldwide.",
  },
  {
    title: "Visa Assistance",
    icon: "📄",
    description: "Fast and reliable visa documentation support.",
  },
  {
    title: "Travel Insurance",
    icon: "🛡️",
    description: "Travel confidently with comprehensive insurance.",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-5xl font-bold">
            Our Travel Services
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Everything you need for a hassle-free holiday.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}