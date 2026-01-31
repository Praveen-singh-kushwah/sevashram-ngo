const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

export async function fetchTestimonials() {
  const res = await fetch(
    `${STRAPI_URL}/testimonials?populate=image&sort=order:asc`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch testimonials");
  }

  return res.json();
}
