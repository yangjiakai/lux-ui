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
    path: "/ui/water-fall",
    name: "ui-water-fall",
    component: () =>
      import(
        /* webpackChunkName: "ui-water-fall" */ "@/views/ui/WaterFall.vue"
      ),
    meta: {
      layout: "UI",
      title: "WaterFall",
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
  {
    path: "/ui/virtual-list",
    name: "ui-virtual-list",
    component: () =>
      import(
        /* webpackChunkName: "ui-virtual-list" */ "@/views/ui/VirtualList.vue"
      ),
    meta: {
      layout: "UI",
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
      layout: "UI",
      title: "VirtualScroller",
    },
  },
];
