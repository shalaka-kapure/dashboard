import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ChartCards from "./ChartCards";
import Invoice from "../assests/invoice.png";
import Payable from "../assests/payable.png";
import Overdue from "../assests/emergency.png";
import Paid from "../assests/paid.png";
import Rejected from "../assests/rejected.png";
import Dispute from "../assests/dispute.png";
import Department from "../assests/department.png";
import Vendor from "../assests/vendors.png";

const DashboardCards = () => {
  const cardData = [
    {
      image: Invoice ,
      title: "Invoice Received",
      total: "2123",
      amount: "12341233234",
    },
    {
      image: Payable,
      title: "Payable amount",
      total: "2123",
      amount: "12341233",
    },
    {
      image: Overdue,
      title: "Overdue",
      total: "2123",
      amount: "12341233",
    },
    {
      image: Paid,
      title: "Paid amount",
      total: "2123",
      amount: "12341233",
    },
    {
      image: Rejected,
      title: "Rejected",
      total: "2123",
      amount: "12341233",
    },
    {
      image: Dispute,
      title: "Dispute",
      total: "2123",
      amount: "12341233",
    },
    {
      image: Department,
      title: "Department",
      total: "2123",
      amount: "12341233",
    },
    {
      image: Vendor,
      title: "Vendors",
      total: "2123",
      amount: "12341233",
    },
  ];


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                padding: "20px",
                borderRadius: 2,
                backgroundColor: "white",
                boxShadow: 2,
                textAlign: "center",
                display: "flex",
                fontWeight: "600",
                cursor:"pointer"
              }}
            >
              <div style={{ width: "15%" }}>
                <img src={card.image} alt="img" />
              </div>
              <div style={{ width: "75%", justifyItems: "center" }}>
                <div style={{ textAlign: "left", height: "25px" }}>
                  {card.title}
                </div>
                <div className="total-div" style={{ height: "25px" }}>
                  <div
                    className="date-title"
                    style={{
                      fontWeight: "500",
                      width: "30%",
                      textAlign: "start",
                    }}
                  >
                    Total
                  </div>
                  <div style={{ textAlign: "start", width: "50%" }}>{card.total}</div>
                </div>
                <div className="total-div" style={{ height: "25px" }}>
                  <div
                    className="date-title"
                    style={{
                      fontWeight: "500",
                      width: "30%",
                      textAlign: "start",
                    }}
                  >
                    &#8377;
                  </div>
                  <div style={{ textAlign: "start", width: "50%" }}>
                    {card.amount}
                  </div>
                </div>
              </div>
            </Box>
          </Grid>
        ))}
        <ChartCards />
      </Grid>
    </Box>
  );
};

export default DashboardCards;
