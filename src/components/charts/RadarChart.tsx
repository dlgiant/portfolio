'use client';

import React from 'react';
import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

interface RadarChartProps {
  data: Array<Record<string, any>>;
  dataKeys: Array<{
    key: string;
    color?: string;
    name?: string;
    opacity?: number;
  }>;
  angleKey: string;
  height?: number;
  showLegend?: boolean;
  showTooltip?: boolean;
  className?: string;
  maxValue?: number;
  showRadiusAxis?: boolean;
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

const RadarChart: React.FC<RadarChartProps> = ({
  data,
  dataKeys,
  angleKey,
  height = 400,
  showLegend = true,
  showTooltip = true,
  className = '',
  maxValue,
  showRadiusAxis = true,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsRadarChart data={data}>
          <PolarGrid 
            gridType="polygon"
            className="stroke-gray-300 dark:stroke-gray-600"
          />
          <PolarAngleAxis
            dataKey={angleKey}
            className="text-gray-600 dark:text-gray-400"
            tick={{ fill: 'currentColor', fontSize: 12 }}
          />
          {showRadiusAxis && (
            <PolarRadiusAxis
              angle={90}
              domain={[0, maxValue || 'auto']}
              className="text-gray-600 dark:text-gray-400"
              tick={{ fill: 'currentColor', fontSize: 10 }}
            />
          )}
          {dataKeys.map((dataKey, index) => {
            const color = dataKey.color || `hsl(${index * 60}, 70%, 50%)`;
            return (
              <Radar
                key={index}
                name={dataKey.name || dataKey.key}
                dataKey={dataKey.key}
                stroke={color}
                fill={color}
                fillOpacity={dataKey.opacity || 0.3}
                strokeWidth={2}
              />
            );
          })}
          {showTooltip && <Tooltip content={<CustomTooltip />} />}
          {showLegend && dataKeys.length > 1 && (
            <Legend
              wrapperStyle={{
                paddingTop: '20px',
              }}
            />
          )}
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChart;