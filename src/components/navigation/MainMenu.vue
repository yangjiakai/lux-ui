<script setup lang="ts">
import { useLocale } from "vuetify";
import { useCustomizeThemeStore } from "@/stores/customizeTheme";
const { t } = useLocale();
const customizeTheme = useCustomizeThemeStore();

const props = defineProps({
  // 数据
  menu: {
    type: Array<any>,
    default: () => [],
  },
});

onMounted(() => {});
</script>
<template>
  <v-list nav dense color="primary">
    <template v-for="(menuArea, index) in menu" :key="index">
      <div
        v-if="!customizeTheme.miniSidebar && (menuArea.key || menuArea.text)"
        class="pa-1 mt-2 text-overline"
      >
        {{ menuArea.key ? t(`$vuetify.${menuArea.key}`) : menuArea.text }}
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
            active-class="primary-text"
            density="compact"
          >
            <v-list-item-title
              v-text="
                menuItem.key ? t(`$vuetify.${menuItem.key}`) : menuItem.text
              "
            ></v-list-item-title>
          </v-list-item>
          <v-list-group v-else :value="menuItem.items">
            <!-- subMenu activator -->
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :prepend-icon="menuItem.icon || 'mdi-circle-medium'"
                :title="
                  menuItem.key ? t(`$vuetify.${menuItem.key}`) : menuItem.text
                "
              >
              </v-list-item>
            </template>
            <!-- menu level 2 -->
            <v-list-item
              v-for="(subMenuItem, subMenuIndex) in menuItem.items"
              :key="subMenuIndex"
              :prepend-icon="subMenuItem.icon || 'mdi-circle-medium'"
              :title="
                subMenuItem.key
                  ? t(`$vuetify.${subMenuItem.key}`)
                  : subMenuItem.text
              "
              :to="subMenuItem.link"
              density="compact"
            ></v-list-item>
          </v-list-group>
        </template>
      </template>
    </template>
  </v-list>
</template>

<style scoped>
.v-list-group .v-list-item {
  padding-left: 8px !important;
}
</style>
