import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon3 from "react-icons/hi2";
import * as Icon2 from "react-icons/io5";

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat with us",
    description: "Our friendly team is here to help.",
    details: "info@studynotion.com",
  },
  {
    icon: "BiWorld",
    heading: "Visit us",
    description: "Come and say hello at our office HQ.",
    details:
      "Akshya Nagar 1st Block 1st Cross, Rammurthy Nagar, Bangalore-560016",
  },
  {
    icon: "IoCall",
    heading: "Call us",
    description: "Mon - Fri From 8am to 5pm",
    details: "+123 456 7869",
  },
];

const ContactDetails = () => {
  return (
    <div className="relative flex flex-col gap-6 p-1 ">
      {/* Border Animation */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-green-500 to-pink-500 animate-borderMove"></div>

      {/* Inner Content */}
      <div className="relative z-10 flex flex-col gap-6 rounded-xl bg-white p-2 shadow-lg">
        {contactDetails.map((ele, i) => {
          let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
          return (
            <div
              className="flex flex-col gap-[2px] p-3 text-sm text-[#46464e] bg-white rounded-lg"
              key={i}
            >
              <div className="flex flex-row items-center gap-3">
                <Icon size={25} className="text-[#07142b]" />
                <h1 className="text-lg font-semibold text-[#07142b]">
                  {ele?.heading}
                </h1>
              </div>
              <p className="font-medium">{ele?.description}</p>
              <p className="font-semibold">{ele?.details}</p>
            </div>
          );
        })}
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

export default ContactDetails;

