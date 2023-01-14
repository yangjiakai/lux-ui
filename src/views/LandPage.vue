<template>
  <v-container>
    <v-row>
      <template v-for="category in categoryList" :key="category.index">
        <v-col class="mt-2" cols="12">
          <strong>Category {{ category.title }}</strong>
        </v-col>

        <v-col v-for="page in category.pages" :key="page.id" cols="6" md="2">
          <v-sheet class="pa-5" elevation="2" height="150">
            <h4>{{ page.title }}</h4>
            <v-divider class="my-3"></v-divider>
            <v-btn block color="primary" :to="page.link" dark>跳转</v-btn>
          </v-sheet>
        </v-col>
        <v-divider class="my-5"></v-divider>
      </template>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
const countryList = ref([
  {
    countryName: "蒙德",
    photos: [
      {
        id: "1",
        name: "摘星崖",
      },
      {
        id: "2",
        name: "蒙德城",
      },
    ],
  },
  {
    countryName: "璃月",
    photos: [
      {
        id: "1",
        name: "归离集",
      },
      {
        id: "2",
        name: "庆云顶",
      },
    ],
  },
  {
    countryName: "稻妻",
    photos: [
      {
        id: "1",
        name: "离岛",
      },
      {
        id: "2",
        name: "鹤观",
      },
    ],
  },
]);

const categoryList = ref([
  {
    title: "原神活动",
    pages: [
      {
        id: "1",
        title: "画外旅照",
        imgLink: "",
        link: "/pages/page1",
      },
      {
        id: "2",
        title: "Form",
        imgLink: "",
        link: "/pages/form",
      },
      {
        id: "3",
        title: "自适应三列布局",
        imgLink: "",
        link: "/wireFrames/threeColumn",
      },
    ],
  },
  {
    title: "页面布局",
    pages: [
      {
        id: "1",
        title: "自适应三列布局",
        imgLink: "",
        link: "/wireFrames/threeColumn",
      },
      {
        id: "2",
        title: "页面内锚点跳转",
        imgLink: "",
        link: "/wireFrames/pageAnchorJump",
      },
    ],
  },
  {
    title: "稻妻",
    pages: [
      {
        id: "1",
        title: "离岛",
        imgLink: "",
        link: "",
      },
      {
        id: "2",
        title: "鹤观",
        imgLink: "",
        link: "",
      },
    ],
  },
]);
</script>

<script></script>
