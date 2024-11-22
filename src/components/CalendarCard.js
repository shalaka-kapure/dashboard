import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { format, startOfWeek, endOfWeek } from "date-fns";
import enUS from "date-fns/locale/en-US";

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const theme = useTheme();

  const today = new Date();
  const startOfCurrentWeek = startOfWeek(today, { locale: enUS });
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const isToday = (date) => date.toDateString() === today.toDateString();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={enUS}>
      <Box
        sx={{
          width: 300,
          textAlign: "center",
          margin: "20px auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Month and Year */}
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {format(today, "MMMM yyyy")}
        </Typography>

        {/* Days of the Week */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
          }}
        >
          {daysOfWeek.map((day, index) => (
            <Typography
              key={index}
              variant="subtitle1"
              sx={{
                textAlign: "center",
                color: index === today.getDay() ? "white" : "black",
                backgroundColor:
                  index === today.getDay() ? "orange" : "transparent",
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
                padding: "8px",
                fontWeight:"bold",
              }}
            >
              {day}
            </Typography>
          ))}
        </Box>

        {/* Dates of the Week */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 1,
            justifyItems: "center",
          }}
        >
          {Array.from({ length: 7 }).map((_, index) => {
            const date = new Date(startOfCurrentWeek);
            date.setDate(date.getDate() + index);

            const isTodayDate = isToday(date);

            return (
              <Box
                key={index}
                sx={{
                  padding: "8px",
                  width: isTodayDate ? "27px" : "auto",
                  height: isTodayDate ? "25px" : "auto",
                  borderBottomLeftRadius: "50%",
                  borderBottomRightRadius: "50%",
                  backgroundColor: isTodayDate ? "purple" : "transparent",
                  color: isTodayDate ? "white" : "#7B7C89",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: isTodayDate
                    ? "0 4px 6px rgba(0, 0, 0, 0.1)"
                    : "none",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: isTodayDate ? "#A57ABD" : "#E1E1E1",
                  },
                }}
                onClick={() => handleDateChange(date)}
              >
                {date.getDate()}
              </Box>
            );
          })}
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default CustomCalendar;
