<template>
  <!-- loading spinner -->
  <div
    v-if="loading"
    class="h-full d-flex flex-grow-1 align-center justify-center"
  >
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <div v-else>
    <v-text-field
      class="shadow-1"
      variant="flat"
      hide-details
      comfortable
      prepend-inner-icon="mdi-magnify"
      placeholder="Filter Tasks"
      v-model="searchKey"
    ></v-text-field>
    <div class="todo-list">
      <div v-for="item in todoList" :key="item.title">
        <div class="ma-5" v-if="item.type === 'subheader'">
          {{ item.title }}
        </div>
        <v-divider v-else-if="item.type === 'divider'"></v-divider>
        <div class="todo-item d-flex align-center pa-5" v-else>
          <v-avatar size="40" color="red">
            <v-img :src="item.prependAvatar" alt="alt" />
          </v-avatar>
          <div class="flex-1 mx-5">
            <div>{{ item.title }}</div>
            <div>{{ item.subtitle }}</div>
          </div>
          <v-btn
            size="small"
            icon="mdi-close"
            variant="text"
            color="error"
          ></v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
const loading = ref(true);

const open = (item) => {};

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});

const todoList = ref([
  { type: "subheader", title: "Today" },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    title: "Brunch this weekend?",
    subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    appendIcon: "mdi-close",
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    title: "Summer BBQ",
    subtitle: ` &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    title: "Oui oui",
    subtitle: " Do you have Paris recommendations? Have you ever been?",
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    title: "Birthday gift",
    subtitle: "Have any ideas about what we should get Heidi for her birthday?",
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
    title: "Recipe to try",
    subtitle: "sWe should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
  },
]);

const searchKey = ref("");
</script>

<style lang="scss" scoped>
.shadow-1 {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}

.todo-list {
  max-height: 380px;
  overflow: scroll;
  .todo-item {
    transition: all 0.3s;
    &:hover {
      transition: all 0.3s;
      background-color: rgba(99, 99, 99, 0.2);
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
      cursor: pointer;
    }
  }
}
</style>
