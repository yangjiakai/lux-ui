import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

import Layout from "@/layouts";
import AuthRoutes from "./auth.routes";
import UIRoutes from "./ui.routes";

/**
 * Note: 路由配置项
 *
 * hidden: true                     // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true                 // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect             // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'               // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * query: '{"id": 1, "name": "ry"}' // 访问路由的默认传递参数
 * roles: ['admin', 'common']       // 访问路由的角色权限
 * permissions: ['a:a:a', 'b:b:b']  // 访问路由的菜单权限
 * meta : {
    noCache: true                   // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
    title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'                // 设置该路由的图标，对应路径src/assets/icons/svg
    breadcrumb: false               // 如果设置为false，则不会在breadcrumb面包屑中显示
    activeMenu: '/system/user'      // 当路由设置了该属性，则会高亮相对应的侧边栏。
  }
 */

export const constantRoutes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/landPage.vue"),
    // redirect: "/",
    // children: [
    //   {
    //     path: "/home",
    //     name: "home",
    //     component: () =>
    //       import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    //     meta: {
    //       index: 1,
    //     },
    //   },
    //   {
    //     path: "/order",
    //     name: "order",
    //     component: () =>
    //       import(/* webpackChunkName: "order" */ "@/views/order/index.vue"),
    //     meta: {
    //       index: 1,
    //     },
    //   },
    //   {
    //     path: "/child",
    //     name: "child",
    //     component: () =>
    //       import(/* webpackChunkName: "child" */ "@/views/child/index.vue"),
    //     meta: {
    //       index: 3,
    //     },
    //   },
    //   {
    //     path: "/form",
    //     name: "form",
    //     component: () =>
    //       import(/* webpackChunkName: "form" */ "@/views/form/index.vue"),
    //     meta: {
    //       index: 4,
    //     },
    //   },
    // ],
  },
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
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () =>
  //     import(/* webpackChunkName: "login" */ "@/views/login/index.vue"),

  //   meta: {
  //     index: 1,
  //   },
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    meta: {
      layout: "simple",
    },
    component: () =>
      import(
        /* webpackChunkName: "error" */ "@/views/pages/error/NotFoundPage.vue"
      ),
  },
  // {
  //   path: "/test",
  //   name: "test",

  //   component: () =>
  //     import(
  //       /* webpackChunkName: "error" */ "@/views/pages/error/NotFoundPage.vue"
  //     ),
  //   meta: {
  //     layout: "error",
  //   },
  //   children: [...AuthRoutes, ...UIRoutes],
  // },
  ...AuthRoutes,
  ...UIRoutes,
];

// 动态路由，基于用户权限动态去加载
export const dynamicRoutes = [
  {
    path: "/system/user-auth",
    component: Layout,
    hidden: true,
    permissions: ["system:user:edit"],
    children: [
      {
        path: "role/:userId(\\d+)",
        component: () => import("@/views/system/user/authRole"),
        name: "AuthRole",
        meta: { title: "分配角色", activeMenu: "/system/user" },
      },
    ],
  },
  {
    path: "/system/role-auth",
    component: Layout,
    hidden: true,
    permissions: ["system:role:edit"],
    children: [
      {
        path: "user/:roleId(\\d+)",
        component: () => import("@/views/system/role/authUser"),
        name: "AuthUser",
        meta: { title: "分配用户", activeMenu: "/system/role" },
      },
    ],
  },
  {
    path: "/system/dict-data",
    component: Layout,
    hidden: true,
    permissions: ["system:dict:list"],
    children: [
      {
        path: "index/:dictId(\\d+)",
        component: () => import("@/views/system/dict/data"),
        name: "Data",
        meta: { title: "字典数据", activeMenu: "/system/dict" },
      },
    ],
  },
  {
    path: "/monitor/job-log",
    component: Layout,
    hidden: true,
    permissions: ["monitor:job:list"],
    children: [
      {
        path: "index",
        component: () => import("@/views/monitor/job/log"),
        name: "JobLog",
        meta: { title: "调度日志", activeMenu: "/monitor/job" },
      },
    ],
  },
  {
    path: "/tool/gen-edit",
    component: Layout,
    hidden: true,
    permissions: ["tool:gen:edit"],
    children: [
      {
        path: "index/:tableId(\\d+)",
        component: () => import("@/views/tool/gen/editTable"),
        name: "GenEdit",
        meta: { title: "修改生成配置", activeMenu: "/tool/gen" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  // hash模式：createWebHashHistory，history模式：createWebHistory
  // process.env.NODE_ENV === "production"
  //   ? createWebHistory()
  //   : createWebHashHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
