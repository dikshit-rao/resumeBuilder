import React from "react";
import { ExternalLink } from 'lucide-react';
const Temp1 = ({ formData }) => {
  return (
    <div className="max-w-[794px] border border-gray-200 mx-auto flex justify-center items-center rounded-md shadow-2xl bg-white text-gray-800 font-sans"
    style={{
      width: "794px",
      height: "1123px",
      boxSizing: "border-box",
    }}>

<div className="p-[60px] font-sans">
      <div className="flex justify-between items-start mb-12 ">
        {formData?.personalInfo && (
          <>
            <div>
              {formData.personalInfo.name && (
                <h1 className="text-xl font-bold mb-2 font-sans">
                  {formData.personalInfo.name}
                </h1>
              )}
              {formData.personalInfo.position && (
                <p className="text-gray-600 font-[500] text-xs font-sans uppercase">
                  {formData.personalInfo.position}
                </p>
              )}
            </div>

            <div className="text-[0.75rem] mr-4">
              {formData.personalInfo.phone && (
                <p>Phone: {formData.personalInfo.phone}</p>
              )}
              {formData.personalInfo.email && (
                <p>{formData.personalInfo.email}</p>
              )}
              {formData.personalInfo.dob && (
                <p>Date of Birth: {formData.personalInfo.dob}</p>
              )}
            </div>
          </>
        )}
      </div>

      {/* Main content */}
      <div className="flex gap-12">
        {/* Left column */}
        <div className="flex-[1.9] ">
          {/* experiences */}
          {Array.isArray(formData.experience) &&
            formData.experience.length > 0 && (
              <section className="mb-8">
                <h2
                  style={{
                    marginBottom: "16px",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                  className="text-blue-500"
                >
                  EXPERIENCE
                </h2>
                {formData.experience.map((exp, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="font-semibold text-[0.8rem] text-gray-700">
                      {exp.company} —{" "}
                      <span className="italic">{exp.position}</span>
                    </h3>
                    <p className="text-[0.70rem] font-sans text-gray-600 mb-2">
                      {exp.duration}
                    </p>
                    <p className="text-[0.7rem] font-sans text-gray-700">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </section>
            )}

          {/* Projects */}
          <section className="mb-8">
            <h2
              style={{
                marginBottom: "16px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
              className="font-sans text-blue-500"
            >
              PROJECTS
            </h2>
            {formData.projects &&
              formData.projects.length > 0 &&
              formData.projects.map((proj, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold font-sans text-[0.75rem] mb-1 text-gray-700">
                    {proj.name} —{" "}
                    <span className="italic">{proj.techStack}</span>
                  </h3>
                  <p className="text-gray-700 font-sans text-[0.7rem]">
                    {proj.description}
                  </p>
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
              ))}
          </section>

          {/* Achievments */}
          {formData?.achievements?.length > 0 && (
            <section className="mb-4">
              <h2
                style={{
                  marginBottom: "16px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
                className="text-blue-500 font-sans"
              >
                ACHIEVEMENTS
              </h2>
              <ul className="list-disc list-inside opacity-80 font-sans">
                {formData.achievements.map((a, index) => (
                  <li className="mb-1 text-[0.7rem] font-sans" key={index}>
                    {a}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right column */}
        <div className="flex-1">
          {/* skills */}
          {formData.skills && formData.skills.length > 0 && (
            <section className="mb-8">
              <h2
                style={{
                  marginBottom: "16px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
                className="text-blue-500 font-sans"
              >
                SKILLS
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {formData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 font-bold rounded-xl p-2 font-sans"
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {formData.education && (
            <section className="mb-8">
              <h2
                style={{
                  marginBottom: "16px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
                className="text-blue-500 font-sans"
              >
                EDUCATION
              </h2>

              {formData.education?.higher && (
                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-normal text-[0.7rem]">
                      {formData.education.higher.name} —{" "}
                      <span className="italic">
                        {formData.education.higher.degree}
                      </span>
                    </h3>
                  </div>
                  <p className="text-[0.7rem] text-gray-600 mb-2">
                    {formData.education.higher.year} |{" "}
                    {formData.education.higher.percentage <= 10
                      ? `CGPA: ${formData.education.higher.percentage}`
                      : `Percentage: ${formData.education.higher.percentage}%`}
                  </p>
                </div>
              )}

              {formData.education?.twelfth && (
                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-normal text-[0.7rem]">
                      {formData.education.twelfth.name} —{" "}
                      <span className="italic">Senior Secondary (XII)</span>
                    </h3>
                  </div>
                  <p className="text-[0.7rem] text-gray-600 mb-2">
                    {formData.education.twelfth.year} |{" "}
                    {formData.education.twelfth.percentage <= 10
                      ? `CGPA: ${formData.education.twelfth.percentage}`
                      : `Percentage: ${formData.education.twelfth.percentage}%`}
                  </p>
                </div>
              )}

              {formData.education?.tenth && (
                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-normal text-[0.7rem]">
                      {formData.education.tenth.name} —{" "}
                      <span className="italic">Secondary (X)</span>
                    </h3>
                  </div>
                  <p className="text-[0.7rem] text-gray-600 mb-2">
                    {formData.education.tenth.year} |{" "}
                    {formData.education.tenth.percentage <= 10
                      ? `CGPA: ${formData.education.tenth.percentage}`
                      : `Percentage: ${formData.education.tenth.percentage}%`}
                  </p>
                </div>
              )}
            </section>
          )}

          {/* others */}
          {formData?.others?.length > 0 && (
            <section>
              <h2
                style={{
                  marginBottom: "16px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
                className="text-blue-500"
              >
                Other
              </h2>
              {formData.others.map((item, index) => (
                <p key={index} className="text-[0.7rem]">
                  {item?.text}{" "}
                  {item?.link && (
                    <a href={item.link} className="text-blue-500 underline">
                      [Link]
                    </a>
                  )}
                </p>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
    
    </div>
    
  );
};

export default Temp1;
