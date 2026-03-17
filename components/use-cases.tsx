import { getTranslations } from "@/app/[locale]/i18n";
import Cta from "./cta";

export default function UseCases({ locale }: { locale: "en" | "ar" }) {
  const t = getTranslations(locale);
  const cases = t.landing.useCases.cases;

  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-neutral-900">
      <div className="mx-auto ">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-neutral-200 md:text-4xl">
              {t.landing.useCases.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cases.map(
              (
                useCase: { title: string; description: string },
                idx: number
              ) => (
                <Cta
                  key={idx}
                  title={useCase.title}
                  content={useCase.description}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
