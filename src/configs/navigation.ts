import menuUI from "./menus/ui.menu";
import menuApps from "./menus/apps.menu";
import menuPages from "./menus/pages.menu";
import menuCharts from "./menus/charts.menu";
import menuLanding from "./menus/landing.menu";
export default {
  menu: [
    {
      text: "",
      key: "",
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
      text: "UI - Theme Preview",
      items: menuUI,
    },
    {
      text: "Pages",
      key: "menu.pages",
      items: menuPages,
    },
    {
      text: "Charts",
      key: "menu.charts",
      items: menuCharts,
    },
    {
      text: "Landing Pages",
      items: [
        ...menuLanding,
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
  ],
};
