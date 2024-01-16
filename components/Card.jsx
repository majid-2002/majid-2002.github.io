import React, { useRef, useEffect } from "react";


const Card = ({ title, description, image, github, link, techstack, gradient }) => {
  
    return (
        // create a tranparent bg for the card
        <div className=" mx-auto mb-8 rounded-xl overflow-hidden shadow-md bg-white">
            <div className="relative p-2 sm:p-4">
                <div  className={" h-72 w-auto p-5 rounded-md grad-" + gradient}>
                    <img
                        className="w-auto mx-auto h-full rounded-md"
                        src={
                            image ||
                            "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        }
                        alt={title}
                    />

                </div>
            </div>
            <div className="p-2 sm:p-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-gray-700 mb-4 text-sm">{description}</p>
                <div className="flex gap-x-2">
                    {techstack && techstack.map((icon, id) => <div key={id}>{icon}</div>)}
                </div>
                <div className="flex justify-end">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 mr-4 hover:underline text-sm sm:text-base"
                        >
                            Github
                        </a>
                    )}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline text-sm sm:text-base"
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