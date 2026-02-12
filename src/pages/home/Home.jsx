import React, { useState } from 'react';
import { X, TrendingUp, Users, Activity, AlertCircle, FileText, DollarSign, Menu, Plus } from 'lucide-react';

const Home = () => {
  const [showStats, setShowStats] = useState(true);
  const [showActions, setShowActions] = useState(true);
  const [showTrends, setShowTrends] = useState(true);
  const [showActivity, setShowActivity] = useState(true);

  // Utilization trend data
  const trendData = [
    { month: 'Aug', value: 75 },
    { month: 'Sep', value: 76 },
    { month: 'Oct', value: 77.5 },
    { month: 'Nov', value: 77 },
    { month: 'Dec', value: 78 },
    { month: 'Jan', value: 78.5 }
  ];

  const StatCard = ({ title, value, change, changeText, color }) => (
    <div className={`${color} p-6 rounded-lg`}>
      <div className="text-sm font-medium text-gray-600 mb-2">{title}</div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-xs text-gray-500">{change} {changeText}</div>
    </div>
  );

  const ActionButton = ({ icon: Icon, label, badge, badgeColor }) => (
 <button className="bg-white border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center min-h-[100px] gap-2">      <Icon className="w-6 h-6 text-gray-600" />
      <span className="text-sm font-medium text-gray-700">{label}</span>
        {badge && (
        <span className={`${badgeColor} text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center`}>
          {badge}
        </span>
      )}
    </button>
  );

  const ActivityItem = ({ status, title, description, time, statusColor }) => (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
      <div className={`w-6 h-6 rounded-full ${statusColor} flex items-center justify-center flex-shrink-0 mt-0.5`}>
        {status === 'success' && <div className="w-2 h-2 bg-white rounded-full"></div>}
        {status === 'warning' && <div className="w-2 h-2 bg-white rounded-full"></div>}
        {status === 'error' && <div className="w-2 h-2 bg-white rounded-full"></div>}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-900">{title}</div>
        <div className="text-xs text-gray-500 mt-0.5">{description}</div>
        <div className="text-xs text-gray-400 mt-1">{time}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className=" px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Home</h1>
            <p className="text-sm text-gray-500 mt-0.5">Customise your workspace with widgets and quick access</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white  shadow-sm border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors">
              <Menu className="w-4 h-4" />
              Main Menu
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
              <Plus className="w-4 h-4" />
              Add Widget
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Quick Statistics Widget */}
        {showStats && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">Quick Statistics</h2>
              </div>
              <button onClick={() => setShowStats(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
              <StatCard 
                title="Total Resources" 
                value="1,247" 
                change="↑ 12%" 
                changeText="from last month"
                color="bg-blue-50"
              />
              <StatCard 
                title="Active Agencies" 
                value="23" 
                change="↑ 3" 
                changeText="new this month"
                color="bg-green-50"
              />
              <StatCard 
                title="Utilization" 
                value="78.5%" 
                change="↓ 5.2%" 
                changeText="decrease"
                color="bg-purple-50"
              />
              <StatCard 
                title="Pending Approvals" 
                value="3" 
                change="" 
                changeText="Require action"
                color="bg-orange-50"
              />
            </div>
          </div>
        )}

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick Actions Widget */}
          {showActions && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
                    <div className="bg-gray-400 rounded-sm"></div>
                    <div className="bg-gray-400 rounded-sm"></div>
                    <div className="bg-gray-400 rounded-sm"></div>
                    <div className="bg-gray-400 rounded-sm"></div>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
                </div>
                <button onClick={() => setShowActions(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
             <div className="grid grid-cols-2 gap-4 p-6">
                <ActionButton 
                  icon={AlertCircle} 
                  label="Review Approvals" 
                  badge="3" 
                  badgeColor="bg-orange-500"
                />
                <ActionButton 
                  icon={Users} 
                  label="Borrow Requests" 
                  badge="12" 
                  badgeColor="bg-purple-500"
                />
                <ActionButton 
                  icon={FileText} 
                  label="View Projects" 
                />
                <ActionButton 
                  icon={DollarSign} 
                  label="Financials" 
                />
              </div>
            </div>
          )}

          {/* Utilization Trends Widget */}
          {showTrends && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-gray-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Utilization Trends</h2>
                </div>
                <button onClick={() => setShowTrends(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <div className="relative h-64">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-gray-500 pr-3">
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                    <span>0</span>
                  </div>
                  
                  {/* Chart area */}
                  <div className="ml-10 h-full relative pb-6">
                    <div className="w-full h-full" style={{ height: 'calc(100% - 1.5rem)' }}>
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Horizontal grid lines */}
                        {[0, 25, 50, 75, 100].map((value, i) => (
                          <line
                            key={i}
                            x1="0"
                            y1={100 - value}
                            x2="100"
                            y2={100 - value}
                            stroke="#d1d5db"
                            strokeWidth="0.3"
                            strokeDasharray="1,1"
                            vectorEffect="non-scaling-stroke"
                          />
                        ))}
                        
                        {/* Vertical grid lines */}
                        {trendData.map((d, i) => (
                          <line
                            key={`v-${i}`}
                            x1={(i / (trendData.length - 1)) * 100}
                            y1="0"
                            x2={(i / (trendData.length - 1)) * 100}
                            y2="100"
                            stroke="#d1d5db"
                            strokeWidth="0.3"
                            strokeDasharray="1,1"
                            vectorEffect="non-scaling-stroke"
                          />
                        ))}
                        
                        {/* Line chart */}
                        <polyline
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="0.5"
                          points={trendData.map((d, i) => 
                            `${(i / (trendData.length - 1)) * 100},${100 - d.value}`
                          ).join(' ')}
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                      
                      {/* Data points - separate layer */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ pointerEvents: 'none' }}>
                        {trendData.map((d, i) => (
                          <g key={i}>
                            <circle
                              cx={(i / (trendData.length - 1)) * 100}
                              cy={100 - d.value}
                              r="1.5"
                              fill="white"
                              vectorEffect="non-scaling-stroke"
                            />
                            <circle
                              cx={(i / (trendData.length - 1)) * 100}
                              cy={100 - d.value}
                              r="1"
                              fill="#3b82f6"
                              vectorEffect="non-scaling-stroke"
                            />
                          </g>
                        ))}
                      </svg>
                    </div>
                    
                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                      {trendData.map((d, i) => (
                        <span key={i}>{d.month}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Recent Activity Widget - Now in a grid to match Quick Actions width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {showActivity && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 ">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 text-gray-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                </div>
                <button onClick={() => setShowActivity(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <ActivityItem
                  status="success"
                  statusColor="bg-green-500"
                  title="Resource Approved"
                  description="Sarah Mitchell approved for Digital Transformation"
                  time="2 minutes ago"
                />
                <ActivityItem
                  status="warning"
                  statusColor="bg-yellow-500"
                  title="Borrow Request Pending"
                  description="New request from Technowave for Data Engineer"
                  time="15 minutes ago"
                />
                <ActivityItem
                  status="error"
                  statusColor="bg-red-500"
                  title="Contract Expiring Soon"
                  description="Digital Wave Inc up expires in 15 days"
                  time="1 hour ago"
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;