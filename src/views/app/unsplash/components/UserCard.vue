<!--
* @Component: UserCard
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const props = defineProps({
  // Card content to display
  photo: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="">
    <v-card class="shadow-1">
      <v-img :src="photo.urls.small" height="400" cover aspect-ratio="1/2">
        <v-card class="photo-card text-white">
          <div class="card-top">
            <v-spacer></v-spacer>

            <v-btn icon variant="text">
              <v-icon
                v-if="photo.liked_by_user"
                color="pink"
                icon="mdi-heart"
                class="heartBeat"
              ></v-icon>
              <v-icon v-else icon="mdi-heart-outline"></v-icon>
              <v-tooltip
                activator="parent"
                location="bottom"
                class=""
                :text="photo.liked_by_user ? 'Liked' : 'Like'"
              ></v-tooltip>
            </v-btn>
            <v-tooltip location="bottom" text="Add To Collection">
              <template v-slot:activator="{ props }">
                <v-btn variant="text" v-bind="props" icon="mdi-plus"> </v-btn>
              </template>
            </v-tooltip>
          </div>

          <v-spacer></v-spacer>
          <div class="card-bottom">
            <v-avatar>
              <v-img
                :src="photo.user.profile_image.small"
                :lazy-src="photo.user.profile_image.small"
                alt="alt"
              ></v-img>
            </v-avatar>
            <div class="flex-1 mx-3 text-white">
              {{ photo.user.username }}
            </div>
            <v-tooltip location="bottom" text="Download">
              <template v-slot:activator="{ props }">
                <v-btn variant="text" v-bind="props" icon="mdi-download">
                </v-btn>
              </template>
            </v-tooltip>
          </div>
        </v-card>
      </v-img>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
.photo-card {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  padding: 1rem;
  opacity: 0;
  cursor: zoom-in;
  &:hover {
    opacity: 1;
  }

  .card-top,
  .card-bottom {
    display: flex;
    align-items: center;
  }
}
</style>
