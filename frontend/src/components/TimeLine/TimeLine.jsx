import React from 'react'
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = () => {
  const timelines=[
    {
      date:"Nov 2020",
      title:"UIET Hsp.",
      description:"C.S.E. degree Started and also started Web Development"
    },
    {
      date:"July 2022",
      title:"SkySpace React Internship",
      description:"Done 2 Month React Internship at Skyspace- made Ecommerce website"
    },
    {
      date:"July 2022",
      title:"ReactJs Training",
      description:"Done Js and ReactJs offline Training at Imminent Softwares,Mohali"
    },
    {
      date:"April 2023",
      title:"Seclance- Frontend internship",
      description:"Made many projects using techstack like Reactjs, Nextjs, Tailwindcss, Typescript etc."
    },
  ]
  return (
    <Timeline position="alternate">
        {
             timelines.map((item,index)=>(

                <TimelineItem key={index}>
                  <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.date.toString().split("T")[0]}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                      <TimelineDot>
                        <Event />
                      </TimelineDot>
                    <TimelineConnector/>
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography>{item.description}</Typography>
                  </TimelineContent>
                </TimelineItem>
             ))
        }
    </Timeline>
  )
}

export default TimeLine