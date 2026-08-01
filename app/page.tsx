export default function AdminDashboard() {
  return (
    <div>

      <h1 className="mb-8 text-4xl font-bold">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 shadow">
          <p className="text-gray-500">Packages</p>
          <h2 className="mt-3 text-5xl font-bold">0</h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <p className="text-gray-500">Destinations</p>
          <h2 className="mt-3 text-5xl font-bold">0</h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <p className="text-gray-500">Enquiries</p>
          <h2 className="mt-3 text-5xl font-bold">0</h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <p className="text-gray-500">Bookings</p>
          <h2 className="mt-3 text-5xl font-bold">0</h2>
        </div>

      </div>

      <div className="mt-10 rounded-2xl bg-white p-8 shadow">

        <h2 className="mb-6 text-2xl font-bold">
          Recent Activity
        </h2>

        <p className="text-gray-500">
          No recent activity.
        </p>

      </div>

    </div>
  );
}