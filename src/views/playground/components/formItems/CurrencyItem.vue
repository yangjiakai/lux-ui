<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup>
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

const formatCurrency = (value) => {
  return new Intl.NumberFormat("ja-JP", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const handleInput = (event) => {
  const rawValue = event.target.value.replace(/^0+/, "").replace(/[^\d.]/g, "");
  const floatValue = parseFloat(rawValue);
  emit("update:modelValue", isNaN(floatValue) ? null : floatValue);
};
</script>

<template>
  <input
    type="text"
    v-bind="$attrs"
    :value="formattedValue"
    @input="handleInput"
  />
</template>

<style scoped lang="scss"></style>
