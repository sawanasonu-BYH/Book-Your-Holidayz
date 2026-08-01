export default function EnquirySection() {
  return (
    <section className="bg-blue-700 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Let's Plan Your Dream Holiday
            </h2>

            <p className="mt-6 text-lg text-blue-100">
              Tell us where you'd like to travel and our travel experts will
              prepare the best itinerary with exclusive deals.
            </p>

            <div className="mt-10 space-y-3">
              <p>✅ Domestic & International Packages</p>
              <p>✅ Flights & Hotels</p>
              <p>✅ Visa Assistance</p>
              <p>✅ Honeymoon & Family Holidays</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 text-gray-900 shadow-2xl">
            <h3 className="mb-6 text-3xl font-bold">
              Get Free Quote
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border p-4"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-xl border p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border p-4"
              />

              <input
                type="text"
                placeholder="Destination"
                className="w-full rounded-xl border p-4"
              />

              <input
                type="date"
                className="w-full rounded-xl border p-4"
              />

              <textarea
                rows={4}
                placeholder="Tell us about your trip..."
                className="w-full rounded-xl border p-4"
              />

              <button
                className="w-full rounded-xl bg-blue-700 py-4 text-lg font-semibold text-white hover:bg-blue-800"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}