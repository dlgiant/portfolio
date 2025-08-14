'use client';

import React from 'react';
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';

interface AreaChartProps {
  data: Array<Record<string, any>>;
  areas: Array<{
    dataKey: string;
    color?: string;
    name?: string;
    stackId?: string;
    opacity?: number;
    gradient?: boolean;
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

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  areas,
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
        <RechartsAreaChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: xAxisLabel ? 40 : 5 }}
        >
          <defs>
            {areas.map((area, index) => {
              const color = area.color || `hsl(${index * 60}, 70%, 50%)`;
              return area.gradient !== false ? (
                <linearGradient
                  key={`gradient-${index}`}
                  id={`gradient-${index}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={color} stopOpacity={0.1} />
                </linearGradient>
              ) : null;
            })}
          </defs>
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
            />
          )}
          {areas.map((area, index) => {
            const color = area.color || `hsl(${index * 60}, 70%, 50%)`;
            return (
              <Area
                key={index}
                type={curved ? 'monotone' : 'linear'}
                dataKey={area.dataKey}
                stackId={area.stackId}
                stroke={color}
                strokeWidth={2}
                fill={area.gradient !== false ? `url(#gradient-${index})` : color}
                fillOpacity={area.opacity || 0.6}
                name={area.name || area.dataKey}
              />
            );
          })}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart;