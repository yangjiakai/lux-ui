<template>
  <!-- <div>Board</div>
  <v-btn theme="dark" color="success" @click="add">add</v-btn>
  <v-btn theme="dark" color="success" @click="sort">sort</v-btn>
  <v-divider></v-divider> -->
  <!-- board column -->
  <v-row style="min-width: 800px">
    <v-col cols="3" v-for="column in columns" :key="column.key" class="pa-4">
      <div class="d-flex">
        <h5 class="font-weight-bold flex-1">{{ column.key }}</h5>
        <v-spacer></v-spacer>
        <!-- add new card form -->
        <v-btn
          variant="text"
          rounded
          icon="mdi-plus"
          size="small"
          color="primary"
          class="mr-n3"
          @click="column.isAddVisible = !column.isAddVisible"
        >
        </v-btn>
      </div>

      <v-card v-show="column.isAddVisible" class="pa-2 my-2">
        <v-text-field
          color="primary"
          v-model="column.addTitle"
          label="Title"
          variant="underlined"
          hideDetails
          placeholder="Input title for this card"
          autofocus
          @keyup.enter="addCard(column)"
          @keyup.esc="column.isAddVisible = false"
        ></v-text-field>
        <div class="my-3 d-flex flex-md-row flex-column">
          <v-btn
            class="flex-1 ma-1"
            size="small"
            @click="column.isAddVisible = !column.isAddVisible"
            >Cancel</v-btn
          >
          <v-btn
            class="flex-1 ma-1"
            size="small"
            color="primary"
            @click="addCard(column)"
            >Add</v-btn
          >
        </div>
      </v-card>

      <!-- draggable cards -->
      <vue-draggable
        v-model="column.cards"
        v-bind="dragOptions"
        class="list-group"
        @change="column.callback"
        itemKey="id"
      >
        <template #item="{ element, index }">
          <board-card
            :key="index"
            :card="element"
            class="board-item my-2 pa-2"
          />
        </template>
      </vue-draggable>
    </v-col>
  </v-row>
  <div
    class="board-column pa-2"
    v-for="column in columns"
    :key="column.key"
  ></div>
</template>
<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import VueDraggable from "vuedraggable";
import BoardCard from "@/components/BoardCard";

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

// board states
const states = ref(["TODO", "INPROGRESS", "TESTING", "DONE"]);
const cards = ref([
  {
    id: 1,
    title: "fix: 💭 channel label on chat app",
    description: "we need it bolder",
    order: 1,
    state: "TODO",
  },
  {
    id: 2,
    title: "feature: new emojis on board 🤘",
    description: "we need it for reasons 🤤",
    order: 0,
    state: "TODO",
  },
  {
    id: 3,
    title: "feature: add stripe account on signup",
    description: "",
    order: 1,
    state: "TESTING",
  },
  {
    id: 4,
    title: "refactor: scroll 📜 directive on big pages",
    description: "remember to check the scroll",
    order: 0,
    state: "INPROGRESS",
  },
  {
    id: 5,
    title: "feature: add big cards on dashboard",
    description: "everyone loves cards",
    order: 3,
    state: "TODO",
  },
]);

const columns = ref([]);

onMounted(() => {
  initColumns();
  parseCards(cards.value);
});

const initColumns = () => {
  states.value.forEach((state, index) => {
    columns.value.push({
      key: state,
      cards: [],
      isAddVisible: false,
      callback: (e) => changeState(e, index),
    });
  });
};

const parseCards = (cards) => {
  if (!cards) return columns.value.map((column) => (column.cards = []));

  columns.value.forEach((column) => {
    column.cards = cards
      .filter((card) => card.state === column.key)
      .sort((a, b) => (a.order < b.order ? -1 : 0));
  });
};

const addCard = (column) => {
  console.log(column);
};
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
    transform: translateY(-3px);
  }
}
</style>
