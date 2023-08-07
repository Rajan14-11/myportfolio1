import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({about}) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae id labore accusamus! </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          {/* <img
            src={
              about.avatar.url
                ? about.avatar.url
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaG-zRvboWmtcsDkkQN265IJXz9T_AIUwWgA&usqp=CAU"
            }
            alt="Rajan"
            className="aboutAvatar"
          /> */}
          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Rajan Goyal
          </Typography>
          <Typography>Web Developer</Typography>
          <Typography style={{ margin: "1vmax 0" }}>
            Full Stack Developer
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
            I am a webDeveloper specialised in Frontend. I have worked on technologies like React JS , Nextjs, Typescript and Tailwind Css.
            Also made some projects with MERN stack.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
