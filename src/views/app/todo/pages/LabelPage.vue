<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import TodoList from "@/views/app/todo/component/TodoList.vue";
import { useTodoStore } from "@/views/app/todo/todoStore";
import { watchEffect } from "vue";

const todoStore = useTodoStore();
const route = useRoute();

watchEffect(() => {
  if (route.params.id) {
    todoStore.currentLabel = route.params.id as string;
  }
});
</script>

<template>
  <TodoList :tasks="todoStore.getLabelTodos" />
</template>

<style scoped lang="scss"></style>
