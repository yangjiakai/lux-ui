<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Number,
    required: false,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue"]);

const formattedValue = computed(() => {
  return props.modelValue !== null ? formatCurrency(props.modelValue) : "";
});

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("ja-JP", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;
  const number = Number(value.replace(/^0+/, "").replace(/[^\d.]/g, ""));
  emit("update:modelValue", number);
};
</script>

<template>
  <v-text-field
    type="text"
    v-bind="$attrs"
    :value="formattedValue"
    @input="handleInput"
  ></v-text-field>
</template>

<style scoped lang="scss"></style>
