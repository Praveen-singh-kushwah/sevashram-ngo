export const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_URL;

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

// Program gallery images via separate collection (fetch all, filter by id on frontend)
export async function fetchProgramImages() {
  const url = new URL(`${STRAPI_BASE_URL}/api/program-images`);
  url.searchParams.set("populate", "image");

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch program images: ${res.status}`);
  }
  const json = await res.json();
  return json;
}

// Programs API - list (for grids and related programs)
export async function fetchPrograms({ page = 1, pageSize = 12 } = {}) {
  const url = new URL(`${STRAPI_BASE_URL}/api/programs`);
  url.searchParams.set("pagination[page]", String(page));
  url.searchParams.set("pagination[pageSize]", String(pageSize));
  url.searchParams.set("fields[0]", "title");
  url.searchParams.set("fields[1]", "slug");
  url.searchParams.set("fields[2]", "shortDescription");
  url.searchParams.set("populate", "cover");

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch programs: ${res.status}`);
  }
  const json = await res.json();
  return json;
}

// Program detail by slug (full detail)
export async function fetchProgramBySlug(slug) {
  const url = new URL(`${STRAPI_BASE_URL}/api/programs`);
  url.searchParams.set("filters[slug][$eq]", slug);
  // Use full populate to avoid 400 errors and include cover + program_images
  url.searchParams.set("populate", "*");

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch program: ${res.status}`);
  }
  const json = await res.json();
  return json?.data?.[0] || null;
}

// Story Images API functions - for the grid page
export async function fetchStoryImages({ page = 1, pageSize = 9 } = {}) {
  const url = new URL(`${STRAPI_BASE_URL}/api/story-images`);
  // Populate all relations (image, story, etc.)
  url.searchParams.set("populate", "*");
  url.searchParams.set("sort[0]", "createdAt:desc");
  url.searchParams.set("pagination[page]", String(page));
  url.searchParams.set("pagination[pageSize]", String(pageSize));

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch story images: ${res.status}`);
  }
  const json = await res.json();
  return json;
}

// Impact Stories API functions - for individual story details
export async function fetchImpactStories({ page = 1, pageSize = 9 } = {}) {
  const url = new URL(`${STRAPI_BASE_URL}/api/impact-stories`);
  url.searchParams.set("populate", "*");
  url.searchParams.set("sort[0]", "createdAt:desc");
  url.searchParams.set("pagination[page]", String(page));
  url.searchParams.set("pagination[pageSize]", String(pageSize));

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch impact stories: ${res.status}`);
  }
  const json = await res.json();
  return json;
}

export async function fetchImpactStoryBySlug(slug) {
  const url = new URL(`${STRAPI_BASE_URL}/api/impact-stories`);
  url.searchParams.set("filters[slug][$eq]", slug);
  url.searchParams.set("populate", "*");

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch impact story: ${res.status}`);
  }
  const json = await res.json();
  return json?.data?.[0] || null;
}

export function getMediaUrl(path) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${STRAPI_BASE_URL}${path}`;
}

// Blog API functions
export async function fetchBlogList({ page = 1, pageSize = 9 } = {}) {
  // Build URL with exact format that works with your Strapi - NO leading spaces
  const queryString = `fields[0]=Title&fields[1]=Slug&fields[2]=shortDescription&fields[3]=authorName&populate[coverCard][populate]=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
  const url = `${STRAPI_BASE_URL}/api/blogs?${queryString}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch blog list: ${res.status}`);
  }
  const json = await res.json();
  return json;
}

export async function fetchBlogBySlug(slug) {
  const url = new URL(`${STRAPI_BASE_URL}/api/blogs`);
  url.searchParams.set("filters[Slug][$eq]", slug);
  url.searchParams.set("populate", "*");

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch blog: ${res.status}`);
  }
  const json = await res.json();
  return json?.data?.[0] || null;
}