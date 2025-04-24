import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const LandingPage: React.FC = () => {
  const [routeInput, setRouteInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <PageTransition>
      <div className="aero-container min-h-screen flex flex-col items-center justify-center py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glow-text">AEROCAST</h1>
          <p className="text-aero-blue-200 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Please enter your route information in the following format:<br />
            <span className="font-mono text-sm md:text-base">
              [WAYPOINT1],[ALTITUDE1],[WAYPOINT2],[ALTITUDE2],...,[WAYPOINTn],[VALUE]
            </span>
          </p>
          <p className="text-aero-blue-300 font-mono text-sm">
            Example: KPHX,1500,KBXK,12000,KPSP,20000,KLAX,50
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
          <div className="mb-6">
            <input
              type="text"
              value={routeInput}
              onChange={(e) => setRouteInput(e.target.value)}
              className="w-full px-4 py-3 bg-aero-dark border-2 border-aero-blue-600 rounded-lg 
                       text-white font-mono placeholder-aero-blue-400 focus:outline-none 
                       focus:border-aero-blue-400 focus:ring-2 focus:ring-aero-blue-400/20"
              placeholder="Enter route information..."
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-aero-success-500 text-white font-semibold py-4 rounded-lg
                     transition-all duration-300 hover:bg-aero-success-400 
                     focus:outline-none focus:ring-2 focus:ring-aero-success-400/50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            GO
          </motion.button>
        </form>
      </div>
    </PageTransition>
  );
};

export default LandingPage;