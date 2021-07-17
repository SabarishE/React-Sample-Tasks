import { Line, Doughnut, Bar } from "react-chartjs-2";

export function Chart() {
  return (
    <div id="chart-flex">
      <div id="chart-intro">
        <h1>Charts</h1>
        <p>
          Chart.js is a third party plugin that is used to generate the charts
          in this theme. The charts below have been customized - for further
          customization options, please visit the official Chart.js
          documentation.
        </p>
      </div>
      <div id="chart-1">
        <div className="chart-title">Area chart</div>
        <div id="Line">
          <Line
            data={{
              labels: [
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
                "Dec"
              ],
              datasets: [
                {
                  label: "",
                  data: [
                    0,
                    10000,
                    5000,
                    15000,
                    10000,
                    20000,
                    15000,
                    25000,
                    20000,
                    30000,
                    25000,
                    40000
                  ],
                  backgroundColor: "#889bd4",
                  borderColor: "rgba(78, 115, 223, 1)",
                  fill: true,
                  tension: 0.8
                }
              ]
            }}
            options={{
              maintainAspectRatio: false,

              legend: { display: false }
            }}
          />
        </div>
      </div>
      <div id="chart-2">
        <div className="chart-title">Doughnut Chart</div>
        <div id="Doughnut">
          <Doughnut
            data={{
              labels: ["Direct", "Referral", "Social"],
              datasets: [
                {
                  data: [55, 30, 15],
                  backgroundColor: ["#ff0000", "#a02929", "#fa8787"]
                }
              ]
            }}
            options={{
              maintainAspectRatio: false,

              legend: { display: false }
            }}
          />
        </div>
      </div>

      <div id="chart-3">
        <div className="chart-title">Bar Chart</div>
        <div id="Bar">
          <Bar
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  label: "",
                  data: [4215, 5312, 6251, 7841, 9821, 14984],
                  backgroundColor: "#ff6600"
                }
              ]
            }}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      </div>
    </div>
  );
}
