//from-teal-500 to-emerald-600
//from-purple-500 to-indigo-600

//border-teal-500
//border-purple-500

//text-teal-600
//text-purple-600
import React from "react";
import { Mail, Phone, Calendar } from "lucide-react";
import { ExternalLink } from 'lucide-react';
const Temp7 = ({ formData }) => {
  return (

    <div className="max-w-[794px] border border-gray-200 mx-auto flex justify-center items-center rounded-md shadow-2xl bg-white text-gray-800 font-sans"
    style={{
      width: "794px",
      height: "1123px",
      boxSizing: "border-box",
    }}>
    <div className="font-sans bg-white" style={{ width: "794px", height: "1123px", padding: "50px" }}>
      {/* Header with circular design element */}
      {formData?.personalInfo && (
        <header className="relative mb-0 pb-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full -z-10 opacity-10"></div>
          <div className="flex justify-between items-start">
            <div>
              {formData.personalInfo.name && (
                <h1 className="text-xl font-bold mb-1 tracking-wide">
                  {formData.personalInfo.name}
                </h1>
              )}
              {formData.personalInfo.position && (
                <p className="text-gray-600 font-[500] text-sm uppercase mb-4 border-l-4 border-teal-500 pl-2">
                  {formData.personalInfo.position}
                </p>
              )}
            </div>
            <div className="flex flex-col text-[0.65rem] text-right">
              {formData.personalInfo.phone && (
                <div className="flex items-center justify-end">
                  <span>{formData.personalInfo.phone}</span>
                  <div className="ml-2 w-6 h-6  rounded-full flex items-center justify-center text-teal-600">
                    <span><Phone className="inline w-4 h-4 mr-1" /></span>
                  </div>
                </div>
              )}
              {formData.personalInfo.email && (
                <div className="flex items-center justify-end">
                  <span>{formData.personalInfo.email}</span>
                  <div className="ml-2 w-6 h-6 rounded-full flex items-center justify-center text-teal-600">
                    <span><Mail className="inline w-4 h-4 mr-1" /></span>
                  </div>
                </div>
              )}
              {formData.personalInfo.dob && (
                <div className="flex items-center justify-end">
                  <span>{formData.personalInfo.dob}</span>
                  <div className="ml-2 w-6 h-6  rounded-full flex items-center justify-center text-teal-600">
                    <span><Calendar className="inline w-4 h-4 mr-1" /></span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
      )}

      {/* Card-based layout for sections */}
      <div className="grid grid-cols-12 gap-1">

        {/* Left column */}
        <div className="col-span-8 space-y-2">
          {/* Experience Card */}
          {Array.isArray(formData.experience) && formData.experience.length > 0 && (
            <div className="bg-gray-50 rounded-lg shadow-sm p-4 border border-gray-200">
              <h2 className="text-lg font-bold mb-4 text-teal-600">
                EXPERIENCE
              </h2>
              <div className="space-y-4">
                {formData.experience.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-[0.75rem] text-gray-900">
                        {exp.position}
                      </h3>
                      <div className="px-3 py-1 bg-teal-50 rounded-full text-[0.65rem] text-teal-700">
                        {exp.duration}
                      </div>
                    </div>
                    <p className="italic text-[0.7rem] text-gray-700 mb-1">
                      {exp.company}
                    </p>
                    <p className="text-[0.7rem] font-sans text-gray-700">
                      {exp.description}
                    </p>
                    {index < formData.experience.length - 1 && (
                      <div className="absolute -bottom-3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Card */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-4 border border-gray-200">
            <h2 className="text-lg font-bold mb-4 text-teal-600">
              PROJECTS
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {formData.projects &&
                formData.projects.length > 0 &&
                formData.projects.map((proj, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-baseline mb-0">
                      <h3 className="font-semibold font-sans text-[0.75rem] text-gray-900 flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                        {proj.name}
                      </h3>
                      {proj.link && (
                      <a
                        href={proj.link.startsWith("http") ? proj.link : `https://${proj.link}`}
                        className="text-gray-800 text-[0.65rem] underline hover:text-blue-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-[0.85rem] ml-1 -mb-[0.15rem]"/>
                      </a>
                    )}
                    </div>
                    <div className="ml-4">
                      <p className="italic text-[0.7rem] text-gray-600 mb-0">
                        {proj.techStack}
                      </p>
                      <p className="text-gray-700 font-sans text-[0.7rem]">
                        {proj.description}
                      </p>
                    </div>
                    {index < formData.projects.length - 1 && (
                      <div className="absolute -bottom-3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>
                    )}
                  </div>
                ))}
            </div>
          </div>

            {/* Achievements Card */}
          {formData?.achievements?.length > 0 && (
            <div className="bg-gray-50 rounded-lg shadow-sm p-4 border border-gray-200">
              <h2 className="text-lg font-bold mb-4 text-teal-600">
                ACHIEVEMENTS
              </h2>
              <ul className="space-y-1">
                {formData.achievements.map((a, index) => (
                  <li className="text-sm font-sans flex items-start" key={index}>
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 mr-2"></div>
                    <span className="text-[0.65rem]">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="col-span-4 space-y-2">
          {/* Skills Card */}
          {formData.skills && formData.skills.length > 0 && (
            <div className="bg-gray-50 rounded-lg shadow-sm p-4 border border-gray-200">
              <h2 className="text-lg font-bold mb-4 text-teal-600">
                SKILLS
              </h2>
              <div className="flex flex-wrap gap-1">
                {formData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block text-[14px] font-bold px-3 py-1 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, rgba(16, 185, 129, 0.15) 100%)',
                      border: "1px solid rgba(168,85,247,0.2)"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Education Card */}
          {formData.education && (
            <div className="bg-gray-50 rounded-lg shadow-sm p-4 border border-gray-200">
              <h2 className="text-lg font-bold mb-4 text-teal-600">
                EDUCATION
              </h2>

              {formData.education?.higher && (
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <div className="w-2 h-1 bg-teal-500 rounded-full mr-2 -mt-4"></div>
                    <h3 className="font-semibold text-[0.7rem]">
                      {formData.education.higher.name}
                    </h3>
                  </div>
                  <p className="italic text-[0.7rem] text-gray-700 ml-4">
                    {formData.education.higher.degree}
                  </p>
                  <p className="text-[0.7rem] text-gray-600 mb-2 ml-4">
                    {formData.education.higher.year} |{" "}
                    {formData.education.higher.percentage <= 10
                      ? `CGPA: ${formData.education.higher.percentage}`
                      : `Percentage: ${formData.education.higher.percentage}%`}
                  </p>
                </div>
              )}

              {formData.education?.twelfth && (
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    <div className="w-1 h-1 bg-teal-500 rounded-full mr-2 -mt-6"></div>
                    <h3 className="font-semibold text-[0.7rem]">
                      {formData.education.twelfth.name}
                    </h3>
                  </div>
                  <p className="italic text-[0.7rem] text-gray-700 ml-4">
                    Senior Secondary (XII)
                  </p>
                  <p className="text-[0.7rem] text-gray-600 mb-2 ml-4">
                    {formData.education.twelfth.year} |{" "}
                    {formData.education.twelfth.percentage <= 10
                      ? `CGPA: ${formData.education.twelfth.percentage}`
                      : `Percentage: ${formData.education.twelfth.percentage}%`}
                  </p>
                </div>
              )}

              {formData.education?.tenth && (
                <div>
                  <div className="flex items-center mb-1">
                    <div className="w-1 h-1 bg-teal-500 rounded-full mr-2 -mt-6"></div>
                    <h3 className="font-semibold text-[0.7rem]">
                      {formData.education.tenth.name}
                    </h3>
                  </div>
                  <p className="italic text-[0.7rem] text-gray-700 ml-4">
                    Secondary (X)
                  </p>
                  <p className="text-[0.7rem] text-gray-600 mb-2 ml-4">
                    {formData.education.tenth.year} |{" "}
                    {formData.education.tenth.percentage <= 10
                      ? `CGPA: ${formData.education.tenth.percentage}`
                      : `Percentage: ${formData.education.tenth.percentage}%`}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Others Card */}
          {formData?.others?.length > 0 && (
            <div className="bg-gray-50 rounded-lg shadow-sm p-4 border border-gray-200">
              <h2 className="text-lg font-bold mb-4 text-teal-600">
                OTHER
              </h2>
              {formData.others.map((item, index) => (
                <p key={index} className="text-[0.7rem] mb-2 flex items-start">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-1.5 mr-2"></div>
                  <span>
                    {item?.text}{" "}
                    {item?.link && (
                      <a href={item.link} className="text-teal-600 underline">
                        [Link]
                      </a>
                    )}
                  </span>
                </p>
              ))}
            </div>
          )}
        </div>

        
      </div>
    </div>
    
    
    </div>
    
  );
};

export default Temp7;
