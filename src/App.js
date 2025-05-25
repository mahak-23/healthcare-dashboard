import React, { useState, useEffect } from "react";

// child components
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";

// style
import "./App.css";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsSidebarOpen(true);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-container">
      <Sidebar
        isOpen={isSidebarOpen}
        isMobile={isMobile}
        toggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />
      <DashboardMainContent
        isMobile={isMobile}
        openSidebar={() => setIsSidebarOpen(true)}
      />
    </div>
  );
};

export default App;
