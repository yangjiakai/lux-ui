<template>
  <div class="d-flex text-center flex-grow-1">
    <v-sheet
      class="layout-side d-none d-md-flex flex-column justify-space-between"
    >
      <div class="mt-3 mt-md-10 pa-2">
        <div class="display-2 font-weight-bold primary--text">Vuetify3</div>
        <div class="title my-2">
          Welcome! Let's build amazing things together.
        </div>
        <v-btn to="/" class="my-4">Take me back</v-btn>
      </div>
    </v-sheet>
    <v-sheet
      color="#F2F5F8"
      class="flex-grow-1 d-flex align-center justify-center flex-column"
    >
      <div class="layout-content ma-auto w-full">
        <slot></slot>
      </div>
      <div class="overline mt-4">Vuetify - 3.2</div>
    </v-sheet>
  </div>
</template>

<style lang="scss" scoped>
.layout-side {
  width: 420px;
}

.layout-content {
  max-width: 480px;
}
</style>
