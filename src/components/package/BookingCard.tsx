export default function BookingCard() {
  return (
    <div className="sticky top-24 rounded-3xl bg-white p-8 shadow-2xl">

      <p className="text-gray-500">
        Starting From
      </p>

      <h2 className="mt-2 text-4xl font-bold text-blue-700">
        ₹34,999
      </h2>

      <p className="mt-2 text-gray-500">
        Per Person
      </p>

      <hr className="my-6" />

      <button className="w-full rounded-xl bg-blue-700 py-4 font-semibold text-white hover:bg-blue-800">
        Get Free Quote
      </button>

      <a
        href="https://wa.me/918890414339"
        target="_blank"
        className="mt-4 block w-full rounded-xl bg-green-600 py-4 text-center font-semibold text-white hover:bg-green-700"
      >
        WhatsApp Now
      </a>

      <div className="mt-8 space-y-4">

        <div className="flex justify-between">
          <span>Duration</span>
          <span>5D / 4N</span>
        </div>

        <div className="flex justify-between">
          <span>Hotel</span>
          <span>4★ Deluxe</span>
        </div>

        <div className="flex justify-between">
          <span>Meals</span>
          <span>Breakfast</span>
        </div>

        <div className="flex justify-between">
          <span>Transfers</span>
          <span>Included</span>
        </div>

      </div>

    </div>
  );
}