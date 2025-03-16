export const metadata = {
  title: "ZazuBot - Terms of Service",
  description:
    "Welcome to ZazuBot! By using our platform, you agree to the following terms and conditions. Please read them carefully.",
};

export default function Terms() {
  return (
    <section>
      <div className="mx-auto max-w-2xl  sm:px-6">
        <div className="py-8 md:py-20">
          <div className="py-5">
            <h3 className="text-2xl  font-bold text-neutral-900">
              Terms of Service for ZazuBot
            </h3>
            <hr />
            <p className="py-8">
              Welcome to ZazuBot! By using our platform, you agree to the
              following terms and conditions. Please read them carefully.
            </p>
            <p className="py-4">
              Violation of any of the terms below may result in the termination
              of your account. That’s a broad statement and it means you need to
              place a lot of trust in us. We do our best to deserve that trust
              by being transparent, and keeping an open door to your feedback.
            </p>
          </div>

          <div className="py-5">
            <h3 className="text-2xl font-bold text-neutral-900">
              Account terms
            </h3>
            <hr />
            <p className="py-8">
              You are responsible for maintaining the security of your account
              and password. ZazuBot cannot and will not be liable for any loss
              or damage from your failure to comply with this security
              obligation.
            </p>
            <p>
              You are responsible for any activity that occurs under your
              account (even by others who have their own logins under your
              account).
            </p>
            <p>
              You may not use our service for any illegal purpose or to violate
              any laws in your jurisdiction. You must be a human. Accounts
              registered by bots or other automated methods are not permitted.
            </p>
          </div>

          <div className="py-5">
            <h3 className="text-2xl font-bold text-neutral-900">
              Your Content
            </h3>
            <hr />
            <p className="py-8">
              You are solely responsible for any content and other material that
              you submit, publish, transmit, email, or display on, through, or
              with the service. We claim no intellectual property rights over
              the material you provide to the service. All collected answers and
              all the data associated to your account remains yours.
            </p>
            <p>
              You retain ownership of your chatbots and collected data. By using
              our service, you grant us license to host and display your
              chatbots. You are responsible for ensuring your chatbots comply
              with privacy laws and that you have proper authorization to
              collect user data through your chatbots.
            </p>
            <p>ZazuBot prohibits content and activities that:</p>
            <ul className=" text-neutral-500 list-disc list-inside dark:text-neutral-400">
              <li>
                Engage in or promote fraudulent schemes, scams, or deceptive
                practices designed to obtain assets or sensitive information
                from others.
              </li>
              <li>
                Attempt to acquire sensitive information through phishing or by
                impersonating trustworthy entities.
              </li>
              <li>
                Involve sexual exploitation, abuse, or illegal sexual content of
                any kind.
              </li>
              <li>
                Infringe upon others' intellectual property rights, including
                copyrights, patents, trademarks, or trade secrets.
              </li>
              <li>
                Share or distribute personal or confidential information without
                proper authorization.
              </li>
              <li>
                We reserve the right to suspend or terminate any account which
                violates these terms. If you find a bot that violates these
                terms, you can report it here.
              </li>
            </ul>
          </div>

          <div className="py-5">
            <h3 className="text-2xl font-bold text-neutral-900">
              Privacy and security of your data
            </h3>
            <hr />
            <p className="py-8">
              We take many measures to protect and secure your data through
              backups, redundancies, and encryption. We collect and store data
              as described in our privacy policy. You are responsible for your
              chatbots' privacy policies. We do not sell your data to third
              parties and use industry-standard security measures to protect it.
            </p>
            <p>
              Each party agrees to handle the other party’s data in accordance
              with (i) all applicable laws; and (ii) privacy and security
              measures reasonably adequate to preserve the other party data’s
              confidentiality and security.
            </p>
            <p className="py-8">
              You own all right, title, and interest to your chatbots data. We
              do not collect and analyze personal information from chatbots'
              users and we do not use behavioral insights to sell
              advertisements. We will never collect or store any personally
              identifiable information and we will never abuse your user’s
              privacy. When using ZazuBot, you 100% own and control all of your
              workspace data. We will never sell or share your site data to any
              third-parties.
            </p>
            <p>
              You agree to comply with all applicable laws including all privacy
              and data protection regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
