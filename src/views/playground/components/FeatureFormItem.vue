<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import CurrencyItem from "./formItems/CurrencyItem.vue";
import MultiFileUpload from "./formItems/MultiFileUpload.vue";

const price = ref(2000);
const fileList = ref<any[]>([]);
const select = ref({ state: "Florida", abbr: "FL" });
const items = ref([
  { state: "Florida", abbr: "FL" },
  { state: "Georgia", abbr: "GA" },
  { state: "Nebraska", abbr: "NE" },
  { state: "California", abbr: "CA" },
  { state: "New York", abbr: "NY" },
]);

onMounted(() => {
  const canvas = document.getElementById("ca") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 100, 100);

  draw();
});

const draw = () => {};
const date = ref(new Date().toISOString().substr(0, 10));
</script>

<template>
  <div class="">
    <CurrencyItem v-model="price" />
    <MultiFileUpload v-model="fileList" />
    <v-select
      v-model="select"
      :hint="`${select.state}, ${select.abbr}`"
      :items="items"
      item-title="state"
      item-value="abbr"
      label="Select"
      persistent-hint
      single-line
    ></v-select>
    <v-divider></v-divider>
    <v-card width="400" class="pa-5">
      <v-text-field v-model="date" type="date"></v-text-field>
    </v-card>
  </div>
</template>

<style scoped lang="scss"></style>
