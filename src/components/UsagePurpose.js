import Mock from "./../mock.js";
import generateChart from '../utils/generateChart';

export default class UsagePurpose extends HTMLElement {

  connectedCallback() {
    this.innerHTML = this.render(Mock.vehicles);

    Mock.vehicles.map(vehicle => {
      const ctx = document.getElementById(`myChart-up-${vehicle.id}`).getContext('2d');
      generateChart(ctx, { type: 'pie', options: this.getChartOptions(), data: this.getChartData(vehicle.usage) });
    });
  }

  getChartOptions() {
    return {
      legend: {
        display: true,
      },
      scales: {
        yAxes: [
          {
            display: false,
          }
        ],
        xAxes: [
          {
            display: false,
          }
        ]
      }
    }
  }

  getChartData(data) {
    return {
      labels: ['business', 'private'],
      datasets: [
        {
          data,
          backgroundColor: ['#4BC0C0', '#36A2EB'],
        }
      ]
    };
  }

  render(vehicles) {
    return `
      <h3>Usage (business vs private)</h3>
      ${vehicles
        .map(
          vehicle => `
                <div class="usage-purpose__item">
                  <span>Vehicle: <b>${vehicle.name}</b></span>
                  <canvas id="myChart-up-${vehicle.id}" width="350" height="78"></canvas>
                </div>
              `
        )
        .join("")
      }
    `;
  }
}
