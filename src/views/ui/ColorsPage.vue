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
    <v-card color="black" height="500">
      <span class="loader"></span>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { Icon, listIcons } from "@iconify/vue";
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

.loader {
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 6rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;

  animation: pulsOut 1.8s ease-in-out;
  filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.75));
}
.loader:before {
  width: 100%;
  padding-bottom: 100%;
  box-shadow: inset 0 0 0 1rem #fff;
  animation-name: pulsIn;
}
.loader:after {
  width: calc(100% - 2rem);
  padding-bottom: calc(100% - 2rem);
  box-shadow: 0 0 0 0 #fff;
}

@keyframes pulsIn {
  0% {
    box-shadow: inset 0 0 0 1rem #fff;
    opacity: 1;
  }
  50%,
  100% {
    box-shadow: inset 0 0 0 0 #fff;
    opacity: 0;
  }
}

@keyframes pulsOut {
  0%,
  50% {
    box-shadow: 0 0 0 0 #fff;
    opacity: 0;
  }
  100% {
    box-shadow: 0 0 0 1rem #fff;
    opacity: 1;
  }
}
</style>
