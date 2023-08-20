<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import { useAutoAnimate } from "@formkit/auto-animate/vue";

const items = ref(["React", "Vue", "Svelte", "Angular"]);

function sortAsc() {
  items.value.sort();
}
function sortDesc() {
  items.value.sort().reverse();
}

const remove = (item: string) => {
  const index = items.value.indexOf(item);
  items.value.splice(index, 1);
};

const [parent] = useAutoAnimate();

const list = ref<HTMLElement>();

// onMounted(() => autoAnimate(list.value));
</script>

<template>
  <div class="">
    <div>
      <v-btn class="mr-1" color="info" @click="sortAsc">Sort A-Z ↑</v-btn>
      <v-btn class="mr-1" color="success" @click="sortDesc">Sort Z-A ↑</v-btn>
      <!-- Add -->
      <v-btn color="primary" @click="items.unshift('New')">Add</v-btn>
    </div>

    <div ref="parent" class="d-flex">
      <v-card
        class="ma-2"
        width="200"
        height="200"
        v-for="item in items"
        :key="item"
        @click="remove(item)"
      >
        <v-btn color="error" @click="remove(item)">Remove</v-btn>
        <v-card-title>
          {{ item }}
        </v-card-title>
      </v-card>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
