<!--
* @Component:
* @Maintainer: J.K. Yang
* @Description:
-->
<script setup lang="ts">
import LabelFilter from "@/components/form/LabelFilter.vue";
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
</script>

<template>
  <v-card rounded variant="flat">
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
    <v-sheet color=""> </v-sheet>

    <v-divider class="my-3"></v-divider>

    <!-- 排序 -->
    <v-btn variant="text" color="primary" :active="sortBtnActive" class="mr-2">
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
    <v-btn variant="text" color="primary" :active="typeBtnActive" class="mr-2">
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
    <v-btn variant="text" color="primary" :active="licenseBtnActive">
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
  </v-card>
</template>

<style scoped lang="scss"></style>
