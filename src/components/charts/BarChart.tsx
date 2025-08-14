'use client';

import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
  Cell,
} from 'recharts';

interface BarChartProps {
  data: Array<Record<string, any>>;
  bars: Array<{
    dataKey: string;
    color?: string;
    name?: string;
    stackId?: string;
  }>;
  xAxisKey: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  className?: string;
  yAxisLabel?: string;
  xAxisLabel?: string;
  layout?: 'horizontal' | 'vertical';
  barSize?: number;
  colorByValue?: boolean;
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const BarChart: React.FC<BarChartProps> = ({
  data,
  bars,
  xAxisKey,
  height = 400,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
  className = '',
  yAxisLabel,
  xAxisLabel,
  layout = 'horizontal',
  barSize,
  colorByValue = false,
}) => {
  const getColor = (value: number, index: number) => {
    if (!colorByValue) return bars[0]?.color || `hsl(${index * 60}, 70%, 50%)`;
    
    // Color gradient based on value
    const max = Math.max(...data.map(d => d[bars[0].dataKey]));
    const percentage = value / max;
    const hue = percentage * 120; // 0 (red) to 120 (green)
    return `hsl(${hue}, 70%, 50%)`;
  };

  return (
    <div className={`w-full ${className}`}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          layout={layout}
          margin={{ top: 5, right: 30, left: 20, bottom: xAxisLabel ? 40 : 5 }}
        >
          {showGrid && (
            <CartesianGrid 
              strokeDasharray="3 3" 
              className="stroke-gray-200 dark:stroke-gray-700" 
            />
          )}
          <XAxis
            type={layout === 'vertical' ? 'number' : 'category'}
            dataKey={layout === 'vertical' ? undefined : xAxisKey}
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
            type={layout === 'vertical' ? 'category' : 'number'}
            dataKey={layout === 'vertical' ? xAxisKey : undefined}
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
          {showLegend && bars.length > 1 && (
            <Legend
              wrapperStyle={{
                paddingTop: '20px',
              }}
            />
          )}
          {bars.map((bar, index) => (
            <Bar
              key={index}
              dataKey={bar.dataKey}
              fill={bar.color || `hsl(${index * 60}, 70%, 50%)`}
              name={bar.name || bar.dataKey}
              stackId={bar.stackId}
              barSize={barSize}
              radius={[4, 4, 0, 0]}
            >
              {colorByValue && data.map((entry, cellIndex) => (
                <Cell key={`cell-${cellIndex}`} fill={getColor(entry[bar.dataKey], cellIndex)} />
              ))}
            </Bar>
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;