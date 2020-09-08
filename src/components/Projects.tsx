import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="Projects" className="flex flex-col justify-center h-screen py-32">
      <div className="flex items-center">
        <h3 className="flex-0 mr-5 text-gray-800 text-2xl lg:text-3xl font-bold">Projects</h3>
        <div className="border-b flex-1 w-full" style={{height: "8px"}}>{""}</div>
      </div>
      <ProjectCard />
    </section>
  )
}

export default Projects;
