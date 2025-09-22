import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const SectorChart = () => {
  const chartRef = useRef(null);
  const styleSector = {
    background: "#fff",
    padding: "5px",
    border: "1px solid #d9d9d9",
  };
  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: "",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["Giá trị khớp lệnh", "Số công ty niêm yết", "Tổng tài sản"],
        top: 0,
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [
            "Bất động sản",
            "Chăm sóc sức khỏe",
            "Công nghệ thông tin",
            "Công nghiệp",
            "Dịch vụ tiện ích",
            "Dịch vụ viễn thông",
            "Năng lượng",
            "Nguyên vật liệu",
            "Tài chính",
            "Tiêu dùng không thiết yếu",
            "Tiêu dùng thiết yếu",
          ],
          axisLabel: {
            interval: 0,
            rotate: 25,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            formatter: "{value}%",
          },
          max: 30,
        },
      ],
      series: [
        {
          name: "Giá trị khớp lệnh",
          type: "bar",
          data: [23, 18, 7, 10, 9, 1, 3, 4, 11, 9, 11],
          itemStyle: { color: "#00008B" },
        },
        {
          name: "Số công ty niêm yết",
          type: "bar",
          data: [8, 4, 1, 25, 10, 5, 3, 18, 6, 12, 11],
          itemStyle: { color: "#00BFFF" },
        },
        {
          name: "Tổng tài sản",
          type: "bar",
          data: [19, 15, 4, 7, 0, 6, 14, 4, 8, 6, 9],
          itemStyle: { color: "#ADD8E6" },
        },
      ],
    };

    myChart.setOption(option);

    const handleResize = () => {
      myChart.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      myChart.dispose();
    };
  }, []);

  return (
    <div style={styleSector}>
      <div ref={chartRef} style={{ width: "100%", height: "500px" }} />
    </div>
  );
};

export default SectorChart;
