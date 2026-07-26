import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-900">
      <main className="w-full max-w-4xl px-8 py-24">
        <div className="flex items-center gap-4">
          <Image src="/file.svg" alt="Logo" width={48} height={48} />
          <h1 className="text-4xl font-bold">Book Your Holidayz</h1>
        </div>

        <p className="mt-6 max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">
          A simple Next.js starter for booking holidays. This project uses the
          App Router, TypeScript, Tailwind CSS and recommended Next.js defaults.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="/"
            className="inline-flex items-center rounded-md bg-black px-5 py-3 text-white hover:opacity-95"
          >
            View site
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border px-5 py-3 text-black dark:text-white"
          >
            Next.js docs
          </a>
        </div>

        <section className="mt-12 rounded-lg bg-white/60 p-6 shadow-sm dark:bg-black/40">
          <h2 className="text-2xl font-semibold">Run locally</h2>
          <pre className="mt-4 rounded-md bg-zinc-100 p-4 text-sm text-zinc-800 dark:bg-zinc-900">
{`npm install
npm run dev
# open http://localhost:3000`}
          </pre>
        </section>
      </main>
    </div>
  );
}
