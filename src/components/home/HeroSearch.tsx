export default function HeroSearch() {
  return (
    <div className="mt-10 rounded-3xl bg-white p-6 shadow-2xl">

      <div className="grid gap-4 md:grid-cols-4">

        <input
          placeholder="Destination"
          className="rounded-xl border p-3 text-gray-900"
        />

        <input
          placeholder="Travel Month"
          className="rounded-xl border p-3 text-gray-900"
        />

        <input
          placeholder="Travellers"
          className="rounded-xl border p-3 text-gray-900"
        />

        <button className="rounded-xl bg-[#0F4C81] p-3 text-white hover:bg-[#0b3a63]">
          Search
        </button>

      </div>

    </div>
  );
}
