"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  packageSchema,
  PackageFormData,
} from "@/validation/packageSchema";
import { createPackage } from "@/services/packageService";

export default function PackageForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PackageFormData>({
    resolver: zodResolver(packageSchema),
    defaultValues: {
      featured: false,
      active: true,
    },
  });

  async function onSubmit(data: PackageFormData) {
    try {
      await createPackage({
        ...data,
        gallery: [],
        itinerary: [],
        inclusions: [],
        exclusions: [],
      });

      alert("Package created successfully.");

      reset();
    } catch (err) {
      console.error(err);
      alert("Unable to save package.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-5xl space-y-8 rounded-xl bg-white p-8 shadow"
    >
      <h1 className="text-3xl font-bold">
        Add Holiday Package
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <Input
          label="Package Title"
          error={errors.title?.message}
          register={register("title")}
        />

        <Input
          label="Slug"
          error={errors.slug?.message}
          register={register("slug")}
        />

        <Input
          label="Destination"
          error={errors.destination?.message}
          register={register("destination")}
        />

        <Input
          label="Country"
          error={errors.country?.message}
          register={register("country")}
        />

        <Input
          label="Category"
          error={errors.category?.message}
          register={register("category")}
        />

        <Input
          label="Duration"
          error={errors.duration?.message}
          register={register("duration")}
        />

        <Input
          label="Price"
          type="number"
          error={errors.price?.message}
          register={register("price")}
        />

        <Input
          label="Offer Price"
          type="number"
          error={errors.offer_price?.message}
          register={register("offer_price")}
        />

      </div>

      <div className="flex gap-10">

        <label className="flex items-center gap-2">

          <input
            type="checkbox"
            {...register("featured")}
          />

          Featured

        </label>

        <label className="flex items-center gap-2">

          <input
            type="checkbox"
            {...register("active")}
          />

          Active

        </label>

      </div>

      <button
        disabled={isSubmitting}
        className="rounded-lg bg-blue-600 px-8 py-3 text-white"
      >
        {isSubmitting ? "Saving..." : "Save Package"}
      </button>

    </form>
  );
}

type InputProps = {
  label: string;
  error?: string;
  register: any;
  type?: string;
};

function Input({
  label,
  register,
  error,
  type = "text",
}: InputProps) {
  return (
    <div>

      <label className="mb-2 block font-semibold">
        {label}
      </label>

      <input
        type={type}
        {...register}
        className="w-full rounded-lg border p-3"
      />

      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}

    </div>
  );
}