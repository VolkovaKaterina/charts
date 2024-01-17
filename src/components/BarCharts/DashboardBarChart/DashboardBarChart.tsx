import { useState } from 'react';

import { Box } from '@mui/material';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { mapValues } from 'lodash';

import './DashboardBarChart.scss';
import { mockData } from 'src/components/BarCharts/mockData.ts';
import { colors, fields } from 'src/components/constants.ts';

type BarState = {
  [key: string]: boolean;
};

const DashboardBarChart = () => {
  const initialBarState = mapValues(fields, () => false);

  const [barProps, setBarProps] = useState<BarState>(initialBarState);

  // @ts-ignore
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return (
      <path
        d={`M${x},${y + height} L${x + width / 2},${y} L${
          x + width
        },${y + height} Z`}
        fill={fill}
      />
    );
  };

  // @ts-ignore
  const selectBar = (e) => {
    setBarProps({
      ...barProps,
      [e.dataKey]: !barProps[e.dataKey],
    });
  };

  return (
    <Box className="dashboard-bar-chart">
      <h3 className="dashboard-bar-chart__title">Bar Chart</h3>
      <ResponsiveContainer width="99%" height={300}>
        <BarChart
          data={mockData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="4 4" />
          <XAxis dataKey="month"></XAxis>
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip
            cursor={{ fill: 'rgba(240,229,246,0.6)' }}
            shared={false}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            onClick={selectBar}
          />
          {Object.entries(fields).map(([key, value], index) => (
            <Bar
              key={key}
              dataKey={key}
              name={value}
              fill={colors[index % colors.length]}
              maxBarSize={30}
              hide={barProps[key]}
              radius={[5, 5, 0, 0]}
              shape={TriangleBar}
              label={{ position: 'top' }}
              // stackId="a"
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default DashboardBarChart;
