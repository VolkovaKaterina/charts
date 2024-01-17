import React from 'react';
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import './SimplePieChart.scss';
import { data } from 'src/components/PieCharts/data.tsx';
import { colors } from 'src/components/constants.ts';

interface IDashboardPieChart {
  innerRadius?: number;
  paddingAngle?: number;
}

const SimplePieChart: React.FC<IDashboardPieChart> = () => {
  return (
    <div className="simple-pie-chart">
      <h3 className="simple-pie-chart__title">Simple</h3>
      <ResponsiveContainer width="99%" height="99%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="40%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            stroke="none"
            // startAngle={-270}
            label
          >
            {data?.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={colors[index % colors.length]}
                stroke="none"
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

SimplePieChart.defaultProps = {
  paddingAngle: 0,
  innerRadius: 0,
};

export default SimplePieChart;
