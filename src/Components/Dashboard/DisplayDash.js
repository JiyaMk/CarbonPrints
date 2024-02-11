import React, { useEffect, useRef } from "react";
import './Dashboard.css';
import Chart from 'chart.js/auto';

// Chart component for Card 1
const ChartCard1 = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    if (chartRef.current !== null) {
      chartRef.current.destroy(); // Destroy previous chart instance
    }
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    return () => {
      if (chartRef.current !== null) {
        chartRef.current.destroy(); // Cleanup on component unmount
      }
    };
  }, []);

  return (
    <div className="mychart">
      <h4>Results</h4>
      <canvas ref={canvasRef} id="myChart1"></canvas>
    </div>
  );
};

const ChartCard2 = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    if (chartRef.current !== null) {
      chartRef.current.destroy(); // Destroy previous chart instance
    }
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Energy Consumption',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });
    return () => {
      if (chartRef.current !== null) {
        chartRef.current.destroy(); 
      }
    };
  }, []);

  return (
    <div className="mychart">
      <h4>Energy Consumption</h4>
      <canvas ref={canvasRef} id="myChart2"></canvas>
    </div>
  );
};

const ChartCard3 = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    if (chartRef.current !== null) {
      chartRef.current.destroy(); 
    }
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Pizza', 'Burger', 'Fries', 'Sushi'],
        datasets: [{
          label: 'Food and Diet',
          data: [30, 20, 15, 35],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      }
    });
    return () => {
      if (chartRef.current !== null) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="mychart">
      <h4>Food and Diet</h4>
      <canvas ref={canvasRef} id="myChart3"></canvas>
    </div>
  );
};

// Chart component for Card 4
const ChartCard4 = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    if (chartRef.current !== null) {
      chartRef.current.destroy(); 
    }
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Car', 'Bus', 'Bicycle', 'Walking'],
        datasets: [{
          label: 'Travel and Commuting',
          data: [20, 30, 15, 35],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    return () => {
      if (chartRef.current !== null) {
        chartRef.current.destroy(); 
      }
    };
  }, []);

  return (
    <div className="mychart">
      <h4>Travel and Commuting</h4>
      <canvas ref={canvasRef} id="myChart4"></canvas>
    </div>
  );
};

// Chart component for Card 5
const ChartCard5 = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    if (chartRef.current !== null) {
      chartRef.current.destroy(); // Destroy previous chart instance
    }
    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Coffee', 'Tea', 'Soda', 'Juice'],
        datasets: [{
          label: 'Consumption Habits',
          data: [30, 20, 15, 35],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      }
    });
    return () => {
      if (chartRef.current !== null) {
        chartRef.current.destroy(); // Cleanup on component unmount
      }
    };
  }, []);

  return (
    <div className="mychart">
      <h4>Consumption Habits</h4>
      <canvas ref={canvasRef} id="myChart5"></canvas>
    </div>
  );
};
 const DisplayDash = ({ title }) => {
    const renderContent = (title) => {
        switch (title) {
            case 'Card 1': 
                return <ChartCard1 />;
            case 'Card 2':
                return <ChartCard2 />;
            case 'Card 3':
                return <ChartCard3 />;
            case 'Card 4':
                return <ChartCard4 />;
            case 'Card 5':
                return <ChartCard5 />;
            default:
                return <h4>No content available</h4>; // Default content
        }
    };

    return (
        <div className="dashboard-container">
            <div className="card">
                {renderContent(title)}
            </div>
        </div>
    );
};

export default DisplayDash;