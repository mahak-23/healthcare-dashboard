import React from "react";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <DashboardMainContent />
    </div>
  );
};

export default App;
