export default function VisaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-bold">
            Visa Assistance
          </h1>

          <p className="mt-4 text-xl">
            Fast and hassle-free visa services with Book Your Holidayz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">

          {[
            "Dubai Visa",
            "Singapore Visa",
            "Thailand Visa",
            "Japan Visa",
            "Schengen Visa",
            "UK Visa",
          ].map((visa) => (
            <div
              key={visa}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold">{visa}</h2>

              <p className="mt-4 text-gray-600">
                Professional visa documentation and application support.
              </p>

              <button className="mt-6 rounded-full bg-blue-700 px-6 py-3 text-white">
                Apply Now
              </button>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}