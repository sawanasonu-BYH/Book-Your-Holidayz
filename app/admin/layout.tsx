import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">

      <aside className="w-72 bg-blue-900 p-6 text-white">

        <h2 className="mb-8 text-2xl font-bold">
          Book Your Holidayz
        </h2>

        <nav className="space-y-4">

          <Link href="/admin">Dashboard</Link>

          <Link href="/admin/packages">Packages</Link>

          <Link href="/admin/destinations">Destinations</Link>

          <Link href="/admin/enquiries">Enquiries</Link>

          <Link href="/admin/bookings">Bookings</Link>

          <Link href="/admin/settings">Settings</Link>

        </nav>

      </aside>

      <main className="flex-1 p-10 bg-gray-100">
        {children}
      </main>

    </div>
  );
}