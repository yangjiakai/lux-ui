import menuUI from "./menus/ui.menu";
import menuApps from "./menus/apps.menu";
import menuPages from "./menus/pages.menu";

export default {
  menu: [
    {
      text: "",
      keys: "",
      items: [
        {
          key: "menu.dashboard",
          text: "Dashboard",
          link: "/dashboard",
          icon: "mdi-view-dashboard-outline",
        },
      ],
    },
    {
      text: "Apps",
      items: menuApps,
    },
    {
      text: "Landing Pages",
      items: [
        {
          icon: "mdi-airplane-landing",
          key: "menu.landingPage",
          text: "Landing Page",
          link: "/landing",
        },
        {
          icon: "mdi-currency-usd",
          key: "menu.pricingPage",
          text: "Pricing Page",
          link: "/landing/pricing",
        },
      ],
    },
    {
      text: "UI - Theme Preview",
      items: menuUI,
    },
    {
      text: "Pages",
      key: "menu.pages",
      items: menuPages,
    },
  ],
};
