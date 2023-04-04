<!--
* @Component: CopyLabel
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
const { copy } = useClipboard();

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
const copyText = () => {
  console.log(props.text);
  copy(props.text);

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

    <v-tooltip location="bottom" text="Copy">
      <template #activator="{ props }">
        <v-btn color="primary" v-bind="props" icon @click="copyText()"
          ><v-icon>mdi-content-copy</v-icon>
        </v-btn>
      </template>
    </v-tooltip>
  </div>
</template>

<style scoped lang="scss">
.text {
  cursor: pointer;
  display: inline-block;
}
</style>
