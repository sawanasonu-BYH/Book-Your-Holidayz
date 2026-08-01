import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold">
              Book Your Holidayz
            </h2>

            <p className="mt-4 text-gray-300 leading-7">
              Your trusted travel partner for unforgettable domestic and
              international holidays.
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Top Destinations
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Dubai</li>
              <li>Bali</li>
              <li>Maldives</li>
              <li>Thailand</li>
              <li>Singapore</li>
              <li>Vietnam</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Our Services
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Holiday Packages</li>
              <li>Flight Booking</li>
              <li>Hotel Booking</li>
              <li>Visa Assistance</li>
              <li>Travel Insurance</li>
              <li>Corporate Travel</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Contact Us
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>📞 +91 8890414339</li>
              <li>✉️ sawan_panchal@yahoo.com</li>
              <li>📍 Dungarpur, Rajasthan</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Book Your Holidayz. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}