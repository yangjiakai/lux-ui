<script setup>
import { ref } from "vue";
// import EditorMenu from "./EditorMenu.vue";
import { Icon } from "@iconify/vue";
const props = defineProps({ editor: Object });
const items = ref([
  {
    icon: " mdi-format-bold",
    title: "Bold",
    action: () => props.editor.chain().focus().toggleBold().run(),
    isActive: () => props.editor.isActive("bold"),
  },
  {
    icon: " mdi-format-italic",
    title: "Italic",
    action: () => props.editor.chain().focus().toggleItalic().run(),
    isActive: () => props.editor.isActive("italic"),
  },
  {
    icon: " mdi-format-strikethrough-variant",
    title: "Strike",
    action: () => props.editor.chain().focus().toggleStrike().run(),

    isActive: () => props.editor.isActive("strike"),
  },
  {
    icon: " mdi-code-tags",
    title: "Code",
    action: () => props.editor.chain().focus().toggleCode().run(),

    isActive: () => props.editor.isActive("code"),
  },
  {
    icon: " mdi-format-color-text",
    title: "Highlight",
    action: () => props.editor.chain().focus()?.toggleHighlight().run(),

    isActive: () => props.editor.isActive("highlight"),
  },
  {
    type: "divider",
  },
  {
    icon: "mdi-format-header-1",
    title: "Heading 1",
    action: () =>
      props.editor.chain().focus().toggleHeading({ level: 1 }).run(),

    isActive: () => props.editor.isActive("heading", { level: 1 }),
  },
  {
    icon: "mdi-format-header-2",
    title: "Heading 2",
    action: () =>
      props.editor.chain().focus().toggleHeading({ level: 2 }).run(),

    isActive: () => props.editor.isActive("heading", { level: 2 }),
  },
  {
    icon: "mdi-format-paragraph",
    title: "Paragraph",
    action: () => props.editor.chain().focus().setParagraph().run(),

    isActive: () => props.editor.isActive("paragraph"),
  },
  {
    icon: "mdi-format-list-bulleted",
    title: "Bullet List",
    action: () => props.editor.chain().focus().toggleBulletList().run(),

    isActive: () => props.editor.isActive("bulletList"),
  },
  {
    icon: "mdi-format-list-numbered",
    title: "Ordered List",
    action: () => props.editor.chain().focus().toggleOrderedList().run(),

    isActive: () => props.editor.isActive("orderedList"),
  },
  {
    icon: "mdi-format-list-checks",
    title: "Task List",
    action: () => props.editor.chain().focus()?.toggleTaskList().run(),

    isActive: () => props.editor.isActive("taskList"),
  },
  {
    icon: "mdi-code-braces",
    title: "Code Block",
    action: () => props.editor.chain().focus().toggleCodeBlock().run(),

    isActive: () => props.editor.isActive("codeBlock"),
  },
  {
    type: "divider",
  },
  {
    icon: "mdi-format-quote-open",
    title: "Blockquote",
    action: () => props.editor.chain().focus().toggleBlockquote().run(),

    isActive: () => props.editor.isActive("blockquote"),
  },
  {
    icon: "mdi-minus",
    title: "Horizontal Rule",
    action: () => props.editor.chain().focus().setHorizontalRule().run(),
  },
  {
    type: "divider",
  },
  {
    icon: "mdi-wrap",
    title: "Hard Break",
    action: () => props.editor.chain().focus().setHardBreak().run(),
  },
  {
    title: "Clear Format",
    icon: "mdi-format-clear",
    action: () =>
      props.editor.chain().focus().clearNodes().unsetAllMarks().run(),
  },
  {
    type: "divider",
  },
  {
    icon: "mdi-undo",
    title: "Undo",
    action: () => props.editor.chain().focus().undo().run(),
  },
  {
    icon: "mdi-redo",
    title: "Redo",
    action: () => props.editor.chain().focus().redo().run(),
  },
]);
</script>
<template>
  <perfect-scrollbar class="d-flex align-center menuBar">
    <template v-for="(item, index) in items">
      <v-divider
        thickness="3"
        class="mx-1"
        inset
        vertical
        v-if="item.type === 'divider'"
      ></v-divider>
      <v-btn
        :active="item?.isActive ? item.isActive() : null"
        icon
        rounded="0"
        variant="text"
        @click="item.action"
        v-else
      >
        <v-icon>{{ item.icon }}</v-icon>
        <v-tooltip
          activator="parent"
          location="top"
          :text="item.title"
        ></v-tooltip>
      </v-btn>
    </template>
  </perfect-scrollbar>
</template>
<style lang="scss">
.menuBar {
  padding: 8px;
  overflow: auto;
  border-radius: 12px 12px 0 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
