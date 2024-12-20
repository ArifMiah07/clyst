import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in user with:", formData);
    // Add Firebase or backend logic later
  };

  const handleGoogleLogin = () => {
    console.log("Google Login initiated");
    // Add Firebase Google auth logic later
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="input-field mt-2 p-3"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="input-field mt-2 p-3"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn-primary w-full">Login</button>
        </form>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn-secondary w-full flex flex-col items-center">
        <span><FcGoogle /></span>
          <span className="text-black font-medium">Login with Google</span>
        </button>
        <p className="text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
