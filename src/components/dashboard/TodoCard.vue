<script setup lang="ts">
import { useTodoStore } from "@/stores/todoStore";
const todoStore = useTodoStore();

const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});

const searchKey = ref("");
</script>
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
      hide-details
      prepend-inner-icon="mdi-magnify"
      placeholder="Filter Tasks"
      v-model="searchKey"
    ></v-text-field>

    <perfect-scrollbar class="todo-list">
      <transition-group name="fade" class="">
        <div v-for="todo in todoStore.todoList" :key="todo.id">
          <div class="todo-item d-flex align-center pa-5">
            <v-avatar size="40" color="red">
              <v-img
                src="https://avatars.githubusercontent.com/u/35951244?v=4"
                alt="alt"
              />
            </v-avatar>
            <div class="flex-1 mx-5">
              <div>{{ todo.title }}</div>
              <div>{{ todo.detail }}</div>
            </div>
            <v-btn
              size="small"
              icon="mdi-close"
              variant="text"
              color="error"
              @click="
                todoStore.todoList = todoStore.todoList.filter(
                  (item) => item.id !== todo.id
                )
              "
            ></v-btn>
          </div>
        </div>
      </transition-group>
    </perfect-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.todo-list {
  max-height: 400px;
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
