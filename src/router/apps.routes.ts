import unsplashRoutes from "@/views/app/unsplash/UnsplashRoutes";

export default [
  {
    path: "/apps/email",
    component: () =>
      import(
        /* webpackChunkName: "app-email" */ "@/views/app/email/EmailApp.vue"
      ),
    children: [],
  },
  {
    path: "/apps/chat",
    component: () =>
      import(/* webpackChunkName: "app-chat" */ "@/views/app/chat/ChatApp.vue"),
    children: [],
  },
  {
    path: "/apps/todo",
    component: () =>
      import(/* webpackChunkName: "app-todo" */ "@/views/app/todo/TodoApp.vue"),
    children: [],
  },
  {
    path: "/apps/nitori",
    component: () =>
      import(
        /* webpackChunkName: "app-nitori" */ "@/views/app/nitori/NitoriApp.vue"
      ),
    children: [],
  },
  {
    path: "/apps/booking",
    component: () =>
      import(
        /* webpackChunkName: "app-booking" */ "@/views/app/booking/BookingApp.vue"
      ),
    children: [],
  },
  {
    path: "/apps/ikea",
    component: () =>
      import(/* webpackChunkName: "app-ikea" */ "@/views/app/ikea/IkeaApp.vue"),
    children: [],
  },
  {
    path: "/apps/unsplash",
    component: () =>
      import(
        /* webpackChunkName: "app-unsplash" */ "@/views/app/unsplash/UnsplashApp.vue"
      ),
    children: [...unsplashRoutes],
  },
];
