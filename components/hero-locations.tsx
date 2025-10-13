import { MapPin } from "lucide-react";
import { getTranslations } from "@/app/[locale]/i18n";

type HeroLocationsProps = {
  locale: "en" | "ar";
};

export default function HeroLocations({ locale }: HeroLocationsProps) {
  const t = getTranslations(locale);
  const locations = t.landing.heroLocations.locations;

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
            {t.landing.heroLocations.sectionTitle}
          </h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t.landing.heroLocations.mainTitle}
          </p>
        </div>

        <div className="mt-12 grid ">
          {locations.map(
            (
              loc: { country: string; address: string; note: string },
              idx: number
            ) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-green-600" />
                  <h3 className="ml-2 text-lg font-medium text-gray-900">
                    {loc.country}
                  </h3>
                </div>
                <p
                  className="mt-2 text-gray-600"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {loc.address}
                </p>
                <p className="mt-2 text-sm text-green-600">{loc.note}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
