import React from "react";

export default function EnquirySection() {
  return (
    <section className="bg-blue-700 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold">Plan Your Perfect Getaway</h2>
          <p className="mt-4 text-blue-100">
            Tell us your travel plans and our experts will create a
            personalised holiday experience for you.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 text-gray-800 shadow-xl">
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-lg border p-4"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-lg border p-4"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-lg border p-4"
            />
            <input
              type="text"
              placeholder="Preferred Destination"
              className="rounded-lg border p-4"
            />
            <input
              type="text"
              placeholder="Travel Date"
              className="rounded-lg border p-4"
            />
            <input
              type="number"
              placeholder="Number of Travellers"
              className="rounded-lg border p-4"
            />
          </div>

          <button className="mt-8 w-full rounded-full bg-blue-600 py-4 text-lg font-semibold text-white hover:bg-blue-700">
            Submit Enquiry
          </button>
        </div>
      </div>
    </section>
  );
}
