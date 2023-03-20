export default [
  {
    path: "/utility/maintenance",
    name: "utility-maintenance",
    component: () =>
      import(
        /* webpackChunkName: "utility-maintenance" */ "@/views/utility/MaintenancePage.vue"
      ),
    meta: {
      layout: "auth",
      title: "MaintenancePage",
    },
  },
  {
    path: "/utility/coming-soon",
    name: "utility-soon",
    component: () =>
      import(
        /* webpackChunkName: "utility-soon" */ "@/views/utility/SoonPage.vue"
      ),
    meta: {
      layout: "auth",
      title: "Coming Soon",
    },
  },
  {
    path: "/utility/help",
    name: "utility-help",
    component: () =>
      import(
        /* webpackChunkName: "utility-help" */ "@/views/utility/HelpPage.vue"
      ),
    meta: {
      title: "Help",
      layout: "ui",
      category: "Utility",
    },
  },
];
