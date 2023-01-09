import React from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <h1>Home</h1>
      <div className="home-content">
        <div className="home-image">
          <img src="https://i.pinimg.com/originals/94/09/7e/94097e458fbb22184941be57aaab2c8f.png" alt="admin" />
        </div>
        <div>
          <Typography variant="h3" className="lead">
            Welcome Admin!!!
          </Typography>
          <br></br>
          <br></br>
          <Button variant="contained" color="info" onClick={() => navigate("/dashboard")}>
            Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
