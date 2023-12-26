import React from "react";

const Card = ({ title, description, image, github, link, techstack }) => {
  return (
    <div className=" mx-auto mb-8 bg-white rounded-xl overflow-hidden shadow-md">
      <div className="relative">
        <img
          className="w-full h-48 object-cover object-center"
          src={
            image ||
            "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          }
          alt={title}
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex gap-x-2">
          {techstack && techstack.map((icon) => <div>{icon}</div>)}
        </div>
        <div className="flex justify-end">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mr-4 hover:underline"
            >
              Git
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
