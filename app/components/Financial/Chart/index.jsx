import { useEffect, useState } from "react";

let Chart = null;
if (typeof window !== "undefined") {
  Chart = require("react-apexcharts").default;
}

export default function BvpsChart() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    "Q2 2020",
    "Q3 2020",
    "Q4 2020",
    "Q1 2021",
    "Q2 2021",
    "Q3 2021",
    "Q4 2021",
    "Q1 2022",
    "Q2 2022",
    "Q3 2022",
    "Q4 2022",
    "Q1 2023",
    "Q2 2023",
    "Q3 2023",
    "Q4 2023",
    "Q1 2024",
    "Q2 2024",
    "Q3 2024",
    "Q4 2024",
    "Q1 2025",
  ];

  const series = [
    {
      name: "ACB",
      data: [4, 6, 5, 6, 5, 6, 7, 6, 6, 5, 4, 6, 5, 6, 6, 6, 6, 6, 6, 7],
    },
    {
      name: "TCB",
      data: [
        3.5, 9, 10, 12, 13, 11, 11.5, 11, 13, 10.5, 11.8, 12, 11, 12.5, 11, 12,
        13, 12.5, 12, 10,
      ],
    },
    {
      name: "VCB",
      data: [
        5, 8, 6.5, 8, 7, 7.5, 8.5, 6.5, 4.2, 3, 4.2, 4, 7, 9.5, 8.3, 8.2, 8.5,
        9, 8.8, 9.5,
      ],
    },
    {
      name: "OCB",
      data: [
        3.8, 7, 7, 9, 9, 8.5, 9.3, 8.2, 7.3, 5.5, 6.8, 8, 9, 8.5, 9, 8.5, 9,
        8.8, 8.5, 7.8,
      ],
    },
    {
      name: "Ngành Tài chính",
      data: [
        4, 6.2, 6.5, 7, 7.5, 8, 6, 6.5, 5, 6.5, 5.5, 6.2, 7, 8.2, 8.5, 8.2, 8,
        8.2, 8, 7.5,
      ],
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 400,
      toolbar: { show: false },
    },
    stroke: {
      width: 2,
      curve: "straight",
      dashArray: [0, 4, 4, 4, 4],
    },
    markers: {
      size: 4,
    },
    colors: ["#B71C1C", "#FBC02D", "#26A69A", "#3949AB", "#616161"],
    xaxis: {
      categories,
      labels: {
        rotate: -45,
      },
    },
    yaxis: {
      min: 0,
      max: 14,
      labels: {
        formatter: (val) => `${val}%`,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
    },
    title: {
      text: "Giá trị sổ sách của cổ phiếu (BVPS)",
      align: "center",
    },
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
