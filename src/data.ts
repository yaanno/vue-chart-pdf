const data = {
  labels: ["January", "February", "March", "April"],
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

export default data;
