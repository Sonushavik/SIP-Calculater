import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { alignProperty } from '@mui/material/styles/cssUtils';
import './DonutChart.css';

// Register necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ investedAmount, estimatedReturns }) => {
  const data = {
    labels: ['Invested Amount', 'Estimated Returns'],
    datasets: [
      {
        label: 'Amount in ₹',
        data: [investedAmount, estimatedReturns],
        backgroundColor: ['#42A5F5', '#66BB6A'], // Different colors for segments
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
                font: {
                  size: 12, // Adjust the font size
                },
                padding: 20, // Add padding between labels
                boxWidth: 20, 
                // Set the box width for the legend
                
              },
      },
    },
  };

  return (
    <div className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] text-align-center'>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
