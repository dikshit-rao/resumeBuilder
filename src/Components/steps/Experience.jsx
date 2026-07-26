import React, { useState, useEffect } from "react";
import { Sparkles ,Loader2} from "lucide-react"; 
import toast from "react-hot-toast";
import { apiConnector } from "../../Services/apiConnector";
import { aiEndpoints } from "../../Services/apis";
export default function Experience({ data, updateData }) {
  const storedToken = localStorage.getItem("token");
  const token = storedToken ? JSON.parse(storedToken) : null;
  const [experiences, setExperiences] = useState(() => {
    // Retrieve stored data if available, otherwise use props data
    const savedExperiences = localStorage.getItem("experiences");
    return savedExperiences ? JSON.parse(savedExperiences) : data || [];
  });

  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    duration: "",
    description: "",
  });
  const [ailoading,setailoading] = useState(false);
  const gemini = async () =>{
    const DataString =  `Position : ${newExperience.position}, Purpose: ${newExperience.description}` ;
    const basePrompt = "Given a job position and a description of the work done there, generate a concise summary highlighting the key responsibilities, impact, and achievements. If either the position or the description is missing, return only '110011' without any other text.{data}"
    
    const PROMPT = basePrompt.replace("{data}", DataString);
    setailoading(true);
    let res;
    try {
      const response = await apiConnector("POST", aiEndpoints.GENERATE_API, { prompt: PROMPT }, {
        Authorization: `Bearer ${token}`,
      });
      res = response.data.result;
    } catch (error) {
      setailoading(false);
      toast.error("Failed to generate description");
      return;
    }
    setailoading(false);
    if (res.includes("110011")) {
      console.log(res)
      toast.error("Provide valid project details")
  }
  else{
    setNewExperience(prev => ({ ...prev, description: res }));
  }
    
  }

  useEffect(() => {
    // Save experiences to localStorage whenever it changes
    localStorage.setItem("experiences", JSON.stringify(experiences));
    updateData(experiences);
  }, [experiences]);

  const addExperience = () => {
    if (newExperience.company.trim() && newExperience.position.trim()) {
      setExperiences([...experiences, newExperience]);
      setNewExperience({ company: "", position: "", duration: "", description: "" });
    }
  };

  const removeExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  const clearExperiences = () => {
    setExperiences([]);
    localStorage.removeItem("experiences");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#07142b] mb-4">Experience</h2>
      <div className="space-y-2">
        {[
          { name: "company", placeholder: "Microsoft, Google, etc." },
          { name: "position", placeholder: "Software Engineer, Intern, etc." },
          { name: "duration", placeholder: "Jan 2020 - Dec 2023" },
          { name: "description", placeholder: "Developed key features, optimized performance, etc." }
        ].map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="text-[#46464e] block mb-1">
              {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
            </label>
            {field.name === "description" ? (
              
              <div className="relative w-full">
              <div className="flex justify-end">
          <button 
            onClick={gemini}
            disabled={ailoading}
            className="mb-1 px-[0.6rem] py-[0.3rem] flex active:scale-90 text-white text-[0.65rem] font-medium rounded-md shadow-md transition duration-200 bg-gradient-to-r from-[#7F56D9C0] to-[#4F46E5C0] hover:from-[#7F56D9F0] hover:to-[#4F46E5F0]"
          >
           {ailoading ? (
        <Loader2 size={14} className="animate-spin mt-[0.2rem] mr-2" /> // Spinner when loading
      ) : (
        <>
          <Sparkles size={12} className="mt-[0.2rem] mr-2" />
        </>
      )}
      Improve with AI
          </button>
        </div>
  <textarea
    id={field.name}
    name={field.name}
    value={newExperience[field.name]}
    onChange={handleChange}
    placeholder={field.placeholder}
    className="w-full px-3 py-2 border min-h-28 border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
  />
</div>


            ) : (
              <input
                id={field.name}
                name={field.name}
                value={newExperience[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
              />
            )}
          </div>
        ))}
        <button
          onClick={addExperience}
          className="mt-2 px-4 py-2 bg-[#07142b] text-white rounded-md hover:bg-[#07142b]/90"
        >
          Add Experience
        </button>
      </div>
      {experiences.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-[#46464e] mb-2">Your Experiences:</h3>
          <ul className="space-y-4">
            {experiences.map((exp, index) => (
              <li key={index} className="bg-[#f9faff] p-4 rounded">
                <h4 className="font-semibold">{exp.position} at {exp.company}</h4>
                <p className="text-sm text-[#46464e] mt-1">{exp.duration}</p>
                <p className="text-sm mt-2">{exp.description}</p>
                <button
                  onClick={() => removeExperience(index)}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove Experience
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={clearExperiences}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Clear All Experiences
          </button>
        </div>
      )}
    </div>
  );
}


