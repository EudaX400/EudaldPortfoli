// i18n/utils.ts
import { defaultLang } from './ui';
import catalan from '../i18n/locales/ca.json';
import english from '../i18n/locales/en.json';
import spanish from '../i18n/locales/es.json';

const translations = {
  ca: catalan,
  en: english,
  es: spanish,
};

export const showDefaultLang = false;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
  // Función de traducción que acepta claves de tipo string
  return function t(key: string) {
    const keys = key.split('.') as Array<string>;
    let result: any = translations[lang];
    let defaultResult: any = translations[defaultLang];

    // Iterar sobre las claves anidadas
    for (const k of keys) {
      result = result?.[k];
      defaultResult = defaultResult?.[k];
    }

    // Retorna el valor traducido o el valor en el idioma por defecto
    return result || defaultResult;
  };
}

export function useTranslatedPath(lang: keyof typeof translations) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
