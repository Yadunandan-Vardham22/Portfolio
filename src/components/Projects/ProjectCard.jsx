import React from "react";

const ProjectCard = ({
  title,
  description,
  color,
  point1,
  point2,
  secondaryColor,
  img,i
}) => {
  return (
    <div
      className={`w-4/5 mx-auto pt-16 sticky`}
      style={{ height: "84vh" ,top:`calc(${i*45}px)`}}
    >
      <div
        className={`rounded-3xl `}
        style={{ backgroundColor: `#${color}`, height: "70vh" }}
      >
        <div className="ml-10 pt-10 font-poppins relative">
          <h1 className="text-4xl mb-12">{title}</h1>
          <p className="text-gray-600 tracking-wide w-[600px]">{description}</p>
          <ul className="w-[600px] mt-12 font-fredoka list-disc text-lg font-light ">
            <li
              className={`mb-6 p-2 rounded-2xl `}
              style={{ backgroundColor: `#${secondaryColor}` }}
            >
              {point1}
            </li>
            <li
              className={`mb-6 p-2 rounded-2xl`}
              style={{ backgroundColor: `#${secondaryColor}` }}
            >
              {point2}
            </li>
          </ul>
          <img src={img} alt={title} className="absolute top-32 right-12 w-[400px] h-72 rounded-2xl"/>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
