import { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function PieChartStyled({title}) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      const option = {
        title: {
          text: title,
          left: "center",
          top: 10,
          textStyle: {
            color: "#001F87",
            fontSize: 18,
            fontWeight: "bold",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}: {d}%",
        },
        legend: {
          show: false,
        },
        series: [
          {
            type: "pie",
            radius: "50%",
            label: {
              show: true,
              formatter: "{b}\n{d}%",
              fontSize: 12,
            },
            labelLine: {
              show: true,
              length: 15,
              length2: 10,
            },
            data: [
              { value: 22.74, name: "Bất động sản" },
              { value: 18.58, name: "Chăm sóc sức khỏe" },
              { value: 6.63, name: "Công nghệ thông tin" },
              { value: 10.22, name: "Công nghiệp" },
              { value: 2.85, name: "Dịch vụ tiện ích" },
              { value: 0.57, name: "Dịch vụ viễn thông" },
              { value: 2.56, name: "Năng lượng" },
              { value: 3.98, name: "Nguyên vật liệu" },
              { value: 10.81, name: "Tài chính" },
              { value: 9.11, name: "Tiêu dùng không thiết yếu" },
              { value: 11.95, name: "Tiêu dùng thiết yếu" },
            ],
            color: [
              "#FFCC00",
              "#C0C0C0",
              "#999999",
              "#666666",
              "#99CC99",
              "#99CCFF",
              "#669933",
              "#336699",
              "#99CCFF",
              "#3366CC",
              "#003366",
            ],
          },
        ],
      };

      myChart.setOption(option);

      return () => {
        myChart.dispose();
      };
    }
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
}
