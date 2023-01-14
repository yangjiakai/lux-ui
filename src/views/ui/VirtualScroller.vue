<template>
  <v-container>
    <v-card height="1000" elevation="6">
      <RecycleScroller
        class="scroller"
        :items="list"
        :item-size="32"
        key-field="id"
        v-slot="{ item }"
      >
        <div class="user">
          {{ item.name }}
        </div>
      </RecycleScroller>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
const list = Array.from({ length: 1000 }, (value, index) => ({
  id: index + "",
  name: "yjk" + index,
}));
</script>

<style scoped>
.scroller {
  height: 500px;
}

.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
