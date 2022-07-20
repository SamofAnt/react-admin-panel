
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

import { PieChart, Pie,Legend, Sector, Cell } from 'recharts';

//const test = [
//  { name: 'Group A', value: 400 },
//  { name: 'Group B', value: 300 },
//  { name: 'Group C', value: 300 },
//  { name: 'Group D', value: 200 },
//];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF0000', '#FF8042', '#7B68EE', '#8884d8'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CircleChart = ({ title, data}) => {

  const { t } = useTranslation();
  
  return (
    <div className="chart">
       <div className="title">{title}</div> 
          <PieChart width={400} height={400}>
              <Legend layout="vertical" verticalAlign="top" align="top" payload={
                  data.map(
                      (item, index) => ({
                          id: item.nameOfStatus,
                          type: "circle",
                          value: `${item.nameOfStatus} (${item.countOfStatuses})`,
                          color: COLORS[index % COLORS.length]
                      })
                  )
              } />
              <Pie

                  data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
                  dataKey="countOfStatuses"
                  
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
              </Pie>

        </PieChart>
    </div>
  );
};

export default CircleChart;