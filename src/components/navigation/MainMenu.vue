<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps({
  menu: {
    type: Array<any>,
    default: () => [],
  },
});
</script>
<template>
  <v-list nav dense>
    <template v-for="menuArea in props.menu" :key="menuArea.key">
      <div v-if="menuArea.key || menuArea.text" class="pa-1 mt-2 text-overline">
        {{ menuArea.text }}
      </div>
      <template v-if="menuArea.items">
        <template v-for="menuItem in menuArea.items" :key="menuItem.key">
          <!-- menu level 1 -->
          <v-list-item
            v-if="!menuItem.items"
            :to="menuItem.link"
            density="compact"
            color="primary"
            active-class="active-nav"
          >
            <template v-slot:prepend>
              <Icon class="mx-2 mr-5" width="20" :icon="menuItem.icon" />
            </template>
            <v-list-item-title
              v-text="$t(menuItem.key)"
              class="font-weight-bold"
            ></v-list-item-title>
          </v-list-item>
          <v-list-group v-else :value="menuItem.items">
            <!-- subMenu activator -->
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" color="primary">
                <template v-slot:prepend>
                  <Icon class="mx-2 mr-5" width="20" :icon="menuItem.icon" />
                </template>
                <v-list-item-title
                  v-text="menuItem.text"
                  class="font-weight-bold"
                ></v-list-item-title>
              </v-list-item>
            </template>
            <!-- menu level 2 -->
            <v-list-item
              v-for="subMenuItem in menuItem.items"
              :key="subMenuItem.key"
              :to="subMenuItem.link"
              density="compact"
              color="primary"
            >
              <template v-slot:prepend>
                <Icon class="mx-2 mr-5" width="20" :icon="subMenuItem.icon" />
              </template>
              <v-list-item-title
                v-text="subMenuItem.text"
                class="font-weight-bold"
              ></v-list-item-title>
            </v-list-item>
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

.active-nav {
  box-sizing: content-box;
  border-left: 5px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to bottom,
    rgba(var(--v-theme-primary), 1),
    rgba(var(--v-theme-primary), 0.5)
  );
}
</style>
