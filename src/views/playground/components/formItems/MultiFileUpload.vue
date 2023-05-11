<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
const props = defineProps({
  uploadFileList: {
    type: Array,
    default: () => [],
  },
  fileInfoList: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:uploadFileList", "update:fileInfoList"]);

const uploadFileList = computed({
  get() {
    return props.uploadFileList;
  },
  set(value) {
    emit("update:uploadFileList", value);
  },
});

const fileInfoList = computed({
  get() {
    return props.fileInfoList;
  },
  set(value) {
    emit("update:fileInfoList", value);
  },
});

// const uploadFiles = ref([]);

const fileInput = ref();

// ファイル選択ボタンをクリック
const triggerFileInput = () => {
  fileInput.value.click();
};

// ファイル選択
const handleInputChange = (event) => {
  addFiles(event.target.files);
  event.target.value = "";
};

// ドラッグ&ドロップ
function handleDrop(event) {
  addFiles(event.dataTransfer.files);
}

// ファイルを追加
const addFiles = (newFiles) => {
  if (!newFiles) {
    return;
  }

  const newFilesArray = Array.from(newFiles);

  for (const newFile of newFilesArray) {
    // 同名のファイルをチェックし、上書き確認
    const existingFileIndex = fileInfoList.findIndex(
      (file) => file.name === newFile.name
    );

    if (existingFileIndex !== -1) {
      replaceFileIndex.value = existingFileIndex;
      replaceFile.value = newFile;
      dialog.value = true;
    } else {
      uploadFileList.value.push(newFile);
      fileInfoList.value.push({
        fileName: newFile.name,
        fileDate: new Date(newFile.lastModified),
        fileSize: newFile.size,
        deleteFlag: false,
      });
    }
  }
};

// 上書きファイルとそのindex
const replaceFileIndex = ref(-1);
const replaceFile = ref();

// 上書き確認Dialog
const dialog = ref(false);

// 上書きする
const handleAgree = () => {
  fileInfoList.value.splice(replaceFileIndex.value, 1, replaceFile.value);
  dialog.value = false;
};

// 上書きしない
const handleDisAgree = () => {
  dialog.value = false;
};
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
    <li v-for="(file, index) in fileInfoList" :key="index">
      {{ file.name }} ({{ file.size }} bytes)
    </li>
  </ul>

  <v-dialog v-model="dialog" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5"> 要覆盖旧文件吗 </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="handleDisAgree">
          Disagree
        </v-btn>
        <v-btn color="green darken-1" text @click="handleAgree"> Agree </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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
