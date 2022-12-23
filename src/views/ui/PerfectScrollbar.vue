<template>
  <v-container>
    <v-row>
      <v-col class="mt-2" cols="6">
        <v-card class="my-card" height="500" width="800">
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
        </v-card>
      </v-col>
      <v-col class="mt-2" cols="6">
        <v-card class="my-card2" height="500" width="800">
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
          <h1 class="text-h2">PerfectScrollbar</h1>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { ref, onMounted, inject, onBeforeUnmount } from "vue";
import PerfectScrollbar from "perfect-scrollbar";
const userName = inject("userName");
const scrollbar = ref(null);
onMounted(() => {
  const container = document.querySelector(".my-card2");
  scrollbar.value = new PerfectScrollbar(container);
});

onBeforeUnmount(() => {});
</script>
<style scoped>
.my-card {
  overflow: scroll;
}

.my-card::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.my-card::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>
