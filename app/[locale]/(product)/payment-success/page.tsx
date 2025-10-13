"use client";

import React from "react";

const PaymentSuccess = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-16 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        {/* Success Icon */}
        <div className="bg-green-100 rounded-full p-4 mb-6">
          <svg
            className="h-16 w-16 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="white"
            />
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12l3 3.5 5-5.5"
            />
          </svg>
        </div>
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Payment Successful!
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Thank you for your payment. Your transaction has been completed
          successfully.
        </p>
        {/* CTA Button */}
        <a
          href="https://app.zazubot.com"
          className="mt-2 inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
