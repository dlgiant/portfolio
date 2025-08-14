import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import AreaChart from './AreaChart';
import RadarChart from './RadarChart';

// Sample data for all charts
const timeSeriesData = [
  { month: 'Jan', sales: 4000, revenue: 2400, profit: 2400 },
  { month: 'Feb', sales: 3000, revenue: 1398, profit: 2210 },
  { month: 'Mar', sales: 2000, revenue: 9800, profit: 2290 },
  { month: 'Apr', sales: 2780, revenue: 3908, profit: 2000 },
  { month: 'May', sales: 1890, revenue: 4800, profit: 2181 },
  { month: 'Jun', sales: 2390, revenue: 3800, profit: 2500 },
  { month: 'Jul', sales: 3490, revenue: 4300, profit: 2100 },
];

const categoryData = [
  { category: 'Electronics', q1: 4000, q2: 3000, q3: 2000, q4: 2780 },
  { category: 'Clothing', q1: 3000, q2: 4000, q3: 3000, q4: 2000 },
  { category: 'Food', q1: 2000, q2: 3000, q3: 3500, q4: 3900 },
  { category: 'Books', q1: 2780, q2: 3908, q3: 2000, q4: 2800 },
  { category: 'Sports', q1: 1890, q2: 2800, q3: 3100, q4: 3200 },
];

const pieData = [
  { name: 'Desktop', value: 45 },
  { name: 'Mobile', value: 30 },
  { name: 'Tablet', value: 15 },
  { name: 'Other', value: 10 },
];

const radarData = [
  { skill: 'React', fullStack: 90, frontend: 95, backend: 60 },
  { skill: 'Node.js', fullStack: 85, frontend: 50, backend: 95 },
  { skill: 'TypeScript', fullStack: 88, frontend: 85, backend: 80 },
  { skill: 'CSS', fullStack: 75, frontend: 90, backend: 40 },
  { skill: 'Database', fullStack: 80, frontend: 45, backend: 90 },
  { skill: 'DevOps', fullStack: 70, frontend: 40, backend: 85 },
];

// LineChart Stories
const lineChartMeta: Meta<typeof LineChart> = {
  title: 'Design System/Charts/LineChart',
  component: LineChart,
  parameters: {
    layout: 'padded',
  },
};

export default lineChartMeta;

export const BasicLineChart: StoryObj<typeof LineChart> = {
  args: {
    data: timeSeriesData,
    lines: [
      { dataKey: 'sales', color: '#3B82F6', name: 'Sales' },
    ],
    xAxisKey: 'month',
    height: 400,
  },
};

export const MultiLineChart: StoryObj<typeof LineChart> = {
  args: {
    data: timeSeriesData,
    lines: [
      { dataKey: 'sales', color: '#3B82F6', name: 'Sales' },
      { dataKey: 'revenue', color: '#10B981', name: 'Revenue' },
      { dataKey: 'profit', color: '#F59E0B', name: 'Profit' },
    ],
    xAxisKey: 'month',
    height: 400,
    xAxisLabel: 'Month',
    yAxisLabel: 'Amount ($)',
  },
};

export const DashedLineChart: StoryObj<typeof LineChart> = {
  args: {
    data: timeSeriesData,
    lines: [
      { dataKey: 'sales', color: '#3B82F6', name: 'Sales (Actual)' },
      { dataKey: 'revenue', color: '#10B981', name: 'Revenue (Projected)', strokeDasharray: '5 5' },
    ],
    xAxisKey: 'month',
    height: 400,
    curved: false,
  },
};

// BarChart Stories
export const BasicBarChart: StoryObj<typeof BarChart> = {
  render: () => (
    <BarChart
      data={categoryData}
      bars={[{ dataKey: 'q1', color: '#3B82F6', name: 'Q1' }]}
      xAxisKey="category"
      height={400}
    />
  ),
};

export const GroupedBarChart: StoryObj<typeof BarChart> = {
  render: () => (
    <BarChart
      data={categoryData}
      bars={[
        { dataKey: 'q1', color: '#3B82F6', name: 'Q1' },
        { dataKey: 'q2', color: '#10B981', name: 'Q2' },
        { dataKey: 'q3', color: '#F59E0B', name: 'Q3' },
        { dataKey: 'q4', color: '#EF4444', name: 'Q4' },
      ]}
      xAxisKey="category"
      height={400}
      xAxisLabel="Product Category"
      yAxisLabel="Sales ($)"
    />
  ),
};

export const StackedBarChart: StoryObj<typeof BarChart> = {
  render: () => (
    <BarChart
      data={categoryData}
      bars={[
        { dataKey: 'q1', color: '#3B82F6', name: 'Q1', stackId: 'stack' },
        { dataKey: 'q2', color: '#10B981', name: 'Q2', stackId: 'stack' },
        { dataKey: 'q3', color: '#F59E0B', name: 'Q3', stackId: 'stack' },
        { dataKey: 'q4', color: '#EF4444', name: 'Q4', stackId: 'stack' },
      ]}
      xAxisKey="category"
      height={400}
    />
  ),
};

export const ColorByValueBarChart: StoryObj<typeof BarChart> = {
  render: () => (
    <BarChart
      data={timeSeriesData}
      bars={[{ dataKey: 'sales', name: 'Sales' }]}
      xAxisKey="month"
      height={400}
      colorByValue={true}
    />
  ),
};

// PieChart Stories
export const BasicPieChart: StoryObj<typeof PieChart> = {
  render: () => (
    <PieChart
      data={pieData}
      height={400}
    />
  ),
};

export const DonutChart: StoryObj<typeof PieChart> = {
  render: () => (
    <PieChart
      data={pieData}
      height={400}
      innerRadius={60}
      outerRadius={100}
      centerLabel="Devices"
    />
  ),
};

export const PieChartWithLabels: StoryObj<typeof PieChart> = {
  render: () => (
    <PieChart
      data={pieData}
      height={400}
      showLabels={true}
      showLegend={false}
    />
  ),
};

export const CustomColorsPieChart: StoryObj<typeof PieChart> = {
  render: () => (
    <PieChart
      data={[
        { name: 'Desktop', value: 45, color: '#FF6B6B' },
        { name: 'Mobile', value: 30, color: '#4ECDC4' },
        { name: 'Tablet', value: 15, color: '#45B7D1' },
        { name: 'Other', value: 10, color: '#96CEB4' },
      ]}
      height={400}
    />
  ),
};

// AreaChart Stories
export const BasicAreaChart: StoryObj<typeof AreaChart> = {
  render: () => (
    <AreaChart
      data={timeSeriesData}
      areas={[
        { dataKey: 'sales', color: '#3B82F6', name: 'Sales' },
      ]}
      xAxisKey="month"
      height={400}
    />
  ),
};

export const MultiAreaChart: StoryObj<typeof AreaChart> = {
  render: () => (
    <AreaChart
      data={timeSeriesData}
      areas={[
        { dataKey: 'sales', color: '#3B82F6', name: 'Sales' },
        { dataKey: 'revenue', color: '#10B981', name: 'Revenue' },
        { dataKey: 'profit', color: '#F59E0B', name: 'Profit' },
      ]}
      xAxisKey="month"
      height={400}
      xAxisLabel="Month"
      yAxisLabel="Amount ($)"
    />
  ),
};

export const StackedAreaChart: StoryObj<typeof AreaChart> = {
  render: () => (
    <AreaChart
      data={timeSeriesData}
      areas={[
        { dataKey: 'sales', color: '#3B82F6', name: 'Sales', stackId: 'stack' },
        { dataKey: 'revenue', color: '#10B981', name: 'Revenue', stackId: 'stack' },
        { dataKey: 'profit', color: '#F59E0B', name: 'Profit', stackId: 'stack' },
      ]}
      xAxisKey="month"
      height={400}
    />
  ),
};

// RadarChart Stories
export const BasicRadarChart: StoryObj<typeof RadarChart> = {
  render: () => (
    <RadarChart
      data={radarData}
      dataKeys={[
        { key: 'fullStack', color: '#3B82F6', name: 'Full Stack' },
      ]}
      angleKey="skill"
      height={400}
    />
  ),
};

export const MultiRadarChart: StoryObj<typeof RadarChart> = {
  render: () => (
    <RadarChart
      data={radarData}
      dataKeys={[
        { key: 'fullStack', color: '#3B82F6', name: 'Full Stack' },
        { key: 'frontend', color: '#10B981', name: 'Frontend' },
        { key: 'backend', color: '#F59E0B', name: 'Backend' },
      ]}
      angleKey="skill"
      height={400}
      maxValue={100}
    />
  ),
};

// Combined Chart Showcase
export const ChartShowcase = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="mb-6">
        <button
          onClick={() => setIsDark(!isDark)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Toggle Dark Mode
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Sales Trend
          </h3>
          <LineChart
            data={timeSeriesData}
            lines={[
              { dataKey: 'sales', color: '#3B82F6', name: 'Sales' },
              { dataKey: 'revenue', color: '#10B981', name: 'Revenue' },
            ]}
            xAxisKey="month"
            height={300}
          />
        </div>

        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Quarterly Performance
          </h3>
          <BarChart
            data={categoryData}
            bars={[
              { dataKey: 'q1', color: '#3B82F6', name: 'Q1' },
              { dataKey: 'q2', color: '#10B981', name: 'Q2' },
              { dataKey: 'q3', color: '#F59E0B', name: 'Q3' },
              { dataKey: 'q4', color: '#EF4444', name: 'Q4' },
            ]}
            xAxisKey="category"
            height={300}
          />
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Device Usage
          </h3>
          <PieChart
            data={pieData}
            height={300}
            innerRadius={50}
            outerRadius={90}
          />
        </div>

        {/* Area Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Revenue Overview
          </h3>
          <AreaChart
            data={timeSeriesData}
            areas={[
              { dataKey: 'profit', color: '#F59E0B', name: 'Profit', stackId: 'stack' },
              { dataKey: 'revenue', color: '#10B981', name: 'Revenue', stackId: 'stack' },
            ]}
            xAxisKey="month"
            height={300}
          />
        </div>

        {/* Radar Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Skills Comparison
          </h3>
          <RadarChart
            data={radarData}
            dataKeys={[
              { key: 'fullStack', color: '#3B82F6', name: 'Full Stack', opacity: 0.3 },
              { key: 'frontend', color: '#10B981', name: 'Frontend', opacity: 0.3 },
              { key: 'backend', color: '#F59E0B', name: 'Backend', opacity: 0.3 },
            ]}
            angleKey="skill"
            height={400}
            maxValue={100}
          />
        </div>
      </div>
    </div>
  );
};