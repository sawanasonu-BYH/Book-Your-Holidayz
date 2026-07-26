import React from "react";

const blogs = [
  {
    title: "Top 10 Places To Visit In Dubai",
    description:
      "Discover luxury experiences, attractions and unforgettable things to do in Dubai.",
    category: "Dubai",
  },
  {
    title: "Best Time To Visit Maldives",
    description:
      "Plan your perfect island vacation with our Maldives travel guide.",
    category: "Maldives",
  },
  {
    title: "Thailand Holiday Guide",
    description:
      "Explore beaches, culture, food and amazing experiences in Thailand.",
    category: "Thailand",
  },
];

export default function BlogPreview() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Travel Inspiration</h2>
          <p className="mt-4 text-gray-600">
            Explore travel guides, tips and destination ideas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1"
            >
              <span className="text-sm font-semibold text-blue-600">
                {blog.category}
              </span>

              <h3 className="mt-4 text-xl font-bold">{blog.title}</h3>

              <p className="mt-3 text-gray-600">{blog.description}</p>

              <button className="mt-5 font-medium text-blue-600">Read More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
