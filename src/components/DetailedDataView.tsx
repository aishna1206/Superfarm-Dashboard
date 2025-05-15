// src/components/DetailedDataView.tsx
import React, { useEffect, useState } from 'react';
import farmData from '../data/farmData.json'; // Assuming direct import for simplicity

interface FarmDataItem {
  date: string;
  temperature: number;
  soil_moisture: number;
  crop_yield: number;
  rainfall: number;
}

const DetailedDataView: React.FC = () => {
  const [data, setData] = useState<FarmDataItem[]>([]);

  useEffect(() => {
    // In a real app, you might fetch this data
    setData(farmData);
  }, []);

  if (data.length === 0) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="detailed-data-view-container">
      <h3>Detailed Farm Data</h3>
      <div className="table-responsive-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature (°C)</th>
              <th>Soil Moisture (%)</th>
              <th>Crop Yield (kg)</th>
              <th>Rainfall (mm)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.temperature}</td>
                <td>{item.soil_moisture}</td>
                <td>{item.crop_yield}</td>
                <td>{item.rainfall}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailedDataView;