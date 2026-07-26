import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../Services/userAPI';
import {Loader2} from "lucide-react"
export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    dispatch(login(email, password, navigate));
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
};

  return (
    <div className="flex min-h-screen w-full h-full bg-[#f9faff] items-center justify-center px-4 sm:px-6 lg:px-8 py-32">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#46464e]">Login to Resumify</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 px-2">
          <div className="space-y-1">
            <label htmlFor="email" className="text-[#07142b] block font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-1 border rounded-lg border-[#07142b] text-[#07142b]"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="text-[#07142b] block font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-1 border rounded-lg border-[#07142b] text-[#07142b]"
            />
          </div>
          <button type="submit" className="w-full bg-[#ffc85e] hover:bg-[#ffd78e] text-[#07142b] py-2 rounded-lg font-bold">
          {!isLoading ? <span>Log In</span> :  <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin" />Loading...</span>}
        </button>
        </form>
        <div className="flex flex-col space-y-2 mt-4 text-center">
          <Link to="/forgot-password" className="text-sm text-[#0c1986] hover:underline">
            Forgot password?
          </Link>
          <div className="text-sm text-[#07142b]">
            Don't have an account? {" "}
            <Link to='/signup' className="text-[#0c1986] hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
