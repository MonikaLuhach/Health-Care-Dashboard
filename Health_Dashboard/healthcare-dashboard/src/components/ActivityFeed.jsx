import "../styles/ActivityFeed.css";

// const data = [
//   [40, 60, 30], // Mon
//   [70, 50, 20], // Tues
//   [30, 40, 20], // Wed
//   [60, 70, 30], // Thurs
//   [80, 50, 40], // Fri
//   [35, 25, 15], // Sat
//   [55, 45, 35], // Sun
// ];

// const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

// const ActivityFeed = () => {
//   return (
//     <div className="activity-chart-container">
//       <div className="chart-header">
//         <h3>Activity</h3>
//         <span className="summary">3 appointment on this week</span>
//       </div>
//       <div className="chart">
//         {data.map((dayData, i) => (
//           <div className="day" key={i}>
//             <div className="bars">
//               {dayData.map((height, j) => (
//                 <div
//                   key={j}
//                   className={`bar bar-${j}`}
//                   style={{ height: `${height}px` }}
//                 ></div>
//               ))}
//             </div>
//             <div className="day-label">{days[i]}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ActivityFeed;


import ReactApexChart from "react-apexcharts";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const subBars = ["-1", "-2", "-3", "-4", "-5"];
const categories = days.flatMap((day) => subBars.map((sub) => day + sub));

// Helper to show only the day label for the first sub-bar
const xLabelFormatter = (value) => {
  for (let day of days) {
    if (value === day + "-1") return day;
  }
  return "";
};

const backgroundData = categories.map((cat) =>
  cat.endsWith("-1")
    ? { x: cat, y: [1, 10, 2, 12], fillColor: "#e5e7eb" }
    : { x: cat, y: null }
);

const cyanData = categories.map((cat) =>
  cat.endsWith("-2")
    ? {
        x: cat,
        y: [6, 15].sort((a, b) => a - b), 
        fillColor: "#06b6d4",
      }
    : { x: cat, y: null }
);

const indigoData = categories.map((cat) =>
  cat.endsWith("-3")
    ? {
        x: cat,
        y: [15, 10].sort((a, b) => a - b), 
        fillColor: "#6366f1",
      }
    : { x: cat, y: null }
);


const grey = categories.map((cat) =>
  cat.endsWith("-4")
    ? { x: cat, y: [8, 21, 15, 7], fillColor: "#e5e7eb" }
    : { x: cat, y: null }
);

const series = [
  { name: "Background", data: backgroundData },
  { name: "Cyan", data: cyanData },
  { name: "Indigo", data: indigoData },
  {name: "Grey", data: grey},
];

const options = {
  chart: {
    type: "rangeBar",
    height: 150,
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "100%",
      borderRadius: 2,
      endingShape: "rounded",
    },
  },
  dataLabels: { enabled: false },
  stroke: { show: false },
  xaxis: {
    type: "category",
    categories,
    labels: {
      style: { colors: "#6b7280", fontSize: "13px", fontWeight: 500 },
      rotate: 0,
      trim: false,
      formatter: xLabelFormatter,
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    min: 0,
    max: 20,
    show: false,
  },
  grid: { show: false },
  legend: { show: false },
  tooltip: { enabled: false },
  fill: {
    type: "solid",
    colors: undefined, 
  },
};

const Compo2 = () => (
  <div className="activity-container">
    <div className="activity-container-content">
      <h3 className="Activity">Activity</h3>
      <span>3 appointment on this week</span>
    </div>
    <div className="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="rangeBar"
        height={160}
      />
    </div>
  </div>
);

export default Compo2;