import { z } from "zod";

export const packageSchema = z.object({
  title: z.string().min(3, "Title is required"),
  slug: z.string().min(3, "Slug is required"),
  destination: z.string().min(2, "Destination is required"),
  country: z.string().min(2, "Country is required"),
  category: z.string().min(2, "Category is required"),
  duration: z.string().min(1, "Duration is required"),
  price: z.coerce.number().positive("Price must be greater than 0"),
  offer_price: z.coerce.number().optional(),
  featured: z.boolean().default(false),
  active: z.boolean().default(true),
});

export type PackageFormData = z.infer<typeof packageSchema>;