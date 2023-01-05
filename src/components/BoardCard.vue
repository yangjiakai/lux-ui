<template>
  <v-card @click="edit">
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
