import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import StatusIndicator from '../components/StatusIndicator';

const AlertNotificationsPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="aero-container py-8">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4 p-2 text-aero-blue-400 hover:text-aero-blue-300 transition-colors">
            <ArrowLeft />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Alert Notifications</h1>
        </div>

        <div className="mb-6">
          <StatusIndicator type="warning">
            ACTIVE ALERTS: 2 • PRIORITY LEVEL: MODERATE
          </StatusIndicator>
        </div>

        <div className="bg-aero-dark bg-opacity-80 border border-aero-blue-800 rounded-lg p-6 mb-8">
          <p className="text-aero-blue-100 font-mono">
            !!! CRITICAL ALERT - WEATHER HAZARD !!!
Thunderstorms along approach to KLAX
SIGMET Alpha 3 reports embedded thunderstorms moving into arrival path
Consider holding or diversion if conditions persist

!!! WARNING ALERT - TURBULENCE !!!
Severe turbulence reported near KPSP at FL180
Adjust altitude to avoid FL170-190 if possible

!!! ADVISORY ALERT - APPROACH MINIMUMS !!!
KLAX ceiling trending toward ILS minimums
Be prepared for instrument approach or possible diversion
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default AlertNotificationsPage;