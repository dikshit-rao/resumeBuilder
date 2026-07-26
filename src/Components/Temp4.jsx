import { ExternalLink } from 'lucide-react';
const Temp4 = ({ formData }) => {
    return (
      <div className="max-w-[794px] border border-gray-200 mx-auto flex justify-center items-center rounded-md shadow-2xl bg-white text-gray-800 font-sans"
    style={{
      width: "794px",
      height: "1123px",
      boxSizing: "border-box",
    }}>

<div className="font-sans bg-white" style={{ width: "794px", height: "1123px", padding: "60px" }}>
        {/* Header with minimal design */}
        {formData?.personalInfo && (
          <header className="mb-6">
            <div className="border-b-2 border-gray-900 pb-2 mb-6">
              {formData.personalInfo.name && (
                <h1 className="text-xl font-bold mb-1 tracking-wide">{formData.personalInfo.name}</h1>
              )}
              {formData.personalInfo.position && (
                <p className="text-gray-600 font-[500] text-xs uppercase mb-4">{formData.personalInfo.position}</p>
              )}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.65rem] mt-2">
                {formData.personalInfo.phone && (
                  <p className="flex items-center">
                    <span className="font-semibold mr-1">Phone:</span> {formData.personalInfo.phone}
                  </p>
                )}
                {formData.personalInfo.email && (
                  <p className="flex items-center">
                    <span className="font-semibold mr-1">Email:</span> {formData.personalInfo.email}
                  </p>
                )}
                {formData.personalInfo.dob && (
                  <p className="flex items-center">
                    <span className="font-semibold mr-1">DOB:</span> {formData.personalInfo.dob}
                  </p>
                )}
              </div>
            </div>
          </header>
        )}
  
        {/* Main content in a clean two-column layout */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left column - wider */}
          <div className="col-span-8">
            {/* Experience */}
            {Array.isArray(formData.experience) && formData.experience.length > 0 && (
              <section className="mb-4">
                <h2 className="text-lg font-bold mb-4 inline-block border-b-2 border-gray-400 pb-1">EXPERIENCE</h2>
                <div className="space-y-4">
                  {formData.experience.map((exp, index) => (
                    <div key={index} className="relative">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-[0.75rem] text-gray-900">{exp.company}</h3>
                        <p className="text-[0.65rem] font-sans text-gray-600 bg-gray-100 px-2 py-1 rounded">
                          {exp.duration}
                        </p>
                      </div>
                      <p className="italic text-[0.7rem] text-gray-700 mb-2">{exp.position}</p>
                      <p className="text-[0.7rem] font-sans text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
  
            
            {/* Education */}
            {formData.education && (
              <section className="mb-6">
                <h2 className="text-lg font-bold mb-4 inline-block border-b-2 border-gray-400 pb-1">EDUCATION</h2>
  
                {formData.education?.higher && (
                  <div className="mb-6 border-l-2 border-gray-200 pl-3">
                    <h3 className="font-semibold text-[0.7rem]">{formData.education.higher.name}</h3>
                    <p className="italic text-[0.7rem] text-gray-700">{formData.education.higher.degree}</p>
                    <p className="text-[0.7rem] text-gray-600 mb-2">
                      {formData.education.higher.year} | CGPA: {formData.education.higher.cg}
                    </p>
                  </div>
                )}
  
                {formData.education?.twelfth && (
                  <div className="mb-6 border-l-2 border-gray-200 pl-3">
                    <h3 className="font-semibold text-[0.7rem]">{formData.education.twelfth.name}</h3>
                    <p className="italic text-[0.7rem] text-gray-700">Senior Secondary (XII)</p>
                    <p className="text-[0.7rem] text-gray-600 mb-2">
                      {formData.education.twelfth.year} | Percentage: {formData.education.twelfth.percentage}
                    </p>
                  </div>
                )}
  
                {formData.education?.tenth && (
                  <div className="mb-6 border-l-2 border-gray-200 pl-3">
                    <h3 className="font-semibold text-[0.7rem]">{formData.education.tenth.name}</h3>
                    <p className="italic text-[0.7rem] text-gray-700">Secondary (X)</p>
                    <p className="text-[0.7rem] text-gray-600 mb-2">
                      {formData.education.tenth.year} | Percentage: {formData.education.tenth.percentage}
                    </p>
                  </div>
                )}
              </section>
            )}
            {/* Achievements */}
            {formData?.achievements?.length > 0 && (
              <section className="mb-4">
                <h2 className="text-lg font-bold mb-4 inline-block border-b-2 border-gray-400">ACHIEVEMENTS</h2>
                <ul className="space-y-2">
                  {formData.achievements.map((a, index) => (
                    <li className="text-sm font-sans flex items-start" key={index}>
                      <span className="inline-block w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-[0.7rem]">{a}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
  
          {/* Right column - narrower */}
          <div className="col-span-4">
            {/* Skills */}
            {formData.skills && formData.skills.length > 0 && (
              <section className="mb-6">
                <h2 className="text-lg font-bold mb-4 inline-block border-b-2 border-gray-400 pb-1">SKILLS</h2>
                <div className="space-y-2">
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
  {formData.skills.map((skill, index) => (
    <div key={index} className="flex items-center text-[0.7rem] font-medium">
      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-2"></div>
      {skill}
    </div>
  ))}
</div>

                </div>
              </section>
            )}
  
            
            {/* Projects */}
            <section className="mb-4">
              <h2 className="text-lg font-bold mb-4 inline-block border-b-2 border-gray-400 ">PROJECTS</h2>
              <div className="grid grid-cols-1 gap-4">
                {formData.projects &&
                  formData.projects.length > 0 &&
                  formData.projects.map((proj, index) => (
                    <div key={index} className="border-l-2 border-gray-200 pl-4 py-1">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-semibold font-sans text-[0.75rem] text-gray-900">{proj.name}</h3>
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
              </div>
            </section>
            
  
            {/* Others */}
            {formData?.others?.length > 0 && (
              <section>
                <h2 className="text-lg font-bold mb-4 inline-block border-b-2 border-gray-400 pb-1">OTHER</h2>
                {formData.others.map((item, index) => (
                  <p key={index} className="text-[0.7rem] mb-2 flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 mr-2"></span>
                    <span>
                      {item?.text}{" "}
                      {item?.link && (
                        <a href={item.link} className="text-gray-700 underline">
                          [Link]
                        </a>
                      )}
                    </span>
                  </p>
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    
    </div>
      
    )
  }
  
  export default Temp4
  
  