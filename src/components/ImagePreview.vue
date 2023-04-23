<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: PhotoPreviewCard
-->
<script setup lang="ts">
const props = defineProps({
  thumbnail: {
    type: String,
    required: true,
  },
  previewImage: {
    type: String,
    required: true,
  },
});

const showPreview = ref(false);
</script>

<template>
  <div class="image-preview">
    <v-img
      class="thumbnail"
      :src="props.thumbnail"
      height="100"
      width="160"
      cover
      attrs="props"
      @mounseh="showPreview = true"
      @mouseleave="showPreview = false"
    />
    <v-card class="preview-card" v-if="showPreview">
      <v-img class="preview-image" :src="previewImage" />
    </v-card>
  </div>
</template>

<style scoped lang="scss">
.image-preview {
  position: relative;

  .thumbnail {
    cursor: pointer;
  }

  .preview-card {
    position: absolute;
    top: 50%;
    left: 20px;
    width: 100%;
    padding: 5px;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: none;
  }

  &:hover {
    .preview-card {
      display: block;
    }
  }
}
</style>
