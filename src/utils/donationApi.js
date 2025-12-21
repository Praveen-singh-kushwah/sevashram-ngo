const STRAPI_BASE_URL = import.meta.env.VITE_STRAPI_URL;

/* -----------------------------------------
   Submit donor details (already used)
----------------------------------------- */
export async function submitDonorDetails(formData) {
  const res = await fetch(`${STRAPI_BASE_URL}/api/donations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        purpose: formData.purpose,
        organization: formData.organization || null,
        paymentStatus: "pending",
        donationStage: "details_submitted",
      },
    }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.error?.message || "Failed to submit donor details");
  }

  return res.json();
}

/* -----------------------------------------
   Fetch donation by documentId
----------------------------------------- */
export async function fetchDonationByRef(documentId) {
  const res = await fetch(
    `${STRAPI_BASE_URL}/api/donations/${documentId}`
  );

  if (!res.ok) {
    throw new Error("Donation not found");
  }

  return res.json();
}

/* -----------------------------------------
   Update donation payment details
----------------------------------------- */
export async function updateDonationPayment(documentId, payload) {
  const res = await fetch(
    `${STRAPI_BASE_URL}/api/donations/${documentId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: payload,
      }),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    throw new Error(
      error?.error?.message || "Failed to update donation"
    );
  }

  return res.json();
}

/* -----------------------------------------
   Create Razorpay Order (backend)
----------------------------------------- */
export async function createRazorpayOrder({ donationRef, amount }) {
  const res = await fetch(`${STRAPI_BASE_URL}/api/donations/create-razorpay-order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ donationRef, amount }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.error?.message || "Failed to create Razorpay order");
  }

  return res.json(); // { orderId, key } returned from backend
}

/* -----------------------------------------
   Verify Razorpay Payment (backend)
----------------------------------------- */
export async function verifyRazorpayPayment(paymentDetails) {
  const res = await fetch(`${STRAPI_BASE_URL}/api/donations/verify-payment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(paymentDetails),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error?.error?.message || "Payment verification failed");
  }

  return res.json(); // { success: true/false, donationRef }
}
