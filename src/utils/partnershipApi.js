const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_URL;

/* -----------------------------------------
   Submit Partnership Inquiry
----------------------------------------- */
export async function submitPartnershipInquiry(formData) {
  const res = await fetch(
    `${STRAPI_BASE_URL}/api/partnership-inquiries`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          organizationName: formData.organizationName,
          contactName: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          partnershipInterest: formData.partnershipInterest,
          message: formData.message,
          status_user: "new",
        },
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text(); // safer than res.json()
    throw new Error(text || "Failed to submit inquiry");
  }

  return res.json();
}
