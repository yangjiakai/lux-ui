<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import axios from "axios";
import { BASE_URL, config } from "../unsplashConfig";
const isLoading = ref(false);
const props = defineProps<{
  photoId: string;
}>();

const photoStatisticsUrl = computed(() => {
  return BASE_URL + "photos/" + props.photoId + "/statistics";
});

const photoStatistics = ref(null);

const initData = async () => {
  isLoading.value = true;
  const photoStatisticsResponse = await axios.get(
    photoStatisticsUrl.value,
    config
  );
  photoStatistics.value = photoStatisticsResponse.data;
  console.log(photoStatistics.value);

  xAxis.value = photoStatistics.value.downloads.historical.values.map(
    (value) => value.date
  );
  isLoading.value = false;
};

const xAxis = ref([]);

initData();

const chartOptions = ref({});

const themeColors = ["#ee8a6a", "#0cb9c5", "#fec90f", "#05b187", "#fc4b6c"];
const columnChart = {
  series: [
    {
      name: "Download",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Likes",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Views",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chartOptions: {
    colors: themeColors,
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },

    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: function (val: any) {
          return "$ " + val + " thousands";
        },
      },
    },
  },
};
</script>

<template>
  <div class="">
    <h1>Info Chart {{ photoId }}</h1>
    <apexchart
      type="bar"
      height="350"
      :options="columnChart.chartOptions"
      :series="columnChart.series"
    ></apexchart>
  </div>
</template>

<style scoped lang="scss"></style>
