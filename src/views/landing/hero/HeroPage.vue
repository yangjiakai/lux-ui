<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const mode = ref("");
const search = ref("");
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!---Top Toolbar -->
  <!-- ---------------------------------------------- -->
  <v-toolbar height="100" color="white">
    <v-toolbar-title class="text-h5 font-weight-bold">
      <!-- <v-icon class="mr-2">mdi-account</v-icon> -->
      <span>Hero</span>
      <v-chip class="ma-2" color="primary" text-color="white">
        9 Components
      </v-chip>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
  <v-toolbar color="#F9FAFB" height="60">
    <v-toolbar-title class="text-h6 font-weight-bold">
      <!-- <v-icon class="mr-2">mdi-account</v-icon> -->
      <span>Hero1</span>

      <v-btn-toggle
        class="ml-3"
        v-model="mode"
        variant="outlined"
        divided
        density="compact"
      >
        <v-btn color="#705CF6" value="desktop"> Desktop </v-btn>
        <v-btn color="#705CF6" value="mobile"> Mobile </v-btn>
      </v-btn-toggle>
    </v-toolbar-title>
  </v-toolbar>
  <v-container>
    <v-sheet
      elevation="0"
      class="mx-auto model-warp"
      rounded
      height="1000"
      :width="mode === 'desktop' ? '100%' : 420"
    >
      <v-container class="py-6 py-lg-12 text-center">
        <h1 class="font-weight-black text-h5 text-sm-h4 text-md-h3 text-lg-h2">
          A better way to build your next
          <span class="text-primary">web project</span>
        </h1>
        <h2 class="text-h6 text-sm-h5 text-secondary w-100 mt-4 mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ex
          facilis ad atque natus tenetur debitis qui quisquam iure amet.
        </h2>
      </v-container>
    </v-sheet>
  </v-container>
</template>

<style scoped lang="scss">
.model-warp {
  border: 2px dashed #aaa;
}
</style>
