import React from "react";

export default function Hero() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-gradient-to-b from-white to-zinc-50 dark:from-black">
      <div className="max-w-3xl px-6 text-center">
        <h1 className="text-5xl font-extrabold">Plan your perfect getaway</h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
          Search flights, hotels and complete holiday packages in one place.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}
