import { useEffect } from "react";
import axios from "axios";

const Donate = () => {
  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleDonate = async () => {
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Failed to load Razorpay SDK. Are you online?");
      return;
    }

    try {
      // 1️⃣ Create order via Strapi
      const { data } = await axios.post(
        "http://localhost:1337/api/create-order",
        { amount: 500 } // ₹500 example
      );

      const order = data.order;

      // 2️⃣ Configure Razorpay
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Sevashram NGO",
        description: "Donation",
        order_id: order.id,
        handler: async function (response) {
          try {
            const { data } = await axios.post(
              "http://localhost:1337/api/verify-payment",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }
            );

            if (data.verified) {
              alert("Payment verified successfully 🎉");
            } else {
              alert("Payment verification failed ❌");
            }
          } catch (err) {
            console.error(err);
            alert("Verification error");
          }
        },
        prefill: { name: "", email: "", contact: "" },
        theme: { color: "#F9A826" },
      };


      // 3️⃣ Open Razorpay Checkout
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Payment failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-24">
      <button
        onClick={handleDonate}
        className="bg-[#F9A826] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#F59E0B]"
      >
        Donate ₹500
      </button>
    </div>
  );
};

export default Donate;
