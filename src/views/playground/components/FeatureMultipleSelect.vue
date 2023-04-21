<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const items = ref(["foooooooooo", "bar", "fizz", "buzz"]);
const selected = ref([]);
</script>

<template>
  <v-sheet min-height="600" class="pa-5">
    <v-select
      v-model="selected"
      :items="items"
      chips
      label="Chips"
      multiple
      variant="solo"
    ></v-select>

    <v-divider> </v-divider>
    <v-menu scroll-y :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn variant="text" v-bind="props">
          Category <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list elevation="1">
        <v-list-item
          v-for="item in items"
          @click=""
          :key="item"
          density="compact"
        >
          <v-checkbox
            v-model="selected"
            :value="item"
            hide-details
            color="blue"
            density="compact"
          >
            <template v-slot:label>
              <span class="ml-2">{{ item }}</span>
            </template>
          </v-checkbox>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-sheet>
</template>

<style scoped lang="scss"></style>
