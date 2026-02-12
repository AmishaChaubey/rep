import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Sidebar from "./Components/Sidebar";
import Projects from './pages/operations/Projects';
import Capacity from './pages/operations/Capacity';

// Import all your pages

import AgencyNetwork from './pages/agency-network/AgencyNetwork';
import TieUps from './pages/agency-network/TieUps';
import ResourcePools from './pages/resources/ResourcePools';
import BorrowRequest from './pages/operations/BorrowRequest';
import FinancialDashboard from './pages/financials/FinancialDashboard'
import Home from './pages/home/Home';



function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar with toggle function */}
      <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      
      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - conditionally rendered */}
        {isSidebarOpen && <Sidebar />}
        
        {/* Main Content with Routes */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/dashboard" element={<Dashb/>} /> */}
            <Route path="/agency-network" element={<AgencyNetwork/>} />
            <Route path="/tie-ups-contracts" element={<TieUps />} />
            <Route path="/resources-pool" element={<ResourcePools/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/capacity-utilization" element={<Capacity/>} />
            <Route path="/borrow-requests" element={<BorrowRequest />} />
            <Route path="/financial-dashboard" element={<FinancialDashboard />} />
            {/* <Route path="/hidden-capacity-radar" element={<HiddenCapacityRadar />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/audit-logs" element={<AuditLogs />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/job-roles" element={<JobRoles />} />
            <Route path="/rate-cards" element={<RateCards />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;