import React from 'react';
import { Link } from 'react-router-dom';
import { CloudSun, CloudLightning, AlertTriangle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import StatusIndicator from '../components/StatusIndicator';

const buttonVariants = {
  hover: {
    scale: 1.02,
    boxShadow: '0 0 15px rgba(0, 127, 255, 0.5)',
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.98,
  },
};

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="aero-container py-8 md:py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 glow-text">AEROCAST</h1>
          <p className="text-aero-blue-200 max-w-2xl mx-auto">
            Advanced aviation weather intelligence system for enhanced situational awareness and flight safety
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <StatusIndicator type="info">
            SYSTEM OPERATIONAL • LAST UPDATE: 10 SECONDS AGO
          </StatusIndicator>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div 
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <Link 
              to="/summary-weather" 
              className="aero-button h-full flex flex-col items-center text-center"
            >
              <CloudSun className="w-12 h-12 mb-4 text-aero-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Summary Weather Briefing</h3>
              <p className="text-sm text-aero-blue-200">Quick overview of current weather conditions</p>
            </Link>
          </motion.div>

          <motion.div 
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <Link 
              to="/detailed-weather" 
              className="aero-button h-full flex flex-col items-center text-center"
            >
              <CloudLightning className="w-12 h-12 mb-4 text-aero-blue-300" />
              <h3 className="text-xl font-semibold mb-2">Detailed Weather Briefing</h3>
              <p className="text-sm text-aero-blue-200">Comprehensive weather analysis and forecasts</p>
            </Link>
          </motion.div>

          <motion.div 
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <Link 
              to="/alert-notifications" 
              className="aero-button h-full flex flex-col items-center text-center"
            >
              <AlertTriangle className="w-12 h-12 mb-4 text-aero-warning-400" />
              <h3 className="text-xl font-semibold mb-2">Alert Notifications</h3>
              <p className="text-sm text-aero-blue-200">Critical weather and flight safety alerts</p>
            </Link>
          </motion.div>

          <motion.div 
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            <Link 
              to="/cross-check-report" 
              className="aero-button h-full flex flex-col items-center text-center"
            >
              <CheckCircle className="w-12 h-12 mb-4 text-aero-success-400" />
              <h3 className="text-xl font-semibold mb-2">Cross-Check Confidence Report</h3>
              <p className="text-sm text-aero-blue-200">Verification and confidence assessment</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default HomePage;