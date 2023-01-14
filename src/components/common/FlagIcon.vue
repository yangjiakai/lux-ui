<template>
  <span
    class="flag-icon"
    :class="[`fi-${flag}`, { 'flag-round': round }]"
  ></span>
</template>

<script setup lang="ts">
import "/node_modules/flag-icons/css/flag-icons.min.css";
const props = defineProps({
  // 数据
  // Country ISO
  flag: {
    type: String,
    default: "us",
  },
  // Circle flag or square
  round: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.flag-icon {
  height: 16px;
  width: 16px;
}
.flag-round {
  background-size: cover;
  border-radius: 100%;
  height: 16px;
  width: 16px;
}
</style>
