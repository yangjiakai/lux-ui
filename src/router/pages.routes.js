export default [
  {
    path: "/dashboard",
    component: () => import("@/views/pages/DashBoard.vue"),
  },
  {
    path: "/pages/page1",
    component: () => import("@/views/pages/Page1.vue"),
  },
  {
    path: "/pages/form",
    component: () => import("@/views/pages/Form.vue"),
  },
  {
    path: "/wireFrames/threeColumn",
    component: () => import("@/views/wireFrames/ThreeColumn.vue"),
  },
  {
    path: "/wireFrames/pageAnchorJump",
    component: () => import("@/views/wireFrames/PageAnchorJump.vue"),
  },
];
