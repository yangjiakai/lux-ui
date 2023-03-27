<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const editor = useEditor({
  content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
  extensions: [StarterKit.configure({})],
});

const formatting = ref([]);
const alignment = ref([]);
</script>

<template>
  <div class="">
    <v-card class="pa-5" height="500"> </v-card>
  </div>
</template>

<style scoped lang="scss"></style>
