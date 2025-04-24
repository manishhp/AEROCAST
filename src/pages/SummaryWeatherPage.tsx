import React from 'react';
import { ArrowLeft, Plane, AlertTriangle, Flag, MapPin, Shuffle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import StatusIndicator from '../components/StatusIndicator';

const SummaryWeatherPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="aero-container py-8">
        <div className="flex items-center mb-6">
          <Link to="/dashboard" className="mr-4 p-2 text-aero-blue-400 hover:text-aero-blue-300 transition-colors">
            <ArrowLeft />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Summary Weather Briefing</h1>
        </div>

        <div className="mb-6">
          <StatusIndicator type="info">
            SUMMARY BRIEFING REPORT • UPDATED AT 07:30 UTC
          </StatusIndicator>
        </div>

        {/* Flight Overview Card */}
        <div className="bg-aero-dark bg-opacity-80 border border-aero-blue-800 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-aero-blue-100">FLIGHT OVERVIEW</h2>
            <div className="px-3 py-1 bg-yellow-700 bg-opacity-50 border border-yellow-600 rounded-lg text-yellow-300 flex items-center">
              <AlertTriangle size={18} className="mr-2" />
              <span className="font-bold">CAUTION ADVISED</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-aero-blue-100 font-mono">
            <div>
              <p className="mb-2"><span className="text-aero-blue-300">ROUTE:</span> KPHX → KBXK → KPSP → KLAX</p>
              <p><span className="text-aero-blue-300">DURATION:</span> Estimated 2 hrs 15 mins</p>
            </div>
            <div>
              <p className="text-aero-blue-300 mb-1">OVERALL RISK:</p>
              <p className="text-red-400">Severe weather near destination</p>
            </div>
          </div>
        </div>

        {/* Departure Airport */}
        <div className="bg-aero-dark bg-opacity-80 border border-aero-blue-800 rounded-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <Plane className="mr-2 text-aero-blue-300" size={20} />
            <h2 className="text-xl font-bold text-aero-blue-100">DEPARTURE: KPHX</h2>
            <div className="ml-auto px-2 py-1 bg-green-700 bg-opacity-30 border border-green-600 rounded-md text-green-300 text-sm">
              GREEN - FAVORABLE
            </div>
          </div>
          
          <div className="text-aero-blue-100 font-mono space-y-2">
            <p><span className="text-aero-blue-300">CURRENT:</span> VFR, clear skies, visibility 10 miles, winds 10kts from SW</p>
            <p><span className="text-aero-blue-300">FORECAST:</span> No significant changes expected during departure window</p>
          </div>
        </div>

        {/* En Route Segments */}
        <h2 className="text-xl font-bold mb-4">EN ROUTE SEGMENTS</h2>
        
        {/* Segment 1 */}
        <div className="bg-aero-dark bg-opacity-80 border border-aero-blue-800 rounded-lg p-6 mb-4">
          <div className="flex items-center mb-3">
            <Flag className="mr-2 text-aero-blue-300" size={18} />
            <h3 className="text-lg font-bold text-aero-blue-100">SEGMENT 1: KPHX → KBXK</h3>
            <div className="ml-auto px-2 py-1 bg-green-700 bg-opacity-30 border border-green-600 rounded-md text-green-300 text-sm">
              GREEN - FAVORABLE
            </div>
          </div>
          
          <div className="text-aero-blue-100 font-mono space-y-2 pl-6 border-l-2 border-aero-blue-800">
            <p><span className="text-aero-blue-300">DISTANCE/TIME:</span> 132 nm, 45 mins</p>
            <p><span className="text-aero-blue-300">CONDITIONS:</span> VFR throughout, light winds, no precipitation</p>
            <p><span className="text-aero-blue-300">HAZARDS:</span> None reported</p>
          </div>
        </div>
        
        {/* Segment 2 */}
        <div className="bg-aero-dark bg-opacity-80 border border-aero-blue-800 rounded-lg p-6 mb-4">
          <div className="flex items-center mb-3">
            <Flag className="mr-2 text-aero-blue-300" size={18} />
            <h3 className="text-lg font-bold text-aero-blue-100">SEGMENT 2: KBXK → KPSP</h3>
            <div className="ml-auto px-2 py-1 bg-yellow-700 bg-opacity-30 border border-yellow-600 rounded-md text-yellow-300 text-sm">
              YELLOW - CAUTION
            </div>
          </div>
          
          <div className="text-aero-blue-100 font-mono space-y-2 pl-6 border-l-2 border-aero-blue-800">
            <p><span className="text-aero-blue-300">DISTANCE/TIME:</span> 91 nm, 30 mins</p>
            <p><span className="text-aero-blue-300">CONDITIONS:</span> VFR transitioning to MVFR, increasing cloud cover</p>
            <p><span className="text-aero-blue-300">HAZARDS:</span> Moderate turbulence reported at FL120, light chop expected</p>
          </div>
        </div>
        
        {/* Segment 3 */}
        <div className="bg-aero-dark bg-opacity-80 border border-aero-blue-800 rounded-lg p-6 mb-6">
          <div className="flex items-center mb-3">
            <Flag className="mr-2 text-aero-blue-300" size={18} />
            <h3 className="text-lg font-bold text-aero-blue-100">SEGMENT 3: KPSP → KLAX</h3>
            <div className="ml-auto px-2 py-1 bg-red-700 bg-opacity-30 border border-red-600 rounded-md text-red-300 text-sm">
              RED - SIGNIFICANT HAZARD
            </div>
          </div>
          
          <div className="text-aero-blue-100 font-mono space-y-2 pl-6 border-l-2 border-aero-blue-800">
            <p><span className="text-aero-blue-300">DISTANCE/TIME:</span> 107 nm, 35 mins</p>
            <p><span className="text-aero-blue-300">CONDITIONS:</span> MVFR/IFR, ceiling 900-1200ft near KLAX</p>
            <p><span className="text-aero-blue-300">HAZARDS:</span> SIGMET for embedded thunderstorms, severe turbulence reported</p>
            <p><span className="text-aero-blue-300">RECOMMENDATION:</span> Consider delay or reroute</p>
          </div>
        </div>

        {/* Destination */}
        <div className="bg-aero-dark bg-opacity-80 border border-aero-blue-800 rounded-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <MapPin className="mr-2 text-aero-blue-300" size={20} />
            <h2 className="text-xl font-bold text-aero-blue-100">ARRIVAL: KLAX</h2>
            <div className="ml-auto px-2 py-1 bg-red-700 bg-opacity-30 border border-red-600 rounded-md text-red-300 text-sm">
              RED - APPROACH MINIMUMS
            </div>
          </div>
          
          <div className="text-aero-blue-100 font-mono space-y-2">
            <p><span className="text-aero-blue-300">CURRENT:</span> IFR, ceiling 900ft, visibility 3 miles, thunderstorms vicinity</p>
            <p><span className="text-aero-blue-300">FORECAST at ETA:</span> Deteriorating, ceiling 600-800ft, visibility 2mi, rain</p>
          </div>
        </div>

        {/* Alternates */}
        <div className="bg-aero-dark bg-opacity-80 border border-aero-blue-800 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Shuffle className="mr-2 text-aero-blue-300" size={20} />
            <h2 className="text-xl font-bold text-aero-blue-100">ALTERNATE RECOMMENDATIONS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-aero-blue-100 font-mono border border-aero-blue-800 rounded-md p-3">
              <p className="font-bold mb-2">KONT (Ontario Intl)</p>
              <p>45nm E of KLAX</p>
              <p>VFR conditions</p>
            </div>
            <div className="text-aero-blue-100 font-mono border border-aero-blue-800 rounded-md p-3">
              <p className="font-bold mb-2">KSNA (John Wayne)</p>
              <p>40nm SE of KLAX</p>
              <p>MVFR conditions</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SummaryWeatherPage;