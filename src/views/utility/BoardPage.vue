<template>
  <div>Board</div>
  <v-btn color="success" @click="add">add</v-btn>
  <v-btn color="success" @click="sort">sort</v-btn>
  <v-row>
    <v-col cols="3">
      <h3>Draggable 1</h3>
      <vue-draggable
        class="list-group"
        :list="list1"
        @change="log"
        itemKey="id"
        v-bind="dragOptions"
      >
        <template #item="{ element, index }">
          <board-card
            :key="index"
            :card="element"
            class="board-item my-2 pa-2"
          />
        </template> </vue-draggable
    ></v-col>
    <v-col cols="3">
      <h3>vue-draggable 2</h3>
      <vue-draggable
        class="list-group"
        :list="list2"
        @change="log"
        itemKey="id"
        v-bind="dragOptions"
      >
        <template #item="{ element, index }">
          <board-card
            :key="index"
            :card="element"
            class="board-item my-2 pa-2"
          />
        </template> </vue-draggable
    ></v-col>
  </v-row>
</template>
<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import VueDraggable from "vuedraggable";
import BoardCard from "@/components/BoardCard";

onMounted(() => {});
const list1 = ref([
  { title: "John", id: 1, description: "des" },
  { title: "Joao", id: 2, description: "des" },
  { title: "Jean", id: 3, description: "des" },
  { title: "Gerard", id: 4, description: "des" },
]);

const list2 = ref([
  { title: "Juan", id: 5, description: "des" },
  { title: "Edgard", id: 6, description: "des" },
  { title: "Johnson", id: 7, description: "des" },
]);

const add = () => {
  list1.value.push({ name: "Juan", id: list1.value.length + 1 });
};

const log = (e) => {
  window.console.log(e);
};

const sort = (e) => {
  list1.value = list1.value.sort((a, b) => a.id - b.id);
};

const dragOptions = computed(() => {
  return {
    animation: 200,
    group: "people",
    disabled: false,
    ghostClass: "ghost",
  };
});
</script>

<style lang="scss" scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.board-item {
  transition: transform 0.2s;
  &:hover {
    transition: transform 0.2s;
    transform: translateY(-6px);
  }
}
</style>
