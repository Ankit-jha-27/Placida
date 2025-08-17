import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LandingPage from './components/LandingPage'
import Mental_health from './components/Mental_health';
import Wellness from './components/Wellness';
import Relationships from './components/Relationships';
import Meditation from './components/Meditation';
import Error from './components/Error';
import Features from './components/Features'
import Footer from './components/Footer'
import FeaturesSection from './components/FeaturesSection'
import Journal from './components/Journal'
import Mood from './components/Mood'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<div>
                  <LandingPage />
              </div>
    },
    {
      path:"/home",
      element:<div>
                  <Navbar />
                  <HeroSection />
                  <FeaturesSection />
                  <Footer />
              </div>
    },
    {
      path:"/features",
      element:<div>
                  <Navbar />
                  <Features />
                  <Footer />
              </div>
    },
    {
      path:"/wellness",
      element:<div>
              <Navbar />
              <Wellness />
              </div>,       
    },

    {
      path:"/relationships",
      element:<div>
              <Navbar />
              <Relationships />
              </div>,       
    },

    {
      path:"/meditation",
      element:<div>
              <Navbar />
              <Meditation />
              </div>,       
    },
    {
      path:"/journal",
      element:<div>
              <Navbar />
              <Journal />
              </div>,       
    },
    {
      path:"/mood",
      element:<div>
              <Navbar />
              <Mood />
              </div>,       
    },
    {
      path:'*',
      element: <Error />
    }
  ]
);

function App() {
  
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <RouterProvider router={router} />
    </>
  )
}

export default App
