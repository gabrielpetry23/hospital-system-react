// Sidebar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiUsers } from "react-icons/fi";

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          <img src="/images/sidebar-logo.png" width={22} height={22} />
        </Link>
      </div>
      <div className="sidebar-item">
        <Link
          to="/clients"
          className={location.pathname === "/clients" ? "active" : ""}
        >
          <div
            className={`icon-background-sidebar ${
              location.pathname === "/clients" ? "active-icon" : ""
            }`}
          >
            <FiUsers size={24} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
