import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering user with:", formData);
  };

  const handleGoogleRegister = () => {
    console.log("Google Register initiated");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="input-field p-3 mt-2"
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
              className="input-field p-3 mt-2"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn-primary w-full">Register</button>
        </form>
        <div className="divider">OR</div>
        <button onClick={handleGoogleRegister} className="btn-secondary w-full flex flex-col items-center">
            <span><FcGoogle /></span>
            <span className="text-black font-medium">Register with Google</span>
        </button>
        <p className="text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
