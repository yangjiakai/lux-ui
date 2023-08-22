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

const dialog = ref(false);
// onMounted(() => autoAnimate(list.value));
</script>

<template>
  <div class="">
    <div>
      <v-btn class="mr-1" color="info" @click="sortAsc">Sort A-Z ↑</v-btn>
      <v-btn class="mr-1" color="success" @click="sortDesc">Sort Z-A ↑</v-btn>
      <!-- Add -->
      <v-btn color="primary" @click="items.unshift('New')">Add</v-btn>
      <v-btn color="primary" @click="dialog = true"> Open Dialog </v-btn>
      <v-dialog v-model="dialog" width="auto">
        <v-card height="800px">
          <v-card-title> title </v-card-title>
          <v-divider></v-divider>
          <perfect-scrollbar style="height: 300px" class="pa-3">
            <v-text-field label="item1"></v-text-field>
            <v-text-field label="item1"></v-text-field>
            <v-text-field label="item1"></v-text-field>
            <v-text-field label="item1"></v-text-field>
            <v-text-field label="item1"></v-text-field>
            <v-text-field label="item1"></v-text-field>
          </perfect-scrollbar>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn
              variant="elevated"
              color="primary"
              block
              @click="dialog = false"
              >Close Dialog</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
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
