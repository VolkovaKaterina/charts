import { useCallback, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { Typography } from '@mui/material';
import ActiveShape from 'src/components/PieCharts/CustomPieChart/ActiveShape';
import './CustomPieChart.scss';
import {
  IActiveShapeProps,
  ICustomizedLabelProps,
} from 'src/components/PieCharts/CustomPieChart/CustomPieChart.models.ts';
import CustomizedLabel from 'src/components/PieCharts/CustomPieChart/CustomizedLabel';
import { data } from 'src/components/PieCharts/data.tsx';
import { colors } from 'src/components/constants.ts';

interface TooltipPositionData {
  chartX: number;
  chartY: number;
}

let tooltipPositionData: TooltipPositionData = {
  chartX: 0,
  chartY: 0,
};

const CustomPieChart = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const onMouseOver = useCallback((_: unknown, index: number) => {
    setActiveIndex(index);
  }, []);

  const onMouseLeave = useCallback(() => {
    setActiveIndex(-1);
  }, []);

  const renderCustomizedLabel = (props: ICustomizedLabelProps) => (
    <CustomizedLabel {...props} />
  );

  const renderActiveShape = (props: IActiveShapeProps) => (
    <ActiveShape {...props} />
  );

  const onPieMouseOver = (e: TooltipPositionData) => {
    if (e) {
      tooltipPositionData = e;
    }
  };

  return (
    <div className="custom-pie" data-testid="test">
      <Typography className="custom-pie__title" component="h3">
        Custom
      </Typography>
      <ResponsiveContainer width="99%" height="99%">
        {/*@ts-ignore*/}
        <PieChart onMouseOver={onPieMouseOver}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="40%"
            outerRadius={80}
            label={renderCustomizedLabel}
            stroke="none"
            labelLine={false}
            activeIndex={activeIndex}
            // @ts-ignore
            activeShape={renderActiveShape}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.name.toString()}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip
            position={{
              x: tooltipPositionData.chartX - 70,
              y: tooltipPositionData.chartY - 70,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
