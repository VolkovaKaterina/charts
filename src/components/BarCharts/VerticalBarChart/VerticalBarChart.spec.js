import React from 'react';
import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import VerticalBarChart from './VerticalBarChart';
import { mockData } from 'src/components/BarCharts/mockData.ts';


describe('VerticalBarChart', () => {
  test('renders without crashing', () => {
    render(<VerticalBarChart />);
    expect(screen.getByText('Vertical Bar Chart')).toBeInTheDocument();
  });


  test('should render  all bars', async () => {
    render(<div style={{width: 800, height: 800}}><VerticalBarChart isAnimationActive={false} /> </div>);
    const bars = document.querySelectorAll('.recharts-rectangle');
    screen.debug();

    await waitFor(()=>  expect(bars.length).toStrictEqual(mockData.length * 5))

    // expect(bars.length).toStrictEqual(mockData.length * 5)

    console.log(bars.length)
  });

  test('should render tooltip', async () => {
    render(<div style={{width: 800, height: 800}}><VerticalBarChart /> </div>);
    const bars = document.querySelectorAll('.recharts-rectangle');

    console.log(bars[1])

    fireEvent.mouseOver(bars[1]);

    await waitFor(()=> expect(screen.getByTestId('chart-tooltip')).toBeInTheDocument())

  });

});
