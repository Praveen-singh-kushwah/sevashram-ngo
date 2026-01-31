// src/volunteerApi.js
export const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_URL;
/**
 * Fetch Volunteer Opportunities
 * Sorted by order field
 * Icon populated from Media Library
 */

export async function fetchVolunteerOpportunities() {
    const url = new URL(`${STRAPI_BASE_URL}/api/volunteer-opportunities`);
    url.searchParams.set("populate", "icon");
    url.searchParams.set("sort[0]", "order:asc");

    const res = await fetch(url.toString());

    if (!res.ok) {
        throw new Error(`Failed to fetch volunteer opportunities: ${res.status}`);
    }

    const json = await res.json();
    return json?.data || [];
}

/**
 * Submit Volunteer Registration Form
 */
export async function submitVolunteerRegistration(formData) {
    const res = await fetch(
        `${STRAPI_BASE_URL}/api/volunteer-registrations`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: {
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    city: formData.city,
                    areas: formData.areas,
                    availability: formData.availability,
                    skills: formData.skills,
                    message: formData.message,
                    status_user: "New", // optional default
                },
            }),
        }
    );

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error?.error?.message || "Failed to submit form");
    }

    return await res.json();
}
