import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import {
  Bar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
} from 'recharts';
import { debounce, mapValues } from 'lodash';

import { mockData } from 'src/components/BarCharts/mockData.ts';
import { colors, fields } from 'src/components/constants.ts';
import './VerticalBarChart.scss';
import ChartTooltip from 'src/components/BarCharts/ChartTooltip';

type BarState = {
  [key: string]: boolean;
};
let tooltipKey = '';

const VerticalBarChart = () => {
  const initialBarState = mapValues(fields, () => false);
  const [barProps, setBarProps] = useState<BarState>(initialBarState);

  // @ts-ignore
  const selectBar = (e) => {
    setBarProps({
      ...barProps,
      [e.dataKey]: !barProps[e.dataKey],
    });
  };

  const CustomTooltip = (props: object) => (
    <ChartTooltip tooltipKey={tooltipKey} {...props} />
  );
  const [data, setData] = useState<unknown>([]);

  const getData = debounce(() => {
    setData(mockData);
  }, 500);

  useEffect(() => getData(), []);

  return (
    <Box className="vertical-bar-chart">
      <h3 className="vertical-bar-chart__title">
        Vertical Bar Chart
      </h3>
      <ResponsiveContainer width={'99%'} height={300}>
        <BarChart
          layout="vertical"
          data={data as []}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={false} strokeDasharray="4 4" />
          <XAxis type="number" />
          <YAxis dataKey="month" type="category" tickLine={false} />
          <Tooltip
            cursor={{ fill: 'rgba(240,229,246,0.6)' }}
            content={CustomTooltip}
            // shared={false}
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
              // stackId="a"
              onMouseOver={() => (tooltipKey = key)}
              onMouseEnter={() => (tooltipKey = key)}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default VerticalBarChart;
