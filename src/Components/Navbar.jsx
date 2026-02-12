import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Settings, ChevronLeft, Menu, X } from 'lucide-react';

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const notificationCount = 3;

  return (
    <nav className="bg-white border-b border-gray-200 flex items-center">
      {/* Left Side - Logo/Brand Section (matches sidebar width) */}
      <div className="w-64 flex items-center justify-between px-4 py-3 border-r border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
            <Settings className="w-5 h-5 text-white" />
          </div>
          <span className="text-base font-semibold text-gray-900">REP Platform</span>
        </div>
        
        {/* Toggle Button - ChevronLeft icon ki jagah */}
        <button 
          onClick={toggleSidebar}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          {isSidebarOpen ? (
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          ) : (
            <Menu className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Right Side - Search, Notifications & User */}
      <div className="flex-1 flex items-center justify-between px-6">
        {/* Search Bar */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources, projects, users..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Notifications & User Profile */}
        <div className="flex items-center gap-4 ml-6">
          {/* Notification Bell */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-6 h-6 text-gray-600" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </button>

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-3 hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors"
            >
              {/* User Avatar */}
              <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">JS</span>
              </div>
              
              {/* User Info */}
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-900">John Smith</div>
                <div className="text-xs text-gray-500">Service Plan Admin</div>
              </div>

              {/* Dropdown Arrow */}
              <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Account Settings
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Permission
                </a>
                <hr className="my-2 border-gray-200" />
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50">
                  Sign Out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;