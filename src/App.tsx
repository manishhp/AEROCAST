import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SummaryWeatherPage from './pages/SummaryWeatherPage';
import DetailedWeatherPage from './pages/DetailedWeatherPage';
import AlertNotificationsPage from './pages/AlertNotificationsPage';
import CrossCheckReportPage from './pages/CrossCheckReportPage';

function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/summary-weather" element={<SummaryWeatherPage />} />
            <Route path="/detailed-weather" element={<DetailedWeatherPage />} />
            <Route path="/alert-notifications" element={<AlertNotificationsPage />} />
            <Route path="/cross-check-report" element={<CrossCheckReportPage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

export default App;