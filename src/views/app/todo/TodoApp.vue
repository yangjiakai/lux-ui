<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useTodoStore } from "@/stores/todoStore";
const todoStore = useTodoStore();
const searchKey = ref("");

const getLabelColor = (id: string) => {
  // Find the label by id from the labels array
  const label = todoStore.labels.find((l) => l.id === id);
  // Return the color for that label, or an empty string
  return label ? label.color : "";
};

// filterdTodoList is a computed value that will filter the todoList based on the searchKey value
const filterdTodoList = computed(() => {
  return todoStore.getTodoList.filter((todo) => {
    return todo.title.toLowerCase().includes(searchKey.value.toLowerCase());
  });
});
</script>

<template>
  <div class="app-container">
    <!-- ---------------------------------------------- -->
    <!-- Side Bar -->
    <!-- ---------------------------------------------- -->

    <div class="d-none d-md-block sidebar">
      <v-card height="100%" class="pa-3">
        <v-btn color="primary" block size="large" class="mb-3">Add Task</v-btn>

        <v-list nav class="mt-2 pa-0">
          <v-list-item
            prepend-icon="mdi-calendar-check"
            to="/apps/todo/tasks"
            active-class="text-primary"
            link
            title="Tasks"
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-check"
            to="/apps/todo/tasks"
            active-class="text-primary"
            link
            title="Completed"
          >
          </v-list-item>
        </v-list>
        <div class="pa-1 mt-2 text-overline text-grey">Labels</div>
        <v-list nav class="mt-2 pa-0">
          <v-list-item
            v-for="label in todoStore.labels"
            active-class="text-primary"
            link
            :title="label.title"
          >
            <template v-slot:prepend>
              <v-icon :color="label.color">mdi-label-outline </v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
    <!-- ---------------------------------------------- -->
    <!-- Add Task Dialog -->
    <!-- ---------------------------------------------- -->
    <div class="main">
      <v-card height="100%">
        <!-- ---------------------------------------------- -->
        <!-- Filter Input -->
        <!-- ---------------------------------------------- -->
        <v-text-field
          clearable
          variant="solo"
          class="elevation-1 ma-3"
          hide-details
          prepend-inner-icon="mdi-magnify"
          placeholder="Filter Tasks"
          v-model="searchKey"
        ></v-text-field>

        <!-- ---------------------------------------------- -->
        <!-- List -->
        <!-- ---------------------------------------------- -->
        <perfect-scrollbar class="todo-list">
          <transition-group name="fade" class="">
            <div v-for="todo in filterdTodoList" :key="todo.id">
              <div class="todo-item d-flex align-center pa-5">
                <v-checkbox-btn color="primary" class="pe-2"></v-checkbox-btn>
                <v-avatar size="40">
                  <v-img
                    src="https://avatars.githubusercontent.com/u/35951244?v=4"
                    alt="alt"
                  />
                </v-avatar>
                <div class="flex-1 mx-5">
                  <div class="font-weight-bold">{{ todo.title }}</div>
                  <div>{{ todo.detail }}</div>
                  <div>
                    <v-chip
                      size="x-small"
                      variant="outlined"
                      class="mr-1 mt-1"
                      :color="getLabelColor(tag)"
                      v-for="tag in todo.tags"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </div>
                <v-btn
                  size="small"
                  icon="mdi-delete-outline"
                  variant="text"
                  @click="todoStore.deleteTodoById(todo.id)"
                ></v-btn>
              </div>
            </div>
          </transition-group>
        </perfect-scrollbar>
      </v-card>
    </div>
    <!-- ---------------------------------------------- -->
    <!-- Task List -->
    <!-- ---------------------------------------------- -->
  </div>
</template>

<style scoped lang="scss">
.app-container {
  display: flex;
  height: calc(100vh - 240px);
  width: 100%;
  background-color: #eef1f4;
  font-size: 13px;
  padding: 20px;
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    background-color: #fff;
    margin-right: 20px;
  }

  .main {
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: #fff;

    .todo-list {
      height: 100%;
      overflow: scroll;
      .todo-item {
        transition: all 0.3s;
        border-bottom: 1px solid #eee;
        &:hover {
          transition: all 0.3s;
          background-color: rgba(99, 99, 99, 0.2);
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
