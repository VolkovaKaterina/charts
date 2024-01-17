import { ICustomizedLabelProps } from 'src/components/PieCharts/CustomPieChart/CustomPieChart.models.ts';

const CustomizedLabel = ({
  cx,
  cy,
  midAngle,
  outerRadius,
  percent,
  payload,
}: ICustomizedLabelProps) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + outerRadius * cos;
  const sy = cy + outerRadius * sin;
  const mx = cx + (outerRadius + 10) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  return (
    <g>
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke="#D1D1D1"
        fill="none"
      />
      <text
        className="custom-pie__label-name"
        x={ex + (cos >= 0 ? 1 : -1) * 7}
        y={ey + 4}
        textAnchor={textAnchor}
        fill="#24232B"
        data-testid="pie-label"
      >
        {payload.name}
      </text>
      <text
        className="custom-pie__label-percent"
        x={ex - 1 + (cos >= 0 ? 1 : -1) * 2}
        y={ey + 5}
        dy={18}
        textAnchor={textAnchor}
        fill="#24232B"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

export default CustomizedLabel;
