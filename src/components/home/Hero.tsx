import Container from "@/components/shared/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F4C81] via-[#1565A9] to-[#4DA8DA]">
      <Container className="grid min-h-screen items-center gap-16 pt-28 pb-16 lg:grid-cols-2">
        <HeroContent />
        <HeroImage />
      </Container>
    </section>
  );
}
