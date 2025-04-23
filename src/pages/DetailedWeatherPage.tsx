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
          <Link to="/" className="mr-4 p-2 text-aero-blue-400 hover:text-aero-blue-300 transition-colors">
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
          <p className="text-aero-blue-100 font-mono">
            COMPREHENSIVE WEATHER BRIEFING
=============================================

DEPARTURE: Phoenix Sky Harbor Intl (KPHX)
-----------------------------------------
METAR: KPHX 221253Z 23010KT 10SM CLR 24/09 A3012
Decoded: Observed at 12:53 UTC on the 22nd, winds from 230° at 10 knots, visibility 10 statute 
miles, clear skies, temperature 24°C, dewpoint 9°C, altimeter 30.12 inHg

TAF: KPHX 221130Z 2212/2318 24008KT P6SM SKC BECMG 2215/2217 25012KT
Decoded: Forecast issued at 11:30 UTC on the 22nd, valid from 12:00 UTC on the 22nd to 18:00 UTC 
on the 23rd. Winds from 240° at 8 knots, visibility greater than 6 statute miles, sky clear. 
Becoming between 15:00-17:00 UTC, winds from 250° at 12 knots.

RELEVANT PIREPs:
UA /OV KPHX090025 /TM 1225 /FL080 /TP C172 /SK CLR /TB NEG
Decoded: Pilot report 25nm east of Phoenix at 12:25 UTC, altitude 8,000ft, aircraft type C172, 
skies clear, no turbulence reported.

ACTIVE SIGMETs: None affecting departure

CONFIDENCE: HIGH (95%) - Multiple consistent recent reports

EN ROUTE - SEGMENT 1: KPHX → KBXK
---------------------------------
Winds Aloft: FL120: 260° at 15 knots
Weather: No significant weather between KPHX and KBXK
PIREPs: No significant reports along route
SIGMETs: None affecting this segment

CONFIDENCE: HIGH (95%) - Consistent data from multiple sources

EN ROUTE - SEGMENT 2: KBXK → KPSP
---------------------------------
Winds Aloft: FL120: 270° at 22 knots, FL200: 275° at 35 knots
Weather: Building cumulus west of KBXK, tops to FL180
PIREPs:
UA /OV KBXK270030 /TM 1237 /FL120 /TP B737 /TB MOD /RM CONTINUOUS MODERATE CHOP
Decoded: Pilot report 30nm west of Blythe at 12:37 UTC, altitude 12,000ft, Boeing 737 reporting 
moderate turbulence, continuous moderate chop.

CONFIDENCE: MEDIUM (85%) - PIREPs are 45 minutes old

EN ROUTE - SEGMENT 3: KPSP → KLAX
---------------------------------
Winds Aloft: FL200: 290° at 45 knots
Weather: Cold front approaching from west, line of precipitation approaching KLAX
PIREPs:
UA /OV KPSP230050 /TM 1305 /FL180 /TP CRJ2 /TB SEV /RM ENCOUNTERED SEVERE TURB DESCENDING THROUGH FL180
Decoded: Pilot report 50nm west of Palm Springs at 13:05 UTC, altitude 18,000ft, CRJ-200 reporting 
severe turbulence while descending through FL180.

SIGMETs:
SIGMET Alpha 3 valid 221200/221600
FROM KLAS TO KDAG TO KLAX TO KLAS
EMBD TS FCST TOP FL350. MOV E 15KT. INTSF.
Decoded: Embedded thunderstorms forecast with tops to 35,000ft, moving east at 15 knots, intensifying.

CONFIDENCE: HIGH (90%) - Multiple recent reports, consistent satellite imagery

ARRIVAL: Los Angeles Intl (KLAX)
--------------------------------
METAR: KLAX 221320Z 27008G20KT 3SM -RA BR BKN009 OVC035 19/17 A2995 RMK TS DSNT W
Decoded: Observed at 13:20 UTC on the 22nd, winds from 270° at 8 knots gusting to 20 knots, 
visibility 3 statute miles with light rain and mist, broken clouds at 900ft, overcast at 3,500ft, 
temperature 19°C, dewpoint 17°C, altimeter 29.95 inHg, remarks: thunderstorms distant west.

TAF: KLAX 221230Z 2212/2312 26012KT 4SM -RA BR BKN010 OVC040
     TEMPO 2215/2218 2SM RA BR BKN008 OVC015
     FM221800 27015G25KT 3SM SHRA BR BKN008 OVC015 PROB40 2218/2223 2SM TSRA BR BKN006 OVC012
Decoded: Forecast issued at 12:30 UTC on the 22nd, valid from 12:00 UTC on the 22nd to 12:00 UTC 
on the 23rd. Winds from 260° at 12 knots, visibility 4 statute miles with light rain and mist, 
broken clouds at 1,000ft, overcast at 4,000ft. Temporarily between 15:00-18:00 UTC, visibility 
2 statute miles with rain and mist, broken clouds at 800ft, overcast at 1,500ft. From 18:00 UTC, 
winds from 270° at 15 knots gusting to 25 knots, visibility 3 statute miles with rain showers 
and mist, broken clouds at 800ft, overcast at 1,500ft. 40% probability between 18:00-23:00 UTC 
of visibility 2 statute miles with thunderstorms, rain, and mist, broken clouds at 600ft, 
overcast at 1,200ft.

CONFIDENCE: HIGH (95%) - Multiple consistent recent reports
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default DetailedWeatherPage;