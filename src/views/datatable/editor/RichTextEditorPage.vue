<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import EditorMenubar from "@/components/RichEditorMenubar.vue";
import MdEditorCard from "./MdEditorCard.vue";
const editor = useEditor({
  extensions: [StarterKit],
  content: `
  <h2>Hi there,</h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there
        are all kind of basic text styles you’d probably expect from a text
        editor. But wait until you see the lists:
      </p>
      <ul>
        <li>That’s a bullet list with one …</li>
        <li>… or two list items.</li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more.
        Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg
        though. Give it a try and click a little bit around. Don’t forget to
        check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
      `,
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card min-height="90vh">
          <v-card-title>
            <h2 class="font-weight-bold pa-3">MdEditor</h2>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="mt-8"> <MdEditorCard /> </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card min-height="90vh">
          <v-card-title>
            <h2 class="font-weight-bold pa-3">tiptap</h2>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="mt-8">
            <div v-if="editor">
              <EditorMenubar :editor="editor" />
            </div>
            <div class="pa-5">
              <editor-content :editor="editor" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss"></style>
