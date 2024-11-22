import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const chartData1 = {
  labels: [
    "Processing Queue",
    "Exception Queue",
    "Duplicate Queue",
    "Missing PO Queue",
    "Receipt Hold Queue",
    "Supplier Portal Queue",
  ],
  datasets: [
    {
      data: [30, 50, 85, 75, 25, 54],
      backgroundColor: [
        "#EE7777",
        "#EA5455",
        "#F9C480",
        "#F5B461",
        "#1F2439",
        "#4BAAB4",
      ],
    },
  ],
};

const chartData2 = {
  labels: ["Role", "Person Responsible", "Triggers Alert"],
  datasets: [
    {
      data: [150, 200, 100],
      backgroundColor: ["#F4B462", "#4BAAB4", "#1F2439"],
    },
  ],
};

const chartOptions1 = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "right",
    },
    title: {
      display: true,
      text: "Queues", 
      position: "top", 
      align: "start", 
      font: {
        size: 14,
        weight: "bold",
      },
    },
  },
};

const chartOptions2 = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "right",
    },
    title: {
      display: true,
      text: "Responsibilities", 
      position: "top", 
      align: "start", 
      font: {
        size: 14,
        weight: "bold",
      },
      padding: {
        top: 0,
        bottom: 0,
      },
    },
  },
};

const ChartWithLabels = ({ data, options }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 2,
        backgroundColor: "white",
        cursor:"pointer"
      }}
    >
      <Box sx={{ width: "100%", display: "flex" }}>
        <Doughnut data={data} options={options} />
      </Box>
    </Box>
  );
};

const ChartCards = () => {
  return (
    <>
      <Grid item xs={12} sm={6} md={6}>
        <Box
          sx={{
            padding: 2,
            borderRadius: 2,
            backgroundColor: "white",
            boxShadow: 2,
            textAlign: "center",
          }}
        >
          <ChartWithLabels data={chartData1} options={chartOptions1} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Box
          sx={{
            padding: 2,
            borderRadius: 2,
            backgroundColor: "white",
            boxShadow: 2,
            textAlign: "center",
          }}
        >
          <ChartWithLabels data={chartData2} options={chartOptions2} />
        </Box>
      </Grid>
    </>
  );
};

export default ChartCards;
