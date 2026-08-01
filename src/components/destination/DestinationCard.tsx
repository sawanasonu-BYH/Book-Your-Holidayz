import Image from "next/image";
import Link from "next/link";

type Destination = {
  slug: string;
  name: string;
  country?: string;
  image?: string;
  startingPrice?: string;
  rating?: number;
  reviews?: number;
  tags?: string[];
};

type Props = {
  destination: Destination;
};

export default function DestinationCard({ destination }: Props) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden">
        {destination.image ? (
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
            sizes="(min-width:1024px) 33vw,100vw"
          />
        ) : (
          <div className="h-full w-full bg-gray-200" />
        )}

        <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow">
          {destination.rating ?? "4.8"} ★
        </div>

        <div className="absolute bottom-4 right-4 rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white">
          {destination.startingPrice ?? "Contact Us"}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">
          {destination.name}
        </h3>

        <p className="mt-1 text-gray-500">
          {destination.country}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {destination.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {destination.reviews ?? 250}+ Happy Travellers
          </span>

          <span className="rounded-xl bg-blue-700 px-5 py-2 font-semibold text-white transition hover:bg-blue-800">
            View Package
          </span>
        </div>
      </div>
    </Link>
  );
}
