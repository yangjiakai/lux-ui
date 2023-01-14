export default [
  {
    path: "/landing",
    name: "landing-home",
    component: () =>
      import(
        /* webpackChunkName: "landing-home" */ "@/views/landing/HomePage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/pricing",
    name: "landing-pricing",
    component: () =>
      import(
        /* webpackChunkName: "landing-pricing" */ "@/views/landing/PricingPage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
];
