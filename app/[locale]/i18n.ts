import en from "../locales/en.json";
import ar from "../locales/ar.json";

const translations = {
  en,
  ar,
};

export type TranslationKey = keyof typeof en;

export function getTranslations(locale: "en" | "ar") {
  return translations[locale] || translations.en;
}
