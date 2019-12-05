import Mock from "./../mock.js";
import generateChart from '../utils/generateChart';

export default class FuelConsumption extends HTMLElement {

  connectedCallback() {
    this.innerHTML = this.render(Mock.vehicles);

    Mock.vehicles.map(vehicle => {
      const ctx = document.getElementById(`myChart-fc-${vehicle.id}`).getContext('2d');
      generateChart(ctx, { type: 'bar', options: this.getChartOptions(), data: this.getChartData(vehicle.fuelConsumption) });
    });
  }

  getChartOptions() {
    return {
      scales: {
        xAxes: [
          {
            display: true
          }
        ]
      }
    }
  }

  getChartData(data) {
    return {
      labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          data,
          backgroundColor: ['#62C14E', '#65B9E8', '#8834F7', '#F3D527', '#EF7D7D', '#FFB82A', '#E14938'],
        }
      ]
    };
  }

  render(vehicles) {
    return `
      <h3>Fuel consumption</h3>
      ${vehicles
        .map(
          vehicle => `
            <div class="fuel-consumption__item">
              <span>Vehicle: <b>${vehicle.name}</b></span>
              <canvas id="myChart-fc-${vehicle.id}" width="350" height="78"></canvas>
            </div>
          `
        )
        .join("")
      }
    `;
  }
}
