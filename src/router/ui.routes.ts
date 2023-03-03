export default [
  {
    path: "/ui/colors",
    name: "ui-colors",
    component: () =>
      import(/* webpackChunkName: "ui-colors" */ "@/views/ui/ColorsPage.vue"),
    meta: {
      layout: "ui",
      category: "UI",
      title: "Colors",
    },
  },
  {
    path: "/ui/gradient",
    name: "ui-gradient",
    component: () =>
      import(
        /* webpackChunkName: "ui-gradient" */ "@/views/ui/GradientPage.vue"
      ),
    meta: {
      layout: "ui",
      category: "UI",
      title: "Gradients",
    },
  },
  {
    path: "/ui/card",
    name: "ui-card",
    component: () =>
      import(/* webpackChunkName: "ui-card" */ "@/views/ui/CardPage.vue"),
    meta: {
      layout: "ui",
      category: "UI",
      title: "CardPage",
    },
  },
  {
    path: "/ui/grids",
    name: "ui-grids",
    component: () =>
      import(/* webpackChunkName: "ui-grids" */ "@/views/ui/GridsPage.vue"),
    meta: {
      layout: "ui",
      category: "UI",
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
      layout: "ui",
      category: "UI",
      title: "ScrollBar",
    },
  },
  {
    path: "/ui/water-fall",
    name: "ui-water-fall",
    component: () =>
      import(
        /* webpackChunkName: "ui-water-fall" */ "@/views/ui/WaterFall.vue"
      ),
    meta: {
      layout: "ui",
      category: "UI",
      title: "WaterFall",
    },
  },
  {
    path: "/ui/masonry",
    name: "ui-masonry",
    component: () =>
      import(/* webpackChunkName: "ui-masonry" */ "@/views/ui/Masonry.vue"),
    meta: {
      layout: "ui",
      category: "UI",
      title: "Masonry",
    },
  },
  {
    path: "/ui/virtual-list",
    name: "ui-virtual-list",
    component: () =>
      import(
        /* webpackChunkName: "ui-virtual-list" */ "@/views/ui/VirtualList.vue"
      ),
    meta: {
      layout: "ui",
      category: "UI",
      title: "VirtualList",
    },
  },
  {
    path: "/ui/virtual-scroller",
    name: "ui-virtual-scroller",
    component: () =>
      import(
        /* webpackChunkName: "ui-virtual-scroller" */ "@/views/ui/VirtualScroller.vue"
      ),
    meta: {
      layout: "ui",
      category: "UI",
      title: "VirtualScroller",
    },
  },
];
