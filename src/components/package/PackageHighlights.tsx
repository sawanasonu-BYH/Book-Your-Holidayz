import { motion } from "framer-motion";

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

        {highlights.map((item, idx) => (

          <motion.div
            key={item}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl bg-blue-50 p-6"
          >

            <div className="text-2xl">
              ✓
            </div>

            <p className="mt-3 font-medium">
              {item}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
