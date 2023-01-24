import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import "./Style.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function login_mui() {
  return (
    <div className="center">
      <Card sx={{ minHeight: 274, borderRadius: 5 }}>
        <div className="card_center">
          <CardContent>
            <TextField
              id="outlined-basic"
              label="Computer Code"
              variant="outlined"
              size="small"
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="small"
              type="password"
            />
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
