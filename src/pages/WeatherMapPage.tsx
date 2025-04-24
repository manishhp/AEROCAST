import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import StatusIndicator from '../components/StatusIndicator';

const WeatherMapPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="aero-container py-8">
        <div className="flex items-center mb-6">
          <Link to="/dashboard" className="mr-4 p-2 text-aero-blue-400 hover:text-aero-blue-300 transition-colors">
            <ArrowLeft />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Weather Map</h1>
        </div>

        <div className="mb-6">
          <StatusIndicator type="info">
            ROUTE WEATHER CONDITIONS • UPDATED AT 07:30 UTC
          </StatusIndicator>
        </div>
        
        {/* Weather Map Component */}
        <div className="bg-aero-dark bg-opacity-80 border border-aero-blue-800 rounded-lg p-4 mb-8">
          {/* Replace the CSS simulation with an image */}
          <div className="flex justify-center">
            <img 
              src="/assets/weather-map.png" 
              alt="Flight route weather conditions map showing VFR, Significant Weather, and Severe Weather zones" 
              className="max-w-full rounded-lg border border-gray-300"
            />
          </div>
        </div>

        <div className="bg-aero-dark bg-opacity-80 border border-aero-blue-800 rounded-lg p-6">
          <h2 className="text-xl text-aero-blue-100 font-bold mb-4">Weather Zones Summary</h2>
          <ul className="text-aero-blue-100 font-mono space-y-3">
            <li><span className="text-green-300 font-bold">KPHX → KBXK</span>: VFR conditions. Clear skies, good visibility, no significant weather activity.</li>
            <li><span className="text-yellow-300 font-bold">KBXK → KPSP</span>: Moderate conditions. Building cumulus clouds, potential turbulence. Exercise caution.</li>
            <li><span className="text-red-400 font-bold">KPSP → KLAX</span>: Severe conditions. Cold front approaching, embedded thunderstorms, severe turbulence reported.</li>
          </ul>
        </div>
      </div>
    </PageTransition>
  );
};

export default WeatherMapPage;