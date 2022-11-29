import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({about}) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{about.quote}</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src={
              about.avatar.url
                ? about.avatar.url
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaG-zRvboWmtcsDkkQN265IJXz9T_AIUwWgA&usqp=CAU"
            }
            alt="Rajan"
            className="aboutAvatar"
          />
          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {about.name}
          </Typography>
          <Typography>{about.title}</Typography>
          <Typography style={{ margin: "1vmax 0" }}>
            {about.subtitle}
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              letterSpacing: "5px",
              lineHeight: "50px",
              textAlign: "right",
            }}
          >
            {about.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
