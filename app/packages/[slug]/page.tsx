import { packages } from "@/data/packages";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function PackagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) notFound();

  return (
    <main>
      <section className="bg-gray-100 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold">{pkg.title}</h1>
          <p className="mt-2 text-lg text-gray-600">{pkg.destination} • {pkg.duration}</p>

          <p className="mt-4 text-2xl font-semibold">{pkg.price}</p>

          <p className="mt-6 text-gray-700">{pkg.description}</p>

          <h2 className="mt-8 text-2xl font-semibold">What's included</h2>
          <ul className="mt-4 list-disc pl-6">
            {pkg.inclusions.map((item) => (
              <li key={item} className="mt-2 text-gray-700">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-4">
            <button className="rounded bg-blue-600 text-white px-6 py-3">Book Now</button>
            <Link href={`/destinations/${pkg.destination.toLowerCase()}`} className="text-blue-600 underline self-center">
              View destination
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
