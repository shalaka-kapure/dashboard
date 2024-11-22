import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DashboardCards from "./DashboardCards";
import { Card } from "@mui/material";
import Summary from "./Summary";
import CalendarCard from "./CalendarCard";
import Sidebar from "./Sidebar";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Dashboard = () => {
  return (
    <div className="main">
      <div className="right-div">
        <Sidebar />
      </div>
      <div className="left-div">
        <div className="header-box">
          <div>
            <div className="outstanding-box">
              <div role="presentation" onClick={handleClick}>
                <Breadcrumbs
                  separator={<ArrowRightIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Link underline="hover" color="inherit" href="/">
                    Dashboard
                  </Link>
                </Breadcrumbs>
              </div>
            </div>
            <div className="outstanding-box">
              <h3 style={{ textAlign: "start" }}>Dashboard</h3>
              <Card
                sx={{
                  padding: "10px",
                  borderRadius: 2,
                  backgroundColor: "white",
                  boxShadow: 2,
                  textAlign: "left",
                  marginBottom: 2,
                  fontWeight: 500,
                }}
                className="outstanding-card"
              >
                <div style={{ fontSize: "16px", marginRight: "20px" }}>
                  Over all outstanding
                </div>
                <div style={{ fontSize: "20px", textAlign: "Right" }}>
                  &#8377; 12341233
                </div>
              </Card>
            </div>
          </div>
          <div style={{ justifyItems: "right" }}>
            <CalendarCard />
          </div>
        </div>

        <DashboardCards />
        <Summary />
      </div>
    </div>
  );
};

export default Dashboard;
