import React from "react";
import { CardStack } from "../Components/Stack";
import Footer from '../Components/Footer';
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
export default function About() {
  return (
    <div className="min-h-screen bg-[#f9faff] ">
      <div className="container mx-auto px-4 py-20 max-w-4xl ">
        {/* Add Image Above "About Us" */}
        

        <h1 className="text-[#07142b] text-5xl font-bold text-center mb-4">About Us</h1>
        <p className="text-[#46464e] text-center text-lg mb-20 max-w-3xl mx-auto">
          Our Resume Builder is expertly designed and powered by career specialists with years of experience in the job market. Whether you're a recent graduate, a seasoned professional, or making a career switch, our platform provides tailored guidance, industry-specific templates, and powerful optimization tools to ensure your resume highlights your strengths and achievements effectively.
        </p>
        <div className="flex justify-center mb-10">
          <img 
            src={about2}
            alt="Resume Building" 
            className="rounded-lg shadow-lg w-full max-w-3xl"
          />
        </div>
        

        <div className="text-center mb-16">
          <h2 className="text-[#07142b] text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            The Best Resume Builder for Your Career Growth
          </h2>
          <p className="text-[#46464e] text-xl mb-8">Get expert guidance and professional resume templates.</p>
        </div>
        <div className="text-center mb-16 flex flex-col justify-center items-center">
          <h2 className="text-[#07142b] text-3xl font-bold mb-10">What Our Users Say</h2>
          <CardStack />
        </div>
        <div className="flex justify-center mb-10">
          <img 
            src={about1} 
            alt="Mission and Vision" 
            className="rounded-lg shadow-lg w-full max-w-3xl"
          />
        </div>
        <div className="bg-[#eff2fa] rounded-lg py-8 px-6 mb-20">
          <h2 className="text-[#07142b] text-3xl font-bold text-center mb-6">Key Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-[#07142b] text-2xl font-bold">10M+</h3>
              <p className="text-[#46464e]">Resumes Created</p>
            </div>
            <div>
              <h3 className="text-[#07142b] text-2xl font-bold">90%</h3>
              <p className="text-[#46464e]">Success Rate</p>
            </div>
            <div>
              <h3 className="text-[#07142b] text-2xl font-bold">50K+</h3>
              <p className="text-[#46464e]">Companies Hiring</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-[#07142b] text-3xl font-bold mb-6">Why Choose Us?</h2>
          <ul className="text-[#46464e] text-lg max-w-3xl mx-auto text-left list-disc pl-6">
            <li>AI-powered resume analysis for optimization.</li>
            <li>Customizable, professional resume templates.</li>
            <li>Real-time feedback from career experts.</li>
            <li>Guidance on keyword optimization for ATS compatibility.</li>
          </ul>
        </div>

        {/* Add an image before the Mission & Vision section */}
        

        <div className="bg-[#eff2fa] rounded-lg py-8 px-6 mb-20">
          <h2 className="text-[#07142b] text-3xl font-bold text-center mb-6">Our Mission & Vision</h2>
          <p className="text-[#46464e] text-lg max-w-3xl mx-auto text-center">
            Our mission is to empower job seekers by providing them with world-class resume-building tools and resources. We envision a future where everyone has access to career opportunities that match their skills and aspirations.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}


