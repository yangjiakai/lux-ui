<template>
  <!-- loading spinner -->
  <div
    v-if="loading"
    class="h-full d-flex flex-grow-1 align-center justify-center"
  >
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <div v-else>
    <h6 class="text-h6 pa-5 d-flex align-center">
      <span class="flex-1 font-weight-bold">Activity</span>
      <v-menu location="bottom end" transition="slide-x-transition">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            size="small"
            variant="text"
            icon="mdi-dots-vertical"
            rounded
            color="primary"
            class="my-n2"
          ></v-btn>
        </template>
        <v-list density="compact">
          <v-list-item @click="$emit('edit')">
            <v-list-item-title class="d-inline-flex align-center">
              <Icon
                icon="flat-color-icons:refresh"
                :rotate="2"
                :horizontalFlip="true"
                :verticalFlip="true"
                class="mr-1"
              />
              <span> Refresh</span>
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="$emit('delete')">
            <v-list-item-title class="d-inline-flex align-center">
              <Icon
                icon="icon-park:clear-format"
                :rotate="2"
                :horizontalFlip="true"
                :verticalFlip="true"
                :inline="true"
                class="mr-1"
              />
              Clear</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </h6>
    <v-timeline
      class="time-line text-body-2"
      density="compact"
      side="end"
      truncate-line="start"
    >
      <v-timeline-item
        v-for="activity in activityList"
        :key="activity.what"
        :dot-color="activity.color"
        size="small"
      >
        <!-- <template v-slot:opposite> Opposite content </template> -->
        <div>
          <div class="what">
            <b>{{ activity.what }}</b>
          </div>
          <div>
            <div class="where">{{ activity.where }}</div>
            <div class="text-grey">{{ activity.when }}</div>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
const loading = ref(true);
const activityList = [
  {
    what: "New Emoji",
    where: "Chat App",
    when: "4pm",
    color: "primary",
  },
  {
    what: "Design Stand Up",
    where: "Chat App",
    when: "2pm",
    color: "purple",
  },
  {
    what: "Lunch Break",
    where: "",
    when: "11am",
    color: "primary",
  },
  {
    what: "Answer Emails",
    where: "Work work",
    when: "9pm",
    color: "teal lighten-3",
  },
];

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>

<style lang="scss" scoped>
.time-line {
  margin-left: 60px;
}
</style>
