"use client"
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FaArrowLeft, FaDownload, FaSave, FaExchangeAlt } from "react-icons/fa"
import { addResume } from "../Services/resumeAPI"
import { useDispatch, useSelector } from "react-redux"
import Temp1 from "./Temp1"
import Temp2 from "./Temp2"
import Temp3 from "./Temp3"
import Temp4 from "./Temp4"
import Temp5 from "./Temp5"
import Temp6 from "./Temp6"
import Temp7 from "./Temp7"
import Temp8 from "./Temp8"
import Temp9 from "./Temp9"
import { setTemplate } from "../Slices/template" 
import { setName } from "../Slices/fileName";
import t1 from '../assets/Templates/t1.png';
import t2 from '../assets/Templates/t21.png';
import t3 from '../assets/Templates/t31.png';
import t4 from '../assets/Templates/t4.png';
import t5 from '../assets/Templates/t5.png';
import t6 from '../assets/Templates/t61.png';
import t7 from '../assets/Templates/t7.png';
import t8 from '../assets/Templates/t81.png';
import t9 from '../assets/Templates/t91.png';
const Resume = () => {
  const [fileName, setFileName] = useState("Resume");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const template = useSelector((state) => state.template.template)
  
  const [showTemplateSelector, setShowTemplateSelector] = useState(false)
  const tempimg = [t1, t2, t3, t4, t5, t6, t7, t8, t9];

  const renderTemplate = () => {
    switch (template) {
      case 1:
        return <Temp1 formData={formData} />
      case 2:
        return <Temp2 formData={formData} />
      case 3:
        return <Temp3 formData={formData} />
      case 4:
        return <Temp4 formData={formData} />
      case 5:
        return <Temp5 formData={formData} />
      case 6:
        return <Temp6 formData={formData} />
      case 7:
        return <Temp7 formData={formData} />
      case 8:
        return <Temp8 formData={formData} />
      case 9:
        return <Temp9 formData={formData} />
      default:
        return <Temp1 formData={formData} />
    }
  }

  const location = useLocation()
  const navigate = useNavigate()
  const { formData} = location.state || {}

  const dispatch = useDispatch()
  const resumeRef = useRef(null)

  const storedToken = localStorage.getItem("token")
  const token = storedToken ? JSON.parse(storedToken) : null

  const handleBack = () => {
    navigate("/create-resume")
  }

  const handleSave = async (fileName1) => {
    
    console.log("working")
    setIsModalOpen(false);
    await dispatch(addResume(template,fileName1,formData, token))
    const keysToRemove = [
      'achievements', 'education', 'experiences', 'projects', 
      'personalInfo', 'skills', 'resources', 'formData','currentStep'
  ];
  if (Array.isArray(keysToRemove)) {
    keysToRemove.forEach((key) => {
        localStorage.removeItem(key);
    });
    navigate("/your-resume")
}
  }
  const resumeName = useSelector((state) => state.name.name)

  const handleDownload = () => {
    localStorage.setItem('disablePrintMargins', 'true');
    const resumeContent = resumeRef.current
    const originalDisplay = document.body.innerHTML
    // Hide everything except the resume
    document.body.innerHTML = resumeContent.innerHTML
    window.print()
    // Restore original content after printing
    document.body.innerHTML = originalDisplay
    window.location.reload() 
  }

  const handleTemplateChange = (templateId) => {
    dispatch(setTemplate(templateId))
    setShowTemplateSelector(false)
  }

  const toggleTemplateSelector = () => {
    setShowTemplateSelector(!showTemplateSelector)
  }

  return (
    <div className="bg-[#f9faff] font-sans pb-10 pt-20 ">
      {/* Print-specific styles */}
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #resume-content, #resume-content * {
              visibility: visible;
            }
            #resume-content {
              position: absolute;
              left: 0;
              top: 0;
              width: 120%;
            }
          }
        `}
      </style>

      {/* Buttons Section (Hidden during print) */}
      <div className="no-print relative flex justify-center gap-3 p-4">
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 flex items-center gap-2"
        >
          <FaArrowLeft /> Back
        </button>

        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 flex items-center gap-2"
        >
          <FaDownload /> Download
        </button>

        <button
          onClick={() => {setIsModalOpen(true)}}
          className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 flex items-center gap-2"
        >
          <FaSave /> Save
        </button>

        <button
          onClick={toggleTemplateSelector}
          className="px-4 py-2 bg-purple-500 text-white rounded-md shadow-md hover:bg-purple-600 flex items-center gap-2"
        >
          <FaExchangeAlt /> Change Template
        </button>
      </div>

      {/* Template Selector Modal */}
      {showTemplateSelector && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Select Template</h2>
              <button onClick={() => setShowTemplateSelector(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
                <div
                  key={id}
                  onClick={() => handleTemplateChange(id)}
                  className={`cursor-pointer p-1 rounded-md overflow-hidden  h-56 md:h-96 w-full transition-all border-2 duration-200 hover:scale-105 ${
                    template === id ? "border-purple-500 ring-2 ring-purple-300" : "border-gray-200"
                  }`}
                >
                  <div className="relative pb-[140%] overflow-hidden">
                    <img
                      src={`/template-${id}-thumbnail.jpg`}
                      alt={`Template ${id}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = tempimg[id-1]
                      }}
                    />
                  </div>
                  <div className="p-2 bg-gray-50 text-center">
                    <p className="font-medium">Template {id}</p>
                    {template === id && <span className="text-xs text-purple-600">Current</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      { isModalOpen && 
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-[#07142b]">Save Resume</h2>
          <button onClick={() => {setIsModalOpen(false)}} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <input
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md bg-[#f9faff] text-[#46464e]"
          placeholder="Enter file name"
        />

        <button
          onClick={() => handleSave(fileName)}
          className="w-full mt-4 py-2 rounded-md text-[#07142b] bg-[#ffc85e] hover:bg-[#ffd78e] font-semibold"
        >
          Save
        </button>
      </div>
        </div>
      }

      {/* Resume Content */}
      <div
        id="resume-content "
        ref={resumeRef}
      >
        {renderTemplate()}
      </div>
      <style>
  {`
    @media print {
  @page {
    size: A4; /* Ensures it prints on A4 */
    margin: 0; /* Removes all default margins */
  }

  * {
    margin: 0 !important;
    padding: 0 !important;
    box-shadow: none !important;
  }

  html, body {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
    overflow: hidden !important;
  }

  #resume-content {
    width: 100vw !important;
    height: 100vh !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    transform: scale(1) !important; /* Ensures no shrinking */
  }
}

  `}
</style>
    </div>
    
  )
}

export default Resume


