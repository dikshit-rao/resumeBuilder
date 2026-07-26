import { useState,useEffect } from "react";
import OTPInput from "react-otp-input";
import { signUp } from "../Services/userAPI";
import { useNavigate,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Loader2} from "lucide-react"

export default function OTP() {
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState("");
  //const signupData = useSelector((state) => state.signupData.signupdata);
  const location = useLocation();
  const signupData = location.state?.signupData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("aaye to the")
    if (!signupData) {
      navigate("/signup");
    }
  }, [signupData, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = signupData;
    setIsLoading(true)
    dispatch(signUp(name, email, password, otp, navigate));
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f9faff] p-4 py-20">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[#07142b]">
            Enter OTP
          </h1>
          <p className="mt-2 text-sm text-[#46464e]">
            Please enter the 6-digit code sent to your device
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="flex justify-center">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              shouldAutoFocus
              inputStyle={{
                width: "3rem",
                height: "3rem",
                margin: "0 0.5rem",
                fontSize: "1.5rem",
                borderRadius: "0.5rem",
                border: "1px solid #ccc",
                textAlign: "center",
              }}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-[#ffc85e] hover:bg-[#ffd78e] text-[#07142b] py-2 px-4 rounded-md font-medium"
            >
              {!isLoading ? <span>Verify OTP</span> :  <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin" />Loading...</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

