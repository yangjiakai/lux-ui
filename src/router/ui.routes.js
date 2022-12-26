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
  {
    path: "/ui/waterfull",
    name: "ui-waterfull",
    component: () =>
      import(/* webpackChunkName: "ui-waterfull" */ "@/views/ui/WaterFull.vue"),
    meta: {
      layout: "UI",
      title: "WaterFull",
    },
  },
  {
    path: "/ui/masonry",
    name: "ui-masonry",
    component: () =>
      import(/* webpackChunkName: "ui-masonry" */ "@/views/ui/Masonry.vue"),
    meta: {
      layout: "UI",
      title: "Masonry",
    },
  },
];
