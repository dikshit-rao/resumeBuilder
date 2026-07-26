"use client";

import { useLocation, useNavigate } from "react-router-dom";
import { AlertCircle, ArrowBigLeft, CheckCircle, Key } from "lucide-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ATS = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let atsData = null;
  try {
    const extractedJson = location.state?.atsScore?.replace(/```json|```/g, "").trim();
    atsData = JSON.parse(extractedJson)?.ATS_Analysis;
    if(atsData.ATS_Compatibility_Score < 85){
      atsData.ATS_Compatibility_Score += 10;
    }
  } catch (error) {
    console.error("Error parsing ATS JSON:", error);
  }

  if (!atsData) {
    return (
      <div className="flex items-center justify-center min-h-[80vh] bg-[#f9faff]">
        <div className="w-full max-w-md border border-gray-200 shadow-sm p-6 rounded-lg text-center">
          <AlertCircle className="w-6 h-6 text-gray-500 mx-auto mb-2" />
          <h2 className="text-xl font-semibold">No Data Available</h2>
          <p className="text-gray-500 text-sm mt-2">No ATS Analysis data available.</p>
          <button
            onClick={() => window.history.back()}
            className="mt-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const getScoreColor = (score) => {
    if (score >= 70) return "#16a34a"; // Green
    if (score >= 50) return "#f59e0b"; // Amber
    return "#dc2626"; // Red
  };

  return (
    <div className="bg-[#f9faff] w-full h-full">
      <div className="container mx-auto py-20 px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-2xl font-semibold">ATS Analysis Results</h1>
        </div>

        {/* Circular Score Section */}
        <div className="mb-10 flex flex-col items-center">
          <div className="relative w-40 h-40">
            <CircularProgressbar
              value={atsData.ATS_Compatibility_Score}
              text={`${atsData.ATS_Compatibility_Score}/100`}
              styles={buildStyles({
                textSize: "16px",
                pathColor: getScoreColor(atsData.ATS_Compatibility_Score),
                textColor: "#333",
                trailColor: "#e5e7eb",
              })}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">ATS Compatibility Score</p>
        </div>

        <div className="grid gap-10">
          {/* Positive Aspects */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <h2 className="text-lg font-medium">Positive Aspects</h2>
            </div>
            <div className="border-b border-gray-200 mb-4"></div>
            <ul className="space-y-3 pl-5">
              {atsData.Positive_Aspects.map((point, index) => (
                <li key={index} className="list-disc text-sm text-gray-600">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* Areas for Improvement */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <h2 className="text-lg font-medium">Areas for Improvement</h2>
            </div>
            <div className="border-b border-gray-200 mb-4"></div>
            <ul className="space-y-3 pl-5">
              {atsData.Areas_for_Improvement.map((point, index) => (
                <li key={index} className="list-disc text-sm text-gray-600">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          {/* Recommended Keywords & Skills */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Key className="h-4 w-4 text-blue-600" />
              <h2 className="text-lg font-medium">Recommended Keywords & Skills</h2>
            </div>
            <div className="border-b border-gray-200 mb-4"></div>
            <div className="flex flex-wrap gap-2">
              {atsData.Recommended_Keywords_Skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center mx-auto">
          <button className="px-6 py-2 border mx-auto flex justify-center items-center border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
           <ArrowBigLeft onClick={() =>{navigate('/your-resume')}}/> Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ATS;


