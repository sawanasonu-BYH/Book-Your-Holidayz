import Button from "@/components/shared/Button";

export default function HeroContent() {
  return (
    <div>
      <h1 className="text-5xl font-extrabold">Plan your perfect getaway</h1>
      <p className="mt-4 text-lg opacity-90">
        Search flights, hotels and complete holiday packages in one place.
      </p>
      <div className="mt-8">
        <Button href="#" variant="primary">Get started</Button>
      </div>
    </div>
  );
}
