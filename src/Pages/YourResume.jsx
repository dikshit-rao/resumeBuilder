
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeResumeName, deleteResume, getAllResume } from "../Services/resumeAPI";
import { toast } from "react-hot-toast";
import { Pencil, Eye, Trash2, BarChart3, Plus, Search, SortAsc, Loader2, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { setTemplate } from "../Slices/template";
import { apiConnector } from "../Services/apiConnector";
import { aiEndpoints } from "../Services/apis";

export default function YourResume() {
  const [resumes, setResumes] = useState([]);
  const [editingId, setEditingId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [loadingStates, setLoadingStates] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [refresh, setRefresh] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const storedToken = localStorage.getItem("token");
  const token = storedToken ? JSON.parse(storedToken) : null;

  useEffect(() => {
    if (!token) {
      toast.error("Please log in first.");
      navigate("/");
    }
  }, [navigate, token]);

  useEffect(() => {
    if (token) {
      dispatch(getAllResume(token))
        .then((res) => {
          if (res?.data?.resumes) {
            setResumes(res.data.resumes);
          }
        })
        .catch(() => {
          toast.error("Failed to fetch resumes");
        });
    }
  }, [dispatch, token, refresh]);

  const handleRename = async (id) => {
    await dispatch(changeResumeName(editTitle, id, token));
    setRefresh(!refresh);
    setEditingId("");
    setEditTitle("");
  };

  const handleDelete = async (id) => {
    await dispatch(deleteResume(id, token));
    setRefresh(!refresh);
  };

  const view = async (resume) => {
    // Ensure localStorage is updated before navigating
    if (resume.resumeData) {
        localStorage.setItem("achievements", JSON.stringify(resume.resumeData.achievements || []));
        localStorage.setItem("education", JSON.stringify(resume.resumeData.education || []));
        localStorage.setItem("experiences", JSON.stringify(resume.resumeData.experiences || []));
        localStorage.setItem("projects", JSON.stringify(resume.resumeData.projects || []));
        localStorage.setItem("personalInfo", JSON.stringify(resume.resumeData.personalInfo || {}));
        localStorage.setItem("skills", JSON.stringify(resume.resumeData.skills || []));
        localStorage.setItem("resources", JSON.stringify(resume.resumeData.resources || []));
        localStorage.setItem("formData", JSON.stringify(resume.resumeData)); 
    }

    console.log("LocalStorage updated before navigating");

    await dispatch(setTemplate(resume.template)); 

    // Navigate after ensuring data is stored
    navigate("/resume", { state: { formData: resume.resumeData } });
};


  const getATSScore = async (resume) => {
    setLoadingStates((prev) => ({ ...prev, [resume._id]: true }));
    const fileContent = resume.resumeData;
    const formattedResume = `
    Name: ${fileContent.personalInfo.name}
    Email: ${fileContent.personalInfo.email}
    Phone: ${fileContent.personalInfo.phone}
    Position: ${fileContent.personalInfo.position}

    Education:
    - ${fileContent.education.higher.degree} from ${fileContent.education.higher.name} (${fileContent.education.higher.year}) - ${fileContent.education.higher.percentage} CGPA
    - 12th: ${fileContent.education.twelfth.name} (${fileContent.education.twelfth.year}) - ${fileContent.education.twelfth.percentage}%
    - 10th: ${fileContent.education.tenth.name} (${fileContent.education.tenth.year}) - ${fileContent.education.tenth.percentage} CGPA

    Experience:
    ${fileContent.experience.map(exp => `- ${exp.position} at ${exp.company} (${exp.duration})\n  ${exp.description}`).join("\n")}

    Projects:
    ${fileContent.projects.map(proj => `- ${proj.name}: ${proj.description} (Tech Stack: ${proj.techStack})`).join("\n")}

    Skills:
    ${fileContent.skills.join(", ")}
    `;
    const prompt = `Analyze the following resume for ATS (Applicant Tracking System) compatibility.  

- **Assign an ATS Score (0-100)** based on keyword relevance, industry standards, and job-specific optimization.  
- **Provide structured feedback** in the following format:  
  1. **ATS Compatibility Score:** [Score]  
  2. **Positive Aspects:** [Bullet Points]  
  3. **Areas for Improvement:** [Bullet Points]  
  4. **Recommended Keywords/Skills to Improve Ranking:** [List of Keywords] (at max 10)(dont add fake data improve given data)  
- Ensure the response is **formatted as JSON** for structured rendering on a webpage.

Resume Content:  
{data}\n
resposne format : {
  "atsScore": "
json\n{\n  \"ATS_Analysis\": {\n    \"ATS_Compatibility_Score\": 65,\n    \"Positive_Aspects\": [],\n    \"Recommended_Keywords_Skills\": [],\n  }\n}\n
"
}
` ;
    console.log(fileContent)
    const formattedPrompt = prompt.replace("{data}", formattedResume);
    console.log(formattedPrompt)
    
    try {
      const response = await apiConnector("POST", aiEndpoints.GENERATE_API, { prompt: formattedPrompt }, {
        Authorization: `Bearer ${token}`,
      });
      const responseText = response.data.result;
      console.log(response)
      setLoadingStates((prev) => ({ ...prev, [resume._id]: false }));
      navigate('/ATS', { state: { atsScore:responseText } });
    } catch (error) {
      console.log(error)
      toast.error("Failed to fetch ATS score");
    }
    setLoadingStates((prev) => ({ ...prev, [resume._id]: false }));
    
  };

  const filteredResumes = resumes.filter((resume) =>
    resume.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedResumes = [...filteredResumes].sort((a, b) => {
    if (sortOrder === "newest") return new Date(b.updatedAt) - new Date(a.updatedAt);
    if (sortOrder === "oldest") return new Date(a.updatedAt) - new Date(b.updatedAt);
    if (sortOrder === "alphabetical") return a.name.localeCompare(b.name);
    return 0;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  return (
    <div className="p-6 py-20 max-w-6xl mx-auto ">
      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Your Resumes</h1>
        <button onClick={() => navigate("/create-resume")} className="flex items-center bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-600">
          <Plus className="mr-2 h-4 w-4" /> Create New Resume
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search resumes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 p-2 border rounded w-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <SortAsc className="h-5 w-5 text-gray-600" />
          <select
            className="p-2 border rounded"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Resume Grid */}
      {sortedResumes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedResumes.map((resume) => (
            <div key={resume._id} className="border rounded-lg shadow-md overflow-hidden">
              <div className="p-5 bg-gray-50">
                {editingId === resume._id ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="flex-grow border rounded p-1"
                      placeholder="Enter resume name"
                      autoFocus
                    />
                    <button
                      onClick={() => handleRename(resume._id)}
                      className="bg-green-500 text-white p-1 rounded"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{resume.name}</h2>
                    <button onClick={() => setEditingId(resume._id)} className="text-gray-600 hover:text-blue-500">
                      <Pencil className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500">Last updated: {formatDate(resume.updatedAt)}</p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-md p-4 flex justify-between items-center">
                <button onClick={() => view(resume)} className="flex items-center gap-2 bg-white p-2 rounded-md border border-gray-300 hover:bg-gray-100">
                  <Eye className="h-4 w-4" />
                  View
                </button>

                <button onClick={() => getATSScore(resume)} className="flex items-center gap-2 bg-white p-2 rounded-md border border-gray-300 hover:bg-gray-100">
                  {loadingStates[resume._id] ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <BarChart3 className="h-4 w-4" />
                      ATS Score
                    </>
                  )}
                </button>

                <button onClick={() => handleDelete(resume._id)} className="flex items-center gap-2 text-red-600 hover:text-red-700 bg-white p-2 rounded-md border border-gray-300 hover:bg-gray-100">
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No resumes found</div>
      )}
    </div>
  );
}

