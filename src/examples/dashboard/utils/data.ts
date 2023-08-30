export const series = [
  {
    name: "series-1",
    data: [
      1700, 4400, 3750, 750, 5900, 5800, 2800, 4500, 4800, 2250, 1600, 4500,
    ],
  },
];

export const options = {
  chart: {
    id: "basic-bar",
    animations: {
      speed: 1000,
    },
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: true,
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  colors: ["#fed811"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      distributed: true,
      borderRadiusApplication: "end",
      borderRadius: 5,
      columnWidth: "80%",
    },
  },
  tooltip: {
    enabled: false,
  },
  states: {
    normal: {
      filter: {
        type: "none",
        value: 0,
      },
    },
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        colors: "#6e6b7b",
        fontFamily: "Inter",
        fontSize: "12px",
      },
      formatter: function (value: any) {
        return "$" + value;
      },
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      show: true,
      style: {
        colors: "#6e6b7b",
        fontFamily: "Inter",
        fontSize: "12px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
};

export const customers = [
  {
    id: 1,
    name: "Sammy Gardner",
    email: "sammy@example.com",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Sammy",
    price: "$6,200",
  },
  {
    id: 2,
    name: "Fluffy Griffin",
    email: "fluffy@example.com",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Bandit",
    price: "$5,140",
  },
  {
    id: 3,
    name: "Thomas Hood",
    email: "thomas@example.com",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Trouble",
    price: "$4,100",
  },
  {
    id: 4,
    name: "Sophie Green",
    email: "sophie@example.com",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Sophie",
    price: "$3,200",
  },
  {
    id: 5,
    name: "Rascal Kusuma",
    email: "rascal@example.com",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Mittens",
    price: "$2,100",
  },
];
