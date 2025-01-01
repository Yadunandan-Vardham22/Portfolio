import React from 'react'
import projects from "../../utils/projects"
import ProjectCard from './ProjectCard'

const Projects = () => {

  return (
    <div className='mb-[40px]'>
      <h1 className='font-poppins text-3xl flex justify-center'>Explore my projects</h1>
      {projects.map((project,index) => <ProjectCard key={index} i={index} {...project}/>)}
    </div>
  )
}

export default Projects
