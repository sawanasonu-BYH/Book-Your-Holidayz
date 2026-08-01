"use client";

import { useState } from "react";

export default function HolidayEnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    date: "",
    adults: "",
    children: "",
    budget: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Enquiry submitted successfully!");
    console.log(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl"
    >
      <h2 className="mb-8 text-4xl font-bold">
        Plan Your Holiday
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="rounded-xl border p-4"
        />

        <input
          name="phone"
          placeholder="Mobile Number"
          onChange={handleChange}
          className="rounded-xl border p-4"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="rounded-xl border p-4"
        />

        <input
          name="destination"
          placeholder="Destination"
          onChange={handleChange}
          className="rounded-xl border p-4"
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="rounded-xl border p-4"
        />

        <input
          name="budget"
          placeholder="Budget"
          onChange={handleChange}
          className="rounded-xl border p-4"
        />

      </div>

      <textarea
        name="message"
        rows={5}
        placeholder="Tell us about your trip..."
        onChange={handleChange}
        className="mt-5 w-full rounded-xl border p-4"
      />

      <button
        className="mt-8 w-full rounded-xl bg-blue-700 py-4 text-white font-bold hover:bg-blue-800"
      >
        Submit Enquiry
      </button>
    </form>
  );
}