import React from "react";

const services = [
  {
    title: "Holiday Packages",
    description:
      "Domestic and international holiday packages designed for families, couples and groups.",
    icon: "🌴",
  },
  {
    title: "Flight Tickets",
    description:
      "Affordable domestic and international flight bookings with expert assistance.",
    icon: "✈️",
  },
  {
    title: "Hotel Bookings",
    description:
      "Handpicked hotels and resorts offering comfort, quality and great value.",
    icon: "🏨",
  },
  {
    title: "Visa Assistance",
    description:
      "Complete visa support and guidance for your international travel plans.",
    icon: "🛂",
  },
  {
    title: "Train Bookings",
    description:
      "Convenient railway reservations for smooth domestic journeys.",
    icon: "🚆",
  },
  {
    title: "Travel Insurance",
    description:
      "Travel protection solutions for a worry-free holiday experience.",
    icon: "🛡️",
  },
];

export default function Services() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Our Travel Services</h2>
          <p className="mt-4 text-gray-600">
            Everything you need for a smooth and memorable journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
