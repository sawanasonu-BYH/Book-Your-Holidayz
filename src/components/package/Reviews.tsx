const reviews = [
  {
    name: "Rahul Sharma",
    city: "Jaipur",
    rating: 5,
    review:
      "Excellent service! Everything was perfectly arranged and the trip was completely hassle-free.",
  },
  {
    name: "Priya Patel",
    city: "Ahmedabad",
    rating: 5,
    review:
      "Our Dubai holiday was amazing. Hotels, transfers and sightseeing were exactly as promised.",
  },
  {
    name: "Amit Verma",
    city: "Delhi",
    rating: 5,
    review:
      "Very professional team. They were available throughout the journey whenever we needed help.",
  },
];

export default function Reviews() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">
        What Our Travellers Say
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="rounded-3xl bg-white p-6 shadow-lg"
          >
            <div className="text-yellow-500 text-xl">
              {"★".repeat(review.rating)}
            </div>

            <p className="mt-4 text-gray-600">
              "{review.review}"
            </p>

            <h3 className="mt-6 font-bold">
              {review.name}
            </h3>

            <p className="text-sm text-gray-500">
              {review.city}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}