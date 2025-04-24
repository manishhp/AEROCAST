import React from 'react';
import { ArrowLeft, AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import StatusIndicator from '../components/StatusIndicator';

const AlertNotificationsPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="aero-container py-8">
        <div className="flex items-center mb-6">
          <Link to="/dashboard" className="mr-4 p-2 text-aero-blue-400 hover:text-aero-blue-300 transition-colors">
            <ArrowLeft />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Alert Notifications</h1>
        </div>

        <div className="mb-6">
          <StatusIndicator type="warning">
            ACTIVE ALERTS: 3 • PRIORITY LEVEL: MODERATE
          </StatusIndicator>
        </div>

        <div className="bg-aero-dark bg-opacity-80 border border-aero-blue-800 rounded-lg p-6">
          {/* Critical Alert */}
          <div className="mb-8 border-l-4 border-red-500 pl-4">
            <div className="flex items-center mb-2">
              <AlertCircle className="text-red-500 mr-2" />
              <h2 className="text-lg font-bold text-red-400">CRITICAL ALERT - WEATHER HAZARD</h2>
            </div>
            <p className="text-aero-blue-100 font-mono whitespace-pre-line">
              Thunderstorms along approach to KLAX
              SIGMET Alpha 3 reports embedded thunderstorms moving into arrival path
              Consider holding or diversion if conditions persist
            </p>
            <p className="text-red-400 text-sm mt-2 font-mono">ISSUED: 13:20 UTC • VALID UNTIL: 16:00 UTC</p>
          </div>

          {/* Warning Alert */}
          <div className="mb-8 border-l-4 border-yellow-500 pl-4">
            <div className="flex items-center mb-2">
              <AlertTriangle className="text-yellow-500 mr-2" />
              <h2 className="text-lg font-bold text-yellow-400">WARNING ALERT - TURBULENCE</h2>
            </div>
            <p className="text-aero-blue-100 font-mono whitespace-pre-line">
              Severe turbulence reported near KPSP at FL180
              Adjust altitude to avoid FL170-190 if possible
            </p>
            <p className="text-yellow-400 text-sm mt-2 font-mono">ISSUED: 12:45 UTC • VALID UNTIL: 15:45 UTC</p>
          </div>

          {/* Advisory Alert */}
          <div className="border-l-4 border-blue-500 pl-4">
            <div className="flex items-center mb-2">
              <Info className="text-blue-500 mr-2" />
              <h2 className="text-lg font-bold text-blue-400">ADVISORY ALERT - APPROACH MINIMUMS</h2>
            </div>
            <p className="text-aero-blue-100 font-mono whitespace-pre-line">
              KLAX ceiling trending toward ILS minimums
              Be prepared for instrument approach or possible diversion
            </p>
            <p className="text-blue-400 text-sm mt-2 font-mono">ISSUED: 12:30 UTC • VALID UNTIL: 18:00 UTC</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AlertNotificationsPage;