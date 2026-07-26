import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PersonalInfo from "./steps/PersonalInfo";
import Education from "./steps/Education";
import Skills from "./steps/Skills";
import Projects from "./steps/Projects";
import Experience from "./steps/Experience";
import Achievements from "./steps/Achievements";
import Others from "./steps/Others";
import ProgressIndicator from "./ProgressIndicator";

const steps = ["Personal Info", "Education", "Skills", "Achievements", "Projects", "Experience", "Others"];

export default function MultiStepForm() {

  const resumeName = useSelector((state) => state.name.name)
  
  useEffect(() => {
    setFormData((prev) => ({
        ...prev,
        name: resumeName
    }));
}, [resumeName]);

  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve saved step or default to 0
  const savedStep = parseInt(localStorage.getItem("currentStep")) || 0;
  const [currentStep, setCurrentStep] = useState(savedStep);
  const [formData, setFormData] = useState({
    personalInfo: {},
    education: {},
    skills: [],
    achievements: [],
    projects: [],
    experience: [],
    others: [],
  });

  // Retrieve stored form data if available
  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    } else if (location.state?.formData) {
      setFormData(location.state.formData);
    }
  }, []);

  // Save step whenever it changes
  useEffect(() => {
    localStorage.setItem("currentStep", currentStep);
  }, [currentStep]);

  // Save form data whenever it updates
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      navigate("/resume", { state: { formData } });
    } else {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const updateFormData = (step, data) => {
    setFormData((prev) => ({ ...prev, [step]: data }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfo data={formData.personalInfo} updateData={(data) => updateFormData("personalInfo", data)} />;
      case 1:
        return <Education data={formData.education} updateData={(data) => updateFormData("education", data)} />;
      case 2:
        return <Skills data={formData.skills} updateData={(data) => updateFormData("skills", data)} />;
      case 3:
        return <Achievements data={formData.achievements} updateData={(data) => updateFormData("achievements", data)} />;
      case 4:
        return <Projects data={formData.projects} updateData={(data) => updateFormData("projects", data)} />;
      case 5:
        return <Experience data={formData.experience} updateData={(data) => updateFormData("experience", data)} />;
      case 6:
        return <Others data={formData.others} updateData={(data) => updateFormData("others", data)} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto", backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      <ProgressIndicator steps={steps} currentStep={currentStep} />
      <div style={{ marginTop: "4rem", marginBottom: "2rem" }}>{renderStep()}</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2rem" }}>
      <button 
  onClick={handlePrev} 
  disabled={currentStep === 0} 
  className={`px-6 py-3 border border-[#07142b] text-[#07142b] rounded-md cursor-pointer transition active:scale-95
    ${currentStep === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#07142b] hover:text-white"}`}
>
  Previous
</button>

        {currentStep >= 3 && (
          <button 
            className="flex justify-center items-center border border-gray-300 rounded-xl p-3 bg-[#ffc85e] text-[#07142b] hover:bg-[#ffd78e] active:scale-95"
            onClick={() => navigate("/resume", { state: { formData} })} 
            style={{ cursor: "pointer"}}
          >
            Preview
          </button>
        )}
        <button 
          onClick={handleNext} 
          className="px-6 py-3 bg-[#07142b] text-white hover:text-[#07142b] border border-[#07142b] rounded-md cursor-pointer transition 
                    hover:bg-transparent hover:shadow-lg active:scale-95"
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

