import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface ChartProps {
  data: Array<{
    date: string;
    temperature: number;
    soil_moisture: number;
    crop_yield: number;
    rainfall: number;
  }>;
}

export const TemperatureChart: React.FC<ChartProps> = ({ data }) => (
  <div className="chart-container">
    <h3>Temperature Trends</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: '°C', position: 'insideLeft', angle: -90 }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export const SoilMoistureChart: React.FC<ChartProps> = ({ data }) => (
  <div className="chart-container">
    <h3>Soil Moisture Changes</h3>
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: '%', position: 'insideLeft', angle: -90 }} />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="soil_moisture" fill="#8884d8" stroke="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export const CropYieldChart: React.FC<ChartProps> = ({ data }) => (
  <div className="chart-container">
    <h3>Crop Yields</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: 'kg/ha', position: 'insideLeft', angle: -90 }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="crop_yield" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export const RainfallChart: React.FC<ChartProps> = ({ data }) => (
  <div className="chart-container">
    <h3>Rainfall Data</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: 'mm', position: 'insideLeft', angle: -90 }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="rainfall" stroke="#0088FE" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);