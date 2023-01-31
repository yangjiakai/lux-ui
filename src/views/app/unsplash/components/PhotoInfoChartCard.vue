<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import axios from "axios";
import { BASE_URL, config } from "../unsplashConfig";
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";

use([
  GridComponent,
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

const isLoading = ref(false);
const props = defineProps<{
  photoId: string;
}>();

const photoStatisticsUrl = computed(() => {
  return BASE_URL + "photos/" + props.photoId + "/statistics";
});

const photoStatistics = ref(null);

const downloadsData = ref([]);
const likesData = ref([]);
const viewsData = ref([]);

const initData = async () => {
  isLoading.value = true;
  const photoStatisticsResponse = await axios.get(
    photoStatisticsUrl.value,
    config
  );
  photoStatistics.value = photoStatisticsResponse.data;

  xAxis.value = photoStatistics.value.downloads.historical.values.map(
    (value) => value.date
  );

  downloadsData.value = photoStatistics.value.downloads.historical.values.map(
    (value) => value.value
  );

  //   likesData.value = photoStatistics.value.likes.historical.values.map(
  //     (value) => value.value
  //   );

  viewsData.value = photoStatistics.value.views.historical.values.map(
    (value) => value.value
  );

  chartData.value = viewsData.value;
};

const xAxis = ref([]);

initData();

const chartOptions = computed(() => {
  return {
    title: {
      text: "Photo Info",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    // legend: {},
    grid: {
      left: "2%",
      right: "2%",
      bottom: "2%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: xAxis.value,
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        interval: 1,
      },
    },
    series: [
      {
        name: chartDataName.value,
        type: "bar",
        data: chartData.value,
        itemStyle: {
          color: "#46A3F3",
        },
      },
    ],
  };
});

const themeColors = ["#ee8a6a", "#0cb9c5", "#fec90f", "#05b187", "#fc4b6c"];
const chartDataName = ref("Views");
const chartData = ref([]);
const currentChart = ref("view");
const changeChart = (type) => {
  currentChart.value = type;
  if (type === "view") {
    chartDataName.value = "Views";
    chartData.value = viewsData.value;
  } else {
    chartDataName.value = "Downloads";
    chartData.value = downloadsData.value;
  }
};
</script>

<template>
  <div class="">
    <v-card class="shadow-1 my-3">
      <v-card-text style="height: 300px">
        <v-chart :option="chartOptions" autoresize />
      </v-card-text>
      <v-divider></v-divider>
      <div class="flex mx-5 my-3 bg-grey-lighten-3 pa-2">
        <v-btn
          :variant="currentChart === 'view' ? 'flat' : 'text'"
          color="primary"
          class="flex-1 mr-3"
          @click="changeChart('view')"
          >Views</v-btn
        >
        <v-btn
          :variant="currentChart === 'download' ? 'flat' : 'text'"
          color="primary"
          class="flex-1"
          @click="changeChart('download')"
          >Download</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<style scoped lang="scss"></style>
