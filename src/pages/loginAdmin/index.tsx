import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    // Handle form submission logic here (e.g., API call)
    console.log("Form Submitted", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300">
      <div className="w-full max-w-md p-8 bg-white shadow-2xl rounded-lg transform transition duration-500 hover:scale-105">
        <div className="text-center mb-8">
          <img
            src="/logo.png"
            alt="Logo"
            className="mx-auto w-24 mb-4 drop-shadow-lg"
          />
          <h2 className="text-3xl font-extrabold text-gray-800">
            Welcome Back
          </h2>
          <p className="text-gray-500">Login to Admin Dashboard</p>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Forgot your password?{" "}
            <a
              href="#"
              className="text-blue-500 hover:underline"
            >
              Reset here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
