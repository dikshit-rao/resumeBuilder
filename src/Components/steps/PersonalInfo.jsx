import React, { useState, useEffect } from "react";

export default function PersonalInfo({ data, updateData }) {
  const [formData, setFormData] = useState(() => {
    // Retrieve stored data if available, otherwise use props data
    const savedData = localStorage.getItem("personalInfo");
    return savedData ? JSON.parse(savedData) : { 
      name: "", phone: "", email: "", dob: "", position: "", ...data 
    };
  });

  useEffect(() => {
    // Save formData to localStorage whenever it changes
    localStorage.setItem("personalInfo", JSON.stringify(formData));
    updateData(formData)
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    updateData(updatedData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#07142b] mb-4">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-[#46464e] block mb-1">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-[#46464e] block mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="123-456-7890"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="dob" className="text-[#46464e] block mb-1">
            Date of Birth
          </label>
          <input
            id="dob"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-[#46464e] block mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
          />
        </div>
      </div>
      <div>
        <label htmlFor="position" className="text-[#46464e] block mb-1">
          Current Position / Description About Yourself
        </label>
        <textarea
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Enter your current position or a description in a line about yourself"
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#ffc85e] focus:border-[#ffc85e]"
        />
      </div>
    </div>
  );
}
