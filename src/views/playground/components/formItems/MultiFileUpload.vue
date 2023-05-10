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

const files = ref([]);
const fileInput = ref();

function triggerFileInput() {
  fileInput.value.click();
}

function handleInputChange(event) {
  addFiles(event.target.files);
  event.target.value = "";
}

function handleDrop(event) {
  addFiles(event.dataTransfer.files);
}

function addFiles(newFiles) {
  files.value.push(...Array.from(newFiles));
}
</script>

<template>
  <div class="multi-file-upload" @dragover.prevent @drop.prevent="handleDrop">
    <input
      ref="fileInput"
      type="file"
      multiple
      @change="handleInputChange"
      style="display: none"
    />
    <button @click="triggerFileInput">点击或拖拽上传文件</button>
  </div>
  <ul>
    <li v-for="(file, index) in files" :key="index">
      {{ file.name }} ({{ file.size }} bytes)
    </li>
  </ul>
</template>

<style scoped lang="scss">
.multi-file-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 2px dashed #ccc;
  border-radius: 4px;
  padding: 1rem;
  width: 300px;
  min-height: 200px;
  font-size: 16px;
}

.multi-file-upload button {
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 14px;
}

.multi-file-upload ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
</style>
