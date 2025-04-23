import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import StatusIndicator from '../components/StatusIndicator';

const SummaryWeatherPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="aero-container py-8">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4 p-2 text-aero-blue-400 hover:text-aero-blue-300 transition-colors">
            <ArrowLeft />
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold">Summary Weather Briefing</h1>
        </div>

        <div className="mb-6">
          <StatusIndicator type="info">
            SUMMARY BRIEFING REPORT • UPDATED AT 07:30 UTC
          </StatusIndicator>
        </div>

        <div className="bg-aero-dark bg-opacity-80 border border-aero-blue-800 rounded-lg p-6 mb-8">
          <p className="text-aero-blue-100 font-mono">
            FLIGHT WEATHER SUMMARY
=============================================
FLIGHT PLAN: KPHX → KBXK → KPSP → KLAX
FLIGHT DURATION: Estimated 2 hrs 15 mins
OVERALL RISK ASSESSMENT: CAUTION ADVISED - severe weather near destination

DEPARTURE AIRPORT (KPHX):
- Current conditions: VFR, clear skies, visibility 10 miles, winds 10kts from SW
- Forecast: No significant changes expected during departure window
- Risk level: GREEN - favorable conditions for departure

EN ROUTE SEGMENTS:
1. KPHX → KBXK (132 nm, 45 mins)
   - Conditions: VFR throughout, light winds, no precipitation
   - Hazards: None reported
   - Risk level: GREEN - favorable conditions for cruise

2. KBXK → KPSP (91 nm, 30 mins)
   - Conditions: VFR transitioning to MVFR, increasing cloud cover
   - Hazards: Moderate turbulence reported at FL120, light chop expected
   - Risk level: YELLOW - exercise caution, consider altitude changes

3. KPSP → KLAX (107 nm, 35 mins)
   - Conditions: MVFR/IFR, ceiling 900-1200ft near KLAX
   - Hazards: SIGMET for embedded thunderstorms, severe turbulence reported
   - Risk level: RED - significant weather hazards, consider delay or reroute

ARRIVAL AIRPORT (KLAX):
- Current conditions: IFR, ceiling 900ft, visibility 3 miles, thunderstorms vicinity
- Forecast at ETA: Deteriorating, ceiling 600-800ft, visibility 2mi, rain
- Risk level: RED - conditions near approach minimums with thunderstorm activity

ALTERNATE RECOMMENDATIONS:
1. KONT (Ontario Intl): 45nm E of KLAX, VFR conditions
2. KSNA (John Wayne): 40nm SE of KLAX, MVFR conditions
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default SummaryWeatherPage;