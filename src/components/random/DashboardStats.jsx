import { useEffect, useState } from "react";

const DashboardStats = () => {
    const [activeTab, setActiveTab] = useState('overview');
  
    // Animated stats for demo
    const [counter, setCounter] = useState({
      visitors: 0,
      revenue: 0,
      growth: 0
    });
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCounter(prev => ({
          visitors: Math.min(prev.visitors + 123, 45678),
          revenue: Math.min(prev.revenue + 547, 156789),
          growth: Math.min(prev.growth + 0.5, 27.8)
        }));
      }, 50);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Glass Header */}
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 mb-8 shadow-2xl 
                        border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                    Arif
                  </span>
                </h1>
                <p className="text-gray-300">Your dashboard is looking great today</p>
              </div>
              <div className="flex space-x-4">
                <button className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-60 
                                group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative px-6 py-3 bg-black rounded-lg leading-none flex items-center">
                    <span className="text-white">View Reports</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
  
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Animated Stats Cards */}
            <div className="stats-card">
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/10 p-6 
                            border border-white/20 hover:border-white/40 transition-all duration-300
                            transform hover:translate-y-[-4px] hover:shadow-xl">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 
                              rounded-full filter blur-2xl opacity-20"></div>
                <h3 className="text-white/80 text-lg mb-2">Total Visitors</h3>
                <div className="text-4xl font-bold text-white mb-4">
                  {counter.visitors.toLocaleString()}
                </div>
                <div className="flex items-center text-emerald-400">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                  </svg>
                  <span>32% increase</span>
                </div>
              </div>
            </div>
  
            <div className="stats-card">
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/10 p-6 
                            border border-white/20 hover:border-white/40 transition-all duration-300
                            transform hover:translate-y-[-4px] hover:shadow-xl">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 
                              rounded-full filter blur-2xl opacity-20"></div>
                <h3 className="text-white/80 text-lg mb-2">Revenue Generated</h3>
                <div className="text-4xl font-bold text-white mb-4">
                  ${counter.revenue.toLocaleString()}
                </div>
                <div className="flex items-center text-emerald-400">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                  </svg>
                  <span>18.2% increase</span>
                </div>
              </div>
            </div>
  
            <div className="stats-card">
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-lg bg-white/10 p-6 
                            border border-white/20 hover:border-white/40 transition-all duration-300
                            transform hover:translate-y-[-4px] hover:shadow-xl">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 
                              rounded-full filter blur-2xl opacity-20"></div>
                <h3 className="text-white/80 text-lg mb-2">Growth Rate</h3>
                <div className="text-4xl font-bold text-white mb-4">
                  {counter.growth.toFixed(1)}%
                </div>
                <div className="flex items-center text-emerald-400">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                  </svg>
                  <span>5.3% increase</span>
                </div>
              </div>
            </div>
          </div>
  
          {/* Activity Timeline */}
          <div className="mt-8 backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 
                                      transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">New Project Created</h4>
                    <p className="text-gray-400">Project dashboard UI kit was created</p>
                  </div>
                  <span className="text-gray-400">2min ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Add these styles to your global CSS
  const styles = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
  
    .stats-card:hover {
      animation: float 3s ease-in-out infinite;
    }
  `;
  
  export default DashboardStats;