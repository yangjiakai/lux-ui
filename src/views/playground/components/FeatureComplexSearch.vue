<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import { eagleResourseData } from "@/data/eagle";
// 领域
// UI 设计 平面设计 插画设计 游戏设计 室内设计 工业设计
const fieldLabelList = ref<string[]>([
  "全部",
  "UI 设计",
  "平面设计",
  "插画设计",
  "游戏设计",
  "室内设计",
  "工业设计",
]);
const currentFieldLabel = ref<string>("全部");

// 分类
// 全部 图标 插画 游戏原画 字体 界面 样机
const categoryLabelList = ref<string[]>([
  "全部",
  "图标",
  "插画",
  "游戏原画",
  "字体",
  "界面",
  "样机",
]);

const currentCategoryLabel = ref<string>("全部");

// 排序
// 默认 最新 最旧 浏览数 下载数 收藏数 精选
const sortList = ref<string[]>([
  "默认",
  "最新",
  "最旧",
  "浏览数",
  "下载数",
  "收藏数",
  "精选",
]);

// 当前选中的分类
const currentSort = ref<string>("默认");
const sortBtnActive = computed<boolean>(() => {
  return currentSort.value !== "默认";
});

// 类型
// 全部 灵感参考 素材分享
const typeList = ref<string[]>(["全部", "灵感参考", "素材分享"]);
const currentType = ref<string>("全部");
const typeBtnActive = computed<boolean>(() => {
  return currentType.value !== "全部";
});

// 版权
// 全部 免费 付费
const licenseList = ref<string[]>(["全部", "免费", "付费"]);
const currentLicense = ref<string>("全部");
const licenseBtnActive = computed<boolean>(() => {
  return currentLicense.value !== "全部";
});

// 我的最爱
const eaglepackKey = ref<boolean>(false);
const myFavorateKey = ref<boolean>(false);

const eagleList = ref(eagleResourseData);
const filteredList = computed(() => {
  return eagleList.value.filter((item) => {
    return (
      (item.thumbnail && item.title.includes(search.value)) ||
      item.author.includes(search.value)
    );
  });
});

// 搜索
const search = ref<string>("");
</script>

<template>
  <v-card rounded variant="flat" class="text-blue-grey-darken-3">
    <!-- 领域 -->
    <v-chip-group v-model="currentFieldLabel" mandatory>
      <v-chip
        filter
        label
        variant="text"
        color="primary"
        v-for="label in fieldLabelList"
        :key="label"
        :value="label"
      >
        {{ label }}
      </v-chip>
    </v-chip-group>

    <!-- 分类 -->
    <v-chip-group v-model="currentCategoryLabel" mandatory>
      <v-chip
        filter
        label
        variant="text"
        color="primary"
        v-for="label in categoryLabelList"
        :key="label"
        :value="label"
      >
        {{ label }}
      </v-chip>
    </v-chip-group>

    <v-divider class="my-3"></v-divider>
    <div class="d-flex align-center">
      <!-- 排序 -->
      <v-btn
        variant="text"
        color="primary"
        :active="sortBtnActive"
        class="mr-2"
      >
        {{ currentSort }}
        <v-menu activator="parent">
          <v-list>
            <v-list-item
              v-for="(item, index) in sortList"
              :key="index"
              :value="item"
              @click="currentSort = item"
            >
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <template v-slot:prepend>
          <v-icon>mdi-sort</v-icon>
        </template>

        <template v-slot:append>
          <v-icon>mdi-menu-down</v-icon>
        </template>
      </v-btn>

      <!-- 类型 -->
      <v-btn
        variant="text"
        color="primary"
        :active="typeBtnActive"
        class="mr-2"
      >
        {{ currentType }}
        <v-menu activator="parent">
          <v-list>
            <v-list-item
              v-for="(item, index) in typeList"
              :key="index"
              :value="item"
              @click="currentType = item"
            >
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <template v-slot:prepend>
          <v-icon>mdi-clipboard-minus-outline</v-icon>
        </template>

        <template v-slot:append>
          <v-icon>mdi-menu-down</v-icon>
        </template>
      </v-btn>

      <!-- 版权 -->
      <v-btn
        variant="text"
        color="primary"
        :active="licenseBtnActive"
        class="mr-2"
      >
        {{ currentLicense }}
        <v-menu activator="parent">
          <v-list>
            <v-list-item
              v-for="(item, index) in licenseList"
              :key="index"
              :value="item"
              @click="currentLicense = item"
            >
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <template v-slot:prepend>
          <v-icon>mdi-copyright</v-icon>
        </template>

        <template v-slot:append>
          <v-icon>mdi-menu-down</v-icon>
        </template>
      </v-btn>

      <!-- eaglepack  -->
      <div class="mr-5">
        <v-switch
          density="compact"
          v-model="eaglepackKey"
          hide-details
          label="仅显示 EaglePack"
          color="primary"
          inset
        ></v-switch>
      </div>

      <!-- 我的最爱 -->
      <div>
        <v-switch
          density="compact"
          v-model="myFavorateKey"
          hide-details
          label="仅显示我的最爱"
          color="primary"
          inset
        ></v-switch>
      </div>
      <!-- 搜索 -->
      <v-spacer></v-spacer>
      <div class="" style="width: 300px">
        <v-text-field
          v-model="search"
          color="primary"
          variant="outlined"
          hide-details
          density="compact"
          filled
          rounded
          placeholder="搜索"
          class="mr-5"
        >
          <template v-slot:prepend-inner>
            <v-icon>mdi-magnify</v-icon>
          </template>
        </v-text-field>
      </div>
    </div>
  </v-card>

  <v-sheet class="mt-5">
    <perfect-scrollbar style="height: 800px">
      <v-container>
        <v-row align="center">
          <v-col
            v-for="item in filteredList"
            :key="item.id"
            cols="6"
            md="4"
            lg="3"
          >
            <v-card class="text-blue-grey-darken-3">
              <v-img :lazy-src="item.thumbnail" :src="item.thumbnail"></v-img>

              <v-card-text
                style="height: 120px"
                class="d-flex flex-column justify-space-between"
              >
                <p class="text-h6" style="word-wrap: break-word">
                  {{ item.title }}
                </p>

                <div class="d-flex align-center justify-space-between">
                  <span class="text-blue-grey"> {{ item.author }}</span>
                  <span>
                    <span class="mr-2"
                      ><v-icon>mdi-download</v-icon>
                      {{ item.downloadsAndViews?.split("\n")[0] }}</span
                    >
                    <span
                      ><v-icon>mdi-eye</v-icon>
                      {{ item.downloadsAndViews?.split("\n")[1] }}</span
                    >
                  </span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </perfect-scrollbar>
  </v-sheet>
</template>

<style scoped lang="scss"></style>
