import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import StatusIndicator from '../components/StatusIndicator';

const DetailedWeatherPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="aero-container py-8">
        <div className="flex items-center mb-6">
          <Link to="/dashboard" className="mr-4 p-2 text-aero-blue-400 hover:text-aero-blue-300 transition-colors">
            <ArrowLeft />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Detailed Weather Briefing</h1>
        </div>

        <div className="mb-6">
          <StatusIndicator type="info">
            DETAILED WEATHER REPORT • UPDATED AT 07:30 UTC
          </StatusIndicator>
        </div>

        <div className="bg-aero-dark bg-opacity-80 border border-aero-blue-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-aero-blue-100 mb-4 text-center">COMPREHENSIVE WEATHER BRIEFING</h2>
          
          {/* DEPARTURE Section */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-aero-blue-300 border-b border-aero-blue-800 pb-1 mb-3">DEPARTURE: Phoenix Sky Harbor Intl (KPHX)</h3>
            
            <p className="text-aero-blue-100 mb-4">
              Current conditions at Phoenix Sky Harbor International Airport (KPHX) are favorable for departure. 
              The latest METAR (<span className="font-mono text-aero-blue-200">KPHX 221253Z 23010KT 10SM CLR 24/09 A3012</span>) 
              indicates excellent visibility of 10 statute miles with clear skies. Winds are from 230° at 10 knots, 
              temperature is 24°C with dewpoint at 9°C, and altimeter at 30.12 inHg. 
            </p>
            
            <p className="text-aero-blue-100 mb-4">
              The TAF forecast (<span className="font-mono text-aero-blue-200">KPHX 221130Z 2212/2318 24008KT P6SM SKC BECMG 2215/2217 25012KT</span>) 
              predicts continuing favorable conditions with visibility greater than 6 statute miles and clear skies. 
              Winds will shift slightly to 250° at 12 knots between 15:00-17:00 UTC. Recent pilot reports confirm these conditions, 
              with a C172 at 8,000ft reporting clear skies and no turbulence. There are no active SIGMETs affecting the departure area.
            </p>
            
            <div className="flex items-center mt-3">
              <div className="h-3 w-16 bg-gray-700 rounded overflow-hidden mr-2">
                <div className="h-full bg-green-500" style={{width: '95%'}}></div>
              </div>
              <p className="text-green-400 text-sm">CONFIDENCE: HIGH (95%) - Multiple consistent recent reports</p>
            </div>
          </div>
          
          <hr className="border-aero-blue-800 my-6" />
          
          {/* EN ROUTE - SEGMENT 1 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-aero-blue-300 border-b border-aero-blue-800 pb-1 mb-3">EN ROUTE - SEGMENT 1: KPHX → KBXK</h3>
            
            <p className="text-aero-blue-100 mb-4">
              The first segment of the route from Phoenix to Buckeye Municipal Airport shows favorable conditions 
              for flight. Winds aloft at FL120 are from 260° at 15 knots, providing a smooth ride. There is no 
              significant weather between KPHX and KBXK, and visibility is excellent throughout the segment. 
            </p>
            
            <p className="text-aero-blue-100 mb-4">
              No PIREPs have been filed indicating any areas of concern along this segment, and there are no 
              active SIGMETs affecting the route. This segment presents minimal risk with clear flying conditions 
              expected throughout. Aircraft operating in this area have reported no turbulence or adverse weather phenomena.
            </p>
            
            <div className="flex items-center mt-3">
              <div className="h-3 w-16 bg-gray-700 rounded overflow-hidden mr-2">
                <div className="h-full bg-green-500" style={{width: '95%'}}></div>
              </div>
              <p className="text-green-400 text-sm">CONFIDENCE: HIGH (95%) - Consistent data from multiple sources</p>
            </div>
          </div>
          
          <hr className="border-aero-blue-800 my-6" />
          
          {/* EN ROUTE - SEGMENT 2 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-aero-blue-300 border-b border-aero-blue-800 pb-1 mb-3">EN ROUTE - SEGMENT 2: KBXK → KPSP</h3>
            
            <p className="text-aero-blue-100 mb-4">
              The second segment from Buckeye Municipal to Palm Springs International requires <span className="text-yellow-300 font-bold">CAUTION</span>. 
              Winds aloft intensify with FL120 reporting 270° at 22 knots and FL200 showing 275° at 35 knots. There are 
              building cumulus clouds west of KBXK with tops extending to FL180, which may require altitude adjustments 
              for optimal ride quality.
            </p>
            
            <p className="text-aero-blue-100 mb-4">
              A relevant PIREP 30nm west of Blythe (<span className="font-mono text-aero-blue-200">UA /OV KBXK270030 /TM 1237 /FL120 /TP B737 /TB MOD /RM CONTINUOUS MODERATE CHOP</span>) 
              indicates moderate turbulence and continuous moderate chop at FL120. This was reported by a Boeing 737 
              approximately 45 minutes ago. Aircraft operating in this area should be prepared for moderate turbulence, 
              particularly at transitional altitudes.
            </p>
            
            <div className="flex items-center mt-3">
              <div className="h-3 w-16 bg-gray-700 rounded overflow-hidden mr-2">
                <div className="h-full bg-yellow-500" style={{width: '85%'}}></div>
              </div>
              <p className="text-yellow-400 text-sm">CONFIDENCE: MEDIUM (85%) - PIREPs are 45 minutes old</p>
            </div>
          </div>
          
          <hr className="border-aero-blue-800 my-6" />
          
          {/* EN ROUTE - SEGMENT 3 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-red-400 border-b border-red-500 pb-1 mb-3">EN ROUTE - SEGMENT 3: KPSP → KLAX (SIGNIFICANT HAZARD)</h3>
            
            <p className="text-aero-blue-100 mb-4">
              The final segment from Palm Springs to Los Angeles presents <span className="text-red-400 font-bold">SEVERE WEATHER CONDITIONS</span>. 
              Strong upper-level winds are reported at FL200 from 290° at 45 knots. A cold front is approaching from the west 
              with a line of precipitation moving toward KLAX. This weather system is creating unstable atmospheric conditions 
              throughout the segment.
            </p>
            
            <p className="text-aero-blue-100 mb-4">
              A critical PIREP 50nm west of Palm Springs (<span className="font-mono text-red-200">UA /OV KPSP230050 /TM 1305 /FL180 /TP CRJ2 /TB SEV /RM ENCOUNTERED SEVERE TURB DESCENDING THROUGH FL180</span>) 
              reports severe turbulence during descent through FL180. This CRJ-200 report indicates potentially dangerous 
              flying conditions. Additionally, SIGMET Alpha 3 (valid 221200/221600) warns of embedded thunderstorms with tops 
              to FL350, moving east at 15 knots and intensifying. The affected area extends from KLAS to KDAG to KLAX to KLAS.
            </p>
            
            <div className="flex items-center mt-3">
              <div className="h-3 w-16 bg-gray-700 rounded overflow-hidden mr-2">
                <div className="h-full bg-green-500" style={{width: '90%'}}></div>
              </div>
              <p className="text-green-400 text-sm">CONFIDENCE: HIGH (90%) - Multiple recent reports, consistent satellite imagery</p>
            </div>
          </div>
          
          <hr className="border-aero-blue-800 my-6" />
          
          {/* ARRIVAL Section */}
          <div>
            <h3 className="text-xl font-bold text-red-400 border-b border-red-500 pb-1 mb-3">ARRIVAL: Los Angeles Intl (KLAX) (APPROACH MINIMUMS)</h3>
            
            <p className="text-aero-blue-100 mb-4">
              Conditions at Los Angeles International Airport present <span className="text-red-400 font-bold">SIGNIFICANT CHALLENGES</span> for arrival. 
              The current METAR (<span className="font-mono text-aero-blue-200">KLAX 221320Z 27008G20KT 3SM -RA BR BKN009 OVC035 19/17 A2995 RMK TS DSNT W</span>) 
              shows deteriorated conditions with visibility reduced to 3 statute miles in light rain and mist. The ceiling is broken 
              at 900ft and overcast at 3,500ft. Winds are from 270° at 8 knots gusting to 20 knots. Thunderstorms are observed 
              distant west of the field.
            </p>
            
            <p className="text-aero-blue-100 mb-4">
              The TAF forecast predicts worsening conditions, with visibility potentially dropping to 2 statute miles between 15:00-18:00 UTC 
              with rain and mist, broken clouds at 800ft and overcast at 1,500ft. After 18:00Z, expect winds from 270° at 15 knots gusting 
              to 25 knots with rain showers. Most concerning is the PROB40 between 18:00-23:00 UTC indicating a 40% probability of 
              thunderstorms with rain and a ceiling as low as 600ft broken and 1,200ft overcast. These conditions could require holding, 
              diversion, or precise instrument approaches.
            </p>
            
            <div className="flex items-center mt-3">
              <div className="h-3 w-16 bg-gray-700 rounded overflow-hidden mr-2">
                <div className="h-full bg-green-500" style={{width: '95%'}}></div>
              </div>
              <p className="text-green-400 text-sm">CONFIDENCE: HIGH (95%) - Multiple consistent recent reports</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default DetailedWeatherPage;