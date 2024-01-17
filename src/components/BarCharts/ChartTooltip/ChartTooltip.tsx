import React from 'react';
import { Box } from '@mui/material';

import './ChartTooltip.scss';

export interface IPayload {
  dataKey: string;
  payload: {
    cx: number;
    cy: number;
    fill: string;
    // eslint-disable-next-line no-restricted-globals
    name: string;
    color: string;
  };
  // eslint-disable-next-line no-restricted-globals
  name: string;
  stroke: string;
  color: string;
  fill: string;
  type: undefined | string | number;
  value: number | string;
}

interface IChartTooltip {
  payload?: IPayload[] | null;
  active?: boolean;
  tooltipKey: string;
}

const ChartTooltip: React.FC<IChartTooltip> = ({
  payload,
  active,
  tooltipKey,
}) => {
  const isTooltipShow =
    active && payload && payload.length && tooltipKey;
  if (!isTooltipShow) {
    return null;
  }

  const data = payload.filter(
    (item) => item.dataKey === tooltipKey
  )[0];

  console.log('Payload', data);

  return (
    <Box className="chart-tooltip" data-testid="chart-tooltip">
      <Box
        key={data.name}
        className="chart-tooltip__wrap"
        data-testid="tooltip"
      >
        <Box
          data-testid="tooltip-bullet"
          className="chart-tooltip__bullet"
          style={{
            backgroundColor: data?.fill || data?.color,
          }}
        />
        <Box className="chart-tooltip__title">
          {` ${data.name} : `}
        </Box>
        <Box className="chart-tooltip__value">
          <span>{data.value}</span>
        </Box>
      </Box>
    </Box>
  );
};

ChartTooltip.defaultProps = {
  payload: null,
  active: false,
};

export default ChartTooltip;
