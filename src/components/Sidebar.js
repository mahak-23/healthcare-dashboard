import React from "react";
import "../styles/Sidebar.css";
import {
  Clock,
  BarChart2,
  Settings,
  CalendarDays,
  LayoutDashboard,
  CalendarPlus,
  Phone,
  MessageCircleMore,
  X,
} from "lucide-react";

const links = [
  { icon: <LayoutDashboard fill="#262682" />, label: "Dashboard" },
  { icon: <Clock fill="#ccc" />, label: "History" },
  { icon: <CalendarDays fill="#ccc" />, label: "Calendar" },
  { icon: <CalendarPlus fill="#ccc" />, label: "Appointments" },
  { icon: <BarChart2 fill="#ccc" />, label: "Statistics" },
];

const tools = [
  { icon: <MessageCircleMore fill="#ccc" />, label: "Chat" },
  { icon: <Phone fill="#ccc" />, label: "Support" },
];

const setting = [{ icon: <Settings fill="#ccc" />, label: "Setting" }];

const Sidebar = ({ isOpen, isMobile, toggleSidebar }) => {
  return (
    <aside
      className={`sidebar ${isOpen ? "sidebar-open" : ""} ${
        isMobile ? "sidebar-mobile" : ""
      }`}
    >
      {isMobile && (
        <button className="sidebar-close-btn" onClick={toggleSidebar}>
          <X />
        </button>
      )}

      <div className="logo">
        Health<span>care.</span>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-title">General</h3>
        <ul className="sidebar-links">
          {links.map((link, idx) => (
            <li
              key={idx}
              className={`sidebar-link ${
                link.label === "Dashboard" ? "Dashboard" : ""
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-title">Tools</h3>
        <ul className="sidebar-links">
          {tools.map((link, idx) => (
            <li key={idx} className="sidebar-link">
              {link.icon}
              <span>{link.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section" style={{ marginTop: "auto" }}>
        <ul className="sidebar-links">
          {setting.map((item, idx) => (
            <li key={idx} className="sidebar-link">
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
