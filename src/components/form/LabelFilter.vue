<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description: 标签过滤器
-->
<script setup lang="ts">
// props modelValue 选中标签列表
// props labelList 标签列表(包含"全部"标签)

interface Props {
  modelValue: string;
  labelList: string[];
}

const props = defineProps<Props>();
</script>

<template>
  <div class="">
    <v-chip-group
      v-model="props.modelValue"
      active-class="primary--text"
      mandatory
      multiple
      show-arrows
      column
    >
      <v-chip
        v-for="(label, index) in props.labelList"
        :key="index"
        :value="label"
        class="ma-2"
        color="primary"
        label
        outlined
        small
      >
        {{ label }}
      </v-chip>
    </v-chip-group>
  </div>
</template>

<style scoped lang="scss"></style>
