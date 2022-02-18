import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../UI/LoadingSpinner";
// import React, { PureComponent } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const Analytics = () => {
  const data = useSelector((state) => state.auth.data);
  let ui_ux = 0;
  let data_science = 0;
  let dev_ops = 0;
  let mobile_app = 0;
  let frontend = 0;
  let backend = 0;
  let qa = 0;
  let pm = 0;
  let other = 0;
  let chartData = 0;

  if (data) {
    ui_ux = data.filter((el) => el.TechSkill === "UI/UX Design");
    data_science = data.filter((el) => el.TechSkill === " Data Science");
    dev_ops = data.filter((el) => el.TechSkill === "Dev Ops");
    mobile_app = data.filter((el) => el.TechSkill === "Mobile App Development");
    frontend = data.filter((el) => el.TechSkill === " Frontend Development");
    backend = data.filter((el) => el.TechSkill === "Backend Development");
    qa = data.filter((el) => el.TechSkill === " QA Testing");
    pm = data.filter((el) => el.TechSkill === "Technical Project Management");
    other = data.filter((el) => el.TechSkill === "Other");
    chartData = [
      ui_ux.length,
      data_science.length,
      dev_ops.length,
      mobile_app.length,
      frontend.length,
      backend.length,
      qa.length,
      pm.length,
      other.length,
    ];
  }
  let labels = [
    "UI/UX",
    "Data Science",
    "Dev Ops",
    "Mobile App",
    "Frontend",
    "Backend",
    "QA Testing",
    "Project Manager",
    "Other",
  ];

  if (!data) {
    return (
      <div className="centered">
        <LoadingSpinner />;
      </div>
    );
  }
  return (
    <div
      style={{
        maxWidth: "100%",
        backgroundColor: "#fff",
        margin: "3em 0 ",
        borderRadius: "8px",
        padding: "2em",
      }}
    >
      <div className="desc">
        <div></div>
        <span>Talent Distribution</span>
      </div>
      <div>
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                label: "Talents",
                data: chartData,
                // Color of each bar
                backgroundColor: "#699CFD",
                // Border color of each bar
                borderColor: "#699CFD",
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={400}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            //   plugins: {
            //     title: {
            //       display: true,
            //       text: "Talent Distribution",
            //     },
            //   },
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    fontFamily: "Work Sans",
                    font: "bold",
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Analytics;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
