export default [
  {
    path: "/ui/colors",
    name: "ui-colors",
    component: () =>
      import(/* webpackChunkName: "ui-colors" */ "@/views/ui/ColorsPage.vue"),
    meta: {
      layout: "UI",
      title: "Colors",
    },
  },
  {
    path: "/ui/grids",
    name: "ui-grids",
    component: () =>
      import(/* webpackChunkName: "ui-grids" */ "@/views/ui/GridsPage.vue"),
    meta: {
      layout: "UI",
      title: "Grids",
    },
  },
  {
    path: "/ui/scrollbar",
    name: "ui-scrollbar",
    component: () =>
      import(
        /* webpackChunkName: "ui-scrollbar" */ "@/views/ui/PerfectScrollbar.vue"
      ),
    meta: {
      layout: "UI",
      title: "ScrollBar",
    },
  },
];
