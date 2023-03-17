<!--
* @Component: EchartPie
* @Maintainer: J.K. Yang
* @Description: Echart 饼图页
-->
\
<script setup lang="ts">
import { onMounted, Ref, ref, computed, nextTick } from "vue";
import type { EChartsOption } from "echarts";
import useChart, { RenderType, ThemeType } from "@/plugins/useChart";
import axios from "axios";

const textTitle = ref("EchartPie");
const dataSet = ref([
  { value: 335, name: "Direct" },
  { value: 310, name: "Email" },
  { value: 274, name: "Union Ads" },
  { value: 235, name: "Video Ads" },
  { value: 400, name: "Search Engine" },
]);

const option = computed<EChartsOption>(() => ({
  // ...chart option
  backgroundColor: "#2c343c",
  title: {
    text: textTitle.value,
    left: "center",
    top: 20,
    textStyle: {
      color: "#ccc",
    },
  },
  tooltip: {
    trigger: "item",
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1],
    },
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "55%",
      center: ["50%", "50%"],
      data: dataSet.value,
      roseType: "radius",
      label: {
        color: "rgba(255, 255, 255, 0.3)",
      },
      labelLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        smooth: 0.2,
        length: 10,
        length2: 20,
      },
      itemStyle: {
        color: "#c23531",
        shadowBlur: 200,
        shadowColor: "rgba(0, 0, 0, 0.5)",
      },
      animationType: "scale",
      animationEasing: "elasticOut",
      animationDelay: function (idx) {
        return Math.random() * 200;
      },
    },
  ],
}));

const chartEl = ref<HTMLDivElement | null>(null);

const { setOption, showLoading } = useChart(
  chartEl as Ref<HTMLDivElement>,
  true,
  true,
  RenderType.SVGRenderer,
  ThemeType.Dark
);

onMounted(() => {
  nextTick(() => {
    // 显示loading
    showLoading();
    // 假装有网络请求 ...
    // 渲染图表
    setOption(option.value);
  });
});

watch(
  () => option.value,
  (newVal) => {
    setOption(newVal);
  }
);

const sort = () => {
  dataSet.value.sort(function (a, b) {
    return a.value - b.value;
  });
};
</script>

<template>
  <div ref="chartEl" :style="{ width: `400px`, height: `500px` }"></div>
  <v-btn color="success" @click="textTitle = 'new Title'">text</v-btn>
  <v-btn color="success" @click="sort">sort</v-btn>
</template>
