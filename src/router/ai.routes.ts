// users Data Page
export default [
  {
    path: "/ai/chatbot_v1",
    component: () => import("@/views/chatgpt/ChatBotV1.vue"),
    meta: {
      requiresAuth: true,
      layout: "landing",
      category: "AI",
      title: "ChatBotV1",
    },
  },
  {
    path: "/ai/chatbot_v2",
    component: () => import("@/views/chatgpt/ChatBotV2.vue"),
    meta: {
      requiresAuth: true,
      layout: "landing",
      category: "AI",
      title: "ChatBotV2",
    },
  },
  // vioce bot
  {
    path: "/ai/voice-bot",
    component: () => import("@/views/chatgpt/VoiceBot.vue"),
    meta: {
      requiresAuth: true,
      layout: "landing",
      category: "AI",
      title: "VoiceBot",
    },
  },
  // image bot
  {
    path: "/ai/image-bot",
    component: () => import("@/views/chatgpt/ImageBot.vue"),
    meta: {
      requiresAuth: true,
      layout: "landing",
      category: "AI",
      title: "ImageBot",
    },
  },
  // chart bot
  {
    path: "/ai/chart-bot",
    component: () => import("@/views/chatgpt/ChartBot.vue"),
    meta: {
      requiresAuth: true,
      layout: "landing",
      category: "AI",
      title: "ChartBot",
    },
  },
];
