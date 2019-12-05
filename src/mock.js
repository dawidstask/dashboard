const Mock = {
  vehicles: [
    {
      id: 1,
      name: "Van 56354546",
      values: [5, 21, 4, 5, 67, 2, 9],
      fuelConsumption: [24, 2, 36, 67, 75, 75, 79],
      usage: [12, 3],
      journeys: [
        {
          name: "Trip to Sydney",
          startTime: "1570702210",
          endTime: "1570737600"
        },
        {
          name: "Trip to Melbourne",
          startTime: "1574419380",
          endTime: ""
        },
        {
          name: "Trip to Adelaide",
          startTime: "1574419380",
          endTime: ""
        },
        {
          name: "Trip to Adelaide",
          startTime: "1574419380",
          endTime: "1574419580"
        }
      ]
    },
    {
      id: 2,
      name: "Bus 34534688",
      values: [15, 1, 24, 25, 37, 0, 1],
      fuelConsumption: [8, 16, 24, 24, 19, 30, 30],
      usage: [15, 5],
    },
    {
      id: 3,
      name: "Dump truck 14574523",
      values: [3, 24, 1, 1, 39, 90, 41],
      fuelConsumption: [28, 28, 24, 17, 10, 12, 6],
      usage: [12, 10],
      journeys: [
        {
          name: "Trip to Brisbane",
          startTime: "1570702210",
          endTime: "1574427200"
        }
      ]
    },
    {
      id: 4,
      name: "Crane 98376621",
      values: [0, 1, 46, 3, 7, 82, 59],
      fuelConsumption: [7, 8, 3, 10, 12, 3, 7],
      usage: [48, 0],
    }
  ]
};

export default Mock;
