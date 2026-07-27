import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">
      <Image
        src="/images/hero/hero-banner.jpg"
        alt="Travel with Book Your Holidayz"
        width={700}
        height={700}
        priority
        className="rounded-[32px] object-cover shadow-2xl"
      />

      <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">
        <p className="text-sm text-gray-500">Starting From</p>

        <h3 className="text-3xl font-bold text-[#0F4C81]">₹39,999</h3>

        <p className="text-gray-600">International Holidays</p>
      </div>
    </div>
  );
}
