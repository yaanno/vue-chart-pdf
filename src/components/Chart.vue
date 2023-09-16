<script setup lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
const labels = ["January", "February", "March", "April"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Admin",
      data: [1, 2, 3, 4],
      backgroundColor: "red",
      stack: "2",
    },
    {
      label: "Constructor",
      data: [4, 5, 6, 7],
      backgroundColor: "blue",
      stack: "2",
    },
    {
      label: "Other",
      data: [7, 8, 9, 8],
      backgroundColor: "green",
      stack: "2",
    },
  ],
  options: {
    grouped: true,
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
};
</script>

<template>
  <Bar id="my-chart-id" :data="data" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
