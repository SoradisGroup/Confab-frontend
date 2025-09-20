import axios from "axios";
import { NextRouter } from "next/router";

interface InitiatePaymentParams {
  amount: number;
  currency: string;
  orderId: string;
  customerName: string;
}

export const initiatePayment = async (
  router: NextRouter,
  params: InitiatePaymentParams
) => {
  try {
    const { data } = await axios.post("http://192.168.1.12:5000/api/payment/initiate", params, {
      headers: { "Content-Type": "application/json" },
    });

    if (data?.redirectUrl) {
      router.push(data.redirectUrl); // use Next.js router instead of window.location
    } else {
      console.error("No redirect URL received from payment API.");
    }
  } catch (error: any) {
    console.error("Payment initiation failed:", error.response || error.message);
  }
};