import Container from "@/components/shared/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F4C81] via-[#1D70B8] to-[#4DA8DA] text-white">
      <Container className="grid min-h-[90vh] items-center gap-16 py-20 lg:grid-cols-2">
        <HeroContent />
        <HeroImage />
      </Container>
    </section>
  );
}
