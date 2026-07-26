import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full border-b py-4">
        <div className="mx-auto max-w-4xl px-4">
          <a href="/" className="text-xl font-semibold">
            Book Your Holidayz
          </a>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-4xl px-4 py-8">{children}</main>

      <footer className="w-full border-t py-4">
        <div className="mx-auto max-w-4xl px-4 text-sm text-zinc-600">
          © {new Date().getFullYear()} Book Your Holidayz
        </div>
      </footer>
    </div>
  );
}
