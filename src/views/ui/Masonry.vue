<template>
  <v-container>
    <v-card
      v-if="isLoading"
      class="d-flex align-center justify-center"
      color="primary"
      min-height="1000"
    >
      <Loading />
    </v-card>
    <v-card v-else>
      <masonry-wall :items="filteredItems" :ssr-columns="1" :padding="30">
        <template #default="{ item }">
          <v-card class="ma-3">
            <v-img
              class="align-end text-white"
              :src="item.download_url"
              :lazy-src="item.download_url"
              cover
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey-lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
              <v-card-title>Title{{ item.author }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
              The {{ item.id }} item
            </v-card-subtitle>

            <v-card-text>
              <div>height:{{ item.height }} width:{{ item.width }}</div>

              <div>{{ item.download_url }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary"> Share </v-btn>

              <v-btn color="primary"> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </masonry-wall>
    </v-card>
    <v-divider class="my-5"></v-divider>
    <h2>Mock</h2>
    <!-- <masonry-wall
      :items="items"
      :ssr-columns="1"
      :column-width="300"
      :padding="30"
    >
      <template #default="{ item, index }">
        <v-card class="ma-3" max-width="400">
          <v-img
            class="align-end text-white"
            :src="
              index % 2 === 0
                ? 'https://picsum.photos/200/300?random=' + index
                : 'https://picsum.photos/200?random=' + index
            "
            :lazy-src="
              index % 2 === 0
                ? 'https://picsum.photos/200/300?random=' + index
                : 'https://picsum.photos/200?random=' + index
            "
            cover
          >
            <v-card-title>Title{{ item.color }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4"> The {{ index }} item </v-card-subtitle>

          <v-card-text>
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn :color="item.color"> Share </v-btn>

            <v-btn :color="item.color"> Explore </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </masonry-wall> -->
  </v-container>
</template>
<script setup lang="ts">
import { useAxios } from "@vueuse/integrations/useAxios";
import Loading from "@/components/loading/Loading01.vue";

// const { data, isLoading, isFinished, execute } = useAxios(
//   "https://jsonplaceholder.typicode.com/todos"
// );
const { data, isLoading } = useAxios(
  "https://picsum.photos/v2/list?page=2&limit=20"
);

// const { data, isLoading, isFinished, execute } = useAxios(
//   "`https://api.unsplash.com/v2/list?page=2&limit=5`"
// );

const filteredItems: any = computed(() => {
  return data;
});

// const generateRandomColor = () => {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// };

// const items = Array.from({ length: 20 }, () => ({
//   color: generateRandomColor(),
// }));
</script>
<style scoped></style>
