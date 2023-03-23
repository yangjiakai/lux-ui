<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import type { User, Message } from "../chatTypes";
import { useChatStore } from "../chatStore";
import { createCompletion } from "../openaiApi";

const chatStore = useChatStore();
const userMessage = ref("");
const aiMessage = ref("");

const createMessage = (user: User, text: string) => {
  const message: Message = {
    id: "_" + Math.random().toString(36).substring(2, 11),
    user,
    text,
    timestamp: new Date().getTime(),
  };
  return message;
};

const user = ref({
  id: 1,
  name: "YOU",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvG_dOM4nJ0Jx_Eu0cOfqweC7cuDsjw9u5um-ClOM&s",
});

const bot = ref({
  id: 2,
  name: "AI",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrAiMevuwrbU9o0Ck2paVf4ufHUDb2dU48MEDrAlrQw&s",
});

const emits = defineEmits(["scroll"]);

const sendMessage = () => {
  // 判断是否为空
  if (!userMessage.value) return;

  // 发送User Message
  chatStore.addToHistory(createMessage(user.value, userMessage.value));

  // AI等待Message
  aiMessage.value = "Please wait a moment ......";
  chatStore.addToHistory(createMessage(bot.value, aiMessage.value));

  // 请求AI回答
  getCompletion();

  // 清空Input
  userMessage.value = "";
};

const getCompletion = async () => {
  const response = await createCompletion(userMessage.value);
  aiMessage.value = response.data.choices[0].message.content;
  // 清空临时Message
  chatStore.removeLatestMessage();
  // 发送Ai Message
  chatStore.addToHistory(createMessage(bot.value, aiMessage.value));
  // 错误处理
};

watch(
  () => chatStore.chatHistory,
  () => {
    nextTick(() => {
      emits("scroll");
    });
  },
  { deep: true }
);
</script>

<template>
  <v-text-field
    variant="solo"
    ref="input"
    v-model="userMessage"
    placeholder="SendMessage"
    hide-details
    @keyup.enter="sendMessage"
    class="mx-2"
  >
    <template #prepend-inner>
      <v-icon>mdi-microphone</v-icon>
    </template>

    <template #append-inner>
      <v-icon class="mr-1">mdi-emoticon</v-icon>
      <v-icon @click="sendMessage">mdi-send</v-icon>
    </template>
  </v-text-field>
</template>

<style scoped lang="scss"></style>
