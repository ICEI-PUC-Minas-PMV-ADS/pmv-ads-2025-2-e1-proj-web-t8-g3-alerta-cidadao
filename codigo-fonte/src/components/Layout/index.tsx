import Footer from 'components/Footer';
import Header from 'components/Header';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
