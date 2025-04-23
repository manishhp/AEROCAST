import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { Plane } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-aero-darker">
      <Header />
      
      <main className="flex-grow radar-bg">
        {children}
      </main>
      
      <footer className="py-6 bg-aero-dark border-t border-aero-blue-700">
        <div className="aero-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Plane className="h-5 w-5 mr-2 text-aero-blue-400" />
              <span className="text-sm text-aero-blue-200">AEROCAST <span className="text-aero-blue-400">SYSTEMS</span></span>
            </div>
            <div className="text-xs text-aero-blue-300 font-mono">
              UPTIME: 99.97% | STATUS: OPERATIONAL | VER. 1.0.4
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;