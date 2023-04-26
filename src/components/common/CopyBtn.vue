<!--
* @Component: CopyLabel
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import clipboard from '@/utils/clipboardUtils';

// SnackBar
const snackbar = ref(false);
const timeout = ref("1000");
const copiedText = "Copied to clipboard!";

// Props
const props = defineProps({
  // Text to copy to clipboard
  text: {
    type: String,
    default: "",
  },
});

// Copy Text
const copyText = (event: Event) => {
  console.log(props.text);
  clipboard(props.text, event);

  snackbar.value = true;
};
</script>

<template>
  <div>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ copiedText }}
      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-btn v-bind="$attrs" icon @click="copyText($event)"
      ><v-icon>mdi-content-copy</v-icon>
      <v-tooltip activator="parent" location="bottom" text="Copy"></v-tooltip>
    </v-btn>
  </div>
</template>

<style scoped lang="scss">
.text {
  cursor: pointer;
  display: inline-block;
}
</style>
