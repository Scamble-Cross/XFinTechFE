import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const ModalChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: "Tỷ trọng về Giá trị khớp lệnh trong 5 năm gần nhất",
        left: "center",
        top: 5,
        textStyle: { fontSize: 16, fontWeight: "bold", color: "#1A237E" },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross", label: { backgroundColor: "#6a7985" } },
      },
      legend: {
        top: 35,
        type: "scroll",
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 80,
        containLabel: false,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["2019", "2020", "2021", "2022", "2023", "2024"],
        axisLine: { show: false },
        axisTick: { show: false },
      },
      color: [
        "#1565C0", // Bất động sản - xanh dương
        "#FB8C00", // Chăm sóc sức khỏe - cam
        "#9E9E9E", // Công nghệ thông tin - xám
        "#FDD835", // Công nghiệp - vàng
        "#5E35B1", // Dịch vụ tiện ích - tím
        "#33691E", // Dịch vụ viễn thông - xanh lá
        "#0D47A1", // Năng lượng - xanh navy
        "#6D4C41", // Nguyên vật liệu - nâu
        "#212121", // Tài chính - đen xám
        "#283593", // Tiêu dùng không thiết yếu - xanh tím
        "#9FA8DA", // Tiêu dùng thiết yếu - xanh nhạt
      ],
      yAxis: {
        type: "value",
        min: 0,
        max: 100,
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { formatter: "{value}%" },
      },
      series: [
        {
          name: "Bất động sản",
          type: "line",
          stack: "Total",
          smooth: true,
          showSymbol: false,
          areaStyle: {},
          emphasis: { focus: "series" },
          data: [20, 15, 30, 40, 25, 35],
        },
        {
          name: "Chăm sóc sức khỏe",
          type: "line",
          stack: "Total",
          smooth: true,
          showSymbol: false,
          areaStyle: {},
          data: [25, 20, 20, 18, 30, 28],
        },
        {
          name: "Công nghệ thông tin",
          type: "line",
          stack: "Total",
          smooth: true,
          showSymbol: false,
          areaStyle: {},
          data: [5, 6, 5, 5, 8, 7],
        },
        {
          name: "Công nghiệp",
          type: "line",
          stack: "Total",
          smooth: true,
          showSymbol: false,
          areaStyle: {},
          data: [10, 12, 15, 12, 12, 10],
        },
        {
          name: "Dịch vụ tiện ích",
          type: "line",
          stack: "Total",
          smooth: true,
          showSymbol: false,
          areaStyle: {},
          data: [5, 5, 4, 4, 5, 4],
        },
        {
          name: "Dịch vụ viễn thông",
          type: "line",
          stack: "Total",
          smooth: true,
          showSymbol: false,
          areaStyle: {},
          data: [5, 6, 6, 5, 5, 6],
        },
        {
          name: "Năng lượng",
          type: "line",
          stack: "Total",
          smooth: true,
          showSymbol: false,
          areaStyle: {},
          data: [5, 6, 5, 5, 5, 5],
        },
        {
          name: "Nguyên vật liệu",
          type: "line",
          stack: "Total",
          smooth: true,
          showSymbol: false,
          areaStyle: {},
          data: [10, 15, 10, 6, 5, 5],
        },
        {
          name: "Tài chính",
          type: "line",
          stack: "Total",
          smooth: true,
          showSymbol: false,
          areaStyle: {},
          data: [10, 12, 5, 3, 3, 4],
        },
        {
          name: "Tiêu dùng không thiết yếu",
          type: "line",
          stack: "Total",
          smooth: true,
          showSymbol: false,
          areaStyle: {},
          data: [3, 2, 3, 1, 1, 1],
        },
        {
          name: "Tiêu dùng thiết yếu",
          type: "line",
          stack: "Total",
          smooth: true,
          showSymbol: false,
          areaStyle: {},
          data: [2, 1, 2, 1, 1, 1],
        },
      ],
    };

    chart.setOption(option);

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, []);
  return <div ref={chartRef} style={{ width: "100%", height: 580 }} />;
};

export default ModalChart;
