import React, { useEffect, useState } from "react";
import { ArrowRight, Shield, Lock, CheckCircle2 } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  fetchDonationByRef,
  updateDonationPayment,
  createRazorpayOrder,
  verifyRazorpayPayment,
} from "../../utils/donationApi";

const DonationPaymentPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const donationRef = searchParams.get("ref");

  const [donation, setDonation] = useState(null);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  /* ------------------------------------
     Load donation by reference
  ------------------------------------ */
  useEffect(() => {
    if (!donationRef) return navigate("/donate");

    const loadDonation = async () => {
      try {
        const res = await fetchDonationByRef(donationRef);
        const data = res.data;
        if (!data) throw new Error("Donation not found");

        if (data.paymentStatus === "paid") {
          navigate(`api/donate/success?ref=${donationRef}`);
          return;
        }

        setDonation(data);
      } catch (err) {
        console.error(err);
        navigate("/donate");
      } finally {
        setLoading(false);
      }
    };

    loadDonation();
  }, [donationRef, navigate]);

  /* ------------------------------------
     Amount Handling
  ------------------------------------ */
  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setAmount(value);
      setError("");
    }
  };

  const validateAmount = () => {
    if (!amount) {
      setError("Please enter a donation amount");
      return false;
    }
    if (parseInt(amount) < 50) {
      setError("Minimum donation amount is ₹50");
      return false;
    }
    setError("");
    return true;
  };

  /* ------------------------------------
     Load Razorpay Script
  ------------------------------------ */
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  /* ------------------------------------
     Proceed to Pay
  ------------------------------------ */
  const handleProceedToPay = async () => {
    if (!validateAmount()) return;

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Razorpay SDK failed to load. Check your connection.");
      return;
    }

    try {
      setIsProcessing(true);

      // Update donation amount stage
      await updateDonationPayment(donationRef, {
        amount: parseInt(amount),
        donationStage: "amount_selected",
      });

      // Create Razorpay order via backend
      const orderRes = await createRazorpayOrder({ donationRef, amount: parseInt(amount) });
      const { orderId, key } = orderRes.data;

      // Open Razorpay Checkout
      const options = {
        key,
        amount: parseInt(amount) * 100, // paise
        currency: "INR",
        name: "Your Organization",
        description: "Donation Payment",
        order_id: orderId,
        prefill: {
          name: donation.fullName,
          email: donation.email,
          contact: donation.phone,
        },
        theme: { color: "#FF914D" },
        handler: async function (response) {
          try {
            const res = await verifyRazorpayPayment({
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              signature: response.razorpay_signature,
              donationRef,
            });

            if (res.success) {
              navigate(`/donate/success?ref=${donationRef}`);
            } else {
              alert("Payment verification failed.");
            }
          } catch (err) {
            console.error(err);
            alert("Error verifying payment.");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment initiation failed. Try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-lg">
        Loading donation details...
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-200px)] bg-gradient-to-br from-orange-50 via-white to-orange-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Choose Donation Amount
          </h1>
          <p className="text-gray-600">
            Completing donation for <b>{donation.fullName}</b>
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-8">

          {/* Amount */}
          <div className="max-w-md mx-auto">
            <label className="block font-semibold mb-2">
              Donation Amount <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold">
                ₹
              </span>
              <input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                onBlur={validateAmount}
                placeholder="500"
                className={`w-full h-14 pl-10 pr-4 rounded-xl border-2 ${error ? "border-red-400" : "border-gray-300"
                  }`}
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          {/* Trust Info */}
          <div className="bg-gray-50 rounded-xl p-4 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" /> 100% Secure Payments
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" /> SSL Encrypted
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Trusted Gateway
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleProceedToPay}
            disabled={isProcessing}
            className={`w-full h-14 rounded-xl font-semibold text-white transition ${!isProcessing
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-gray-300 cursor-not-allowed"
              }`}
          >
            {isProcessing ? "Redirecting to Payment..." : `Proceed to Pay ₹${amount || ""}`}
            <ArrowRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationPaymentPage;
