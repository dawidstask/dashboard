import Mock from "./../mock.js";

export default class CompletedJourneys extends HTMLElement {
  connectedCallback() {
    this.innerHTML = this.render(Mock.vehicles);
  }

  getTableHeaders() {
    return `
      <tr>
        <th>Vehicle name</th>
        <th>Journey name</th>
        <th>Journey start date</th>
        <th>Journey end date</th>
      </tr>
    `;
  }

  getTableRow(vehicle, journey) {
    return `
      <tr>
        <td>${vehicle.name}</td>
        <td>${journey.name}</td>
        <td>${this.convertToLocalString(journey.startTime)}</td>
        <td>${this.convertToLocalString(journey.endTime)}</td>
      </tr>
    `;
  }

  /**
   * Convert to local date time string
   * @param timestamp
   */
  convertToLocalString(timestamp) {
    const dateTimeInMilliseconds = timestamp * 1000;
    const date = new Date(dateTimeInMilliseconds);

    return `${date.toLocaleString()}`;
  }

  render(vehicles) {
    return `
      <h3>Completed journeys</h3>
      <table>
        <thead>
            ${this.getTableHeaders()}
        </thead>
        <tbody>
          ${vehicles
            .filter(vehicle => vehicle.hasOwnProperty("journeys"))
            .map(vehicle => {
              return vehicle.journeys
                .filter(journey => journey.endTime !== "")
                .map(journey => this.getTableRow(vehicle, journey))
                .join("");
            })
            .join("")}
        </tbody>
      </table>
    `;
  }
}
