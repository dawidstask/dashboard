import Chart from 'chart.js';

export default function generateChart(ctx, config = {}) {
  const { type, options, data } = config;

  const chartOptions = {
    responsive: false,
    legend: {
      display: false,
    },
    elements: {
      line: {
        borderColor: '#000000',
          borderWidth: 1,
      },
      point: {
        radius: 2,
        backgroundColor: 'black',
      }
    },
    tooltips: {
      enabled: true,
    },
    scales: {
      yAxes: [
        {
          display: true,
        }
      ],
      xAxes: [
        {
          display: false,
        }
      ]
    }
  };

  const chartConfig = {
    type: type || 'line',
    data,
    options: { ...chartOptions, ...options }
  };

  new Chart(ctx, chartConfig);
}
