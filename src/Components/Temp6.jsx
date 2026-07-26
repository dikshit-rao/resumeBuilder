import { Mail, Phone, Calendar } from "lucide-react"
import { ExternalLink } from 'lucide-react';
const Temp8 = ({ formData }) => {
  return (
<div className="max-w-[794px] border border-gray-200 mx-auto flex justify-center items-center rounded-md shadow-2xl bg-white text-gray-800 font-sans"
    style={{
      width: "794px",
      height: "1123px",
      boxSizing: "border-box",
    }}>

<div className="font-sans flex flex-col" style={{ width: "794px", height: "1123px" }}>
      {/* Full-width header with bg-gray-800 */}
      {formData?.personalInfo && (
        <div className="w-full bg-gray-800 text-white p-6 rounded-t-lg">
          <div className="flex justify-between items-start">
            <div>
              {formData.personalInfo.name && <h1 className="text-xl font-bold mb-2">{formData.personalInfo.name}</h1>}
              {formData.personalInfo.position && (
                <p className="text-gray-300 font-[500] text-xs uppercase">{formData.personalInfo.position}</p>
              )}
            </div>
            <div className="space-y-2 text-[0.65rem]">
              {formData.personalInfo.phone && (
                <div className="flex items-center justify-end">
                  <span>{formData.personalInfo.phone}</span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center ml-2">
                    <Phone className="w-4 h-4" />
                  </div>
                </div>
              )}
              {formData.personalInfo.email && (
                <div className="flex items-center justify-end">
                  <span>{formData.personalInfo.email}</span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center ml-2">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>
              )}
              {formData.personalInfo.dob && (
                <div className="flex items-center justify-end">
                  <span>{formData.personalInfo.dob}</span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center ml-2">
                    <Calendar className="w-4 h-4" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main content with two columns */}
      <div className="flex flex-1">
        {/* Left Content */}
        <div className="w-2/3 bg-white p-6">
          {/* Experience */}
          {Array.isArray(formData.experience) && formData.experience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4 text-gray-800 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gray-800">
                EXPERIENCE
              </h2>
              {formData.experience.map((exp, index) => (
                <div
                  key={index}
                  className="mb-6 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-gray-800 -ml-[3px]"></div>
                  <h3 className="font-semibold text-[0.75rem] text-gray-800">
                    {exp.position} <span className="font-normal">at</span> {exp.company}
                  </h3>
                  <p className="text-[0.65rem] font-sans text-gray-600 mb-2">{exp.duration}</p>
                  <p className="text-[0.7rem] font-sans text-gray-700">{exp.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-gray-800 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gray-800">
              PROJECTS
            </h2>
            {formData.projects &&
              formData.projects.length > 0 &&
              formData.projects.map((proj, index) => (
                <div
                  key={index}
                  className="mb-6 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-gray-800 -ml-[3px]"></div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold font-sans text-[0.75rem] text-gray-800">{proj.name}</h3>
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
                  <p className="italic text-[0.7rem] text-gray-600 mb-1">{proj.techStack}</p>
                  <p className="text-gray-700 font-sans text-[0.7rem]">{proj.description}</p>
                </div>
              ))}
          </section>

          {/* Achievements */}
          {formData?.achievements?.length > 0 && (
            <section className="mb-4">
              <h2 className="text-lg font-bold mb-4 text-gray-800 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gray-800">
                ACHIEVEMENTS
              </h2>
              <ul className="space-y-2 pl-6">
                {formData.achievements.map((a, index) => (
                  <li
                    className="text-[0.7rem] font-sans relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.5em] before:w-2 before:h-2 before:bg-gray-800 before:rounded-full"
                    key={index}
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {formData?.others?.length > 0 && (
            <section>
              <h2 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2">OTHER</h2>
              {formData.others.map((item, index) => (
                <p key={index} className="text-[0.7rem] mb-2">
                  {item?.text}{" "}
                  {item?.link && (
                    <a href={item.link} className="text-gray-300 underline">
                      [Link]
                    </a>
                  )}
                </p>
              ))}
            </section>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="w-1/3 bg-white text-gray-800 p-6">
          {/* Skills */}
          {formData.skills && formData.skills.length > 0 && (
  <section className="mb-8">
    <h2 className="text-lg font-bold mb-4 text-gray-800 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gray-800">
      SKILLS
    </h2>
    <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200">
      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-gray-800 -ml-[3px]"></div>
      <div className="flex flex-wrap gap-2">
        {formData.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 rounded-full px-3 py-1 text-[14px] font-bold inline-block"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
)}


          {/* Education */}
{formData.education && (
  <section className="mb-8">
    <h2 className="text-lg font-bold mb-4 text-gray-800 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gray-800">
      EDUCATION
    </h2>

    {formData.education.higher && (
      <div className="mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200">
        <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-gray-800 -ml-[3px]"></div>
        <h3 className="font-semibold text-[0.75rem] text-gray-800">{formData.education.higher.degree}</h3>
        <p className="italic text-[0.7rem] text-gray-600">{formData.education.higher.name}</p>
        <p className="text-[0.7rem] text-gray-500">
          {formData.education.higher.year}|{" "}
          {formData.education.higher.percentage <= 10
            ? `CGPA: ${formData.education.higher.percentage}`
            : `Percentage: ${formData.education.higher.percentage}%`}
        </p>
      </div>
    )}

    {formData.education.twelfth && (
      <div className="mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200">
        <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-gray-800 -ml-[3px]"></div>
        <h3 className="font-semibold text-[0.75rem] text-gray-800">Senior Secondary (XII)</h3>
        <p className="italic text-[0.7rem] text-gray-600">{formData.education.twelfth.name}</p>
        <p className="text-[0.7rem] text-gray-500">
          {formData.education.twelfth.year} |{" "}
          {formData.education.twelfth.percentage <= 10
            ? `CGPA: ${formData.education.twelfth.percentage}`
            : `Percentage: ${formData.education.twelfth.percentage}%`}
        </p>
      </div>
    )}

    {formData.education.tenth && (
      <div className="mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200">
        <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-gray-800 -ml-[3px]"></div>
        <h3 className="font-semibold text-[0.75rem] text-gray-800">Secondary (X)</h3>
        <p className="italic text-[0.7rem] text-gray-600">{formData.education.tenth.name}</p>
        <p className="text-[0.7rem] text-gray-500">
          {formData.education.tenth.year} |{" "}
          {formData.education.tenth.percentage <= 10
            ? `CGPA: ${formData.education.tenth.percentage}`
            : `Percentage: ${formData.education.tenth.percentage}%`}
        </p>
      </div>
    )}
  </section>
)}


          {/* Others */}
        </div>
      </div>
    </div>
    
    </div>

    
  )
}

export default Temp8
  