import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import SummaryWeatherPage from './pages/SummaryWeatherPage';
import DetailedWeatherPage from './pages/DetailedWeatherPage';
import AlertNotificationsPage from './pages/AlertNotificationsPage';
import CrossCheckReportPage from './pages/CrossCheckReportPage';
import WeatherMapPage from './pages/WeatherMapPage';

function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<HomePage />} />
            <Route path="/summary-weather" element={<SummaryWeatherPage />} />
            <Route path="/detailed-weather" element={<DetailedWeatherPage />} />
            <Route path="/weather-map" element={<WeatherMapPage />} />
            <Route path="/alert-notifications" element={<AlertNotificationsPage />} />
            <Route path="/cross-check-report" element={<CrossCheckReportPage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

export default App;