import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="relative flex flex-col gap-3 p-1">
      {/* Border Animation */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-green-500 via-pink-500 to-blue-500 animate-borderMove"></div>

      {/* Inner Content */}
      <div className="relative z-10 border  text-[#07142b] rounded-xl p-7 lg:p-14 flex gap-3 flex-col bg-white shadow-lg">
        <h1 className="text-4xl leading-10 font-semibold text-[#07142b]">
          Got an Idea? We&apos;ve got the skills. Let&apos;s team up.
        </h1>
        <p className="text-[#46464e]">
          Tell us more about yourself and what you&apos;ve got in mind.
        </p>

        <div className="mt-7">
          <ContactUsForm />
        </div>
      </div>

      {/* Tailwind Animation CSS */}
      <style>
        {`
          @keyframes borderMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-borderMove {
            background-size: 200% 200%;
            animation: borderMove 2s infinite linear;
          }
        `}
      </style>
    </div>
  );
};

export default ContactForm;

