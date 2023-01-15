<!--
* @Component: CopyLabel
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
const { copy } = useClipboard();

// ToolTip
const tooltip = ref("Copy");
// SnackBar
const snackbar = ref(false);
const timeout = ref("1000");
const copiedText = "Copied to clipboard!";
// Copy Animation Flag
const heartBeat = ref(false);
// Props
const props = defineProps({
  // Text to copy to clipboard
  text: {
    type: String,
    default: "",
  },
});

// Copy Text
const copyText = (text: string) => {
  copy(text);
  heartBeat.value = true;
  snackbar.value = true;
  tooltip.value = "Copied!";
  setTimeout(() => {
    heartBeat.value = false;
    tooltip.value = "Copy!";
  }, 1000);
};
</script>

<template>
  <v-snackbar v-model="snackbar" :timeout="timeout">
    {{ copiedText }}
    <template v-slot:actions>
      <v-btn color="blue" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <v-tooltip location="bottom left">
    <template v-slot:activator="{ props }">
      <span
        :class="{
          heartBeat: heartBeat === true,
        }"
        class="text"
        v-bind="props"
        @click.stop.prevent="copyText(text)"
      >
        {{ text }}
      </span>
    </template>
    <span>{{ tooltip }}</span>
  </v-tooltip>
</template>

<style scoped lang="scss">
.text {
  cursor: pointer;
  display: inline-block;
  border-bottom: 1px dashed;
}

.heartBeat {
  animation: heartBeat 0.5s;
}

@keyframes heartBeat {
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
}
</style>
