import React from "react";

export default function ContactSection() {
  return (
    <section className="bg-blue-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Let's Plan Your Next Journey</h2>
          <p className="mt-4 text-gray-600">
            Our travel experts are ready to help you create your dream holiday.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold">📞 Call Us</h3>
            <p className="mt-3 text-gray-600">8890414339</p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold">✉️ Email Us</h3>
            <p className="mt-3 text-gray-600">sawan_panchal@yahoo.com</p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold">📍 Visit Us</h3>
            <p className="mt-3 text-gray-600">Dungarpur, Rajasthan, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}
