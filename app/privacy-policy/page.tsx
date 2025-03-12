export const metadata = {
  title: "privacy-policy - ZazuBot",
  description:
    "In this policy, we lay out what data we collect and why, how your data is handled and your rights to your data. We promise we never sell your data.",
};

export default function Privacy() {
  return (
    <section>
      <div className="mx-auto max-w-2xl  sm:px-6">
        <div className="py-8 md:py-20">
          <div className="py-5">
            <h3 className="text-2xl  font-bold text-neutral-900">
              As a user of ZazuBot, the chatbot builder
            </h3>
            <hr />
            <p className="py-8">
              Our guiding principle is to collect only what we need to provide
              the best service to you. We use a select number of trusted
              external service providers for certain service offerings.
            </p>
          </div>

          <div className="py-5">
            <h3 className="text-2xl font-bold text-neutral-900">
              Services we use
            </h3>
            <hr />
            <p className="py-8">
              A persistent first-party cookie is stored to remember you’re
              logged in. If you log in to your ZazuBot account, you give us
              permission to use cookies so you don’t have to log in on each
              returning session. This makes it easier for you to use our
              product. A cookie is a piece of text stored by your browser. You
              can adjust cookie retention settings in your own browser. Cookies
              that are already stored may be deleted at any time.
            </p>
            <p>
              We use Planetscale for database hosting. The database is
              ultimately hosted in AWS eu-west-2 (London) region. See
              Planetscale privacy policy for full details. We use AWS S3 in
              eu-west-3 (Paris) region for file storage. We use Cloudflare for
              DDoS protection and CDN services. See Cloudflare privacy policy
              for full details.
            </p>
            <p>
              We use Sentry for anonymous error tracking only on the server's
              end. This allows us to meet our software quality standard. See the
              Sentry privacy policy for full details.
            </p>
          </div>

          <div className="py-5">
            <h3 className="text-2xl font-bold text-neutral-900">
              As a user of a ZazuBot (the web chatbot itself)
            </h3>
            <hr />
            <p className="py-8">
              You are bound to what the chatbot creator has set up in terms of
              data collection and data handling. We do not collect any personal
              data from chatbot users. We do not use behavioral insights to sell
              advertisements. We will never collect or store any personally
              identifiable information and we will never abuse your user’s
              privacy.
            </p>
            <p>
              If the Remember user setting is on, data is stored to either local
              or session storage of the browser. This is to remember the user's
              answers if they leave the chatbot and come back later.
            </p>
          </div>

          <div className="py-5">
            <h3 className="text-2xl font-bold text-neutral-900">
              Retention of data
            </h3>
            <hr />
            <p className="py-8">
              We will retain your information as long as your account is active,
              as necessary to provide you with the services or as otherwise set
              forth in this policy.
            </p>
            <p>
              We will also retain and use this information as necessary for the
              purposes set out in this policy and to the extent necessary to
              comply with our legal obligations, resolve disputes, enforce our
              agreements and protect ZazuBot’s legal rights.
            </p>
            <p className="py-8">
              You can ask to delete your ZazuBot account at any time by
              contacting us. All your data will be permanently deleted
              immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
