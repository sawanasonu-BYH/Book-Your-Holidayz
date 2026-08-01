"use client";

import { useState } from "react";

const initialEnquiries = [
  {
    id: 1,
    customer: "Rahul Sharma",
    destination: "Dubai",
    phone: "9876543210",
    travellers: 2,
    status: "NEW",
  },
  {
    id: 2,
    customer: "Priya Patel",
    destination: "Bali",
    phone: "9988776655",
    travellers: 4,
    status: "QUOTED",
  },
  {
    id: 3,
    customer: "Amit Verma",
    destination: "Maldives",
    phone: "9123456789",
    travellers: 2,
    status: "BOOKED",
  },
];

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState(initialEnquiries);

  function updateStatus(id: number, status: string) {
    setEnquiries((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  }

  return (
    <div>

      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          Customer Enquiries
        </h1>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-5 text-left">Customer</th>
              <th className="p-5 text-left">Destination</th>
              <th className="p-5 text-left">Phone</th>
              <th className="p-5 text-left">Travellers</th>
              <th className="p-5 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {enquiries.map((item) => (
              <tr key={item.id} className="border-t">

                <td className="p-5 font-semibold">
                  {item.customer}
                </td>

                <td className="p-5">
                  {item.destination}
                </td>

                <td className="p-5">
                  {item.phone}
                </td>

                <td className="p-5">
                  {item.travellers}
                </td>

                <td className="p-5">
                  <select
                    value={item.status}
                    onChange={(e) =>
                      updateStatus(item.id, e.target.value)
                    }
                    className="rounded-lg border p-2"
                  >
                    <option value="NEW">New</option>
                    <option value="CONTACTED">Contacted</option>
                    <option value="QUOTED">Quoted</option>
                    <option value="BOOKED">Booked</option>
                  </select>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}