import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const [dateTime, setDateTime] = useState(getCurrentDateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(getCurrentDateTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-aero-dark shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="aero-container">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-aero-blue-400" />
            <div>
              <span className="text-xl font-bold tracking-wider text-white">AERO<span className="text-aero-blue-400">CAST</span></span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <div className="text-sm font-mono text-aero-blue-300 animate-pulse-slow">
              {dateTime} UTC
            </div>
            
            {location.pathname !== '/' && (
              <Link 
                to="/dashboard" 
                className="px-4 py-2 text-sm font-semibold border border-aero-blue-500 rounded-md hover:bg-aero-blue-900 transition-colors"
              >
                Dashboard
              </Link>
            )}
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-aero-blue-400"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-aero-dark border-t border-aero-blue-800">
          <div className="py-3 px-4 space-y-3">
            <div className="text-sm font-mono text-aero-blue-300">
              {dateTime} UTC
            </div>
            
            {location.pathname !== '/' && (
              <Link 
                to="/" 
                className="block px-4 py-2 text-sm font-semibold border border-aero-blue-500 rounded-md hover:bg-aero-blue-900 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;