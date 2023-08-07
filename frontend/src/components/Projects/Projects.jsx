import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { deleteProject, getUser } from "../../actions/user";
import { useDispatch } from "react-redux";
import iosSolutionImage from "../../images/iosSolutionProject.png"

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" style={{
            height:"100%",
            width:"100%"
          }} />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = () => {
  const projects = [
    {
      url: "https://iossolution.vercel.app/",
      projectImage: iosSolutionImage,
      projectTitle: "IosSolution",
      description:
        "A single page application built to display info about a repairing center. ",
      technologies: "Next JS, Tailwind Css Javascript",
      isAdmin: false,
      id: 1,
    },
    {
      url: "https://seclance.vercel.app/",
      projectImage: iosSolutionImage,
      projectTitle: "Seclance",
      description:
        "A single page application built to display info about a repairing center.",
      technologies: "Next JS, Tailwind Css Javascript",
      isAdmin: false,
      id: 1,
    },
  ];
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects.map((item) => (
          <ProjectCard
            id={item.id}
            key={item.id}
            url={item.url}
            projectImage={item.projectImage}
            projectTitle={item.projectTitle}
            description={item.description}
            technologies={item.technologies}
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;
