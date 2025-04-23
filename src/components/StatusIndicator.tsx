import React from 'react';

interface StatusIndicatorProps {
  type: 'info' | 'warning' | 'danger' | 'success';
  children: React.ReactNode;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ type, children }) => {
  const getTypeStyles = () => {
    switch (type) {
      case 'info':
        return 'bg-aero-blue-800 border-aero-blue-400 text-aero-blue-200';
      case 'warning':
        return 'bg-yellow-900/50 border-aero-warning-400 text-aero-warning-300';
      case 'danger':
        return 'bg-red-900/50 border-aero-danger-400 text-aero-danger-300';
      case 'success':
        return 'bg-green-900/50 border-aero-success-400 text-aero-success-300';
      default:
        return 'bg-aero-blue-800 border-aero-blue-400 text-aero-blue-200';
    }
  };

  return (
    <div className={`px-4 py-2 rounded-md border ${getTypeStyles()} text-sm font-mono flex items-center`}>
      <div className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
        type === 'info' ? 'bg-aero-blue-400' : 
        type === 'warning' ? 'bg-aero-warning-400' : 
        type === 'danger' ? 'bg-aero-danger-400' : 
        'bg-aero-success-400'
      }`}></div>
      {children}
    </div>
  );
};

export default StatusIndicator;