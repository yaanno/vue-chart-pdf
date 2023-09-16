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
const labels = ["January", "February", "March"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Admin",
      data: [40, 20, 12],
      backgroundColor: "red",
    },
    {
      label: "Constructor",
      data: [1, 23, 12],
      backgroundColor: "blue",
    },
    {
      label: "Other",
      data: [40, 28, 1],
      backgroundColor: "green",
    },
  ],
  options: {
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
