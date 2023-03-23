<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import Message from "./Message.vue";
import { useChatStore } from "../chatStore";
const chatStore = useChatStore();

const user = ref({
  id: 1,
  name: "YOU",
  avatar: "https://avatars.githubusercontent.com/u/35951244?v=4",
});

const bot = ref({
  id: 2,
  name: "AI",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrAiMevuwrbU9o0Ck2paVf4ufHUDb2dU48MEDrAlrQw&s",
});
</script>

<template>
  <transition-group name="list">
    <Message
      v-for="message in chatStore.chatHistory"
      :key="message.id"
      :message="message"
      class="my-4 d-flex"
    />
  </transition-group>
</template>

<style scoped lang="scss"></style>
