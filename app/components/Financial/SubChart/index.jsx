import { useEffect, useState } from "react";

let Chart = null;
if (typeof window !== "undefined") {
  Chart = require("react-apexcharts").default;
}

export default function RankingChart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const categories = [
    "Q2 2020","Q3 2020","Q4 2020",
    "Q1 2021","Q2 2021","Q3 2021","Q4 2021",
    "Q1 2022","Q2 2022","Q3 2022","Q4 2022",
    "Q1 2023","Q2 2023","Q3 2023","Q4 2023",
    "Q1 2024","Q2 2024","Q3 2024","Q4 2024","Q1 2025"
  ];

  const series = [
    {
      name: "ACB",
      data: [80,55,25,32,18,45,80,52,25,32,18,45,40,38,35,18,45,40,38,36]
    },
    {
      name: "TCB",
      data: [60,88,87,90,92,91,60,89,90,91,92,91,90,89,90,91,92,90,91,92]
    },
    {
      name: "VCB",
      data: [30,18,45,80,55,32,25,32,18,45,40,20,38,42,45,40,38,42,45,39]
    },
    {
      name: "OCB",
      data: [90,88,87,60,89,90,92,91,60,62,91,92,91,60,88,87,89,90,92,91]
    }
  ];

  // Tạo nền cột xen kẽ
  const annotations = {
    xaxis: categories.map((cat, i) => {
      if (i % 2 === 0) {
        return {
          x: cat,
          strokeDashArray: 0,
          borderColor: "#f0f0f0",
          fillColor: "#f5f5f5",
          opacity: 0.5,
          label: { show: false }
        };
      }
      return {};
    })
  };

  const options = {
    chart: {
      type: "line",
      height: 400,
      toolbar: { show: false }
    },
    stroke: {
      width: 2,
      curve: "straight",
      dashArray: [0, 4, 4, 4] // ACB liền, các line khác gạch chấm
    },
    markers: {
      size: 5
    },
    colors: ["#B71C1C", "#FBC02D", "#26A69A", "#3949AB"],
    xaxis: {
      categories,
      labels: { rotate: -45 }
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        formatter: (val) => `${val}%`
      }
    },
    grid: {
      borderColor: "#e0e0e0",
      xaxis: { lines: { show: true } }, // đường dọc
      yaxis: { lines: { show: true } }  // đường ngang
    },
    annotations,
    legend: {
      position: "top",
      horizontalAlign: "center"
    },
    title: {
      text: "Vị trí của công ty trong toàn ngành - Xét theo: Giá trị sổ sách của cổ phiếu (BVPS)",
      align: "center"
    }
  };

  return (
    <div>
      {mounted && Chart ? (
        <Chart options={options} series={series} type="line" height={450} />
      ) : (
        <div>Loading chart...</div>
      )}
    </div>
  );
}
