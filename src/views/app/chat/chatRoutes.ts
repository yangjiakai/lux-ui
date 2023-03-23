export default [
  {
    path: "",
    component: () =>
      import(
        /* webpackChunkName: "apps-chat-channel" */ "@/views/app/chat/pages/ChatPage.vue"
      ),
  },
  {
    path: "base-channel",
    component: () =>
      import(
        /* webpackChunkName: "apps-chat-channel" */ "@/views/app/chat/pages/ChatPage.vue"
      ),
  },
  //   {
  //     path: "channel/:id",
  //     name: "apps-chat-channel",
  //     component: () =>
  //       import(
  //         /* webpackChunkName: "apps-chat-channel" */ "@/views/app/chat/pages/ChatPage.vue"
  //       ),
  //   },
];
