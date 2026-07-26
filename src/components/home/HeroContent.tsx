import Button from "@/components/shared/Button";
import HeroSearch from "./HeroSearch";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div>
      <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
        🌍 Trusted Travel Partner
      </span>

      <h1 className="mt-8 text-5xl font-bold leading-tight lg:text-7xl">
        Plan Your
        <br />
        Perfect Getaway
      </h1>

      <p className="mt-6 max-w-xl text-lg text-blue-100">
        Discover unforgettable holidays, flights, hotels and visa
        assistance—all in one place.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/packages">Explore Packages</Button>

        <Button href="/contact" variant="secondary">
          Get a Quote
        </Button>
      </div>

      <HeroSearch />

      <HeroStats />
    </div>
  );
}
