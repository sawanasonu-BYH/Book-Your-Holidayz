import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import PopularPackages from "@/components/home/PopularPackages";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Services from "@/components/home/Services";
import EnquirySection from "@/components/home/EnquirySection";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import ContactSection from "@/components/home/ContactSection";
import App from "next/app";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Existing homepage sections */}
      <FeaturedDestinations />
      <PopularPackages />
      <WhyChooseUs />
      <Services />
      <EnquirySection />
      <Testimonials />
      <BlogPreview />
      <ContactSection />
      <Footer />
    </>
  );
}

