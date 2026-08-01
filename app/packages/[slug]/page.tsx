import Inclusions from "@/components/package/Inclusions";
import Exclusions from "@/components/package/Exclusions";
import Itinerary from "@/components/package/Itinerary";
import BookingCard from "@/components/package/BookingCard";
import Reviews from "@/components/package/Reviews";
import { packages } from "@/data/packages";
import Image from "next/image";
import Link from "next/link";

export default function PackagesPage() {
  return (
    <main className="bg-gray-50">

      <section className="mx-auto max-w-7xl px-6 py-20">

  <div className="grid gap-12 lg:grid-cols-3">

    <div className="lg:col-span-2">

      {/* Overview */}

      {/* Itinerary */}

      {/* Inclusions */}

      {/* Exclusions */}
      
      {/*Reviews */}

    </div>

    <BookingCard />

  </div>

</section>