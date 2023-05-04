<!--
* @Component: ApexHeatMapCharts
* @Maintainer: J.K. Yang
* @Description: ApexHeatMapCharts
-->
<script setup lang="ts">
const chartOptions = computed(() => {
  return {
    chart: {
      type: "area",
      height: 300,
      fontFamily: `inherit`,
      foreColor: "#adb0bb",
      zoom: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#4782FB", "#47C4F4"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: "3",
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00",
        "2018-09-19T01:30:00",
        "2018-09-19T02:30:00",
        "2018-09-19T03:30:00",
        "2018-09-19T04:30:00",
        "2018-09-19T05:30:00",
        "2018-09-19T06:30:00",
      ],
    },
    yaxis: {
      opposite: false,
      labels: {
        show: true,
      },
    },
    legend: {
      show: true,
      position: "bottom",
      width: "50px",
    },
    grid: {
      show: false,
    },
    tooltip: {
      theme: "dark",
    },
  };
});

const areaChart = {
  series: [
    {
      name: "Sales Summery 1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Sales Summery 2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
};
</script>
<template>
  <apexchart
    type="area"
    height="310"
    :options="chartOptions"
    :series="areaChart.series"
  ></apexchart>
</template>

<style scoped lang="scss"></style>
