import React from 'react'
import MultiStepForm from '../Components/MultiStepForm'
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
const CreateResume = () => {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");
  const token = storedToken ? JSON.parse(storedToken) : null;
  useEffect(() => {
    if (!token) {
      toast.error("Please log in first.");
      navigate("/");
    }
  }, [token]);
  return (
    <div className='min-h-screen bg-[#f9faff] flex items-center justify-center p-4 py-20'>
        <MultiStepForm/>
    </div>
  )
}

export default CreateResume