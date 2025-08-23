import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowWorks from "./components/HowWorks";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Wellness from "./components/features/Wellness";
import Relationships from "./components/features/Relationships";
import Meditation from "./components/features/Meditation";
import Journal from "./components/extraFeature/Journal";
import Mood from "./components/extraFeature/Mood";
import Error from "./components/Error";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Mental_health from "./components/features/Mental_health";
import About from "./components/About";
import Contact from "./Contact";

import BreathingGame from "./games/BreathingGame";
import WordAssociationGame from "./games/WordAssociationGame";
import ColorMatchGame from "./games/ColorMatchGame";

function LayoutWithFooter({ children, isLoggedIn, username, handleSignOut }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        isLoggedIn={isLoggedIn}
        userEmail={username}
        onSignOut={handleSignOut}
      />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

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
        <LayoutWithFooter
          isLoggedIn={isLoggedIn}
          username={username}
          handleSignOut={handleSignOut}
        >
          <HeroSection />
          <FeaturesSection />
          <HowWorks />
        </LayoutWithFooter>
      ),
    },
    {
      path: "/login",
      element: (
        <Login
          handleLogin={handleLogin}
          onLoginSuccess={(uname) => setUsername(uname)}
        />
      ),
    },
    { path: "/signUp", element: <SignUp /> },

    {
      path: "/features",
      element: (
        <LayoutWithFooter
          isLoggedIn={isLoggedIn}
          username={username}
          handleSignOut={handleSignOut}
        >
          <Features />
        </LayoutWithFooter>
      ),
    },
    {
      path: "/wellness",
      element: (
        <LayoutWithFooter
          isLoggedIn={isLoggedIn}
          username={username}
          handleSignOut={handleSignOut}
        >
          <Outlet />
        </LayoutWithFooter>
      ),
      children: [
        { index: true, element: <Wellness /> },
        { path: "breathing", element: <BreathingGame /> },
        { path: "color-match", element: <ColorMatchGame /> },
        { path: "word-association", element: <WordAssociationGame /> },
      ],
    },
    {
      path: "/mental-health",
      element: (
        <LayoutWithFooter
          isLoggedIn={isLoggedIn}
          username={username}
          handleSignOut={handleSignOut}
        >
          <Mental_health />
        </LayoutWithFooter>
      ),
    },
    {
      path: "/relationships",
      element: (
        <LayoutWithFooter
          isLoggedIn={isLoggedIn}
          username={username}
          handleSignOut={handleSignOut}
        >
          <Relationships />
        </LayoutWithFooter>
      ),
    },
    {
      path: "/about",
      element: (
        <LayoutWithFooter
          isLoggedIn={isLoggedIn}
          username={username}
          handleSignOut={handleSignOut}
        >
          <About />
        </LayoutWithFooter>
      ),
    },
    {
      path: "/contact",
      element: (
        <LayoutWithFooter
          isLoggedIn={isLoggedIn}
          username={username}
          handleSignOut={handleSignOut}
        >
          <Contact />
        </LayoutWithFooter>
      ),
    },
    {
      path: "/meditation",
      element: (
        <LayoutWithFooter
          isLoggedIn={isLoggedIn}
          username={username}
          handleSignOut={handleSignOut}
        >
          <Meditation />
        </LayoutWithFooter>
      ),
    },
    {
      path: "/journal",
      element: (
        <LayoutWithFooter
          isLoggedIn={isLoggedIn}
          username={username}
          handleSignOut={handleSignOut}
        >
          <Journal />
        </LayoutWithFooter>
      ),
    },
    {
      path: "/mood",
      element: (
        <LayoutWithFooter
          isLoggedIn={isLoggedIn}
          username={username}
          handleSignOut={handleSignOut}
        >
          <Mood />
        </LayoutWithFooter>
      ),
    },
    { path: "*", element: <Error /> },
  ]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
