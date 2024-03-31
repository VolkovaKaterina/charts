import { useState } from 'react';
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
import { mapValues } from 'lodash';
import ChartTooltip from 'src/components/BarCharts/ChartTooltip';
import { mockData } from 'src/components/BarCharts/mockData.ts';
import { colors, fields } from 'src/components/constants.ts';
import './VerticalBarChart.scss';

type BarState = {
  [key: string]: boolean;
};

let tooltipKey = '';

const isTestEnv = process.env.NODE_ENV === 'test';

const VerticalBarChart = ({isAnimationActive = true} : {isAnimationActive: boolean}) => {
  // const initialBarState = Object.keys(fields).reduce((acc, key) => {
  //   acc[key] = false;
  //   return acc;
  // }, {});

  const initialBarState = mapValues(fields, () => false);
  const [barProps, setBarProps] = useState<BarState>(initialBarState);

  // @ts-ignore
  const selectBar = (e) => {
    console.log(e);
    setBarProps({
      ...barProps,
      [e.dataKey]: !barProps[e.dataKey],
    });
  };

  const CustomTooltip = (props: object) => (
    <ChartTooltip tooltipKey={tooltipKey} {...props} />
  );


  return (
    <Box className="vertical-bar-chart">
      <h3 className="vertical-bar-chart__title">
        Vertical Bar Chart
      </h3>
      <ResponsiveContainer width={'99%'} height={300}>
        <BarChart
          layout="vertical"
          data={mockData as []}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={false} strokeDasharray="4 4" />
          <XAxis type="number"  tickLine={false}/>
          <YAxis dataKey="month" type="category" tickLine={false} />
          <Tooltip
            cursor={{ fill: 'rgba(240,229,246,0.6)' }}
            content={CustomTooltip}
            shared={false}
          />
          <Legend
            iconType="circle"
            iconSize={8}
            onClick={selectBar}
          />{' '}
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
               isAnimationActive={isAnimationActive}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default VerticalBarChart;
