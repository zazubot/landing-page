import Cta from "./cta";

export default function UseCases() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-neutral-900">
      <div className="mx-auto ">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-neutral-200 md:text-4xl">
              Together, we're hacking the future of conversational AI apps{" "}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Cta
              title="Marketing"
              content="Let your bot drive the conversation and turn leads into customers."
            />
            <Cta
              title="Support & Product"
              content="Deliver 24/7 multichannel support and make your customers happy."
            />
            <Cta
              title="Sales"
              content="Boost meetings and show rates with highly interested leads"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
