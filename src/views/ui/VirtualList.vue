<template>
  <v-container>
    <v-card height="1000" elevation="6">
      <v-text-field
        label="Jump to index"
        v-model="index"
        placeholder="Index"
        type="number"
      ></v-text-field>
      <v-btn color="success" @click="handleScrollTo">Go</v-btn>
      <div>
        <div class="inline-block mr-4">
          Filter list by size
          <input
            v-model="search"
            placeholder="e.g. small, medium, large"
            type="search"
          />
        </div>
      </div>
      <div v-bind="containerProps" style="height: 700px; overflow: auto">
        <div v-bind="wrapperProps">
          <v-row>
            <v-col
              cols="12"
              xs="6"
              sm="3"
              md="2"
              v-for="item in list"
              :key="item.index"
            >
              <v-card height="600" class="pa-5" elevation="4">
                <v-img
                  class="align-end text-white"
                  :src="'https://picsum.photos/200/300?random=' + item.index"
                  :lazy-src="
                    'https://picsum.photos/200/300?random=' + item.index
                  "
                  cover
                >
                  <v-card-title>Title{{ item.index }}</v-card-title>
                </v-img>
                Row: {{ item.data.size }}
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-card>
  </v-container>
</template>
<script setup>
import { useVirtualList } from "@vueuse/core";
import { ref, computed } from "vue";

const index = ref();
const search = ref("");

const allItems = Array.from(Array(9999).keys()).map((i) => ({
  height: i % 2 === 0 ? 42 : 84,
  size: i % 2 === 0 ? "small" : "large",
}));

const filteredItems = computed(() => {
  return allItems.filter((item) =>
    item.size.startsWith(search.value.toLowerCase())
  );
});

const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
  filteredItems,
  {
    itemHeight: (i) => filteredItems.value[i].height + 8,
    overscan: 10,
  }
);

const handleScrollTo = () => {
  scrollTo(index.value);
};
</script>
