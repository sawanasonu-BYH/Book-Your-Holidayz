import React from "react";

const reasons = [
  {
    title: "Expert Travel Planning",
    description:
      "Our travel specialists create personalized holidays designed around your needs.",
  },
  {
    title: "Best Holiday Deals",
    description:
      "Get competitive prices on flights, hotels and complete holiday packages.",
  },
  {
    title: "End-to-End Support",
    description:
      "From booking to your return journey, we support you throughout your trip.",
  },
  {
    title: "Trusted Travel Partner",
    description:
      "A reliable travel partner for domestic and international journeys.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-blue-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Why Choose Book Your Holidayz?</h2>
          <p className="mt-4 text-gray-600">
            Creating memorable journeys with trusted travel solutions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl bg-white p-8 shadow-md"
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {reason.title}
              </h3>
              <p className="mt-4 text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
