import React, { useState, useEffect } from "react";

export default function Resources({ data, updateData }) {
  const [resources, setResources] = useState(() => {
    // Retrieve stored data if available, otherwise use props data
    const savedResources = localStorage.getItem("resources");
    return savedResources ? JSON.parse(savedResources) : data || [];
  });

  const [newText, setNewText] = useState("");
  const [newLink, setNewLink] = useState("");

  useEffect(() => {
    // Save resources to localStorage whenever it changes
    localStorage.setItem("resources", JSON.stringify(resources));
    updateData(resources)
  }, [resources]);

  const addResource = () => {
    if (newText.trim() !== "" || newLink.trim() !== "") {
      const updatedResources = [...resources, { text: newText.trim(), link: newLink.trim() }];
      setResources(updatedResources);
      updateData(updatedResources);
      setNewText("");
      setNewLink("");
    }
  };

  const removeResource = (index) => {
    const updatedResources = resources.filter((_, i) => i !== index);
    setResources(updatedResources);
    updateData(updatedResources);
  };

  const clearResources = () => {
    setResources([]);
    localStorage.removeItem("resources");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#07142b] mb-4">Resources</h2>
      <div className="flex gap-2 items-center">
        <input
          value={newText}
          placeholder="Enter description (optional)"
          onChange={(e) => setNewText(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
        />
        <input
          value={newLink}
          placeholder="Enter link (optional)"
          onChange={(e) => setNewLink(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
        />
        <button
          onClick={addResource}
          className="px-4 py-2 bg-[#07142b] text-white rounded-md hover:bg-[#07142b]/90"
          disabled={!newText.trim() && !newLink.trim()}
        >
          Add
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#46464e] mb-2">Your Resources:</h3>
        <ul className="space-y-2">
          {resources.map((resource, index) => (
            <li key={index} className="flex items-center justify-between bg-[#f9faff] p-2 rounded">
              <span className="text-gray-800">
                {resource.text} {resource.text && resource.link ? "-" : ""}{" "}
              </span>
              {resource.link && (
                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-2">
                  {resource.link}
                </a>
              )}
              <button
                onClick={() => removeResource(index)}
                className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        {resources.length > 0 && (
          <button
            onClick={clearResources}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Clear All Resources
          </button>
        )}
      </div>
    </div>
  );
}



