import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedDestinations />
    </>
  );
}
