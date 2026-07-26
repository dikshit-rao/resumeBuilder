import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTemplate } from "../Slices/template";
import t1 from '../assets/Templates/t1.png';
import t2 from '../assets/Templates/t2.png';
import t3 from '../assets/Templates/t3.png';
import t4 from '../assets/Templates/t4.png';
import t5 from '../assets/Templates/t5.png';
import t6 from '../assets/Templates/t6.png';
import t7 from '../assets/Templates/t7.png';
import t8 from '../assets/Templates/t8.png';
import t9 from '../assets/Templates/t9.png';

const Templates = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const dispatch = useDispatch();
  const templates = [
    { title: "Modern Resume", src: t1 },
    { title: "Professional Resume", src: t2 },
    { title: "Creative Resume", src: t3 },
    { title: "Minimal Resume", src: t4 },
    { title: "Vibrant Resume ", src: t5 },
    { title: "Creative Resume ", src: t6 },
    { title: "Polished Edge Resume", src: t7 },
    { title: "Clean Focus Resume", src: t8 },
    { title: "Bold Resume", src: t9 },
  ];
  
  const handleTemplateClick = (index) => {
    dispatch(setTemplate(index+1));
    navigate('/create-resume')
  };
  return (
    <div className="bg-[#f9faff] h-full  py-16">
    <div className="max-w-5xl mx-auto md:px-8 w-full my-8 ">
      {/* Heading and Description */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Choose Your <span className="text-[#ffc85c]">Resume</span> Template
        </h2>
        <p className="text-gray-600 mt-2 md:text-lg w-3/4 mx-auto">
          Select from a variety of resume templates to create a professional and 
          visually appealing resume. Click on any template to create resume.
        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {templates.map((template, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleTemplateClick(index)}
            className={`rounded-lg relative cursor-pointer bg-gray-100 overflow-hidden aspect-[3/4]  w-full transition-all duration-300 ease-out ${
              hovered !== null && hovered !== index ? "blur-[2px] scale-[0.97]" : ""
            }`}
          >
            <img
              src={template.src}
              alt={template.title}
              className="object-cover absolute inset-0 w-full h-full"
            />
             <div
                  className={`
                    absolute inset-0 flex items-end py-8 px-4 bg-black/20 
                    md:opacity-0 group-hover:md:opacity-100 transition-opacity duration-300
                  `}
                >
              <div className="text-xl md:text-2xl font-medium text-white">
                {template.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default Templates;

