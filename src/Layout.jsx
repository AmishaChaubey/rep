

import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
     <Sidebar/>

      {/* Right Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
