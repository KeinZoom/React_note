import * as echarts from "echarts";
import { useEffect, useRef } from "react";

function BarChart({ title }) {
  const chartRef = useRef(null);
  // 使用钩子函数useEffect保证DOM节点存在时再修改图表样式
  useEffect(() => {
    // 1. 获取操作的DOM节点
    const chartDom = chartRef.current;
    // 2. 初始化图表实例
    const myChart = echarts.init(chartDom);
    // 3. 设置图表option
    const option = {
      title: {
        text: title,
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };

    option && myChart.setOption(option);
  }, []);

  return <div ref={chartRef} style={{ width: "500px", height: "400px" }}></div>;
}

export default BarChart;
