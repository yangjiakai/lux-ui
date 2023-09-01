<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import _ from "lodash";
const menu = ref([
  {
    title: "卡片模板",
    icon: "solar:library-line-duotone",
  },
  {
    title: "文本格式",
    icon: "solar:letter-opened-bold-duotone",
  },
  {
    title: "标注",
    icon: "solar:chat-unread-bold-duotone",
  },
  {
    title: "布局选项",
    icon: "solar:siderbar-bold-duotone",
  },
  {
    title: "可视化模板",
    icon: "solar:figma-bold-duotone",
  },
  // 添加图片
  {
    title: "图片",
    icon: "solar:album-bold-duotone",
  },

  {
    title: "视频",
    icon: "solar:video-frame-cut-2-bold-duotone",
  },
  {
    title: "嵌入网页和应用",
    icon: "solar:window-frame-bold-duotone",
  },
  {
    title: "表单和按钮",
    icon: "solar:password-minimalistic-input-line-duotone",
  },
]);

const cards = [
  {
    type: "title",
    title: "一部分",
  },
  {
    type: "card",
    title: "空白卡片",
    imgUrl: "https://gamma.app/_next/static/media/Blank-card.33757130.svg",
  },
  {
    type: "card",
    title: "标题卡片",
    imgUrl: "https://gamma.app/_next/static/media/Title-card.409d7081.svg",
  },
  {
    type: "card",
    title: "带文本标题",
    imgUrl: "https://gamma.app/_next/static/media/Title-with-text.2a88d207.svg",
  },
  {
    type: "card",
    title: "带按钮内容",
    imgUrl:
      "https://gamma.app/_next/static/media/Title-with-Content-with-Button.0a656178.svg",
  },
  {
    type: "title",
    title: "2部分",
  },
  {
    type: "card",
    title: "强调图片在左侧",
    imgUrl: "https://gamma.app/_next/static/media/Accent-left.ec4a8091.svg",
  },
  {
    type: "card",
    title: "强调图片在右侧",
    imgUrl: "https://gamma.app/_next/static/media/Accent-right.c78c2203.svg",
  },
  {
    type: "card",
    title: "2列内容",
    imgUrl:
      "https://gamma.app/_next/static/media/Title-with-2-Column-Content.31842b2e.svg",
  },
  {
    type: "card",
    title: "2列内容(图片在左)",
    imgUrl:
      "https://gamma.app/_next/static/media/Title-with-2-Column-Image-Left.a898abf9.svg",
  },
  {
    type: "card",
    title: "2列内容(图片在右)",
    imgUrl:
      "https://gamma.app/_next/static/media/Title-with-2-Column-Image-Right.82d9989d.svg",
  },
  {
    type: "card",
    title: "2列图片",
    imgUrl:
      "https://gamma.app/_next/static/media/Title-with-2-images.8c3df472.svg",
  },
  {
    type: "title",
    title: "多部分",
  },
  {
    type: "card",
    title: "3列内容",
    imgUrl:
      "https://gamma.app/_next/static/media/Title-with-3-Column-Content.a2e0f358.svg",
  },
  {
    type: "card",
    title: "3个图片列",
    imgUrl:
      "https://gamma.app/_next/static/media/Title-with-3-images.172b44a3.svg",
  },
  {
    type: "card",
    title: "带有3个嵌套靠谱安",
    imgUrl:
      "https://gamma.app/_next/static/media/Title-with-3-nested-cards.c9385238.svg",
  },
  {
    type: "card",
    title: "带有3个折叠列表",
    imgUrl:
      "https://gamma.app/_next/static/media/Title-with-3-toggles.c0b5bbb9.svg",
  },
  {
    type: "card",
    title: "带有时间线标题",
    imgUrl:
      "https://gamma.app/_next/static/media/Title-with-timeline.5a8d1065.svg",
  },
  {
    type: "card",
    title: "带有大项目符号列表",
    imgUrl:
      "https://gamma.app/_next/static/media/Title-with-large-bullets.45506775.svg",
  },
  {
    type: "card",
    title: "带有3个框的标题",
    imgUrl:
      "https://gamma.app/_next/static/media/Title-with-3-boxes.8a28c3c6.svg",
  },
  {
    type: "card",
    title: "带有团队照片的标题",
    imgUrl:
      "https://gamma.app/_next/static/media/Title-with-team-photos.475f94b7.svg",
  },
];
</script>

<template>
  <v-sheet height="800" class="position-relative">
    <div>
      <v-btn class="mr-2" color="primary">primary</v-btn>
      <v-btn class="mr-2" color="secondary">secondary</v-btn>
      <v-btn class="mr-2" color="accent">accent</v-btn>
      <v-btn class="mr-2" color="error">error</v-btn>
      <v-btn class="mr-2" color="warning">warning</v-btn>
      <v-btn class="mr-2" color="info">info</v-btn>
      <v-btn class="mr-2" color="success">success</v-btn>
    </div>

    <v-card rounded="md" elevation="10" class="mt-2 d-flex flex-column toolbox">
      <v-btn
        v-for="item in menu"
        :key="item.title"
        class="ma-1"
        size="40"
        rounded="sm"
        icon
        variant="text"
        color="accent"
        ><Icon width="24" :icon="item.icon" />
        <!-- tooltip -->
        <v-tooltip
          activator="parent"
          location="left"
          :text="item.title"
          class="font-weight-bold"
        ></v-tooltip>
        <!-- Menu -->
        <v-menu location="left center" activator="parent">
          <v-card class="mr-2" height="600" width="300">
            <perfect-scrollbar style="height: 600" class="pa-2">
              <template v-for="item in cards">
                <p class="my-2 font-weight-bold" v-if="item.type === 'title'">
                  {{ item.title }}
                </p>
                <v-card v-else class="d-flex align-center pa-3 mb-2">
                  <div>
                    <v-img :src="item.imgUrl" width="120" />
                  </div>
                  <div
                    class="ml-3 font-weight-bold text-grey-darken-2 text-body-2"
                  >
                    {{ item.title }}
                  </div>
                </v-card>
              </template>
            </perfect-scrollbar>
          </v-card>
        </v-menu>
      </v-btn>
    </v-card>
  </v-sheet>
</template>

<style scoped lang="scss">
.toolbox {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
