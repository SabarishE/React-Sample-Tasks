import GetAppIcon from "@material-ui/icons/GetApp";

import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import AssignmentIcon from "@material-ui/icons/Assignment";

import { Line, Doughnut} from "react-chartjs-2";

export function Dashboard() {
  return (
    <>
      <div id="content" className="admin">
        <div className="admin-div1">
          {" "}
          <h1>Dashboard</h1>
          <button>
            <GetAppIcon />
            Generate Report
          </button>
        </div>
        <div className="admin-div2">
          <div className="admin-cards" style={{ borderColor: "blue" }}>
            <div>
              <h5 style={{ color: "blue" }}>Earnings (Monthly)</h5>
              <h2>$ 40,000</h2>
            </div>
            <div>
              <CalendarTodayIcon className="cardicon" />
            </div>
          </div>

          <div className="admin-cards" style={{ borderColor: "lightblue" }}>
            <div>
              <h5 style={{ color: "lightblue" }}>Earnings (Annual)</h5>
              <h2>$ 350,000</h2>
            </div>
            <div>
              <AttachMoneyIcon className="cardicon" />
            </div>
          </div>

          <div className="admin-cards" style={{ borderColor: "green" }}>
            <div>
              <h5 style={{ color: "green" }}>Tasks</h5>
              <h2>50%</h2>
              <div className="pbar">
                <div style={{ width: "20px", background: "red" }}></div>
              </div>
            </div>
            <div>
              <AssignmentIcon className="cardicon" />
            </div>
          </div>

          <div className="admin-cards" style={{ borderColor: "orange" }}>
            <div>
              <h5 style={{ color: "orange" }}>Pending requests</h5>
              <h2>$ 40,000</h2>
            </div>
            <div>
              <QuestionAnswerIcon className="cardicon" />
            </div>
          </div>
        </div>
      </div>
      <DashboardChart />
    </>
  );
}

function DashboardChart() {
  return (
    <>
      <div id="chart-flex">
        <div id="chart-1">
          <div className="chart-title">Earnings Overview</div>
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
                    label: "sdfsdfk",
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
          <div className="chart-title">Revenue sources</div>
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
      </div>
    </>
  );
}
