import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = ({ handleSignup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    if (!acceptedTerms) {
      setError("You must accept the terms and conditions");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await handleSignup({ name, email, password });
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-emerald-100 to-emerald-300">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-emerald-700 mb-6">
          Create Account
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Full Name"
            className="outline-none border-2 border-emerald-300 focus:border-emerald-600 rounded-full py-3 px-6 text-lg placeholder-gray-400 transition-all duration-200"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="outline-none border-2 border-emerald-300 focus:border-emerald-600 rounded-full py-3 px-6 text-lg placeholder-gray-400 transition-all duration-200"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="outline-none border-2 border-emerald-300 focus:border-emerald-600 rounded-full py-3 px-6 w-full text-lg placeholder-gray-400 transition-all duration-200"
            />
            <span
              className="absolute right-4 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm Password"
              className="outline-none border-2 border-emerald-300 focus:border-emerald-600 rounded-full py-3 px-6 w-full text-lg placeholder-gray-400 transition-all duration-200"
            />
            <span
              className="absolute right-4 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <label className="flex items-center gap-2 text-gray-600 text-sm">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
              className="accent-emerald-600"
            />
            I accept the{" "}
            <a href="#" className="text-emerald-600 hover:underline ml-1">
              Terms & Conditions
            </a>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full text-lg w-full hover:bg-emerald-700 transition-colors duration-200 disabled:bg-emerald-400"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <NavLink to="/Login" className="text-emerald-600 hover:underline">
            Log in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
