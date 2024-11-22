import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Stack from "@mui/material/Stack";
import DashboardCards from "./DashboardCards";
import { Card } from "@mui/material";
import Summary from "./Summary";
import CalendarCard from "./CalendarCard";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Dashboard = () => {
  return (
    <div className="main">
      <div style={{ padding: "0 100px" }}>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs
            separator={<ArrowRightIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link underline="hover" color="inherit" href="/">
              Dashboard
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
          </Breadcrumbs>
        </div>
        <div className="header-box">
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
              <div style={{ fontSize: "20px", textAlign:"Right" }}>&#8377; 12341233</div>
            </Card>
          </div>
          <div style={{ justifyItems: "right" }}>
            <CalendarCard />
          </div>
        </div>
        <DashboardCards />
        <Summary />
      </div>
      <Stack
        direction="column"
        spacing={0}
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>
    </div>
  );
};

export default Dashboard;
