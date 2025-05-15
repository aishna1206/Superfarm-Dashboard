import React, { useState, useEffect } from 'react';
import { TemperatureChart, SoilMoistureChart, CropYieldChart, RainfallChart } from './Charts';
import farmData from '../data/farmData.json';
import DetailedDataView from './DetailedDataView'; // Import the new component

interface SummaryStats {
  avgTemperature: number;
  avgSoilMoisture: number;
  totalCropYield: number;
  totalRainfall: number;
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<SummaryStats>({
    avgTemperature: 0,
    avgSoilMoisture: 0,
    totalCropYield: 0,
    totalRainfall: 0
  });

  useEffect(() => {
    const calculateStats = () => {
      const avgTemp = farmData.reduce((acc, curr) => acc + curr.temperature, 0) / farmData.length;
      const avgMoisture = farmData.reduce((acc, curr) => acc + curr.soil_moisture, 0) / farmData.length;
      const totalYield = farmData.reduce((acc, curr) => acc + curr.crop_yield, 0);
      const totalRain = farmData.reduce((acc, curr) => acc + curr.rainfall, 0);

      setStats({
        avgTemperature: Number(avgTemp.toFixed(1)),
        avgSoilMoisture: Number(avgMoisture.toFixed(1)),
        totalCropYield: totalYield,
        totalRainfall: totalRain
      });
    };

    calculateStats();
  }, []);

  return (
    <div className="dashboard">
      <div className="stats-container">
        <div className="stat-box">
          <h4>Average Temperature</h4>
          <p>{stats.avgTemperature}°C</p>
        </div>
        <div className="stat-box">
          <h4>Average Soil Moisture</h4>
          <p>{stats.avgSoilMoisture}%</p>
        </div>
        <div className="stat-box">
          <h4>Total Crop Yield</h4>
          <p>{stats.totalCropYield} kg/ha</p>
        </div>
        <div className="stat-box">
          <h4>Total Rainfall</h4>
          <p>{stats.totalRainfall} mm</p>
        </div>
      </div>
      <div className="charts-grid">
        <TemperatureChart data={farmData} />
        <SoilMoistureChart data={farmData} />
        <CropYieldChart data={farmData} />
        <RainfallChart data={farmData} />
      </div>
      <DetailedDataView /> {/* Add the new component here */}
    </div>
  );
};

export default Dashboard;