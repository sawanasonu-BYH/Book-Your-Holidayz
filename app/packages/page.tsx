import Link from "next/link";

export default function PackagesPage() {
  return (
    <main className="p-8">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            Holiday Packages
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all your holiday packages.
          </p>

        </div>

        <Link
          href="/admin/packages/new"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          + Add Package
        </Link>

      </div>

      <div className="rounded-xl border bg-white p-10 shadow">

        <h2 className="text-xl font-semibold mb-6">
          Packages
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">Package</th>

              <th className="text-left">Destination</th>

              <th className="text-left">Duration</th>

              <th className="text-left">Price</th>

              <th className="text-left">Status</th>

              <th className="text-left">Action</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="py-6 text-gray-500">
                No packages found.
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </main>
  );
}