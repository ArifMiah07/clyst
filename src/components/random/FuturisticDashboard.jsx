import { useEffect, useState } from "react";

const FuturisticDashboard = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => setIsLoading(false), 1500);
    }, []);
  
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
  
    const metrics = [
      {
        id: 1,
        title: "System Status",
        value: "98.3%",
        trend: "up",
        color: "from-emerald-400 to-teal-500",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      },
      {
        id: 2,
        title: "Active Users",
        value: "2,847",
        trend: "up",
        color: "from-blue-400 to-indigo-500",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )
      },
      {
        id: 3,
        title: "Processing Power",
        value: "89.2%",
        trend: "down",
        color: "from-purple-400 to-pink-500",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      }
    ];
  
    return (
      <div className="min-h-screen bg-black text-white" onMouseMove={handleMouseMove}>
        {/* Animated Background */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
                      from-violet-900/20 via-black to-black"></div>
  
        {/* Loading Screen */}
        {isLoading && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-violet-300/20 rounded-full"></div>
            </div>
          </div>
        )}
  
        <div className="relative z-10 container mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 
                             animate-pulse"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full 
                             border-2 border-black"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  Welcome back, 
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">
                    {" "}ArifMiah07
                  </span>
                </h1>
                <p className="text-gray-400">System Overview • Last updated 2 mins ago</p>
              </div>
            </div>
          </div>
  
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className={`
                  relative group cursor-pointer
                  transform transition-all duration-300 ease-out
                  hover:scale-105 hover:-translate-y-2
                `}
                onMouseEnter={() => setActiveCard(metric.id)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  transform: activeCard === metric.id
                    ? `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
                    : 'none'
                }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-xl p-6 
                             border border-gray-800 hover:border-violet-500/50 transition-colors duration-300">
                  {/* Glowing Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 
                                group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-lg bg-gray-800/50">
                        {metric.icon}
                      </div>
                      <div className={`flex items-center ${
                        metric.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'
                      }`}>
                        {metric.trend === 'up' ? '↑' : '↓'} 
                        <span className="ml-1">2.4%</span>
                      </div>
                    </div>
  
                    <h3 className="text-lg font-medium text-gray-400 mb-1">{metric.title}</h3>
                    <div className="text-3xl font-bold tracking-tight">{metric.value}</div>
  
                    {/* Progress Bar */}
                    <div className="mt-4 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${metric.color} 
                                   transform origin-left scale-x-[0.8] animate-pulse`}></div>
                    </div>
                  </div>
  
                  {/* Hover Effects */}
                  <div className="absolute inset-0 border-2 border-transparent rounded-2xl 
                               group-hover:border-violet-500/20 transition-all duration-300"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-[-1px] bg-gradient-to-r from-transparent via-violet-500/10 to-transparent 
                                 rounded-2xl blur-sm"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Activity Feed */}
          <div className="mt-12">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-6">Real-time Activity</h2>
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/50 
                                       hover:bg-gray-800/70 transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">System Update Completed</p>
                        <span className="text-sm text-gray-400">Just now</span>
                      </div>
                      <p className="text-sm text-gray-400">Performance optimization successful</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FuturisticDashboard;