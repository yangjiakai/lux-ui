<template>
  <v-card @click="edit" class="pa-5 mt-4 card-shadow">
    <div class="font-weight-bold text-title">{{ card.title }}</div>
    <div class="text-content">{{ card.description }}</div>
  </v-card>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
const props = defineProps({
  // Card content to display
  card: {
    type: Object,
    default: () => ({}),
  },
});
const edit = () => {};
</script>

<style lang="scss" scoped>
.card-shadow {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}
</style>
