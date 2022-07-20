import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./steppedChart.scss"
import { useTranslation } from "react-i18next";
import "../../i18n"
import React from 'react'

export const SteppedChart = () =>{
  const { t } = useTranslation();
  // const data = [
  //   {
  //     name:  t("charts.months.jan"),
  //     count: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name:  t("charts.months.feb"),
  //     count: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name:  t("charts.months.mar"),
  //     count: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name:  t("charts.months.apr"),
  //     count: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name:  t("charts.months.may"),
  //     count: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name:  t("charts.months.jun"),
  //     count: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name:  t("charts.months.jul"),
  //     count: 4300,
  //     amt: 2100,
  //   },
  // ];
    return (
      <div className="chart">
        <BarChart
          width={600}
          height={400 }
          data={props.data}
          margin={{
            top: 5,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="availableDaysOfWeek" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="countOfStatusesA" fill="#8884d8" />
        </BarChart>
        </div>
    );
  }
export default SteppedChart;