'use client';
import React from 'react';

const CryptoDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-gray-100 p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-12 text-center tracking-tight
                       bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600
                       drop-shadow-lg animate-pulse-slow">
          CryptoPulse Dashboard
        </h1>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Bitcoin Neon Card - The Star of the Show */}
          <div className="relative p-8 rounded-2xl overflow-hidden
                          bg-gradient-to-br from-purple-900/40 to-pink-900/40
                          backdrop-blur-sm
                          shadow-xl shadow-purple-500/30
                          transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50
                          border border-purple-700/50
                          group">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 to-pink-800/20 opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold mb-2 text-purple-300 drop-shadow-[0_0_8px_rgba(192,38,211,0.8)]">
                Bitcoin (BTC)
              </h2>
              <p className="text-6xl font-black text-pink-400 drop-shadow-[0_0_12px_rgba(236,72,153,0.9)]">
                $100,000
              </p>
              <p className="text-lg text-gray-300 mt-4 flex items-center">
                <svg className="w-5 h-5 mr-1 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-green-400 font-semibold">+5.2%</span> in 24h
              </p>
            </div>
          </div>

          {/* Ethereum Glassmorphism Card */}
          <div className="p-8 rounded-2xl
                          bg-white/5 backdrop-blur-md
                          border border-white/10
                          shadow-lg shadow-white/5
                          transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Ethereum (ETH)</h2>
            <p className="text-4xl font-semibold text-blue-300">$3,500</p>
            <p className="text-md text-gray-300 mt-4 flex items-center">
              <svg className="w-5 h-5 mr-1 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" transform="rotate(180 10 10)" />
              </svg>
              <span className="text-red-400 font-semibold">-1.8%</span> in 24h
            </p>
          </div>

          {/* Ripple Glassmorphism Card */}
          <div className="p-8 rounded-2xl
                          bg-white/5 backdrop-blur-md
                          border border-white/10
                          shadow-lg shadow-white/5
                          transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Ripple (XRP)</h2>
            <p className="text-4xl font-semibold text-green-300">$0.62</p>
            <p className="text-md text-gray-300 mt-4 flex items-center">
              <svg className="w-5 h-5 mr-1 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-green-400 font-semibold">+0.7%</span> in 24h
            </p>
          </div>

          {/* Solana Glassmorphism Card */}
          <div className="p-8 rounded-2xl
                          bg-white/5 backdrop-blur-md
                          border border-white/10
                          shadow-lg shadow-white/5
                          transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Solana (SOL)</h2>
            <p className="text-4xl font-semibold text-yellow-300">$150</p>
            <p className="text-md text-gray-300 mt-4 flex items-center">
              <svg className="w-5 h-5 mr-1 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-green-400 font-semibold">+3.1%</span> in 24h
            </p>
          </div>

          {/* Cardano Glassmorphism Card */}
          <div className="p-8 rounded-2xl
                          bg-white/5 backdrop-blur-md
                          border border-white/10
                          shadow-lg shadow-white/5
                          transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Cardano (ADA)</h2>
            <p className="text-4xl font-semibold text-indigo-300">$0.45</p>
            <p className="text-md text-gray-300 mt-4 flex items-center">
              <svg className="w-5 h-5 mr-1 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" transform="rotate(180 10 10)" />
              </svg>
              <span className="text-red-400 font-semibold">-0.5%</span> in 24h
            </p>
          </div>

          {/* Dogecoin Glassmorphism Card */}
          <div className="p-8 rounded-2xl
                          bg-white/5 backdrop-blur-md
                          border border-white/10
                          shadow-lg shadow-white/5
                          transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Dogecoin (DOGE)</h2>
            <p className="text-4xl font-semibold text-orange-300">$0.15</p>
            <p className="text-md text-gray-300 mt-4 flex items-center">
              <svg className="w-5 h-5 mr-1 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-green-400 font-semibold">+1.2%</span> in 24h
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CryptoDashboard;