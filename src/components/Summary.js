import { Box, Card, Grid } from "@mui/material";
import React from "react";

const Summary = () => {
  const data = [
    { days: "7 Days", amount: 12341234 },
    { days: "15 Days", amount: 287313123 },
    { days: "30 Days", amount: 10301 },
    { days: "45 Days", amount: 12234445 },
    { days: "60 Days", amount: 1200 },
    { days: "90 Days", amount: 1237234 },
    { days: "180 Days +", amount: 122 },
  ];

  return (
    <Card
      sx={{
        padding: "15px",
        borderRadius: 2,
        backgroundColor: "#D5E3FF!important",
        boxShadow: 2,
        textAlign: "center",
        marginBottom: 2,
        marginTop: 2,
        fontWeight: 500,
      }}
    >
      <div className="summary-div">
        <div className="due-div">
          <div style={{ fontSize: "16px" }}>
            Due by Age Summary
          </div>
          <div className="date-title">Payment due days wise</div>
        </div>
        <div className="penalty-div">
          <span className="date-title">Penalty Saved amount</span>
          <Box
            sx={{
              padding: "10px 15px",
              borderRadius: 2,
              backgroundColor: "white",
              boxShadow: 2,
              textAlign: "start",
              marginLeft:1
            }}
          >
            <div>&#8377; 12344</div>
          </Box>
        </div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={12} md={12 / 7} key={index}>
              <Box
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  backgroundColor: "white",
                  boxShadow: 2,
                  textAlign: "start",
                }}
              >
                <div className="date-title">{item.days}</div>
                <div>&#8377; {item.amount.toLocaleString()}</div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
};

export default Summary;
