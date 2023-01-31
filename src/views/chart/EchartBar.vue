<!--
* @Component: EchartBar
* @Maintainer: J.K. Yang
* @Description: Echart 柱状图
-->
<template>
  <div class="">EchartBar</div>
  <div><v-btn color="success" @click="changeColor">change</v-btn></div>
  <v-card height="500">
    <v-chart class="chart" :option="option" autoresize />
  </v-card>
  <v-card height="500">
    <v-chart class="chart" :option="optionBar" autoresize />
  </v-card>
</template>

<script setup lang="ts">
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart, BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  BarChart,
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

const title = ref("");

const optionBar = computed(() => {
  return {
    title: {
      text: title.value,
      left: "center",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };
});

const option = ref({
  title: {
    text: "Traffic Sources",
    left: "center",
  },
  color: ["#73BFB8", "#3BA2D5", "#2364AA", "#FEC601", "#0096C7"],
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    // orient: "vertical",
    top: "0%",
    left: "center",
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      center: ["50%", "50%"],
      data: [
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 234, name: "Ad Networks" },
        { value: 135, name: "Video Ads" },
        { value: 1548, name: "Search Engines" },
      ],
      label: {
        show: false,
        position: "center",
      },
      labelLine: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 20,
          fontWeight: "bold",
        },
      },
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
    },
  ],
});

const changeColor = () => {
  option.value.color[0] = "#ACCACC";
  option.value.title.text = "AAA";
  title.value = "KKK";
};
</script>

<style scoped lang="scss"></style>
