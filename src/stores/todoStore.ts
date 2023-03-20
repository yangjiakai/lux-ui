import { defineStore } from "pinia";

interface Todo {
  id: number;
  title: string;
  detail: string;
  completed: boolean;
  tags: string[];
}

const todos = [
  {
    id: 1,
    title: "Write a report",
    detail: "Draft the quarterly update for the team",
    completed: false,
    tags: ["work"],
  },
  {
    id: 2,
    title: "Attend a meeting",
    detail: "Join the conference call with the client",
    completed: false,
    tags: ["work"],
  },
  {
    id: 3,
    title: "Complete a project",
    detail: "Finish the coding task before the deadline",
    completed: false,
    tags: ["work"],
  },
  {
    id: 4,
    title: "Take a walk",
    detail: "Explore the park and enjoy the nature",
    completed: false,
    tags: ["relaxation"],
  },
  {
    id: 5,
    title: "Meditate",
    detail: "Practice mindfulness for 15 minutes",
    completed: false,
    tags: ["relaxation"],
  },
  {
    id: 6,
    title: "Watch a movie",
    detail: "Stream a comedy to lighten the mood",
    completed: false,
    tags: ["relaxation"],
  },
  {
    id: 7,
    title: "Buy groceries",
    detail: "Stock up on fruits, vegetables, and snacks",
    completed: false,
    tags: ["shopping"],
  },
  {
    id: 8,
    title: "Shop for clothes",
    detail: "Look for a new outfit for the weekend",
    completed: false,
    tags: ["shopping"],
  },
  {
    id: 9,
    title: "Order supplies",
    detail: "Get some office essentials for the team",
    completed: false,
    tags: ["shopping"],
  },
  {
    id: 10,
    title: "Buy gifts",
    detail: "Get presents for friends and family",
    completed: false,
    tags: ["shopping"],
  },
];

export const useTodoStore = defineStore({
  id: "todo",
  state: () => ({
    todoList: ref<Todo[]>(todos),
    labels: ref([
      {
        id: "work",
        title: "Work",
        color: "primary",
      },
      {
        id: "relaxation",
        title: "Relaxation",
        color: "green",
      },
      {
        id: "shopping",
        title: "Shopping",
        color: "teal",
      },
    ]),
  }),

  // persist: {
  //   enabled: true,
  //   strategies: [
  //     {
  //       storage: localStorage,
  //       paths: ["todoList"],
  //     },
  //   ],
  // },

  getters: {},
  actions: {},
});
