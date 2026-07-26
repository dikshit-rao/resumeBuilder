import './App.css'
import { useEffect } from "react";
import Login from './Pages/Login'
import Signup from './Pages/SignUp'
import ForgotPassword from './Pages/ForgotPassword'
import {Routes,Route, useNavigate} from 'react-router-dom'
import Navbar from './Components/Navbar'
import CreateResume from './Pages/CreateResume'
import Home from './Pages/Home'
import About from './Pages/About'
import Tut1 from './Pages/Tut1'
import Tut2 from './Pages/Tut2'
import FAQ from './Pages/FAQ'
import ContactUs from './Pages/ContactUs'
import ResumeExamples from './Pages/ResumeExamples'
import OTP from './Pages/OTP'
import UpdatePassword from './Pages/UpdatePassword'
import {Toaster} from 'react-hot-toast'
import Templates from './Pages/Templates'
import Resume from './Components/Resume'
import YourResume from './Pages/YourResume'
import ATS from './Pages/ATS'


function App() {
  const navigate = useNavigate();
  function isTokenExpired(token) {
    if (!token) return true; // If there's no token, consider it expired
  
    try {
      const base64Url = token.split(".")[1]; // Extract payload part
      if (!base64Url) return true; // If the token is malformed
  
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Fix JWT encoding
      const payload = JSON.parse(atob(base64)); // Decode payload
  
      console.log("Decoded Token Payload:", payload); // Debugging
  
      if (!payload.exp) return true; // If exp field is missing, consider it expired
  
      const expiryTime = payload.exp * 1000; // Convert exp to milliseconds
      const currentTime = Date.now(); // Get current time in milliseconds
  
      console.log(`Expiry Time: ${new Date(expiryTime)} | Current Time: ${new Date(currentTime)}`);
  
      return currentTime >= expiryTime; // Check if expired
    } catch (error) {
      console.error("Error decoding token:", error);
      return true; // If there's an error, consider token expired
    }
  }

  // useEffect(() => {
    
  //   const token = localStorage.getItem("token");
  //   console.log(isTokenExpired(token))
  //   if (!token || isTokenExpired(token)) {
  //     localStorage.removeItem("token");
  //     navigate("/login"); // Redirect to login on token expiry
  //   }
  // }, []);
  
  return (
    <div>
    <Toaster position="top-center" reverseOrder={false} />
      <Navbar  />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/otp' element={<OTP/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/update-password/:id' element={<UpdatePassword/>}/>
        
        <Route path='/' element={<Home/>}/>

        <Route path='/about' element={<About/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>

        <Route path='/tut1' element={<Tut1/>}/>
        <Route path='/tut2' element={<Tut2/>}/>
        
        <Route path='/create-resume' element={<CreateResume/>}/>
        <Route path='/templates' element={<Templates/>}/>
        <Route path='/example-resume' element={<ResumeExamples/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/your-resume' element={<YourResume/>}/>
        <Route path='/ATS' element={<ATS/>}/>
      </Routes>
    </div>
  )
}


export default App