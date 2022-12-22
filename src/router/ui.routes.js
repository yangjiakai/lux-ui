export default [
  {
    path: "/ui/colors",
    name: "ui-colors",
    component: () =>
      import(/* webpackChunkName: "ui-colors" */ "@/views/ui/ColorsPage.vue"),
  },
  {
    path: "/ui/grids",
    name: "ui-grids",

    component: () =>
      import(/* webpackChunkName: "ui-grids" */ "@/views/ui/GridsPage.vue"),
  },
];
