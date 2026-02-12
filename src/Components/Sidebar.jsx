import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home,
  LayoutDashboard, 
  Building2, 
  Link2, 
  FolderKanban, 
  TrendingUp, 
  ArrowLeftRight, 
  Eye, 
  ChevronUp, 
  ChevronDown,
  DollarSign,
  Plug,
  FileText,
  Users,
  Briefcase,
  CreditCard,
  Database
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState({
    agencyNetwork: true,
    resources: false,
    operations: true,
    financials: false,
    intelligence: false,
    integrations: false,
    compliance: false,
    setupAdmin: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const menuSections = [
    {
      title: 'OVERVIEW',
      items: [
        { name: 'Home', icon: Home, path: '/' },
        { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' }
      ]
    },
    {
      title: 'AGENCY NETWORK',
      key: 'agencyNetwork',
      expandable: true,
      items: [
        { name: 'Agency Network', icon: Building2, path: '/agency-network' },
        { name: 'Tie-Ups & Contracts', icon: Link2, path: '/tie-ups-contracts' }
      ]
    },
    {
      title: 'RESOURCES',
      key: 'resources',
      expandable: true,
      items: [
        { name: 'Resources Pool', icon: Database, path: '/resources-pool' }
      ]
    },
    {
      title: 'OPERATIONS',
      key: 'operations',
      expandable: true,
      items: [
        { name: 'Projects', icon: FolderKanban, path: '/projects' },
        { name: 'Capacity & Utilization', icon: TrendingUp, path: '/capacity-utilization' },
        { name: 'Borrow Requests', icon: ArrowLeftRight, path: '/borrow-requests' }
      ]
    },
    {
      title: 'FINANCIALS',
      key: 'financials',
      expandable: true,
      items: [
        { name: 'Financial Dashboard', icon: DollarSign, path: '/financial-dashboard' }
      ]
    },
    {
      title: 'INTELLIGENCE',
      key: 'intelligence',
      expandable: true,
      items: [
        { name: 'Hidden Capacity Radar', icon: Eye, path: '/hidden-capacity-radar' }
      ]
    },
    {
      title: 'INTEGRATIONS',
      key: 'integrations',
      expandable: true,
      items: [
        { name: 'Integrations', icon: Plug, path: '/integrations' }
      ]
    },
    {
      title: 'COMPLIANCE',
      key: 'compliance',
      expandable: true,
      items: [
        { name: 'Audit Logs', icon: FileText, path: '/audit-logs' }
      ]
    },
    {
      title: 'SETUP & ADMINISTRATION',
      key: 'setupAdmin',
      expandable: true,
      items: [
        { name: 'User Management', icon: Users, path: '/user-management' },
        { name: 'Job Roles', icon: Briefcase, path: '/job-roles' },
        { name: 'Rate Cards', icon: CreditCard, path: '/rate-cards' }
      ]
    }
  ];

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col overflow-y-auto">
      {/* Menu Items */}
      <div className="py-3">
        {menuSections.map((section, index) => (
          <div key={index} className="mb-2">
            {/* Section Header */}
            <div 
              className={`px-4 py-2 flex items-center justify-between ${
                section.expandable ? 'cursor-pointer hover:bg-gray-50' : ''
              }`}
              onClick={() => section.expandable && toggleSection(section.key)}
            >
              <h3 className="text-xs font-semibold text-gray-500 tracking-wider uppercase">
                {section.title}
              </h3>
              {section.expandable && (
                expandedSections[section.key] ? 
                  <ChevronUp className="w-3.5 h-3.5 text-gray-400" /> : 
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              )}
            </div>

            {/* Section Items */}
            {(!section.expandable || expandedSections[section.key]) && (
              <div className="mt-0.5">
                {section.items.map((item, itemIndex) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={itemIndex}
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 font-medium border-r-2 border-blue-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className={`w-4.5 h-4.5 ${isActive ? 'text-blue-700' : 'text-gray-500'}`} />
                      <span className={`font-semibold ${isActive ? 'text-blue-700' : 'text-gray-600'}`}>
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;