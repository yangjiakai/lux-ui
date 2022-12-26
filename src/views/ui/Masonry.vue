<template>
  <v-container>
    <masonry-wall
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
    </masonry-wall>
  </v-container>
</template>
<script setup>
const generateRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const items = Array.from({ length: 20 }, () => ({
  color: generateRandomColor(),
}));
</script>
<style scoped></style>
