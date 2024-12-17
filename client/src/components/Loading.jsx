import React from 'react';

const Spinner = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Spinner Animation */}
      <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
      {/* Message */}
      <p className="mt-4 text-lg text-gray-700">{message}</p>
    </div>
  );
};

export default Spinner;
