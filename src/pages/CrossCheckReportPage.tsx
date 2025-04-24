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
          <Link to="/dashboard" className="mr-4 p-2 text-aero-blue-400 hover:text-aero-blue-300 transition-colors">
            <ArrowLeft />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Cross-Check Confidence Report</h1>
        </div>

        <div className="mb-6">
          <StatusIndicator type="success">
            CONFIDENCE LEVEL: HIGH • ALL SYSTEMS VERIFIED
          </StatusIndicator>
        </div>

        <div className="bg-aero-dark bg-opacity-80 border border-aero-blue-800 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 border-b border-aero-blue-800 pb-2">
            WEATHER DATA CONFIDENCE ASSESSMENT
          </h2>
          
          <p className="mb-4 text-aero-blue-200">
            Cross-verification analysis for flight path KPHX → KBXK → KPSP → KLAX shows high 
            confidence across all data sources. Weather patterns are consistent with forecasts 
            and verified by recent observations.
          </p>
          
          <h3 className="text-lg font-bold mt-6 mb-2">Key Findings:</h3>
          
          <ul className="space-y-2 text-aero-blue-100 list-disc pl-6 mb-6">
            <li>Departure (KPHX): Current METAR and TAF align with high confidence</li>
            <li>En route (KBXK): Interpolated data from nearby stations confirms conditions</li>
            <li>En route (KPSP): Recent METARs and PIREPs verify forecast accuracy</li>
            <li>Arrival (KLAX): Multiple reports confirm deteriorating conditions</li>
          </ul>
          
          <h3 className="text-lg font-bold mt-6 mb-2">System Status:</h3>
          
          <div className="font-mono text-aero-blue-200">
            <p>• METAR Confidence: HIGH</p>
            <p>• TAF Verification: CONFIRMED</p>
            <p>• PIREP Integration: COMPLETE</p>
            <p>• SIGMET Validation: VERIFIED</p>
            <p>• Data Cross-Check: SUCCESSFUL</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CrossCheckReportPage;