export function formatPrice(price: string) {
  return price;
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace(/[^\w-]/g, "");
}