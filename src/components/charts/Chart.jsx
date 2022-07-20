
import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTranslation } from "react-i18next";
import "../../i18n"
import React from 'react'


const Chart = ({ title, aspect,  }) => {

  const { t } = useTranslation();
  const data = [
    { name: t("charts.months.jan"), Total: 1200 },
    { name: t("charts.months.feb"), Total: 2100 },
    { name: t("charts.months.mar"), Total: 800 },
    { name: t("charts.months.apr"), Total: 1600 },
    { name: t("charts.months.may"), Total: 900 },
    { name: t("charts.months.jun"), Total: 1700 },
  ];
  return (
    <div className="chart">
       <div className="title">Common count statuses</div> 
        <AreaChart
          width={1000}
          height={400}
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
    </div>
  );
};

export default Chart;