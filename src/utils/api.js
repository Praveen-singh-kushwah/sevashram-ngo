export const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

export async function fetchEvents({ page = 1, pageSize = 9 } = {}) {
  const url = new URL(`${STRAPI_BASE_URL}/api/events`);
  url.searchParams.set("populate", "cover");
  url.searchParams.set("sort[0]", "date:desc");
  url.searchParams.set("pagination[page]", String(page));
  url.searchParams.set("pagination[pageSize]", String(pageSize));

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch events: ${res.status}`);
  }
  const json = await res.json();
  return json;
}

export async function fetchEventBySlug(slug) {
  const url = new URL(`${STRAPI_BASE_URL}/api/events`);
  url.searchParams.set("filters[slug][$eq]", slug);
  url.searchParams.set("populate[event_images][populate]", "Image");
  url.searchParams.set("populate", "cover");

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch event: ${res.status}`);
  }
  const json = await res.json();
  return json?.data?.[0] || null;
}

export function getMediaUrl(path) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${STRAPI_BASE_URL}${path}`;
}
 