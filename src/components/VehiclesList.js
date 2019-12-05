import Mock from "./../mock.js";
import generateChart from '../utils/generateChart';

export default class VehiclesList extends HTMLElement {

  connectedCallback() {
    this.innerHTML = this.render(Mock.vehicles);

    Mock.vehicles.map(vehicle => {
      const ctx = document.getElementById(`myChart-vl-${vehicle.id}`).getContext('2d');
      generateChart(ctx, { data: this.getChartData(vehicle.values) });
    });
  }

  getChartData(data) {
    return {
      labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          data,
        }
      ]
    };
  }

  render(vehicles) {
    return `
      <h3>List of vehicles</h3>
      ${vehicles
        .map(
          vehicle => `
            <div class="vehicles-list__item">
              <span>Vehicle: <b>${vehicle.name}</b></span>
              <canvas id="myChart-vl-${vehicle.id}" width="400" height="150"></canvas>
            </div>
          `
        )
        .join("")
      }
    `;
  }
}
