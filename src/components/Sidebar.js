import { Stack } from "@mui/material";
import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import Report from "../assests/report.png";
import AddInvoice from "../assests/addInvoice.png";
import AddUser from "../assests/addUser.png";
import WithoutPO from "../assests/po.png";
import Company from "../assests/emergency.png";

const Sidebar = () => {
  const sidebarData = [
    {
      image: Report,
      text: "Report",
    },
    {
      image: AddInvoice,
      text: "Add Invoice",
    },
    {
      image: AddUser,
      text: "Add User",
    },
    {
      image: WithoutPO,
      text: "Without PO",
    },
    {
      image: Company,
      text: "Company",
    },
  ];
  return (
    <Stack
      direction="column"
      spacing={0}
      sx={{
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "white",
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px",
        color: "#A6A8B1",
        width: "90px",
        cursor: "pointer",
      }}
    >
      <div className="selected-div">
        <div>
          <GridViewIcon />
        </div>
        <div>Dashboard</div>
      </div>
      {sidebarData.map((data, index) => (
        <div key={index} className="sidebar-div">
          <div>
            <img src={data.image} alt="sidebar Icon" />
          </div>
          <div>{data.text}</div>
        </div>
      ))}
    </Stack>
  );
};

export default Sidebar;
