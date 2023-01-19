<template>
  <v-container>
    <!-- <Icon class="animate-icon" icon="logos:bamboo" /> -->

    <v-item-group selected-class="select-card">
      <div class="card-box d-flex flex-wrap">
        <template v-for="i in 30" :key="i">
          <v-item v-slot="{ selectedClass, toggle }">
            <v-card
              color="#E9E5DC"
              class="ma-5 shadow-1 card"
              :class="[selectedClass]"
              height="330"
              width="270"
              @click="toggle"
            >
              <v-img
                height="80%"
                cover
                :src="'https://picsum.photos/200/300?random=' + i"
              >
                <div class="d-flex">
                  <v-chip>5</v-chip>
                  <v-spacer></v-spacer>
                  <v-avatar size="50" color="red">
                    <!-- <img src="src" alt="alt"> -->
                  </v-avatar>
                </div>
                <div>
                  <span class="isLocked">&</span>
                </div>
              </v-img>
              <v-card-actions
                class="text-h4 font-weight-bold d-flex align-center justify-center"
              >
                Lv. {{ i }}
              </v-card-actions>
            </v-card>
          </v-item>
        </template>

        <!-- <div class="card" v-for="i in 30" :key="i">aa</div> -->
      </div>
    </v-item-group>
    <v-card
      color="grey"
      class="d-flex align-center justify-center"
      height="500"
    >
      <v-card class="anime-card shadow-1" color="white"> </v-card>
    </v-card>

    <v-card class="card-box d-flex flex-wrap" v-if="isFinished">
      <v-card v-for="image in filteredItems" :key="image.id">
        <v-img :src="image.urls.small"></v-img>
        <v-card-title>
          {{ image.user.username }}
        </v-card-title>
      </v-card>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { Icon, listIcons } from "@iconify/vue";

import { useAxios } from "@vueuse/integrations/useAxios";

const url = ref("https://api.unsplash.com/search/photos?page=1&query=chair");
const accessKey = ref("mfB0t1DgccWtivNuh8KD06FMIZcun7vE_x_BSYQrfq8");

const { data, isLoading, isFinished, execute } = useAxios(
  `${url.value}&client_id=${accessKey.value}`
);

console.log(data.value);

const filteredItems = computed(() => {
  let result = [];
  if (isFinished.value) {
    result = data.value.results;
    console.log(data.value);
  }
  return result;
});
</script>
<style scoped lang="scss">
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes breath {
  0% {
    border-color: #ccc;
  }

  50% {
    border-color: #000;
  }
  100% {
    border-color: #ccc;
  }
}

@keyframes wave {
  0% {
    box-shadow: 0 0 0 0px rgba(255, 255, 255, 1),
      0 0 0 20px rgba(255, 255, 255, 0.2), 0 0 0 40px rgba(255, 255, 255, 0.6),
      0 0 0 60px rgba(255, 255, 255, 0.4), 0 0 0 80px rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 0 80px rgba(255, 255, 255, 0),
      0 0 0 60px rgba(255, 255, 255, 0.2), 0 0 0 40px rgba(255, 255, 255, 0.4),
      0 0 0 20px rgba(255, 255, 255, 0.6), 0 0 0 0px rgba(255, 255, 255, 1);
  }
}

.animate-icon {
  animation: rotate 2s infinite;
  animation-timing-function: 1s ease-in-out;
}

.select-card {
  border: 3px solid #ccc;
  // animation: breath 3s infinite;
  animation: wave 1s;
  animation-timing-function: 1s ease-in-out;
}

.card {
  border-radius: 14px;
}

.anime-card {
  width: 400px;
  height: 200px;

  transition: 0.3s ease-in;
  &:hover {
    border-radius: 50%;
    height: 400px;
    transition: 0.3s ease-out;
  }
}
</style>
