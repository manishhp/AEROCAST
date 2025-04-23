import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import StatusIndicator from '../components/StatusIndicator';

const CrossCheckReportPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="aero-container py-8">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4 p-2 text-aero-blue-400 hover:text-aero-blue-300 transition-colors">
            <ArrowLeft />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Cross-Check Confidence Report</h1>
        </div>

        <div className="mb-6">
          <StatusIndicator type="success">
            CONFIDENCE LEVEL: HIGH • ALL SYSTEMS VERIFIED
          </StatusIndicator>
        </div>

        <div className="bg-aero-dark bg-opacity-80 border border-aero-blue-800 rounded-lg p-6 mb-8">
          <p className="text-aero-blue-100 font-mono">
            WEATHER DATA CONFIDENCE ASSESSMENT
=============================================

KPHX (DEPARTURE):
- METAR: 95% confidence - Recent report (17 min old), consistent with TAF
- TAF: 90% confidence - Issued within last 2 hours, historically accurate
- PIREPs: 85% confidence - Limited recent reports in vicinity

KBXK (WAYPOINT):
- No METAR available (uncontrolled field)
- Nearby reports: 80% confidence - Interpolated from surrounding stations

KPSP (WAYPOINT):
- METAR: 90% confidence - Recent report (23 min old)
- TAF: 85% confidence - Issued within last 3 hours
- PIREPs: 85% confidence - Two reports within last hour

KLAX (ARRIVAL):
- METAR: 95% confidence - Very recent report (10 min old)
- TAF: 80% confidence - Recent amendments suggest unstable pattern
- SIGMET: 90% confidence - Confirmed by satellite imagery and PIREPs
- PIREPs: 90% confidence - Multiple consistent reports

OVERALL ROUTE:
- Weather pattern confidence: 85% - Cold front movement consistently tracked
- Turbulence forecasts: 80% - Limited sampling along exact route
- Thunderstorm activity: 90% - Confirmed by multiple sources
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default CrossCheckReportPage;