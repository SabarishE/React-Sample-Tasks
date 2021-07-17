import { Accordion } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Typography } from "@material-ui/core";
import SpeedIcon from "@material-ui/icons/Speed";
import SettingsIcon from "@material-ui/icons/Settings";
import BuildIcon from "@material-ui/icons/Build";
import FolderIcon from "@material-ui/icons/Folder";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import TableChartIcon from "@material-ui/icons/TableChart";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { navDrawer } from "./context";

import { useContext } from "react";
import { Link } from "react-router-dom";

export function Sidenav() {
  const { side, showside } = useContext(navDrawer);

  return (
    <>
      <div
        className={side ? "u-sidenav active" : "u-sidenav"}
        id="sidenav-appear"
      >
        <div className="mv">
          <HighlightOffIcon
            style={{ textAlign: "center", padding: "10px" }}
            onClick={showside}
          />
        </div>
        <div className="admin-block">
          <SentimentVerySatisfiedIcon className="i-m" />
          ADMIN
        </div>

        <hr></hr>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <div className="eighty navlg left navhov">
            <SpeedIcon className="i-m" />
            Dashboad
          </div>
        </Link>

        <Link to="/test" style={{ textDecoration: "none" }}>
          <div className="eighty left navlg navhov">
            <InsertChartIcon className="i-m" />
            Charts
          </div>
        </Link>

        <div className="ninety left">
          <span className="lightcaps">INTERFACE</span>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-change"
            >
              <span className="navlg" style={{ color: "#4e73df" }}>
                <SettingsIcon className="i-m" />
                Components
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <li className="light lh">CUSTOM COMPONENTS:</li>

                <li>Buttons</li>
                <li>Cards</li>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-change"
            >
              <span className="navlg" style={{ color: "#4e73df" }}>
                <BuildIcon className="i-m" />
                Utilities
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <li className="light lh">CUSTOM UTILITIES:</li>

                <li>Colors</li>
                <li>Borders</li>
                <li>Animations</li>
                <li>Other</li>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <hr></hr>

        <div id="u-addons" className="ninety left">
          <span className="lightcaps">ADDONS</span>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="bg-change"
            >
              <span className="navlg" style={{ color: "#4e73df" }}>
                <FolderIcon className="i-m" />
                Pages
              </span>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <li className="light lh">LOGIN SCREEN:</li>

                <li>Login</li>
                <li>Register</li>
                <li>Forgot Password</li>
                <li>Other</li>
                <li className="light lh">OTHER PAGES:</li>

                <li>404 page</li>
                <li>Blank page</li>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="eighty left navlg navhov">
          <TableChartIcon className="i-m" />
          Tables
        </div>

        <hr></hr>
        <div className="ninety">upgrade to pro</div>
      </div>
    </>
  );
}
