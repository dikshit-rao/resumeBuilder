# 📝 Resume Builder Website

An AI-powered resume builder web application that allows users to create, edit, and download professional resumes using multiple templates.

## 🚀 Features

- ✨ Multiple resume templates
- 🧠 AI-assisted content generation
- ✍️ Edit Resumes
- 📎 Add links
- 💾 Download as PDF
- 🖼️ Live preview of the resume
- 📊 **ATS Score Checker** — evaluate how well your resume performs against Applicant Tracking Systems
- ✅ **Suggestions for improvement** based on ATS score
- ☁️ **Save and manage multiple resumes**
- 🌐 Responsive and user-friendly UI

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Redux (for state management)
- Framer Motion (animations)
- react-icons
- lucide-react

**Backend:**
- Node.js
- Express.js
- MongoDB (for saving user data)
- Google Gemini API (for AI features)

 ## 📁 Frontend Folder Structure

```
|   App.css
|   App.jsx
|   index.css
|   main.jsx
|   structure.txt
|   
+---assets
|   |   about1.jpg
|   |   about2.jpg
|   |   home1.avif
|   |   home1.jpg
|   |   home2.avif
|   |   home2.jpg
|   |   logo.jpg
|   |   logo_dark.jpg
|   |   react.svg
|   |   Resume Print.pdf
|   |   Resumify.pdf
|   |   Simon Rogers, Mark Girolami A First Course in Machine Learning.pdf
|   |   Vite + React.pdf
|   |   
|   +---Format of Resume
|   |       F1.jpg
|   |       F2.jpg
|   |       F3.jpg
|   |       F4.jpg
|   |       F5.jpg
|   |       F6.jpg
|   |       F7.jpg
|   |       F8.jpg
|   |       
|   \---Templates
|           t1.png
|           t2.png
|           t21.png
|           t3.png
|           t31.png
|           t4.png
|           t5.png
|           t6.png
|           t61.png
|           t7.png
|           t8.png
|           t81.png
|           t9.png
|           t91.png
|           
+---Components
|   |   Accordion.jsx
|   |   animation.css
|   |   ContactDetails.jsx
|   |   ContactForm.jsx
|   |   ContactUsForm.jsx
|   |   Footer.jsx
|   |   MultiStepForm.jsx
|   |   Navbar.jsx
|   |   ProgressIndicator.jsx
|   |   Resume.jsx
|   |   Stack.jsx
|   |   Temp1.jsx
|   |   Temp2.jsx
|   |   Temp3.jsx
|   |   Temp4.jsx
|   |   Temp5.jsx
|   |   Temp6.jsx
|   |   Temp7.jsx
|   |   Temp8.jsx
|   |   Temp9.jsx
|   |   VideoCard.jsx
|   |   
|   \---steps
|           Achievements.jsx
|           Education.jsx
|           Experience.jsx
|           Others.jsx
|           PersonalInfo.jsx
|           Projects.jsx
|           Skills.jsx
|           
+---data
|       countrycode.json
|       
+---Pages
|       About.jsx
|       ATS.jsx
|       ContactUs.jsx
|       CreateResume.jsx
|       FAQ.jsx
|       ForgotPassword.jsx
|       Home.jsx
|       Login.jsx
|       OTP.jsx
|       ResumeExamples.jsx
|       SignUp.jsx
|       Templates.jsx
|       Tut1.jsx
|       Tut2.jsx
|       UpdatePassword.jsx
|       YourResume.jsx
|       
+---Services
|       apiConnector.jsx
|       apis.jsx
|       passwordAPI.jsx
|       resumeAPI.jsx
|       userAPI.jsx
|       
+---Slices
|       fileName.jsx
|       loading.jsx
|       template.jsx
|       
\---store
        store.jsx
```
  ## 📁 Backend Folder Structure
```
|   .env
|   index.js
|   package-lock.json
|   package.json
|   structure.txt
|   
+---Controllers
|       ContactUs.js
|       ResetPassword.js
|       Resume.js
|       User.js
|       
+---Middlewares
|       auth.js
|       
+---Models
|       OTP.js
|       Resume.js
|       User.js
|       
+---Routes
|       Contact.js
|       Password.js
|       Resume.js
|       User.js
|       
+---Templates
|       contactFormRes.js
|       otpTemplate.js
|       
\---utils
        dbConnect.js
        gemini.js
        mailSender.js
```
