import { packages } from "@/data/packages";
import { notFound } from "next/navigation";

export default async function PackagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const holidayPackage = packages.find(
    (item) => item.slug === slug
  );


  if (!holidayPackage) {
    notFound();
  }


  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-blue-900 px-6 py-32 text-white">

        <div className="mx-auto max-w-7xl">

          <h1 className="text-5xl font-bold">
            {holidayPackage.title}
          </h1>

          <p className="mt-4 text-xl">
            {holidayPackage.destination}
          </p>

        </div>

      </section>


      {/* Package Details */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2">


          <div>

            <h2 className="text-3xl font-bold">
              Package Overview
            </h2>

            <p className="mt-4 text-gray-600">
              {holidayPackage.description}
            </p>


            <h3 className="mt-8 text-2xl font-bold">
              Duration
            </h3>

            <p className="mt-2 text-gray-600">
              {holidayPackage.duration}
            </p>


          </div>


          <div className="rounded-2xl bg-blue-50 p-8">

            <h2 className="text-3xl font-bold text-blue-700">
              {holidayPackage.price}
            </h2>


            <h3 className="mt-8 text-xl font-bold">
              Package Includes
            </h3>


            <ul className="mt-4 space-y-3">

              {holidayPackage.inclusions.map((item) => (
                <li key={item}>
                  ✓ {item}
                </li>
              ))}

            </ul>


            <button className="mt-8 w-full rounded-full bg-blue-600 py-4 text-white">
              Enquire Now
            </button>


          </div>


        </div>

      </section>


    </main>
  );
}
