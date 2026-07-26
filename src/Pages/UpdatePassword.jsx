import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../Services/passwordAPI";
export default function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token, navigate));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f9faff] p-4 py-20">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[#07142b]">Update Password</h1>
          <p className="mt-2 text-sm text-[#46464e]">Please enter your new password below</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="password" className="text-[#07142b]">New Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 text-[#07142b] w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="text-[#07142b]">Confirm New Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 text-[#07142b] w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <button type="submit" className="w-full bg-[#ffc85e] hover:bg-[#ffd78e] text-[#07142b] p-2 rounded">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}