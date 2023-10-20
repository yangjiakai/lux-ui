<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
const expanded = ref([]);
const dessertHeaders = ref([
  {
    title: "Dessert (100g serving)",
    key: "name",
    width: "300",
    fixed: true,
  },
  {
    title: "Calories",
    key: "calories",
    width: "300",
  },
  { title: "Fat (g)", key: "fat", width: "300" },
  { title: "Carbs (g)", key: "carbs", width: "300" },
  { title: "Protein (g)", key: "protein", width: "300" },
  { title: "Iron (%)", key: "iron", width: "300" },
  { title: "action", key: "data-table-expand", width: "300" },
]);
const desserts = ref([
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: 1,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: 1,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: 7,
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: 8,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: 16,
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: 0,
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: 2,
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: 45,
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    iron: 22,
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: 6,
  },
]);

const expandeFn = (val) => {
  console.log(val);
};
</script>

<template>
  <div class="w-50">
    <v-data-table
      v-model:expanded="expanded"
      :headers="dessertHeaders"
      :items="desserts"
      item-value="name"
      show-expand
      class="elevation-1"
      @update:expanded="expandeFn"
    >
      <!-- slot:headers -->
      <template v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }">
        <tr>
          <template v-for="column in columns" :key="column.key">
            <td class="bg-blue">
              <span
                class="mr-2 cursor-pointer"
                @click="() => toggleSort(column)"
                >{{ column.title }}</span
              >
              <template v-if="isSorted(column)">
                <v-icon :icon="getSortIcon(column)"></v-icon>
              </template>
            </td>
          </template>
        </tr>
      </template>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Expandable Table</v-toolbar-title>
        </v-toolbar>
      </template>
      <template v-slot:expanded-row="{ columns, item, toggleExpand }">
        <tr @click="toggleExpand(item)">
          <td :colspan="columns.length">More info about {{ item.raw.name }}</td>
        </tr>
      </template>
      <!-- <template v-slot:item.data-table-expand="{ index }">
        <v-icon
          @click="expanded = [desserts[index].name]"
          v-if="!expanded.includes(desserts[index].name)"
          color="primary"
        >
          mdi-chevron-right
        </v-icon>
        <v-icon @click="expanded = []" v-else color="primary">
          mdi-chevron-down
        </v-icon>
      </template> -->
    </v-data-table>
    <!-- 下拉框选择4个季节 -->
  </div>
</template>

<style scoped lang="scss"></style>
