type Props = {
  highlights: string[];
};

export default function PackageHighlights({
  highlights,
}: Props) {
  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold">
        Package Highlights
      </h2>


      <div className="mt-8 grid gap-6 md:grid-cols-3">

        {highlights.map((item) => (

          <div
            key={item}
            className="rounded-2xl bg-blue-50 p-6"
          >

            <div className="text-2xl">
              ✓
            </div>

            <p className="mt-3 font-medium">
              {item}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
