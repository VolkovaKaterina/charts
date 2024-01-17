import DashboardBarChart from 'src/components/BarCharts/DashboardBarChart';
import VerticalBarChart from 'src/components/BarCharts/VerticalBarChart';
import { Box } from '@mui/material';
import './BarCharts.scss';

const BarCharts = () => {
  return (
    <Box className="bar-charts">
      <DashboardBarChart />
      <VerticalBarChart />
    </Box>
  );
};

export default BarCharts;
