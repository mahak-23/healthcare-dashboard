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
} from "lucide-react";

const links = [
  { icon: <LayoutDashboard fill="#262682" size={20} />, label: "Dashboard" },
  { icon: <Clock fill="#ccc" size={20} />, label: "History" },
  { icon: <CalendarDays fill="#ccc" size={20} />, label: "Calendar" },
  { icon: <CalendarPlus fill="#ccc" size={20} />, label: "Appointments" },
  { icon: <BarChart2 size={20} fill="#ccc" />, label: "Statistics" },
];

const tools = [
  { icon: <MessageCircleMore size={20} fill="#ccc" />, label: "Chat" },
  { icon: <Phone size={20} fill="#ccc" />, label: "Support" },
];

const setting = [
  { icon: <Settings size={20} fill="#ccc" />, label: "Setting" },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
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
          {tools.map((tool, idx) => (
            <li key={idx} className="sidebar-link">
              {tool.icon}
              <span>{tool.label}</span>
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
