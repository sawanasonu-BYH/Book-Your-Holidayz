import Link from "next/link";

const cards = [
  {
    title: "Packages",
    value: "--",
    href: "/admin/packages",
    color: "bg-blue-600",
  },
  {
    title: "Destinations",
    value: "--",
    href: "/admin/destinations",
    color: "bg-green-600",
  },
  {
    title: "Enquiries",
    value: "--",
    href: "/admin/enquiries",
    color: "bg-orange-600",
  },
  {
    title: "Bookings",
    value: "--",
    href: "/admin/bookings",
    color: "bg-purple-600",
  },
];

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="mb-10 text-4xl font-bold">
        Book Your Holidayz Admin
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className={`${card.color} rounded-2xl p-8 text-white shadow-xl transition hover:scale-105`}
          >
            <p className="text-lg opacity-90">
              {card.title}
            </p>

            <h2 className="mt-4 text-5xl font-bold">
              {card.value}
            </h2>
          </Link>
        ))}

      </div>

      <div className="mt-12 rounded-2xl bg-white p-8 shadow-xl">

        <h2 className="mb-6 text-3xl font-bold">
          Quick Actions
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          <Link
            href="/admin/packages/new"
            className="rounded-xl bg-blue-700 p-5 text-center font-bold text-white"
          >
            Add Package
          </Link>

          <Link
            href="/admin/destinations"
            className="rounded-xl bg-green-700 p-5 text-center font-bold text-white"
          >
            Destinations
          </Link>

          <Link
            href="/admin/enquiries"
            className="rounded-xl bg-orange-700 p-5 text-center font-bold text-white"
          >
            View Enquiries
          </Link>

          <Link
            href="/admin/settings"
            className="rounded-xl bg-gray-800 p-5 text-center font-bold text-white"
          >
            Settings
          </Link>

        </div>

      </div>

    </main>
  );
}