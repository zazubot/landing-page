export const metadata = {
  title: "Careers - ZazuBot",
};

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-green-700 to-green-900 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-green-100 mb-8">
            At ZazuBot, we’re building the future of business communication. If
            you’re passionate about technology, innovation, and making an
            impact, we want to hear from you!
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Work With Us?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-600 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Innovative Culture</h3>
              <p className="text-gray-600">
                Work with cutting-edge AI and automation technologies in a
                collaborative, forward-thinking environment.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-600 text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">Growth & Learning</h3>
              <p className="text-gray-600">
                We invest in your professional development and offer
                opportunities to grow your skills and career.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-600 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Inclusive Team</h3>
              <p className="text-gray-600">
                Join a diverse, supportive team where your ideas matter and your
                contributions make a real difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Email */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Apply?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Send your CV and a short introduction to our team. We’re excited to
            meet you!
          </p>
          <div className="inline-block bg-green-100 rounded-lg px-6 py-4">
            <span className="text-green-700 font-mono text-lg select-all">
              info@zazubot.com
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
