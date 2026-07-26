import React from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "Amazing experience! The team helped us plan our Dubai holiday perfectly. Everything was smooth from flights to hotels.",
  },
  {
    name: "Priya Mehta",
    review:
      "Book Your Holidayz made our Maldives trip memorable. Great support and excellent service throughout the journey.",
  },
  {
    name: "Amit Patel",
    review:
      "Professional travel assistance with quick responses. Highly recommended for family vacations.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">What Our Travellers Say</h2>
          <p className="mt-4 text-gray-600">
            Trusted by travellers for memorable holiday experiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl bg-white p-8 shadow-md"
            >
              <div className="text-4xl text-blue-600">“</div>
              <p className="mt-4 text-gray-600">{testimonial.review}</p>
              <h3 className="mt-6 font-bold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
