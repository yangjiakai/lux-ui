import { en as vuetifyEn, ja as vuetifyJa, zhHans as vuetifyZhHans } from "vuetify/locale";
import en from "@/locales/en";
import zhHans from "@/locales/zhHans";
import ja from "@/locales/ja";

type Messages = Record<string, unknown>;

const isObject = (value: unknown): value is Messages =>
  typeof value === "object" && value !== null;

const deepMerge = (base: Messages, override: Messages): Messages =>
  Object.fromEntries(
    [...new Set([...Object.keys(base), ...Object.keys(override)])].map((key) => {
      const a = base[key];
      const b = override[key];
      return [key, isObject(a) && isObject(b) ? deepMerge(a, b) : b ?? a];
    })
  );

// Use Vuetify's bundled component translations as the base so keys added in newer
// Vuetify versions resolve, while the app's own `$vuetify` wording still wins.
const withVuetifyMessages = (messages: Messages, vuetify: Messages): Messages => ({
  ...messages,
  $vuetify: deepMerge(vuetify, isObject(messages.$vuetify) ? messages.$vuetify : {}),
});

const enMessages = withVuetifyMessages(en, vuetifyEn);
const zhHansMessages = withVuetifyMessages(zhHans, vuetifyZhHans);
const jaMessages = withVuetifyMessages(ja, vuetifyJa);

const supported = ["en", "zhHans", "ja"];
let locale = "en";

try {
  const { 0: browserLang } = navigator.language.split("-");
  if (supported.includes(browserLang)) locale = browserLang;
} catch (e) {
  console.log(e);
}

export default {
  // current locale
  locale,

  // when translation is not available fallback to that locale
  fallbackLocale: "en",

  // availabled locales for user selection
  availableLocales: [
    {
      code: "en",
      flag: "us",
      name: "united-states",
      label: "English",
      messages: enMessages,
    },
    {
      code: "zhHans",
      flag: "cn",
      name: "china",
      label: "中文",
      messages: zhHansMessages,
    },
    {
      code: "ja",
      flag: "jp",
      name: "japan",
      label: "日本語",
      messages: jaMessages,
    },
  ],
  messages: {
    en: enMessages,
    zhHans: zhHansMessages,
    ja: jaMessages,
  },
};
