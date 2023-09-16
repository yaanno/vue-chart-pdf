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
import { onMounted, ref } from "vue";
import { jsPDF } from "jspdf";
import chartdata from "../data";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chart = ref<HTMLCanvasElement>();
const doc = new jsPDF("p", "px");
const savePdf = () => {
  doc.addImage({
    imageData: chart.value?.toDataURL(),
    x: 20,
    y: 20,
    width: doc.internal.pageSize.getWidth() - 40,
    height: doc.internal.pageSize.getHeight() / 2,
  });
  doc.save();
};

onMounted(() => {
  chart.value =
    (document.getElementById("chart") as HTMLCanvasElement) ?? undefined;
});
</script>

<template>
  <Bar id="chart" :data="chartdata" />
  <button @click="savePdf">Save as Pdf</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
