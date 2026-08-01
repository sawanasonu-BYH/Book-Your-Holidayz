import PackageForm from "@/components/admin/PackageForm";

export default function NewPackagePage() {
  return (
    <main className="mx-auto max-w-5xl">

      <h1 className="mb-8 text-4xl font-bold">
        Add Holiday Package
      </h1>

      <PackageForm />

    </main>
  );
}