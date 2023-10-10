import { Language } from "./languages-types";

import Cookies from "js-cookie";

const LANGUAGE_COOKIE_KEY = "language";

export const getLanguage = () => Cookies.get(LANGUAGE_COOKIE_KEY);

export const setLanguage = (language: Language) => {
  Cookies.set(LANGUAGE_COOKIE_KEY, language);
};

export const fallbackLng: Language = Language.Russian;
export const languages: Language[] = [fallbackLng, Language.Uzbek];
