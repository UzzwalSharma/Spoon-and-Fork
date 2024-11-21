import { useState, useEffect } from 'react';  
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react'; 
import { Toaster, toast } from 'react-hot-toast'; 
import Landingpage from './Landingpage'; 
import Dashboard from './Dashboard'; 
import DidYouKnowPopup from './DidYouKnowPopup';
import NearbyRestaurants from './NearbyRestaurants';
import FloatingChatbotIcon from './FloatingChatbotIcon';
import Aboutus from './Aboutus';
// import ContactUs from './Contactus';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { motion } from 'framer-motion';

// Loader Component with heart animation and custom message
const Loader = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 space-y-4">
    {/* Food-related Icon with Framer Motion Bouncing Animation */}
    <motion.img 
      src="public/portrait-person-holding-fast-food-burger.png"  // Replace with your food-related image or icon
      alt="Loading Food"
      className="w-32 h-32"
      animate={{ y: ["0%", "-10%", "0%"] }}  // Food icon bounces up and down
      transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}  // Bouncing animation
    />
    
    {/* New Thematic Loader Text with Animation */}
    <motion.div 
      className="text-4xl font-bold text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Savoring the Flavor... 🍔🍕🌮
    </motion.div>

    {/* Heart-themed Text with Fade-In Effect */}
    <motion.div 
      className="text-xl font-semibold text-gray-600 mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      Made with ❤️ by Ujjwal and Diyanshi
    </motion.div>

    {/* Loader Animation Circle with Pulse Effect */}
    <motion.div
      className="w-12 h-12 border-t-4 border-orange-500 border-solid rounded-full mx-auto mt-6"
      initial={{ scale: 0 }}
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
    ></motion.div>
  </div>
);


// Heartbeat animation for the heart emoji
const styles = {
  heart: {
    animation: 'pulse 1s infinite',
  },
};

function ProtectedRoute({ children }) {
  const { isSignedIn } = useAuth();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!isSignedIn) {
      toast.error('You must be signed in to access this page!');
      setTimeout(() => setRedirect(true), 2000);
    } else {
      toast.success('Successfully signed in!');
    }
  }, [isSignedIn]);

  if (redirect) return <Navigate to="/sign-in" replace />;
  return isSignedIn ? children : null;
}

function App() {
  const { isSignedIn } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000);  // Simulate a 3-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <FloatingChatbotIcon />
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="story" element={<DidYouKnowPopup />} />
            <Route path="about" element={<Aboutus />} />
            <Route path="contact" element={<ContactUs />} />

            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />

            <Route path="/sign-in" element={<SignIn path="/sign-in" routing="path" />} />
            <Route path="/sign-up" element={<SignUp path="/sign-up" routing="path" />} />
            <Route path="/" element={isSignedIn ? <Navigate to="/dashboard" replace /> : <Landingpage />} />
            <Route path="/nearby-restaurants" element={<NearbyRestaurants />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
