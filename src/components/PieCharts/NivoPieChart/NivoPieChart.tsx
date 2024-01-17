import { ResponsivePie } from '@nivo/pie';
import { data } from './data.ts';
import { colors } from 'src/components/constants.ts';

const NivoPieChart = () => {
  const total = data.reduce((acc, datum) => acc + datum.value, 0);
  return (
    <div style={{ height: 300, marginTop: '300px' }}>
      <h3>Nivo PieChart</h3>
      <ResponsivePie
        data={data}
        margin={{
          top: 40,
          right: 100,
          bottom: 100,
          left: 100,
        }}
        innerRadius={0}
        // padAngle={0.7}
        cornerRadius={1}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ theme: 'background' }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabel={(e) =>
          `${e.id}: ${((e.value / total) * 100).toFixed(2)}`
        }
        arcLinkLabelsTextOffset={9}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsDiagonalLength={15}
        arcLinkLabelsStraightLength={21}
        arcLinkLabelsColor="black"
        arcLabelsSkipAngle={10}
        colors={colors}
        arcLabelsTextColor={{ theme: 'background' }}
      />
    </div>
  );
};

export default NivoPieChart;
