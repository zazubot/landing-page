export const metadata = {
  title: "privacy-policy - ZazuBot",
  description:
    "In this policy, we lay out what data we collect and why, how your data is handled and your rights to your data. We promise we never sell your data.",
};

import React from "react";

const AppPrivacyPolicy = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold  text-green-600 mb-8">
        Privacy Policy
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Last Updated:</strong> 10 Mar 2025
      </p>

      <p className="text-lg text-gray-700 mb-4">
        ZazuBot ("we", "our", or "us") values your privacy. This Privacy Policy
        explains how we collect, use, and protect your information when you use
        our app, including when you sign in using Google. By accessing or using
        our app, you agree to the practices described in this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        1. Information We Collect
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        We collect personal information to provide and improve our services.
        When you sign in using your Google account, we may access the following
        information from your Google profile:
      </p>
      <ul className="list-inside list-disc text-lg text-gray-700 mb-4">
        <li>
          Basic profile information (such as your name, email address, and
          profile picture)
        </li>
        <li>
          Authentication data (used to verify your identity and ensure secure
          access to your account)
        </li>
      </ul>
      <p className="text-lg text-gray-700 mb-4">
        We do not collect or store any sensitive personal data unless explicitly
        required by you in the course of using the app.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        2. Use of Information
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        We use the information we collect to:
      </p>
      <ul className="list-inside list-disc text-lg text-gray-700 mb-4">
        <li>
          Provide and personalize the features and functionality of the app
        </li>
        <li>
          Authenticate and manage your login session through Google Sign-In
        </li>
        <li>Improve our services and app functionality</li>
        <li>
          Communicate with you regarding updates, support, or relevant
          information
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        3. Data Storage and Retention
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        We store the information necessary to provide our services, including
        your Google account information. We retain your data as long as your
        account is active or as necessary to provide you with services, fulfill
        legal obligations, resolve disputes, and enforce our agreements.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        4. Third-Party Services
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        We use third-party services that may collect information used to
        identify you, including:
      </p>
      <ul className="list-inside list-disc text-lg text-gray-700 mb-4">
        <li>
          <strong>Google:</strong> When you use Google Sign-In, Google may
          collect personal data as described in its{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            className="text-blue-600 underline"
          >
            Privacy Policy
          </a>
          .
        </li>
      </ul>
      <p className="text-lg text-gray-700 mb-4">
        We also use third-party service providers for the following:
      </p>
      <ul className="list-inside list-disc text-lg text-gray-700 mb-4">
        <li>
          <strong>Database Hosting:</strong> We use{" "}
          <a
            href="https://planetscale.com/"
            target="_blank"
            className="text-blue-600 underline"
          >
            Planetscale
          </a>{" "}
          for database hosting, located in the AWS eu-west-2 (London) region.
        </li>
        <li>
          <strong>File Storage:</strong> We use{" "}
          <a
            href="https://aws.amazon.com/s3/"
            target="_blank"
            className="text-blue-600 underline"
          >
            AWS S3
          </a>{" "}
          in the eu-west-3 (Paris) region for file storage.
        </li>
        <li>
          <strong>DDoS Protection and CDN:</strong> We use{" "}
          <a
            href="https://www.cloudflare.com/"
            target="_blank"
            className="text-blue-600 underline"
          >
            Cloudflare
          </a>{" "}
          for DDoS protection and content delivery services.
        </li>
        <li>
          <strong>Error Tracking:</strong> We use{" "}
          <a
            href="https://sentry.io/"
            target="_blank"
            className="text-blue-600 underline"
          >
            Sentry
          </a>{" "}
          for error tracking to monitor and improve our app's performance.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        5. Cookies and Tracking Technologies
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        We use first-party cookies to remember your login session and enhance
        your experience with the app. These cookies help us ensure you stay
        logged in when you return.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        You can manage cookie settings through your browser. You can choose to
        delete or block cookies, but please note that doing so may affect the
        functionality of the app.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        6. User Rights and Control
      </h2>
      <p className="text-lg text-gray-700 mb-4">You have the right to:</p>
      <ul className="list-inside list-disc text-lg text-gray-700 mb-4">
        <li>
          <strong>Access your data:</strong> You can access and update the
          information we store about you through your account settings.
        </li>
        <li>
          <strong>Delete your account:</strong> You may request to delete your
          account at any time by contacting us. All your data will be
          permanently deleted upon request.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        7. Security
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        We implement appropriate security measures to protect your information,
        including encryption and secure authentication methods, to ensure the
        safety of your data.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        8. Changes to This Privacy Policy
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        We may update this Privacy Policy from time to time. When we do, we will
        post the updated policy in the app and update the "Last Updated" date at
        the top of this page. We encourage you to review this policy
        periodically to stay informed about how we are protecting your data.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        9. Contact Us
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        If you have any questions about this Privacy Policy or our data
        practices, please contact us at:
      </p>
      <ul className="list-inside list-disc text-lg text-gray-700 mb-4">
        <li>
          <strong>zazubot.com</strong>
        </li>
        <li>
          <strong>Email:</strong> tech@sfgco.sa
        </li>
      </ul>
    </div>
  );
};

export default AppPrivacyPolicy;
