'use client';

import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface LineChartProps {
  data: Array<Record<string, any>>;
  lines: Array<{
    dataKey: string;
    color?: string;
    name?: string;
    strokeWidth?: number;
    strokeDasharray?: string;
    dot?: boolean;
  }>;
  xAxisKey: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  className?: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
  curved?: boolean;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const LineChart: React.FC<LineChartProps> = ({
  data,
  lines,
  xAxisKey,
  height = 400,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  className = '',
  yAxisLabel,
  xAxisLabel,
  curved = true,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: xAxisLabel ? 40 : 5 }}
        >
          {showGrid && (
            <CartesianGrid 
              strokeDasharray="3 3" 
              className="stroke-gray-200 dark:stroke-gray-700" 
            />
          )}
          <XAxis
            dataKey={xAxisKey}
            className="text-gray-600 dark:text-gray-400"
            tick={{ fill: 'currentColor', fontSize: 12 }}
            label={
              xAxisLabel
                ? {
                    value: xAxisLabel,
                    position: 'insideBottom',
                    offset: -10,
                    style: { fill: 'currentColor', fontSize: 12 },
                  }
                : undefined
            }
          />
          <YAxis
            className="text-gray-600 dark:text-gray-400"
            tick={{ fill: 'currentColor', fontSize: 12 }}
            label={
              yAxisLabel
                ? {
                    value: yAxisLabel,
                    angle: -90,
                    position: 'insideLeft',
                    style: { fill: 'currentColor', fontSize: 12 },
                  }
                : undefined
            }
          />
          {showTooltip && <Tooltip content={<CustomTooltip />} />}
          {showLegend && (
            <Legend
              wrapperStyle={{
                paddingTop: '20px',
              }}
              iconType="line"
            />
          )}
          {lines.map((line, index) => (
            <Line
              key={index}
              type={curved ? 'monotone' : 'linear'}
              dataKey={line.dataKey}
              stroke={line.color || `hsl(${index * 60}, 70%, 50%)`}
              strokeWidth={line.strokeWidth || 2}
              strokeDasharray={line.strokeDasharray}
              name={line.name || line.dataKey}
              dot={line.dot !== false}
              activeDot={{ r: 6 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;