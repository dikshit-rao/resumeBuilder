import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "../Components/Accordion";
import Footer from "../Components/Footer";

const faqData = [
  {
    id: "1",
    question: "How to Create Resume?",
    steps: [
  	"Navigate to the homepage and click on the 'Resume' button in the navigation bar.",
  	"Select the 'Create Resume' option that appears after clicking 'Resume'.",
  	"A resume creation form will be displayed for you to enter your details.",
 	"Carefully fill in the required information to ensure accuracy and completeness.",
 	"Once all details are provided, your resume will be generated automatically."
      ],
  },
  {
    id: "2",
    question: "How to Improve and Update Your Resume?",
    steps: [
  	"Navigate to the homepage and click on the 'Resume' button in the navigation bar.",
  	"Select the 'Update Resume' option that appears after clicking 'Resume'.",
  	"Your existing resume will be displayed, allowing you to make necessary updates.",
  	"A form will appear where you can modify specific details as needed.",
  	"After updating the details, choose a template from the available options.",
  	"Once selected, your resume will be updated with the new information and design."
      ],
  },
  {
    id: "3",
    question: "How to Create an Account and Sign in?",
    steps: [
  	"Navigate to RESUMIFY's homepage and click on the 'My Account' option in the navigation bar.",
  	"Select the 'Sign Up' option to create a new account.",
  	"Enter your email address and create a secure password, or sign up using Google or LinkedIn.",
  	"Check your email inbox for a verification message and click the confirmation link.",
  	"Return to the website and log in using your registered email and password.",
  	"Once logged in, access your profile and start building or updating your resume."
      ],

  },
  {
    id: "4",
    question: "How to Create an ATS-friendly Resume for better Job Application Success?",
    steps: [
  	"Use a clean, simple layout with standard fonts like Arial, Calibri, or Times New Roman.",
  	"Avoid images, graphics, tables, and columns, as they can confuse the ATS.",
  	"Use standard section headings such as 'Work Experience,' 'Education,' and 'Skills' to ensure the ATS recognizes key information.",
  	"Optimize your resume with relevant keywords from the job description.",
  	"Save your resume in an ATS-friendly format, preferably a Word document (.docx) or a simple PDF.",
  	"Use bullet points for easy readability and avoid excessive formatting like fancy fonts or colors.",
  	"Ensure proper spelling and grammar, as ATS systems may not recognize misspelled words.",
  	"Do not use headers, footers, or text boxes, as some ATS systems may not read them correctly.",
  	"<website-name> provides an optimized platform for creating ATS-friendly resumes, ensuring a high ATS score and improved job application success."
      ],
  },
  {
    id: "5",
    question: "How to View, Share and Download your Resume?",
    steps: [
  	"Navigate to the homepage and click on the 'Resume' button in the navigation bar.",
  	"Select the 'Your Resumes' option that appears after clicking 'Resume'.",
  	"You will be able to view all the resumes you have created or refined.",
  	"Click on the resume you want to share or download.",
  	"Once selected, you will find the 'Share' and 'Download' buttons.",
  	"Use the 'Share' button to generate a shareable link or send your resume directly.",
  	"Click the 'Download' button to save your resume in your preferred format."
      ],
  },
];

export default function FAQ() {
  return (
    <div>
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center text-[#07142b] mb-8">
          Frequently Asked Questions
        </h1>
        <p className="text-[#46464e] text-center mb-12">
          Find step-by-step answers to common questions about Next.js and web development.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
      >
        <Accordion>
          {faqData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem id={item.id} title={item.question} steps={item.steps} />
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </motion.div>
      <Footer/>
    </div>
    
  );
}

