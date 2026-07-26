import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold">Book Your Holidayz</h2>
          <p className="mt-4 text-gray-400">Book, Explore and Repeat.</p>
        </div>

        <div>
          <h3 className="font-semibold">Services</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Holiday Packages</li>
            <li>Flights</li>
            <li>Hotels</li>
            <li>Visa Assistance</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Destinations</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>Dubai</li>
            <li>Maldives</li>
            <li>Bali</li>
            <li>Thailand</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>
          <p className="mt-4 text-gray-400">8890414339</p>
          <p className="text-gray-400">sawan_panchal@yahoo.com</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Book Your Holidayz. All rights reserved.
      </div>
    </footer>
  );
}
