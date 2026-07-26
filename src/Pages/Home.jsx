import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Zap, Shield, CheckCircle } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import home1 from "../assets/home1.avif";
import home2 from "../assets/home2.avif";
import Footer from "../Components/Footer";
import "../Components/animation.css";
import {useNavigate} from "react-router-dom";
const Home = () => {
  const storedToken = localStorage.getItem("token");
  const token = storedToken ? JSON.parse(storedToken) : null;
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f9faff]">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-bold text-[#07142b] mb-6">
            Craft Your{" "}
            <span className="text-[#ffc85e]">
              <TypeAnimation
                sequence={[
                  "Perfect",
                  2000,
                  "Professional",
                  2000,
                  "Standout",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>{" "}
            Resume
          </h1>
          <p className="text-2xl text-[#46464e] mb-12">
            Create a professional resume in minutes with our easy-to-use builder
          </p>
          {!token ? (
            <motion.a
              onClick={() => navigate('/login')}
              className="inline-flex items-center cursor-pointer px-8 py-4 text-xl font-semibold text-[#07142b] bg-[#ffc85e] rounded-full hover:bg-[#ffd78e] transition-colors duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let’s Get Started
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="ml-2"
              >
                <ArrowRight />
              </motion.span>
            </motion.a>
          ) : (
            <motion.a
              onClick={() => navigate('/create-resume')}
              className="inline-flex items-center cursor-pointer px-8 py-4 text-xl font-semibold text-[#07142b] bg-[#ffc85e] rounded-full hover:bg-[#ffd78e] transition-colors duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create Your Resume
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="ml-2"
              >
                <ArrowRight />
              </motion.span>
            </motion.a>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 "
        >
          {[
            {
              icon: <FileText className="w-12 h-12 mb-4 text-[#ffc85e]" />,
              title: "Easy to Use",
              description: "Intuitive interface for quick resume creation",
            },
            {
              icon: <Zap className="w-12 h-12 mb-4 text-[#ffc85e]" />,
              title: "Professional Designs",
              description:
                "Choose from a variety of modern, ATS-friendly designs",
            },
            {
              icon: <Shield className="w-12 h-12 mb-4 text-[#ffc85e]" />,
              title: "Privacy First",
              description: "Your data is secure and never shared",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              className="bg-white p-4 rounded-lg shadow-lg text-center flex flex-col items-center"
            >
              {feature.icon}
              <h2 className="text-xl font-semibold text-[#07142b] mb-4">
                {feature.title}
              </h2>
              <p className="text-md text-[#46464e]">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
        >
          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src={home1}
              alt="Job seeker success"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <h2 className="text-4xl font-bold text-[#07142b] mb-6">
              Boost Your Career Prospects
            </h2>
            <ul className="space-y-4">
              {[
                "Tailored resumes for your industry",
                "ATS-optimized templates",
                "Expert tips and suggestions",
                "Easy-to-use interface",
                "Regular updates with new features",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start text-xl text-[#46464e]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 mr-2 text-[#ffc85e] flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }} // Adjust amount for sensitivity
          transition={{ duration: 0.8, delay: 0.31 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
        >
          <div>
            <h2 className="text-4xl font-bold text-[#07142b] mb-6">
              Stand Out from the Crowd
            </h2>
            <p className="text-xl text-[#46464e] mb-8">
              Our professionally designed templates and expert tips will help
              you create a resume that catches the eye of recruiters and lands
              you your dream job.
            </p>
            <a
              onClick={() => navigate('/templates')}
              className="inline-flex cursor-pointer items-center px-6 py-3 text-lg font-semibold text-[#07142b] bg-[#ffc85e] rounded-full hover:bg-[#ffd78e] transition-colors duration-300"
            >
              Explore Templates <ArrowRight className="ml-2" />
            </a>
          </div>
          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={home2}
              alt="Professional resume example"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Adjust `amount` for sensitivity
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-[#07142b] mb-6">
            Ready to Take the Next Step in Your Career?
          </h2>
          <p className="text-xl text-[#46464e] mb-8">
            Join thousands of job seekers who have successfully landed their
            dream jobs using our resume builder.
          </p>
          <a
            onClick={() => navigate('/create-resume')}
            className="inline-flex items-center cursor-pointer px-8 py-4 text-xl font-semibold text-[#07142b] bg-[#ffc85e] rounded-full hover:bg-[#ffd78e] transition-colors duration-300"
          >
            Start Building Your Resume <ArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
