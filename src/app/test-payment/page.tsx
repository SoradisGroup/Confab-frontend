"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const PaymentPage = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<any>(false);
  const [showCallback, setShowCallback] = useState<any>(false);
  const [callbackData, setCallbackData] = useState<any>(null);
  const [paymentData, setPaymentData] = useState<any>({
    amount: "",
    customerEmailID: "",
    customerMobileNo: "",
    addlParam1: "",
    addlParam2: "",
  });

  // Your Node.js backend URL
  const API_BASE_URL = "http://localhost:5000"; // Change this to your Node.js server URL

  useEffect(() => {
    // Check if this is a callback from payment gateway
    const status = searchParams.get("status");
    if (status) {
      setShowCallback(true);
      setCallbackData({
        status: status,
        txnId: searchParams.get("txnId"),
        merchantTxnNo: searchParams.get("merchantTxnNo"),
        amount: searchParams.get("amount"),
        error: searchParams.get("error"),
      });
    }
  }, [searchParams]);

  // Generate unique transaction number
  const generateTxnNo = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `TXN${timestamp}${random}`;
  };

  // Handle input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setPaymentData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Initialize payment
  const initiatePayment = async () => {
    // Validate required fields
    if (
      !paymentData.amount ||
      !paymentData.customerEmailID ||
      !paymentData.customerMobileNo
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (parseFloat(paymentData.amount) <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    setIsLoading(true);

    try {
      const merchantTxnNo = generateTxnNo();

      const response = await fetch(`${API_BASE_URL}/api/payment/initiate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...paymentData,
          merchantTxnNo: merchantTxnNo,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Redirect to ICICI payment page
        const redirectURL = `${result.data.redirectURI}?tranCtx=${result.data.tranCtx}`;
        window.location.href = redirectURL;
      } else {
        alert(result.message || "Payment initiation failed");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment initiation failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Check payment status
  const checkPaymentStatus = async (merchantTxnNo: any) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/payment/status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ merchantTxnNo }),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Status check error:", error);
      return { success: false, message: "Status check failed" };
    }
  };

  // Reset to payment form
  const resetToPaymentForm = () => {
    setShowCallback(false);
    setCallbackData(null);
    setPaymentData({
      amount: "",
      customerEmailID: "",
      customerMobileNo: "",
      addlParam1: "",
      addlParam2: "",
    });
    // Clear URL parameters
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  // Render callback content
  const renderCallback = () => {
    const { status, txnId, merchantTxnNo, amount, error } = callbackData;

    if (status === "success") {
      return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">
              Payment Successful!
            </h2>
            <p className="text-gray-600 mb-4">
              Your payment has been processed successfully.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
              <h3 className="font-semibold text-gray-800 mb-3">
                Transaction Details:
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-medium">Transaction ID:</span> {txnId}
                </p>
                <p>
                  <span className="font-medium">Reference No:</span>{" "}
                  {merchantTxnNo}
                </p>
                <p>
                  <span className="font-medium">Amount:</span> ₹{amount}
                </p>
                <p>
                  <span className="font-medium">Status:</span>{" "}
                  <span className="text-green-600 font-medium">Success</span>
                </p>
              </div>
            </div>

            <button
              onClick={resetToPaymentForm}
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 mr-3"
            >
              Make Another Payment
            </button>
            <button
              onClick={() => (window.location.href = "/dashboard")}
              className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
              <svg
                className="h-8 w-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-red-800 mb-2">
              Payment Failed
            </h2>
            <p className="text-gray-600 mb-4">
              {error ||
                "Your payment could not be processed. Please try again."}
            </p>

            {merchantTxnNo && (
              <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Transaction Details:
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-medium">Reference No:</span>{" "}
                    {merchantTxnNo}
                  </p>
                  <p>
                    <span className="font-medium">Status:</span>{" "}
                    <span className="text-red-600 font-medium">Failed</span>
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={resetToPaymentForm}
              className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }
  };

  // If this is a callback, show callback content
  if (showCallback) {
    return renderCallback();
  }

  // Main payment form
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          ICICI Payment Gateway
        </h2>

        <div className="space-y-4">
          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount (₹) *
            </label>
            <input
              type="number"
              name="amount"
              value={paymentData.amount}
              onChange={handleInputChange}
              placeholder="Enter amount"
              min="1"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email ID *
            </label>
            <input
              type="email"
              name="customerEmailID"
              value={paymentData.customerEmailID}
              onChange={handleInputChange}
              placeholder="Enter email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Mobile Number Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number *
            </label>
            <input
              type="tel"
              name="customerMobileNo"
              value={paymentData.customerMobileNo}
              onChange={handleInputChange}
              placeholder="Enter mobile number"
              maxLength={10}
              pattern="[0-9]{10}"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Additional Param 1 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Info 1 (Optional)
            </label>
            <input
              type="text"
              name="addlParam1"
              value={paymentData.addlParam1}
              onChange={handleInputChange}
              placeholder="Additional information"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Additional Param 2 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Info 2 (Optional)
            </label>
            <input
              type="text"
              name="addlParam2"
              value={paymentData.addlParam2}
              onChange={handleInputChange}
              placeholder="Additional information"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Payment Button */}
          <button
            onClick={initiatePayment}
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-md font-medium text-white transition-colors ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </div>
            ) : (
              "Pay Now"
            )}
          </button>

          {/* Test Card Details */}
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <h3 className="text-sm font-semibold text-yellow-800 mb-2">
              UAT Test Card Details
            </h3>
            <div className="text-xs text-yellow-700 space-y-1">
              <p>
                <strong>Visa DC:</strong> 4895 3901 1539 2363
              </p>
              <p>
                <strong>MC DC:</strong> 5299 9209 7025 9709
              </p>
              <p>
                <strong>Expiry:</strong> 09/2028 | <strong>CVV:</strong> 123
              </p>
              <p>
                <strong>OTP:</strong> 123456
              </p>
              <p>
                <strong>UPI:</strong> test@ybl
              </p>
              <p>
                <strong>NetBanking:</strong> Select Payphi Test Bank
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
