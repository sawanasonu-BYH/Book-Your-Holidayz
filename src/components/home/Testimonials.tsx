const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Jaipur",
    review:
      "Book Your Holidayz planned our Dubai trip perfectly. Everything from flights to hotels was seamless.",
  },
  {
    name: "Priya Patel",
    location: "Ahmedabad",
    review:
      "Amazing Bali honeymoon package with excellent support throughout the journey. Highly recommended!",
  },
  {
    name: "Amit Verma",
    location: "Delhi",
    review:
      "Best prices, professional service and quick responses. Will definitely book again.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-5xl font-bold">
            What Our Travellers Say
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Trusted by happy travellers across India.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl bg-gray-50 p-8 shadow-lg"
            >
              <div className="mb-4 text-yellow-500 text-xl">
                ★★★★★
              </div>

              <p className="leading-7 text-gray-600">
                "{testimonial.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold">
                  {testimonial.name}
                </h3>

                <p className="text-gray-500">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}