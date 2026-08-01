export default function WhyChooseUs() {
  const features = [
    {
      title: "Best Price Guarantee",
      description: "Exclusive deals and unbeatable holiday prices.",
      icon: "💰",
    },
    {
      title: "24×7 Travel Support",
      description: "We're always available before, during and after your trip.",
      icon: "📞",
    },
    {
      title: "Trusted Travel Experts",
      description: "Years of experience creating unforgettable holidays.",
      icon: "✈️",
    },
    {
      title: "Worldwide Destinations",
      description: "From domestic escapes to luxury international vacations.",
      icon: "🌍",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">
            Why Choose Book Your Holidayz
          </h2>

          <p className="mt-5 text-lg text-gray-500">
            Thousands of travellers trust us for memorable holidays.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="mt-6 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          <div>
            <h3 className="text-5xl font-bold text-blue-700">10K+</h3>
            <p className="mt-2 text-gray-600">Happy Travellers</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-700">50+</h3>
            <p className="mt-2 text-gray-600">Destinations</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-700">500+</h3>
            <p className="mt-2 text-gray-600">Hotel Partners</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-700">4.9★</h3>
            <p className="mt-2 text-gray-600">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}