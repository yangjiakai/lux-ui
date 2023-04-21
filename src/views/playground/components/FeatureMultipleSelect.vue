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
    <v-divider></v-divider>
    <div class="pa-5 w-25">
      <v-text-field label="label"></v-text-field>
      <v-text-field variant="solo" label="label"></v-text-field>
      <v-text-field variant="outlined" label="label"></v-text-field>
      <v-text-field variant="underlined" label="label"></v-text-field>
      <v-text-field variant="plain" label="label"></v-text-field>
      <v-text-field variant="filled" label="filled"></v-text-field>

      <v-divider></v-divider>

      <v-text-field
        density="compact"
        prepend-inner-icon="mdi-magnify"
        label="label"
      ></v-text-field>
      <v-text-field
        density="compact"
        prepend-inner-icon="mdi-magnify"
        variant="solo"
        label="label"
      ></v-text-field>
      <v-text-field
        density="compact"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        label="label"
      ></v-text-field>
      <v-text-field
        density="compact"
        prepend-inner-icon="mdi-magnify"
        variant="underlined"
        label="label"
      ></v-text-field>
      <v-text-field
        density="compact"
        prepend-inner-icon="mdi-magnify"
        variant="plain"
        label="label"
      ></v-text-field>
      <v-text-field
        density="compact"
        prepend-inner-icon="mdi-magnify"
        variant="filled"
        label="filled"
      ></v-text-field>
    </div>
  </v-sheet>
</template>

<style scoped lang="scss"></style>
