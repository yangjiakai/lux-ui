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
  {
    path: "/landing/hero",
    name: "landing-hero",
    component: () =>
      import(
        /* webpackChunkName: "landing-hero" */ "@/views/landing/hero/HeroPage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/feature",
    name: "landing-feature",
    component: () =>
      import(
        /* webpackChunkName: "landing-feature" */ "@/views/landing/feature/FeaturePage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
];
