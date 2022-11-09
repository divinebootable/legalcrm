import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Billing,
  Calendar,
  Chat,
  Clients,
  ColorPicker,
  Dashboard,
  Documentation,
  Editor,
  Matter,
  Task,
  Users,
} from "./pages";
import "./App.css";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="settings" position="Top">
              {/* SETTING BUTTON TO CHANGE COLOR OF DASHBOARD */}
              <button
                type="button"
                className="text-3x1 p-3 hover:drop-shadow-x1
                        hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* TO ACCESS SIDEBAR CHECK IF MENU IS ACTIVE */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              {" "}
              <Sidebar />{" "}
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "fles-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              {/* DASHBOARD */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* PAGES */}
              <Route path="/users" element={<Users />} />
              <Route path="/client" element={<Clients />} />
              <Route path="/matter" element={<Matter />} />
              <Route path="/task" element={<Task />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/documents" element={<Documentation />} />
              <Route path="/chat" element={<Chat />} />
              {/* APPS */}
              <Route path="editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
