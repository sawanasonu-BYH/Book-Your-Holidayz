import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative">

      <Image
        src="/images/hero/hero-banner.jpg"
        alt="Book Your Holidayz Hero"
        width={700}
        height={700}
        className="rounded-[32px] shadow-2xl"
        priority
      />

      <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 text-gray-900 shadow-xl">
        <p className="text-sm text-gray-500">Starting From</p>
        <h3 className="text-2xl font-bold">₹39,999</h3>
        <p>International Packages</p>
      </div>

    </div>
  );
}
