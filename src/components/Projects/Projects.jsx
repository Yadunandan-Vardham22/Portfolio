import React from 'react'
import projects from "../../utils/projects"
import ProjectCard from './ProjectCard'

const Projects = () => {

  return (
    <div className='mb-[40px]'>
      {projects.map((project,index) => <ProjectCard key={index} i={index} {...project}/>)}
    </div>
  )
}

export default Projects
