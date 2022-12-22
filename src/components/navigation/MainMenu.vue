<template>
  <v-list nav dense color="primary">
    <template v-for="(menuArea, index) in menu" :key="index">
      <div v-if="menuArea.key || menuArea.text" class="pa-1 mt-2 text-overline">
        {{ menuArea.key ? menuArea.key : menuArea.text }}
      </div>
      <template v-if="menuArea.items">
        <template
          v-for="(menuItem, menuIndex) in menuArea.items"
          :key="menuIndex"
        >
          <!-- menu level 1 -->
          <v-list-item
            v-if="!menuItem.items"
            :to="menuItem.link"
            :prepend-icon="menuItem.icon || 'mdi-circle-medium'"
            :title="menuItem.key ? menuItem.text : menuItem.text"
            active-class="primary-text"
            density="compact"
          >
          </v-list-item>
          <v-list-group v-else :value="menuItem.items">
            <!-- subMenu activator -->
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :prepend-icon="menuItem.icon || 'mdi-circle-medium'"
                :title="menuItem.key ? menuItem.text : menuItem.text"
              >
              </v-list-item>
            </template>
            <!-- menu level 2 -->
            <v-list-item
              v-for="(subMenuItem, subMenuIndex) in menuItem.items"
              :key="subMenuIndex"
              :value="title"
              :prepend-icon="subMenuItem.icon || 'mdi-circle-medium'"
              :title="subMenuItem.key ? subMenuItem.text : subMenuItem.text"
              :to="subMenuItem.link"
              density="compact"
            ></v-list-item>
          </v-list-group>
        </template>
      </template>
    </template>
  </v-list>
</template>

<script setup>
import { onMounted } from "vue";
const props = defineProps({
  // 数据
  menu: {
    type: Array,
    default: () => [],
  },
});

onMounted(() => {});
</script>

<style scoped>
.v-list-group .v-list-item {
  padding-left: 8px !important;
}
</style>
