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
      className="group relative block overflow-hidden rounded-2xl"
    >
      <div className="relative h-48 w-full">
        {destination.image ? (
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, 50vw"
          />
        ) : (
          <div className="h-full w-full bg-gray-200" />
        )}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{destination.name}</h3>
          {destination.country && (
            <p className="text-sm text-gray-500">{destination.country}</p>
          )}
        </div>

        <div className="text-right">
          {destination.startingPrice && (
            <div className="text-sm text-gray-700">From</div>
          )}
          <div className="text-lg font-bold text-gray-900">
            {destination.startingPrice}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>⭐ {destination.rating ?? "-"}</span>
          <span>·</span>
          <span>{destination.reviews ?? 0} reviews</span>
        </div>

        <div className="flex gap-2">
          {destination.tags?.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
