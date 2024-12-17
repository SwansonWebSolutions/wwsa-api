import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with dark blue background */}
      <Header />

      {/* Main Content Grid */}
      <main className="bg-white text-black">
        {children}
      </main>

      {/* Footer with dark blue background */}
      <Footer  />
    </div>
  );
}

export default Layout;

