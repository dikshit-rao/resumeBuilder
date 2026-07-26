import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tokenPassword } from "../Services/passwordAPI";
import { Loader2 } from "lucide-react";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    dispatch(tokenPassword(email, setEmailSent));
    setIsLoading(false);
  };
  
  return (
    <div className="flex min-h-screen w-full h-full bg-[#f9faff] items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="w-full max-w-md bg-white p-6 shadow-md rounded-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#46464e]">Forgot Password</h2>
          <p className="text-[#46464e]">
            {emailSent
              ? "A password reset link has been sent to your email."
              : "Enter your email to reset your password"}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {!emailSent && (
            <div className="space-y-2">
              <label htmlFor="email" className="block text-[#07142b] font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-[#07142b] text-[#07142b] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0c1986]"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-[#ffc85e] hover:bg-[#ffd78e] text-[#07142b] py-2 rounded-md font-semibold"
          >
          {!isLoading ? <span>{emailSent ? "Resend Email" : "Reset Password"}</span> :  <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin" />Loading...</span>}
            
          </button>
        </form>
        <div className="text-sm text-[#07142b] text-center mt-4">
          Remember your password?{" "}
          <Link to="/login" className="text-[#0c1986] hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
