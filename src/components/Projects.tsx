import React from 'react';
import ProjectCard from './ProjectCard';
import projectData from './projectData.js';

const Projects = () => {
  const projects = projectData.map((project) => {
    return (
      <ProjectCard
        name={project.name}
        description={project.description}
        githubLink={project.githubLink}
        projectLink={project.projectLink}
        technologies={project.technologies}
        heroImageLarge={project.heroImageLarge}
        heroImageSmall={project.heroImageSmall}
        heroImageLargeWebp={project.heroImageLargeWebp}
        heroImageSmallWebp={project.heroImageSmallWebp}
      />
    )
  })

  return (
    <section id="Projects" className="flex flex-col justify-center h-auto py-32">
        <div className="flex items-center">
          <h3 className="flex-0 mr-5 text-gray-800 text-2xl lg:text-3xl font-bold">Projects</h3>
          <div className="border-b flex-1 w-full" style={{height: "8px"}}>{""}</div>
        </div>
      {projects}
    </section>
  )
}

export default Projects;
