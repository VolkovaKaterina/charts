import { Box } from '@mui/material';
import SimplePieChart from 'src/components/PieCharts/SimplePieChart';
import CustomPieChart from 'src/components/PieCharts/CustomPieChart/CustomPieChart.tsx';
import NivoPieChart from 'src/components/PieCharts/NivoPieChart';

const PieCharts = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <SimplePieChart />
        <CustomPieChart />
      </Box>
      <NivoPieChart />
    </div>
  );
};

export default PieCharts;
