import React from "react";
import Particle from "./Particle";

const ParticleField = ({ numParticles ,color}) => {
  const particles = Array.from({ length: numParticles });
  
  return (
    <div className="w-[98.5vw] h-[85vh] relative overflow-hidden">
      {particles.map((_, index) => (
        <Particle
          key={index}
          size={`${Math.ceil(Math.random() * 4) }px`} 
          xRange={Math.random() * 1920 - 1000} 
          yRange={Math.random() * 720 - 360} 
          color={color} 
          xStart= {Math.random()*100}
          yStart= {Math.random()*100}
         
        />
      ))}
    </div>
  );
};

export default ParticleField;
