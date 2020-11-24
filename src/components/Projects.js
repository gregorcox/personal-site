import React from "react";
import { data } from "../files/data";

const Projects = () => {
  const projects = data.projects.map((project) => {
    const { name, images, id, github, descriptionBlocks, link } = project;

    const projectImages = images.map((image) => {
      return (
        <img className="screenshot" src={image} alt={name} />
      );
    });

    const description = descriptionBlocks.map((block) => {
      return <p>{block}</p>
    });

    const className = id % 2 === 0 ? "project-info project-info--reverse" : "project-info";

    return (
      <div className={className} key={id}>
        <div className="project-photo">
          {projectImages}
        </div>

        <div className="project-paragraph">
          <h2>{name}</h2>
          <h4>
            <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
            {link ? <span> - <a href={link}>Link</a></span> : null}
          </h4>
          {description}
        </div>
      </div>
    )
  });

  return (
    <div className="projects">
      {projects}
    </div>
  );
}


export default Projects;
