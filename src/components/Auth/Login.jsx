import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = ({ handleLogin, onLoginSuccess }) => {
  const [username, setUsername] = useState(""); // <-- New
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  // Pre-fill form if credentials are saved
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedUsername && savedEmail && savedPassword) {
      setUsername(savedUsername);
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await handleLogin(username, email, password); // now passes username too

      if (rememberMe) {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

      if (onLoginSuccess) onLoginSuccess(username);

      navigate("/"); // Redirect after login
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-emerald-100 to-emerald-300">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-emerald-700 mb-6">
          Welcome Back
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
            className="outline-none border-2 border-emerald-300 focus:border-emerald-600 rounded-full py-3 px-6 text-lg placeholder-gray-400 transition-all duration-200"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="outline-none border-2 border-emerald-300 focus:border-emerald-600 rounded-full py-3 px-6 text-lg placeholder-gray-400 transition-all duration-200"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="outline-none border-2 border-emerald-300 focus:border-emerald-600 rounded-full py-3 px-6 w-full text-lg placeholder-gray-400 transition-all duration-200"
            />
            <span
              className="absolute right-4 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="accent-emerald-600"
              />
              Remember me
            </label>
            <a href="#" className="hover:text-emerald-700">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full text-lg w-full hover:bg-emerald-700 transition-colors duration-200 disabled:bg-emerald-400"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account?{" "}
          <NavLink
            to="/signUp"
            className={({ isActive }) =>
              `text-emerald-600 hover:underline transition-colors duration-200 ${
                isActive ? "font-semibold" : "font-normal"
              }`
            }
          >
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
