import React, { useState, useEffect } from "react";
import { Sparkles,Loader2 } from "lucide-react"; 
import { apiConnector } from "../../Services/apiConnector";
import { aiEndpoints } from "../../Services/apis";
import toast from "react-hot-toast";
export default function Achievements({ data, updateData }) {
  const storedToken = localStorage.getItem("token");
  const token = storedToken ? JSON.parse(storedToken) : null;
  const [achievements, setAchievements] = useState(() => {
    // Retrieve stored data if available, otherwise use props data
    const savedAchievements = localStorage.getItem("achievements");
    return savedAchievements ? JSON.parse(savedAchievements) : data || [];
  });

  const [newAchievement, setNewAchievement] = useState("");

  useEffect(() => {
    // Save achievements to localStorage whenever it changes
    localStorage.setItem("achievements", JSON.stringify(achievements));
    updateData(achievements)
  }, [achievements]);
  const [ailoading,setailoading] = useState(false);
  const gemini = async () =>{
    const projectDataString =  `achievement: ${newAchievement}` ;
    const basePrompt = "Given an achievement, refine and enhance its wording to make it more precise, impactful, and professional. If no achievement is provided, return only '110011' without any other text. {data}"
    
    const PROMPT = basePrompt.replace("{data}", projectDataString);
    setailoading(true);
    let res;
    try {
      const response = await apiConnector("POST", aiEndpoints.GENERATE_API, { prompt: PROMPT }, {
        Authorization: `Bearer ${token}`,
      });
      res = response.data.result;
    } catch (error) {
      setailoading(false);
      toast.error("Failed to generate achievement");
      return;
    }
    setailoading(false);
    if (res.includes("110011")) {
      console.log(res)
      toast.error("Provide valid achievement details")
    }
    else{
      setNewAchievement(res);
    }
  }
  const addAchievement = () => {
    if (newAchievement.trim() !== "") {
      const updatedAchievements = [...achievements, newAchievement.trim()];
      setAchievements(updatedAchievements);
      updateData(updatedAchievements);
      setNewAchievement("");
    }
  };

  const removeAchievement = (index) => {
    const updatedAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(updatedAchievements);
    updateData(updatedAchievements);
  };

  const clearAchievements = () => {
    setAchievements([]);
    localStorage.removeItem("achievements");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#07142b] mb-4">Achievements</h2>
      <div>
      <div className="flex  justify-start"><label htmlFor="newAchievement" className="text-[#46464e] block mb-1">
          Add an Achievement
        </label>
        <div className="flex justify-end ml-auto">
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
        </div></div>
        
        <div className="flex mt-1">
        
          <input
            id="newAchievement"
            value={newAchievement}
            placeholder="Enter only 1 achievement at a time (e.g. Won hackathon)"
            onChange={(e) => setNewAchievement(e.target.value)}
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
          />
          <button 
            onClick={addAchievement} 
            className="ml-2 px-4 py-2 bg-[#07142b] text-white rounded-md hover:bg-[#07142b]/90">
            Add
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#46464e] mb-2">Your Achievements:</h3>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-center justify-between bg-[#f9faff] p-2 rounded">
              <span>{achievement}</span>
              <button 
                onClick={() => removeAchievement(index)}
                className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600">
                Remove
              </button>
            </li>
          ))}
        </ul>
        {achievements.length > 0 && (
          <button 
            onClick={clearAchievements}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
            Clear All Achievements
          </button>
        )}
      </div>
    </div>
  );
}
