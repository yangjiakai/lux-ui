<template>
  <v-container>
    <h1>{{ length }}</h1>
    <v-card height="2000" elevation="6">
      <RecycleScroller
        class="scroller"
        :items="list"
        :item-size="50"
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
const list = ref(
  Array.from({ length: 20000 }, (value, index) => ({
    id: index + "",
    name: "yjk" + index,
  }))
);

const length = computed(() => list.value.length);
</script>

<style scoped>
.scroller {
  height: 1000px;
}

.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
