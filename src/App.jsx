import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowWorks from './components/HowWorks';
import Footer from './components/Footer';
import Features from './components/Features';
import Wellness from './components/features/Wellness';
import Relationships from './components/features/Relationships';
import Meditation from './components/features/Meditation';
import Journal from './components/extraFeature/Journal';
import Mood from './components/extraFeature/Mood';
import Error from './components/Error';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  // Check localStorage for saved login on mount
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedUsername && savedEmail && savedPassword) {
      setIsLoggedIn(true);
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async (username, email, password) => {
    // Replace this with real authentication
    if (username && email && password) {
      setIsLoggedIn(true);
      setUsername(username);
      return Promise.resolve();
    } else {
      return Promise.reject(new Error("Invalid credentials"));
    }
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUsername("");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar isLoggedIn={isLoggedIn} userEmail={username} onSignOut={handleSignOut} />
          <HeroSection />
          <FeaturesSection />
          <HowWorks />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: <Login handleLogin={handleLogin} onLoginSuccess={(uname) => setUsername(uname)} />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/features",
      element: (
        <>
          <Navbar isLoggedIn={isLoggedIn} userEmail={username} onSignOut={handleSignOut} />
          <Features />
          <Footer />
        </>
      ),
    },
    {
      path: "/wellness",
      element: (
        <>
          <Navbar isLoggedIn={isLoggedIn} userEmail={username} onSignOut={handleSignOut} />
          <Wellness />
        </>
      ),
    },
    {
      path: "/relationships",
      element: (
        <>
          <Navbar isLoggedIn={isLoggedIn} userEmail={username} onSignOut={handleSignOut} />
          <Relationships />
        </>
      ),
    },
    {
      path: "/meditation",
      element: (
        <>
          <Navbar isLoggedIn={isLoggedIn} userEmail={username} onSignOut={handleSignOut} />
          <Meditation />
        </>
      ),
    },
    {
      path: "/journal",
      element: (
        <>
          <Navbar isLoggedIn={isLoggedIn} userEmail={username} onSignOut={handleSignOut} />
          <Journal />
        </>
      ),
    },
    {
      path: "/mood",
      element: (
        <>
          <Navbar isLoggedIn={isLoggedIn} userEmail={username} onSignOut={handleSignOut} />
          <Mood />
        </>
      ),
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
