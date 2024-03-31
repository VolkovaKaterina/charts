import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomPieChart from './CustomPieChart.tsx';

describe('test', () => {
  test('renders CustomPieChart', () => {
    render(<CustomPieChart />);

    const chartElement = screen.getByTestId('test');
    expect(chartElement).toBeInTheDocument();
  });

  test('renders CustomPieChart', () => {
    render(<CustomPieChart />);

    const chartElement = screen.getByTestId('test');
 screen.debug();
  });
});
