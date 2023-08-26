import { createI18n } from "vue-i18n";
import locales from "@/configs/locales";
const messages = locales.messages;
const i18n = createI18n({
  legacy: false,
  locale: locales.locale, // 设置默认语言
  fallbackLocale: locales.fallbackLocale, // 设置回退语言
  messages,
});

export default i18n;
