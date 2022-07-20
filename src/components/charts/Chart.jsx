
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


const Chart = ({ title, aspect, data }) => {

  const { t } = useTranslation();

  return (
    <div className="chart">
       <div className="title">{title}</div> 
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
              <XAxis dataKey="optionalDate" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
                  dataKey="countOfAllStatuses"
                  name="Count statuses"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
    </div>
  );
};

export default Chart;