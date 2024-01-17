import { Sector } from 'recharts';
import { IActiveShapeProps } from 'src/components/PieCharts/CustomPieChart/CustomPieChart.models.ts';

const ActiveShape = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
}: IActiveShapeProps) => (
  <>
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
    />
    <Sector
      cx={cx}
      cy={cy}
      startAngle={startAngle}
      endAngle={endAngle}
      innerRadius={outerRadius}
      outerRadius={outerRadius + 12}
      fill={fill}
      opacity={0.15}
    />
  </>
);

export default ActiveShape;
