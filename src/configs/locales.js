import en from "../translations/en";
import zhHans from "../translations/zhHans";
import ja from "../translations/ja";

const supported = ["en", "zhHans", "ja"];
let locale = "en";

try {
  // get browser default language
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
      label: "English",
      messages: en,
    },
    {
      code: "zhHans",
      flag: "cn",
      label: "中文",
      messages: zhHans,
    },
    {
      code: "ja",
      flag: "jp",
      label: "日本語",
      messages: ja,
    },
  ],
};
