import { destinations } from "@/data/destinations";
import { notFound } from "next/navigation";

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const destination = destinations.find(
    (item) => item.slug === (await params).slug
  );


  if (!destination) {
    notFound();
  }


  return (
    <main>

      <section className="bg-blue-900 px-6 py-32 text-white">

        <div className="mx-auto max-w-7xl">

          <h1 className="text-6xl font-bold">
            {destination.name}
          </h1>

          <p className="mt-4 text-xl">
            {destination.country}
          </p>

        </div>

      </section>


      <section className="mx-auto max-w-7xl px-6 py-16">

        <h2 className="text-3xl font-bold">
          About {destination.name}
        </h2>

        <p className="mt-4 text-gray-600">
          {destination.description}
        </p>


        <h2 className="mt-12 text-3xl font-bold">
          Top Experiences
        </h2>

        <ul className="mt-5 list-disc pl-6">
          {destination.attractions.map((item) => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>


        <h2 className="mt-12 text-3xl font-bold">
          Best Time To Visit
        </h2>

        <p className="mt-4 text-gray-600">
          {destination.bestTime}
        </p>


        <button className="mt-10 rounded-full bg-blue-600 px-8 py-4 text-white">
          Plan My Holiday
        </button>


      </section>

    </main>
  );
}
